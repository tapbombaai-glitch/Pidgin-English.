"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type RecordingRecord = {
  id: number;
  date: string;
  time: string;
  rawSec: number;
  approvedSec: number;
  rawMin: number;
  approvedMin: number;
  display: string;
  status: "GOOD" | "CHECK" | "REJECT";
  created: string;
};

export default function RecordingPage() {
  const [supported, setSupported] = useState(false);
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("Ready to record.");
  const [elapsed, setElapsed] = useState(0);
  const [lastSaved, setLastSaved] = useState<RecordingRecord | null>(
    null
  );

  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(
    null
  );
  const audioUrlRef = useRef("");
  const startTimeRef = useRef<number | null>(null);
  const savedRef = useRef(false);

  useEffect(() => {
    const canRecord =
      typeof navigator !== "undefined" &&
      !!navigator.mediaDevices?.getUserMedia &&
      typeof window.MediaRecorder !== "undefined";

    setSupported(canRecord);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }

      streamRef.current?.getTracks().forEach((track) => {
        track.stop();
      });

      if (audioUrlRef.current) {
        URL.revokeObjectURL(audioUrlRef.current);
      }
    };
  }, []);

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const formatTime = (seconds: number) => {
    const safeSeconds = Math.max(0, Math.floor(seconds));
    const minutes = Math.floor(safeSeconds / 60);
    const remainingSeconds = safeSeconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const saveToDashboard = (rawSec: number) => {
    const safeSeconds = Math.max(0, Math.floor(rawSec));

    // This is a duration-based label, not verified audio approval.
    const statusLabel: RecordingRecord["status"] =
      safeSeconds >= 120
        ? "GOOD"
        : safeSeconds >= 30
          ? "CHECK"
          : "REJECT";

    const now = new Date();

    const record: RecordingRecord = {
      id: Date.now(),
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
      rawSec: safeSeconds,
      approvedSec: 0,
      rawMin: Number((safeSeconds / 60).toFixed(1)),
      approvedMin: 0,
      display: `${safeSeconds}s / 0s = 0.0m ${statusLabel}`,
      status: statusLabel,
      created: now.toISOString(),
    };

    try {
      const stored = localStorage.getItem("mnpe_recordings");
      const parsed: unknown = stored ? JSON.parse(stored) : [];

      const existing: RecordingRecord[] = Array.isArray(parsed)
        ? parsed
        : [];

      existing.unshift(record);

      localStorage.setItem(
        "mnpe_recordings",
        JSON.stringify(existing)
      );

      setLastSaved(record);
      setStatus("Recording saved in this browser.");
    } catch {
      setError(
        "Could not save the recording details. Check your browser storage."
      );
    }
  };

  const startRecording = async () => {
    setError("");
    setStatus("");

    if (!supported) {
      setError(
        "Recording is not supported. Try an updated browser over HTTPS."
      );
      return;
    }

    try {
      if (audioUrlRef.current) {
        URL.revokeObjectURL(audioUrlRef.current);
        audioUrlRef.current = "";
      }

      setAudioUrl("");
      setElapsed(0);
      setLastSaved(null);
      chunksRef.current = [];
      savedRef.current = false;

      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      streamRef.current = stream;

      const mimeType = [
        "audio/webm;codecs=opus",
        "audio/webm",
        "audio/mp4",
      ].find((type) => MediaRecorder.isTypeSupported(type));

      const recorder = mimeType
        ? new MediaRecorder(stream, { mimeType })
        : new MediaRecorder(stream);

      recorderRef.current = recorder;

      recorder.ondataavailable = (event: BlobEvent) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      recorder.onerror = () => {
        stopTimer();
        setRecording(false);
        setError("A recording error occurred. Please try again.");
        stream.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      };

      recorder.onstop = () => {
        stopTimer();

        // Calculate duration from the actual start and stop times.
        const startedAt = startTimeRef.current;
        const durationSeconds = startedAt
          ? Math.max(
              0,
              Math.round((Date.now() - startedAt) / 1000)
            )
          : 0;

        setElapsed(durationSeconds);

        const blob = new Blob(chunksRef.current, {
          type: recorder.mimeType || "audio/webm",
        });

        if (blob.size > 0) {
          const url = URL.createObjectURL(blob);
          audioUrlRef.current = url;
          setAudioUrl(url);

          if (!savedRef.current) {
            savedRef.current = true;
            saveToDashboard(durationSeconds);
          }
        } else {
          setError("No audio was captured. Please record again.");
          setStatus("Recording was not saved.");
        }

        stream.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
        setRecording(false);
      };

      recorder.start();
      startTimeRef.current = Date.now();
      setRecording(true);
      setStatus("Recording in progress...");

      timerRef.current = setInterval(() => {
        if (startTimeRef.current !== null) {
          setElapsed(
            Math.floor(
              (Date.now() - startTimeRef.current) / 1000
            )
          );
        }
      }, 250);
    } catch {
      stopTimer();

      streamRef.current?.getTracks().forEach((track) => {
        track.stop();
      });

      streamRef.current = null;
      setRecording(false);
      setError(
        "Microphone access failed. Allow microphone permission and try again."
      );
    }
  };

  const stopRecording = () => {
    stopTimer();

    const recorder = recorderRef.current;

    if (recorder && recorder.state === "recording") {
      recorder.stop();
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:py-12">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/dashboard"
          className="mb-6 inline-block text-sm font-semibold text-green-700 hover:underline"
        >
          ← Back to Dashboard
        </Link>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-8 text-center">
            <div className="mb-4 text-5xl" aria-hidden="true">
              🎙️
            </div>

            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Voice Recording Studio
            </h1>

            <p className="mt-3 leading-6 text-slate-600">
              Record your Pidgin and review your recording before
              sharing it.
            </p>
          </div>

          {!supported && (
            <div
              role="alert"
              className="mb-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900"
            >
              Your browser may not support recording. Open the site
              over HTTPS in an updated browser.
            </div>
          )}

          {error && (
            <div
              role="alert"
              className="mb-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
            >
              {error}
            </div>
          )}

          <div className="mb-6 rounded-xl bg-slate-50 p-6 text-center">
            <p className="mb-2 text-sm text-slate-500">
              Recording duration
            </p>

            <p className="text-4xl font-bold tabular-nums text-slate-900">
              {formatTime(elapsed)}
            </p>

            <p
              role="status"
              aria-live="polite"
              className="mt-3 text-sm text-slate-600"
            >
              {status}
            </p>

            {lastSaved && (
              <div className="mt-4 rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-800">
                <p className="font-semibold">Recording details saved</p>
                <p>Raw duration: {lastSaved.rawMin.toFixed(1)} minutes</p>
                <p>Status: {lastSaved.status}</p>
                <p className="mt-1 text-xs">
                  Approval is still pending; approved minutes are 0.
                </p>
              </div>
            )}
          </div>

          <div className="flex gap-3">
            {!recording ? (
              <button
                type="button"
                onClick={startRecording}
                disabled={!supported}
                className="flex-1 rounded-xl bg-green-600 px-5 py-3 font-bold text-white transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                ● Start Recording
              </button>
            ) : (
              <button
                type="button"
                onClick={stopRecording}
                className="flex-1 rounded-xl bg-red-600 px-5 py-3 font-bold text-white transition-colors hover:bg-red-700"
              >
                ■ Stop & Save
              </button>
            )}
          </div>

          {audioUrl && (
            <div className="mt-8 border-t border-slate-200 pt-6">
              <h2 className="mb-3 font-bold text-slate-900">
                Review Your Recording
              </h2>

              <audio
                controls
                src={audioUrl}
                className="mb-4 w-full"
              >
                Your browser cannot play this audio.
              </audio>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a
                  href={audioUrl}
                  download={`mnpe-recording-${Date.now()}.${audioUrl && recorderRef.current?.mimeType?.includes("mp4") ? "mp4" : "webm"}`}
                  className="rounded-xl border border-green-600 px-5 py-3 text-center font-semibold text-green-700 transition-colors hover:bg-green-50"
                >
                  Download Recording
                </a>

                <Link
                  href="/dashboard"
                  className="rounded-xl bg-slate-900 px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Go to Dashboard
                </Link>
              </div>
            </div>
          )}

          <p className="mt-6 text-xs leading-5 text-slate-500">
            Recording details are saved in this browser only. They are
            not uploaded to Supabase or shared with administrators.
            Record other people only with their informed consent.
          </p>
        </section>
      </div>
    </main>
  );
}