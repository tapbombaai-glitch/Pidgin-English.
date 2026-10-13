"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorPage({
error,
reset,
}: {
error: Error & { digest?: string };
reset: () => void;
}) {
useEffect(() => {
console.error("Application section error:", error);
}, [error]);

return (
<main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-10 text-white">
<section className="w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center sm:p-8">
<div className="mb-5 text-5xl" aria-hidden="true">
🇳🇬
</div>

    <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
      Main Nigeria Pidgin English
    </p>

    <h1 className="mt-5 text-2xl font-bold">
      Something Went Wrong
    </h1>

    <p className="mt-3 leading-7 text-slate-300">
      Abeg, try again. If the problem continues, return to the homepage
      and try again later.
    </p>

    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={() => reset()}
        className="flex-1 rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
      >
        Try Again
      </button>

      <Link
        href="/"
        className="flex-1 rounded-lg border border-slate-700 px-5 py-3 font-semibold transition hover:bg-slate-800"
      >
        Homepage
      </Link>
    </div>
  </section>
</main>

);
}