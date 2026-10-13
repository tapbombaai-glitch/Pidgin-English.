"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

const helpTopics = [
{
title: "Creating an account",
description:
"Use the Register page to create an account. Real account creation must be connected to the authentication service.",
},
{
title: "Recording your voice",
description:
"Open the Recording page and allow microphone access when your browser asks. Use a quiet environment for clearer recordings.",
},
{
title: "Contribution approval",
description:
"Recordings must be submitted to the platform and reviewed before they can count as approved contributions.",
},
{
title: "Rewards and payments",
description:
"Check the Rewards page for the current interface. Real reward balances and payments require verified contribution records and a secure payment system.",
},
{
title: "Privacy and consent",
description:
"Review the Privacy Policy and Consent page to understand the platform's intended approach to personal information and voice recordings.",
},
{
title: "Dataset Marketplace",
description:
"The marketplace currently shows example dataset categories. Dataset purchasing and selling are not yet enabled.",
},
];

export default function SupportPage() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [topic, setTopic] = useState("Account");
const [message, setMessage] = useState("");
const [notice, setNotice] = useState("");

function handleSubmit(event: FormEvent<HTMLFormElement>) {
event.preventDefault();

setNotice(
  "Your message has not been sent because the support service is not connected yet. Please do not enter passwords, API keys, or payment details."
);

}

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
        Help & Support
      </h1>

      <p className="mt-3 max-w-2xl leading-7 text-slate-300">
        Need help using the platform? Start with the guides below or
        prepare a support request.
      </p>
    </header>

    <section className="mt-8">
      <h2 className="mb-4 text-xl font-semibold">Help Topics</h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {helpTopics.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
          >
            <h3 className="font-semibold">{item.title}</h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>

    <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7">
      <h2 className="text-xl font-semibold">Prepare a Support Request</h2>

      <p className="mt-2 text-sm leading-6 text-slate-400">
        Describe the problem you are experiencing. This form is not
        connected to a support inbox yet, so submitting it will not send
        your message to the team.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div>
          <label
            htmlFor="support-name"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Your name
          </label>

          <input
            id="support-name"
            type="text"
            autoComplete="name"
            maxLength={80}
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
            className="min-h-12 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 text-white outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label
            htmlFor="support-email"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Email address
          </label>

          <input
            id="support-email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="min-h-12 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 text-white outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label
            htmlFor="support-topic"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            What do you need help with?
          </label>

          <select
            id="support-topic"
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
            className="min-h-12 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 text-white outline-none focus:border-emerald-500"
          >
            <option value="Account">Account</option>
            <option value="Recording">Voice recording</option>
            <option value="Contributions">Contributions</option>
            <option value="Rewards">Rewards and payments</option>
            <option value="Privacy">Privacy and consent</option>
            <option value="Marketplace">Dataset marketplace</option>
            <option value="Technical">Technical problem</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="support-message"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Describe the problem
          </label>

          <textarea
            id="support-message"
            rows={5}
            maxLength={3000}
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Tell us what happened..."
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
          />

          <p className="mt-1 text-right text-xs text-slate-500">
            {message.length}/3000 characters
          </p>
        </div>

        <button
          type="submit"
          className="min-h-12 w-full rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-slate-950 hover:bg-emerald-400"
        >
          Prepare Support Request
        </button>

        {notice && (
          <p
            role="status"
            className="rounded-xl border border-amber-800 bg-amber-950/30 p-4 text-sm leading-6 text-amber-200"
          >
            {notice}
          </p>
        )}
      </form>
    </section>

    <section className="mt-6 grid gap-3 sm:grid-cols-2">
      <Link
        href="/privacy"
        className="rounded-xl border border-slate-800 bg-slate-900 p-4 hover:border-emerald-500"
      >
        <span className="font-semibold">🔐 Privacy Policy</span>
        <p className="mt-1 text-sm text-slate-400">
          Review privacy information.
        </p>
      </Link>

      <Link
        href="/terms"
        className="rounded-xl border border-slate-800 bg-slate-900 p-4 hover:border-emerald-500"
      >
        <span className="font-semibold">📄 Terms & Conditions</span>
        <p className="mt-1 text-sm text-slate-400">
          Review the draft platform terms.
        </p>
      </Link>
    </section>

    <p className="mt-6 text-xs leading-5 text-slate-500">
      Before launch, connect this form to a secure support service and
      publish a verified support contact. Do not promise users that a
      request has been received until the service confirms delivery.
    </p>
  </div>
</main>

);
}