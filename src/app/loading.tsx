export default function Loading() {
return (
<main
className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white"
role="status"
aria-live="polite"
>
<div className="text-center">
<div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-slate-700 border-t-emerald-400">
<span className="text-2xl" aria-hidden="true">
🇳🇬
</span>
</div>

    <h1 className="text-xl font-bold">
      Main Nigeria Pidgin English
    </h1>

    <p className="mt-3 text-slate-300">
      Abeg, small patience...
    </p>

    <p className="mt-1 text-sm text-slate-500">
      Your page is loading.
    </p>

    <span className="sr-only">Loading, please wait.</span>
  </div>
</main>

);
}