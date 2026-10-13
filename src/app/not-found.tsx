import Link from "next/link";

export default function NotFound() {
return (
<main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-10 text-white">
<div className="w-full max-w-lg text-center">
<div className="mb-6 text-6xl" aria-hidden="true">
🇳🇬
</div>

    <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
      Main Nigeria Pidgin English
    </p>

    <h1 className="mt-5 text-7xl font-extrabold text-emerald-400">
      404
    </h1>

    <h2 className="mt-4 text-2xl font-bold">
      Page Not Found
    </h2>

    <p className="mx-auto mt-4 max-w-md leading-7 text-slate-300">
      Sorry, we cannot find the page you are looking for. The link may be
      incorrect, or the page may have moved.
    </p>

    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
      <Link
        href="/"
        className="rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
      >
        Go to Homepage
      </Link>

      <Link
        href="/dashboard"
        className="rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:bg-slate-900"
      >
        Open Dashboard
      </Link>
    </div>

    <p className="mt-8 text-sm text-slate-500">
      Main Nigeria Pidgin English — Giving Nigerian voices a place to be
      heard.
    </p>
  </div>
</main>

);
}