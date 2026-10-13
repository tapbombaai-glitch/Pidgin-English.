import Link from "next/link";

export default function TermsPage() {
return (
<main className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-6">
<article className="mx-auto max-w-3xl">
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
        Terms and Conditions
      </h1>

      <p className="mt-3 text-sm text-slate-400">
        Draft terms — review and approval are required before launch.
      </p>
    </header>

    <div className="mt-8 space-y-7 rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7">
      <section>
        <h2 className="text-xl font-semibold">1. Using the Platform</h2>
        <p className="mt-3 leading-7 text-slate-300">
          Main Nigeria Pidgin English is intended to support Nigerian
          language recording, documentation, research, and dataset
          development. Users must provide truthful information and use
          the platform lawfully and respectfully.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">
          2. Account Responsibility
        </h2>
        <p className="mt-3 leading-7 text-slate-300">
          Users should protect their account credentials and report
          suspected unauthorized access. The production platform must
          verify account identity and enforce server-side permissions
          before protecting private account information can be relied on.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">
          3. Voice Contributions
        </h2>
        <p className="mt-3 leading-7 text-slate-300">
          Only submit recordings that you have the right to provide.
          Do not secretly record other people or submit another person's
          voice without the permissions required by law and the applicable
          contribution rules. Do not include passwords, financial
          secrets, or other private information in recordings.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">
          4. Consent and Intended Use
        </h2>
        <p className="mt-3 leading-7 text-slate-300">
          Contributors should receive clear information about how
          recordings may be used, stored, shared, licensed, or included
          in datasets. Submitting a recording must not be treated as
          blanket permission for every future use. Applicable consent
          terms and legal requirements must be respected.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">
          5. Contribution Review
        </h2>
        <p className="mt-3 leading-7 text-slate-300">
          Contributions may require quality checks, consent verification,
          and review before acceptance. A recording does not automatically
          qualify for approval, dataset inclusion, or payment merely
          because it was recorded or submitted.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">6. Rewards and Payments</h2>
        <p className="mt-3 leading-7 text-slate-300">
          Any future rewards must follow published eligibility,
          verification, calculation, and payment rules. Amounts, payment
          schedules, fees, and dispute procedures must be clearly stated
          before a reward programme begins. This draft does not promise
          that any payment or reward is currently available.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">7. Dataset Marketplace</h2>
        <p className="mt-3 leading-7 text-slate-300">
          Any future dataset marketplace must publish its purchase terms,
          permitted uses, licence conditions, pricing, refund rules,
          and contributor rights. Datasets must not be listed or
          distributed without the necessary rights, permissions, and
          safeguards.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">8. Prohibited Conduct</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-300">
          <li>Submitting fraudulent or deliberately misleading contributions.</li>
          <li>Attempting to access another user's private account or data.</li>
          <li>Uploading material without the necessary rights or consent.</li>
          <li>Interfering with platform security or service availability.</li>
          <li>Misusing contributor information or platform datasets.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">9. Privacy and Data</h2>
        <p className="mt-3 leading-7 text-slate-300">
          Platform data handling should follow the published privacy
          policy and applicable law. Users should review the privacy
          information and consent choices before contributing personal
          information or recordings.
        </p>

        <Link
          href="/privacy"
          className="mt-3 inline-block font-semibold text-emerald-400 hover:text-emerald-300"
        >
          Read the Privacy Policy →
        </Link>
      </section>

      <section>
        <h2 className="text-xl font-semibold">
          10. Suspension and Complaints
        </h2>
        <p className="mt-3 leading-7 text-slate-300">
          The final terms should explain when accounts may be restricted,
          how users can challenge decisions, and how complaints will be
          handled fairly. Any action must comply with applicable law
          and the platform's published procedures.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">11. Changes to These Terms</h2>
        <p className="mt-3 leading-7 text-slate-300">
          The final terms should state when they take effect and how
          users will be informed about important changes. Where required,
          users must be given an opportunity to review and accept revised
          terms before continuing to use affected services.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">12. Contact Information</h2>
        <p className="mt-3 leading-7 text-slate-300">
          Before launch, the platform owner must add a valid support
          contact and the applicable legal business information so
          users know where to direct questions, complaints, and requests.
        </p>
      </section>

      <div className="rounded-xl border border-amber-800 bg-amber-950/30 p-4">
        <h2 className="font-semibold text-amber-300">
          Important: Draft document
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-300">
          These terms are a starting point, not a final legal agreement.
          Have them reviewed for applicable Nigerian laws, complete the
          missing business and support details, and ensure the platform's
          actual technical features match the published terms before
          accepting real contributors or payments.
        </p>
      </div>

      <Link
        href="/consent"
        className="inline-flex min-h-11 items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-slate-950 hover:bg-emerald-400"
      >
        Review Recording Consent
      </Link>
    </div>
  </article>
</main>

);
}