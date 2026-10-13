import Link from "next/link";

const guidelines = [
{
number: "01",
title: "Find a quiet place",
description:
"Choose a quiet room and reduce background noise from televisions, fans, traffic, and other people.",
},
{
number: "02",
title: "Allow microphone access",
description:
"When using the recording page, allow microphone access in your browser. Check your phone settings if recording does not start.",
},
{
number: "03",
title: "Speak naturally",
description:
"Use your natural voice and accent. Speak clearly and at a comfortable pace. Do not force an accent that is not yours.",
},
{
number: "04",
title: "Use your own words",
description:
"Only submit recordings you are authorized to contribute. Do not imitate another person's voice or submit their private conversations.",
},
{
number: "05",
title: "Protect personal information",
description:
"Avoid recording passwords, bank details, private addresses, or sensitive conversations involving other people.",
},
{
number: "06",
title: "Review before submitting",
description:
"Listen to your recording when possible. Check that your voice is audible and that the recording is complete.",
},
];

export default function RecordingGuidelinesPage() {
return (
<main className="min-h-screen bg-slate-950 px-4 py-10 text-white">
<div className="mx-auto max-w-3xl">
<Link
href="/recording"
className="text-sm text-emerald-400 hover:underline"
>
← Back to Voice Recording
</Link>

    <header className="mb-8 mt-6">
      <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
        Main Nigeria Pidgin English
      </p>

      <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
        Recording Guidelines
      </h1>

      <p className="mt-4 leading-7 text-slate-300">
        Every voice matters. Follow these simple guidelines to help
        create clear, useful, and respectful Nigerian language recordings.
      </p>
    </header>

    <section className="space-y-4">
      {guidelines.map((guideline) => (
        <article
          key={guideline.number}
          className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 font-bold text-emerald-400">
            {guideline.number}
          </div>

          <div>
            <h2 className="font-semibold">{guideline.title}</h2>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              {guideline.description}
            </p>
          </div>
        </article>
      ))}
    </section>

    <section className="mt-8 rounded-xl border border-emerald-800 bg-emerald-950/30 p-5">
      <h2 className="font-semibold text-emerald-300">
        Your consent matters
      </h2>

      <p className="mt-2 text-sm leading-6 text-slate-300">
        Before contributing, read the platform's consent and privacy
        information. Make sure you understand how your recordings may be
        used. Do not contribute unless you agree to the applicable terms.
      </p>

      <Link
        href="/consent"
        className="mt-4 inline-block font-semibold text-emerald-400 hover:underline"
      >
        Review Consent Information →
      </Link>
    </section>

    <div className="mt-8">
      <Link
        href="/recording"
        className="inline-flex w-full items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400 sm:w-auto"
      >
        Go to Voice Recording
      </Link>
    </div>
  </div>
</main>

);
}