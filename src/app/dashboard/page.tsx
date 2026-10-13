"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type MNPEUser = {
  name?: string;
  email?: string;
  role?: string;
};

type RecordingRecord = {
  id: number | string;
  rawSec?: number;
  approvedSec?: number;
  rawMin?: number;
  approvedMin?: number;
  display?: string;
  status?: string;
  created?: string;
  date?: string;
  time?: string;
};

const dashboardItems = [
  {
    title: "Voice Recording",
    description:
      "Record your voice and contribute to Nigerian language datasets.",
    href: "/recording",
    icon: "🎙️",
  },
  {
    title: "Find Partner",
    description:
      "Connect with other contributors for voice conversations.",
    href: "/find-partner",
    icon: "🤝",
  },
  {
    title: "My Rewards",
    description:
      "View your contribution rewards and payment information.",
    href: "/rewards",
    icon: "💰",
  },
  {
    title: "My Contributions",
    description:
      "Track your recordings and contribution progress.",
    href: "/contributions",
    icon: "📊",
  },
  {
    title: "Dataset Marketplace",
    description:
      "Explore the Nigerian language dataset marketplace.",
    href: "/marketplace",
    icon: "🛒",
  },
  {
    title: "Ademi AI",
    description:
      "Get help navigating the Main Nigeria Pidgin English platform.",
    href: "/ademi",
    icon: "🤖",
  },
];

function formatMinutes(seconds: number) {
  return (seconds / 60).toFixed(1);
}

