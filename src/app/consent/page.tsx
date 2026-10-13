"use client";

import Link from "next/link";
import { useState } from "react";

export default function ConsentPage() {
const [voiceConsent, setVoiceConsent] = useState(false);
const [dataConsent, setDataConsent] = useState(false);
const [researchConsent, setResearchConsent] = useState(false);
const [message, setMessage] = useState("");

function saveConsent() {
if (!voiceConsent || !dataConsent) {
setMessage(
"Please agree to the required voice recording and data-use statements before continuing."
);
return;
}

const consentRecord = {
  voiceRecording: voiceConsent,
  dataProcessing: dataConsent,
  researchUse: researchConsent,
  policyVersion: "1.0",
  agreedAt: new Date().toISOString(),
};

try {
  localStorage.setItem(
    "mnpe_consent_demo",
    JSON.stringify(consentRecord)
  );

  setMessage(
    "Your choices have been saved in this browser for demonstration. They have not been submitted to the platform server."
  );
} catch {
  setMessage(
    "We could not save your choices. Please check your browser settings and try again."
  );
}

}

return (
<main className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-6">
<div className="mx-auto max-w-3xl">
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
        Voice Recording Consent
      </h1>

      <p className="mt-3 leading-7 text-slate-300">
        Your voice matters. Please read these statements carefully before
        contributing recordings to the platform.
      </p>
    </header>

    <section className="mt-8 space-y-5 rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7">
      <div>
        <h2 className="text-lg font-semibold">1. Voice recording</h2>
        <p className="mt-2 text-sm leading-7 text-slate-300">
          If you choose to record your voice, you understand that your
          recording may contain your voice and spoken words. Only submit
          recordings you have the right to provide, and avoid sharing
          passwords, financial details, or other private information.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">2. Data processing</h2>
        <p className="mt-2 text-sm leading-7 text-slate-300">
          Your recordings and related information may be processed for
          language documentation and dataset preparation, subject to the
          platform's final privacy policy and applicable law. This page
          does not yet upload recordings or submit consent to a server.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">3. Research and dataset use</h2>
        <p className="mt-2 text-sm leading-7 text-slate-300">
          Research or commercial dataset use requires clear information
          about the intended use, access, sharing, and applicable terms.
          Please do not assume that checking this optional box grants
          permission for every possible use of your voice.
        </p>
      </div>

      <div className="border-t border-slate-800 pt-5">
        <h2 className="text-lg font-semibold">Your choices</h2>

        <label className="mt-4 flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={voiceConsent}
            onChange={(event) => setVoiceConsent(event.target.checked)}
            className="mt-1 h-5 w-5 accent-emerald-500"
          />
          <span className="text-sm leading-6 text-slate-300">
            I understand the voice recording information above and
            voluntarily agree to participate in voice recording.
            <strong className="text-emerald-400"> Required</strong>
          </span>
        </label>

        <label className="mt-4 flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={dataConsent}
            onChange={(event) => setDataConsent(event.target.checked)}
            className="mt-1 h-5 w-5 accent-emerald-500"
          />
          <span className="text-sm leading-6 text-slate-300">
            I have read the data-processing information and agree to the
            described processing, subject to the final privacy policy.
            <strong className="text-emerald-400"> Required</strong>
          </span>
        </label>

        <label className="mt-4 flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={researchConsent}
            onChange={(event) => setResearchConsent(event.target.checked)}
            className="mt-1 h-5 w-5 accent-emerald-500"
          />
          <span className="text-sm leading-6 text-slate-300">
            I am interested in receiving further information about
            research or commercial dataset use. I understand that this
            optional choice does not itself authorize such use.
          </span>
        </label>
      </div>

      <button
        type="button"
        onClick={saveConsent}
        className="min-h-12 w-full rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-slate-950 hover:bg-emerald-400"
      >
        Save My Choices
      </button>

      {message && (
        <p
          role="status"
          className="rounded-xl border border-slate-700 bg-slate-950 p-4 text-sm leading-6 text-slate-300"
        >
          {message}
        </p>
      )}
    </section>

    <section className="mt-6 rounded-2xl border border-amber-900 bg-amber-950/20 p-5">
      <h2 className="font-semibold text-amber-300">
        Important privacy notice
      </h2>

      <p className="mt-2 text-sm leading-6 text-slate-300">
        This is an initial consent interface, not a complete legal
        agreement. Before collecting real contributions, the platform
        needs a reviewed privacy policy, secure server-side consent
        records, a withdrawal process, and clear rules for dataset
        sharing and payment.
      </p>
    </section>
  </div>
</main>

);
}