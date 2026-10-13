import Link from "next/link";

const adminSections = [
{
title: "👥 Contributors",
description: "Review the contributor management area.",
status: "Backend Required",
},
{
title: "🎙️ Voice Contributions",
description: "Prepare to review submitted recordings.",
status: "Backend Required",
},
{
title: "✅ Approval Management",
description: "Prepare to approve or reject contributions.",
status: "Backend Required",
},
{
title: "💰 Rewards & Payments",
description: "Monitor verified rewards and payment records.",
status: "Backend Required",
},
{
title: "📚 Dataset Management",
description: "Prepare to manage datasets and their publication status.",
status: "Backend Required",
},
{
title: "🛡️ Security & Reports",
description: "Prepare to review security events and platform activity.",
status: "Backend Required",
},
];

export default function AdminPage() {
return (
<main className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-6">
<div className="mx-auto max-w-6xl">
<Link
href="/dashboard"
className="inline-block text-sm text-slate-300 hover:text-white"
>
← Back to Dashboard
</Link>

    <header className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7">
      <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
        Main Nigeria Pidgin English
      </p>

      <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
        Admin Dashboard
      </h1>

      <p className="mt-3 max-w-2xl leading-7 text-slate-300">
        The administration area for contributor management, recording
        reviews, dataset operations, and verified reward records.
      </p>

      <div className="mt-5 rounded-xl border border-amber-800 bg-amber-950/30 p-4">
        <p className="font-semibold text-amber-300">
          Administrator access is not yet connected
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-300">
          This page is only a user interface. It does not verify
          administrator permissions or protect administrative actions.
          Do not use it to manage real contributors or payments until
          server-side authentication and authorization are implemented.
        </p>
      </div>
    </header>

    <section className="mt-8">
      <h2 className="mb-4 text-xl font-semibold">
        Administration Modules
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {adminSections.map((section) => (
          <article
            key={section.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
          >
            <h3 className="text-lg font-semibold">{section.title}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              {section.description}
            </p>

            <div className="mt-5 border-t border-slate-800 pt-4">
              <span className="inline-block rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">
                {section.status}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6">
      <h2 className="text-xl font-semibold">Administrator Responsibilities</h2>

      <ul className="mt-4 list-disc space-y-3 pl-6 text-sm leading-6 text-slate-300">
        <li>
          Verify contributions and contributor consent before approval.
        </li>
        <li>
          Ensure rewards are calculated from verified records.
        </li>
        <li>
          Protect private user information and payment records.
        </li>
        <li>
          Maintain a record of important administrative actions.
        </li>
        <li>
          Publish datasets only when the required permissions are in place.
        </li>
      </ul>
    </section>

    <section className="mt-8 grid gap-3 sm:grid-cols-2">
      <Link
        href="/contributions"
        className="rounded-xl border border-slate-800 bg-slate-900 p-4 hover:border-emerald-500"
      >
        <span className="font-semibold">🎙️ View Contributions Page</span>
        <p className="mt-1 text-sm text-slate-400">
          Open the contributor-facing history interface.
        </p>
      </Link>

      <Link
        href="/marketplace"
        className="rounded-xl border border-slate-800 bg-slate-900 p-4 hover:border-emerald-500"
      >
        <span className="font-semibold">📚 View Marketplace</span>
        <p className="mt-1 text-sm text-slate-400">
          Open the dataset marketplace interface.
        </p>
      </Link>
    </section>

    <p className="mt-6 text-xs leading-5 text-slate-500">
      Production requirements include verified administrator accounts,
      server-side permission checks, database access policies, audit logs,
      and protected payment operations. Hiding buttons or pages alone
      does not secure an administrator dashboard.
    </p>
  </div>
</main>

);
}