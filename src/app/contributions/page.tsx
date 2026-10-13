"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Contribution = {
id: string;
title: string;
language: string;
duration: string;
status: "Pending" | "Approved" | "Rejected";
submittedAt: string;
};

export default function ContributionsPage() {
const [contributions, setContributions] = useState<Contribution[]>([]);
const [userEmail, setUserEmail] = useState("");
const [loaded, setLoaded] = useState(false);

useEffect(() => {
try {
const savedUser = localStorage.getItem("mnpe_user");

  if (savedUser) {
    const user = JSON.parse(savedUser);
    setUserEmail(typeof user.email === "string" ? user.email : "");
  }

  const savedContributions = localStorage.getItem("mnpe_contributions");

  if (savedContributions) {
    const parsed = JSON.parse(savedContributions);

    if (Array.isArray(parsed)) {
      setContributions(parsed);
    }
  }
} catch {
  setContributions([]);
} finally {
  setLoaded(true);
}

}, []);

const approvedCount = contributions.filter(
(item) => item.status === "Approved"
).length;

const pendingCount = contributions.filter(
(item) => item.status === "Pending"
).length;

const rejectedCount = contributions.filter(
(item) => item.status === "Rejected"
).length;

return (
<main className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-6">
<div className="mx-auto max-w-5xl">
<Link
href="/dashboard"
className="inline-block text-sm text-slate-300 hover:text-white"
>
← Back to Dashboard
</Link>

    <header className="mt-6">
      <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
        Main Nigeria Pidgin English
      </p>

      <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
        My Contributions
      </h1>

      <p className="mt-3 max-w-2xl text-slate-300">
        Track your voice contributions and check their review status.
      </p>

      {userEmail && (
        <p className="mt-2 break-all text-sm text-slate-400">
          Account: {userEmail}
        </p>
      )}
    </header>

    <section className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <p className="text-sm text-slate-400">Total Contributions</p>
        <p className="mt-2 text-3xl font-bold">{contributions.length}</p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <p className="text-sm text-slate-400">Pending Review</p>
        <p className="mt-2 text-3xl font-bold text-amber-400">
          {pendingCount}
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <p className="text-sm text-slate-400">Approved</p>
        <p className="mt-2 text-3xl font-bold text-emerald-400">
          {approvedCount}
        </p>
      </div>
    </section>

    <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold">Contribution History</h2>
          <p className="mt-1 text-sm text-slate-400">
            Review the status of your submitted recordings.
          </p>
        </div>

        <Link
          href="/recording"
          className="inline-flex min-h-11 items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-slate-950 hover:bg-emerald-400"
        >
          Record Voice
        </Link>
      </div>

      {!loaded ? (
        <p className="py-10 text-center text-slate-400">
          Loading your contributions...
        </p>
      ) : contributions.length === 0 ? (
        <div className="mt-6 rounded-xl border border-dashed border-slate-700 px-5 py-10 text-center">
          <div className="text-4xl" aria-hidden="true">
            🎙️
          </div>

          <h3 className="mt-3 text-lg font-semibold">
            No contributions yet
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
            Your contribution history will appear here when recordings are
            connected to the platform’s contribution system.
          </p>

          <Link
            href="/recording"
            className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl border border-emerald-500 px-5 py-3 font-semibold text-emerald-400 hover:bg-emerald-500/10"
          >
            Start Recording
          </Link>
        </div>
      ) : (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead className="border-b border-slate-800 text-slate-400">
              <tr>
                <th className="px-3 py-3">Contribution</th>
                <th className="px-3 py-3">Language</th>
                <th className="px-3 py-3">Duration</th>
                <th className="px-3 py-3">Status</th>
                <th className="px-3 py-3">Submitted</th>
              </tr>
            </thead>

            <tbody>
              {contributions.map((item) => (
                <tr key={item.id} className="border-b border-slate-800">
                  <td className="px-3 py-4 font-medium">{item.title}</td>
                  <td className="px-3 py-4">{item.language}</td>
                  <td className="px-3 py-4">{item.duration}</td>
                  <td className="px-3 py-4">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                        item.status === "Approved"
                          ? "bg-emerald-500/15 text-emerald-400"
                          : item.status === "Rejected"
                            ? "bg-red-500/15 text-red-400"
                            : "bg-amber-500/15 text-amber-400"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-3 py-4">{item.submittedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {rejectedCount > 0 && (
            <p className="mt-4 text-sm text-red-400">
              {rejectedCount} contribution(s) need attention.
            </p>
          )}
        </div>
      )}
    </section>

    <footer className="mt-6 text-xs leading-5 text-slate-500">
      This page currently reads contribution information from this
      browser’s local storage. It does not yet submit recordings to a
      server or provide official approval or payment records. Those
      require the secure backend integration.
    </footer>
  </div>
</main>

);
}