export default function DashboardPage() {
  const [user, setUser] = useState<MNPEUser | null>(null);
  const [recordings, setRecordings] = useState<RecordingRecord[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    function loadDashboardData() {
      try {
        const savedUser = localStorage.getItem("mnpe_user");

        if (savedUser) {
          const parsedUser: unknown = JSON.parse(savedUser);

          if (
            parsedUser &&
            typeof parsedUser === "object" &&
            "email" in parsedUser &&
            typeof parsedUser.email === "string"
          ) {
            setUser(parsedUser as MNPEUser);
          } else {
            setUser(null);
          }
        } else {
          setUser(null);
        }

        const savedRecordings = localStorage.getItem("mnpe_recordings");

        if (savedRecordings) {
          const parsedRecordings: unknown = JSON.parse(savedRecordings);

          if (Array.isArray(parsedRecordings)) {
            setRecordings(
              parsedRecordings.filter(
                (record): record is RecordingRecord =>
                  record !== null &&
                  typeof record === "object" &&
                  ("id" in record || "created" in record)
              )
            );
          } else {
            setRecordings([]);
          }
        } else {
          setRecordings([]);
        }
      } catch (error) {
        console.error("Unable to load dashboard data:", error);
        setRecordings([]);
      } finally {
        setReady(true);
      }
    }

    loadDashboardData();

    // Refresh statistics when the user returns to this page.
    window.addEventListener("focus", loadDashboardData);

    // Also refresh if another browser tab changes the stored data.
    window.addEventListener("storage", loadDashboardData);

    return () => {
      window.removeEventListener("focus", loadDashboardData);
      window.removeEventListener("storage", loadDashboardData);
    };
  }, []);

  const totalRecordings = recordings.length;

  const totalRecordedSeconds = recordings.reduce(
    (total, recording) =>
      total +
      Math.max(
        0,
        Number(recording.rawSec) ||
          (Number(recording.rawMin) || 0) * 60
      ),
    0
  );

  const totalApprovedSeconds = recordings.reduce(
    (total, recording) =>
      total +
      Math.max(
        0,
        Number(recording.approvedSec) ||
          (Number(recording.approvedMin) || 0) * 60
      ),
    0
  );

  const awaitingReview = recordings.filter((recording) => {
    const status = (recording.status || "").toUpperCase();

    return (
      status === "CHECK" ||
      status === "GOOD" ||
      status === "UNCHECKED" ||
      status === "PENDING" ||
      status === "REVIEW"
    );
  }).length;

  if (!ready) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-slate-600">Loading your dashboard...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white text-xl">
              🇳🇬
            </div>

            <div>
              <h1 className="font-bold text-slate-900">
                Main Nigeria Pidgin English
              </h1>
              <p className="text-xs text-slate-500">
                Contributor Dashboard
              </p>
            </div>
          </Link>

          <Link
            href="/auth/login"
            onClick={() => {
              localStorage.removeItem("mnpe_user");
            }}
            className="text-sm font-semibold text-green-700 hover:underline"
          >
            Sign Out
          </Link>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-green-700 rounded-2xl p-6 sm:p-8 text-white mb-8">
          <p className="text-green-100 text-sm mb-2">
            MAIN NIGERIA PIDGIN ENGLISH
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold">
            Welcome, {user?.name || "Contributor"}!
          </h2>

          <p className="mt-3 text-green-50 max-w-2xl">
            Help preserve Nigerian languages through voice contributions,
            meaningful conversations, and responsible dataset sharing.
          </p>

          {user?.email && (
            <p className="mt-4 text-sm text-green-100 break-all">
              {user.email}
            </p>
          )}
        </div>

        {/* Contribution statistics */}
        <section className="mb-10" aria-labelledby="stats-heading">
          <div className="mb-5">
            <h2
              id="stats-heading"
              className="text-xl font-bold text-slate-900"
            >
              Your Contribution Statistics
            </h2>

            <p className="text-slate-600 mt-1">
              A summary of the recordings saved on this device.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-5">
              <p className="text-sm text-slate-500">Total Recordings</p>
              <p className="text-3xl font-bold text-slate-900 mt-2">
                {totalRecordings}
              </p>
              <p className="text-xs text-slate-500 mt-2">
                Recordings saved locally
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5">
              <p className="text-sm text-slate-500">Recorded Time</p>
              <p className="text-3xl font-bold text-slate-900 mt-2">
                {formatMinutes(totalRecordedSeconds)}
                <span className="text-base font-medium"> min</span>
              </p>
              <p className="text-xs text-slate-500 mt-2">
                Total recording duration
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5">
              <p className="text-sm text-slate-500">Approved Time</p>
              <p className="text-3xl font-bold text-green-700 mt-2">
                {formatMinutes(totalApprovedSeconds)}
                <span className="text-base font-medium"> min</span>
              </p>
              <p className="text-xs text-slate-500 mt-2">
                Time marked as approved
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5">
              <p className="text-sm text-slate-500">Awaiting Review</p>
              <p className="text-3xl font-bold text-amber-600 mt-2">
                {awaitingReview}
              </p>
              <p className="text-xs text-slate-500 mt-2">
                Recordings needing review
              </p>
            </div>
          </div>
        </section>

        {/* Workspace */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900">
            Your Workspace
          </h2>

          <p className="text-slate-600 mt-1">
            Choose a section to continue.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {dashboardItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-green-500 hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-4" aria-hidden="true">
                {item.icon}
              </div>

              <h3 className="font-bold text-lg text-slate-900">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 mt-2 leading-6">
                {item.description}
              </p>

              <p className="mt-4 text-sm text-green-700 font-semibold">
                Open section →
              </p>
            </Link>
          ))}
        </div>

        {!user && (
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-sm text-amber-900">
              You are not signed in with a saved demo profile.{" "}
              <Link
                href="/auth/login"
                className="font-semibold underline"
              >
                Sign in here
              </Link>
              .
            </p>
          </div>
        )}

        {totalRecordings === 0 && (
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-blue-900">
              You have no recordings saved on this device yet. Open Voice
              Recording to make your first contribution.
            </p>

            <Link
              href="/recording"
              className="inline-block mt-3 font-semibold text-blue-700 underline"
            >
              Go to Voice Recording
            </Link>
          </div>
        )}

        <div className="mt-10 border-t border-slate-200 pt-6 text-center">
          <p className="text-xs text-slate-500">
            Main Nigeria Pidgin English · Building technology for Nigerian
            languages.
          </p>
        </div>
      </section>
    </main>
  );
}