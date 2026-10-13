"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function RecordingPage() {
const [supported, setSupported] = useState(true);
const [recording, setRecording] = useState(false);
const [audioUrl, setAudioUrl] = useState("");
const [error, setError] = useState("");
const [status, setStatus] = useState("Ready to record.");
const [elapsed, setElapsed] = useState(0);

const recorderRef = useRef<MediaRecorder | null>(null);
const streamRef = useRef<MediaStream | null>(null);
const chunksRef = useRef<Blob[]>([]);
const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
const audioUrlRef = useRef("");

useEffect(() => {
const canRecord =
typeof window !== "undefined" &&
typeof navigator.mediaDevices?.getUserMedia === "function" &&
typeof window.MediaRecorder !== "undefined";

setSupported(canRecord);

return () => {
  if (timerRef.current) clearInterval(timerRef.current);

  streamRef.current?.getTracks().forEach((track) => track.stop());

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

const startRecording = async () => {
setError("");
setStatus("");

if (!supported) {
  setError("Your browser does not support audio recording.");
  return;
}

try {
  if (audioUrlRef.current) {
    URL.revokeObjectURL(audioUrlRef.current);
    audioUrlRef.current = "";
  }

  setAudioUrl("");
  setElapsed(0);
  chunksRef.current = [];

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
    setError("Recording encountered a problem. Please try again.");
    setRecording(false);
    stopTimer();
  };

  recorder.onstop = () => {
    const blob = new Blob(chunksRef.current, {
      type: recorder.mimeType || "audio/webm",
    });

    if (blob.size > 0) {
      const url = URL.createObjectURL(blob);
      audioUrlRef.current = url;
      setAudioUrl(url);
      setStatus("Recording complete. Play it back or download it.");
    } else {
      setError("No audio was captured. Please record again.");
    }

    stream.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    setRecording(false);
  };

  recorder.start();
  setRecording(true);
  setStatus("Recording in progress...");

  timerRef.current = setInterval(() => {
    setElapsed((previous) => previous + 1);
  }, 1000);
} catch {
  streamRef.current?.getTracks().forEach((track) => track.stop());
  streamRef.current = null;
  setRecording(false);
  setError(
    "Microphone access failed. Allow microphone permission in your browser and try again."
  );
}

};

const stopRecording = () => {
stopTimer();

if (recorderRef.current?.state === "recording") {
  recorderRef.current.stop();
}

};

const formatTime = (seconds: number) => {
const minutes = Math.floor(seconds / 60);
const remainingSeconds = seconds % 60;

return `${String(minutes).padStart(2, "0")}:${String(
  remainingSeconds
).padStart(2, "0")}`;

};

return (
<main className="min-h-screen bg-slate-50 px-4 py-8 sm:py-12">
<div className="max-w-2xl mx-auto">
<Link
href="/dashboard"
className="inline-flex items-center text-sm font-semibold text-green-700 hover:underline mb-6"
>
← Back to Dashboard
</Link>

    <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="text-center mb-8">
        <div className="text-5xl mb-4" aria-hidden="true">
          🎙️
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Voice Recording Studio
        </h1>

        <p className="text-slate-600 mt-3 leading-6">
          Record your voice to help preserve Nigerian languages and
          support responsible language technology.
        </p>
      </div>

      {!supported && (
        <div
          role="alert"
          className="mb-5 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm"
        >
          Audio recording is not supported in this browser. Try an
          up-to-date browser and open the site over HTTPS.
        </div>
      )}

      {error && (
        <div
          role="alert"
          className="mb-5 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm"
        >
          {error}
        </div>
      )}

      <div className="bg-slate-50 rounded-xl p-6 text-center mb-6">
        <p className="text-sm text-slate-500 mb-2">Recording duration</p>

        <p
          className="text-4xl font-bold text-slate-900 tabular-nums"
          aria-live="off"
        >
          {formatTime(elapsed)}
        </p>

        <p
          role="status"
          aria-live="polite"
          className="text-sm text-slate-600 mt-3"
        >
          {status}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        {!recording ? (
          <button
            type="button"
            onClick={startRecording}
            disabled={!supported}
            className="flex-1 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white font-semibold py-3 px-5 rounded-xl transition-colors"
          >
            ● Start Recording
          </button>
        ) : (
          <button
            type="button"
            onClick={stopRecording}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-5 rounded-xl transition-colors"
          >
            ■ Stop Recording
          </button>
        )}
      </div>

      {audioUrl && (
        <div className="mt-8 border-t border-slate-200 pt-6">
          <h2 className="font-bold text-slate-900 mb-3">
            Review Your Recording
          </h2>

          <audio
            controls
            src={audioUrl}
            className="w-full mb-4"
          >
            Your browser cannot play this audio.
          </audio>

          <a
            href={audioUrl}
            download={`mnpe-recording-${Date.now()}.webm`}
            className="block text-center w-full border border-green-600 text-green-700 hover:bg-green-50 font-semibold py-3 px-5 rounded-xl transition-colors"
          >
            Download Recording
          </a>
        </div>
      )}

      <p className="text-xs text-slate-500 mt-6 leading-5">
        Your recording stays in this browser unless you download it.
        Review it before sharing. Do not record another person without
        their informed consent.
      </p>
    </section>
  </div>
</main>

);
}