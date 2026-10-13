import Link from "next/link";

export default function PrivacyPage() {
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
        Privacy Policy
      </h1>

      <p className="mt-3 text-sm text-slate-400">
        Draft policy — requires review before production use.
      </p>
    </header>

    <div className="mt-8 space-y-7 rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7">
      <section>
        <h2 className="text-xl font-semibold">1. Our Purpose</h2>
        <p className="mt-3 leading-7 text-slate-300">
          Main Nigeria Pidgin English aims to support Nigerian language
          documentation, voice contributions, language research, and
          dataset development. We aim to handle personal information
          responsibly and explain how information is used.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">
          2. Information We May Collect
        </h2>
        <p className="mt-3 leading-7 text-slate-300">
          Depending on the features you use, the platform may collect
          account details, language preferences, voice recordings,
          contribution records, consent choices, and payment information
          needed to process eligible rewards. We should collect only
          information needed for clearly explained purposes.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">
          3. How Information May Be Used
        </h2>
        <p className="mt-3 leading-7 text-slate-300">
          Information may be used to operate accounts, review
          contributions, maintain platform security, communicate with
          users, calculate eligible rewards, and prepare language
          datasets. Any research or commercial use of recordings must
          follow the applicable consent terms and legal requirements.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">
          4. Voice Recordings and Sharing
        </h2>
        <p className="mt-3 leading-7 text-slate-300">
          Voice recordings may contain identifiable personal information.
          Before real collection begins, the platform must explain who
          can access recordings, whether recordings may be shared or sold,
          what licences apply, and how contributors can exercise their
          rights. Do not assume a recording is anonymous simply because
          your name is removed.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">5. Payments and Rewards</h2>
        <p className="mt-3 leading-7 text-slate-300">
          If rewards or payments become available, eligibility and
          payment rules should be published clearly. Payment processing
          should use an appropriate payment provider. The platform
          should not store payment passwords, card security codes, or
          other unnecessary financial secrets.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">6. Security and Access</h2>
        <p className="mt-3 leading-7 text-slate-300">
          The production platform should use verified authentication,
          server-side authorization, secure database policies, and
          appropriate safeguards to prevent users from accessing another
          user's private information. No online service can promise
          absolute security.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">7. Your Choices and Rights</h2>
        <p className="mt-3 leading-7 text-slate-300">
          Subject to applicable law, contributors may have rights to
          access, correct, or request deletion of personal information,
          withdraw consent where applicable, and ask questions about
          how their information is used. A working process for receiving
          and handling these requests must be provided before launch.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">
          8. Retention and Deletion
        </h2>
        <p className="mt-3 leading-7 text-slate-300">
          The production service should define how long account details,
          recordings, consent records, and payment records are retained,
          when they are deleted, and when legal or operational obligations
          require continued retention.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">
          9. Contact and Policy Updates
        </h2>
        <p className="mt-3 leading-7 text-slate-300">
          Before launch, the platform owner must provide a valid contact
          method for privacy questions and requests. Material changes to
          this policy should be communicated appropriately.
        </p>
      </section>

      <div className="rounded-xl border border-amber-800 bg-amber-950/30 p-4">
        <h2 className="font-semibold text-amber-300">
          Important: This is a draft
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          This page is not a final legal policy and does not mean that
          the platform already performs every activity described above.
          Have the policy reviewed for applicable Nigerian data
          protection requirements, replace these draft terms with
          approved terms, and implement the corresponding technical
          controls before collecting real contributor data.
        </p>
      </div>

      <Link
        href="/consent"
        className="inline-flex min-h-11 items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-slate-950 hover:bg-emerald-400"
      >
        Review Consent Choices
      </Link>
    </div>
  </article>
</main>

);
}