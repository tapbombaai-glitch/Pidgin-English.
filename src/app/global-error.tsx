"use client";

import { useEffect } from "react";

export default function GlobalError({
error,
reset,
}: {
error: Error & { digest?: string };
reset: () => void;
}) {
useEffect(() => {
console.error("Main Nigeria Pidgin English application error:", error);
}, [error]);

return (
<html lang="en">
<body className="min-h-screen bg-slate-950 text-white">
<main className="flex min-h-screen items-center justify-center px-4 py-10">
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
          Sorry, we encountered an unexpected problem. Please try again.
          If the problem continues, try coming back later.
        </p>

        <button
          type="button"
          onClick={() => reset()}
          className="mt-7 w-full rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
        >
          Try Again
        </button>

        <p className="mt-5 text-xs text-slate-500">
          Your privacy and the security of your information matter to us.
        </p>
      </section>
    </main>
  </body>
</html>

);
}