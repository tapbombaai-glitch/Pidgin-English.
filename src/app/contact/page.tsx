"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
const [form, setForm] = useState({
name: "",
email: "",
subject: "",
message: "",
});

const [status, setStatus] = useState("");

function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
event.preventDefault();

setStatus(
  "Your message has not been sent because the support service is not connected yet. Please try again when support becomes available."
);

}

return (
<main className="min-h-screen bg-slate-950 px-4 py-10 text-white">
<div className="mx-auto max-w-2xl">
<Link
href="/dashboard"
className="text-sm text-emerald-400 hover:underline"
>
← Back to Dashboard
</Link>

    <header className="mb-8 mt-6">
      <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
        Main Nigeria Pidgin English
      </p>

      <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
        Contact Support
      </h1>

      <p className="mt-3 text-slate-300">
        Have a question, found a problem, or need help using the platform?
        We want to hear from you.
      </p>
    </header>

    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium"
          >
            Full name
          </label>

          <input
            id="name"
            type="text"
            autoComplete="name"
            required
            maxLength={100}
            value={form.name}
            onChange={(event) =>
              setForm({ ...form, name: event.target.value })
            }
            placeholder="Enter your name"
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium"
          >
            Email address
          </label>

          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            value={form.email}
            onChange={(event) =>
              setForm({ ...form, email: event.target.value })
            }
            placeholder="you@example.com"
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-medium"
          >
            What do you need help with?
          </label>

          <select
            id="subject"
            required
            value={form.subject}
            onChange={(event) =>
              setForm({ ...form, subject: event.target.value })
            }
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
          >
            <option value="">Choose a topic</option>
            <option value="account">Account and login</option>
            <option value="recording">Voice recording</option>
            <option value="find-partner">Find Partner</option>
            <option value="rewards">Rewards and payments</option>
            <option value="marketplace">Dataset marketplace</option>
            <option value="privacy">Privacy and consent</option>
            <option value="technical">Technical problem</option>
            <option value="other">Other question</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium"
          >
            Message
          </label>

          <textarea
            id="message"
            required
            rows={5}
            maxLength={3000}
            value={form.message}
            onChange={(event) =>
              setForm({ ...form, message: event.target.value })
            }
            placeholder="Explain how we can help..."
            className="w-full resize-y rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
          />

          <p className="mt-1 text-right text-xs text-slate-400">
            {form.message.length}/3000 characters
          </p>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
        >
          Submit Message
        </button>

        {status && (
          <p
            role="status"
            className="rounded-lg border border-amber-700 bg-amber-950/40 p-4 text-sm text-amber-200"
          >
            {status}
          </p>
        )}
      </form>
    </section>

    <p className="mt-6 text-center text-sm text-slate-400">
      Please do not include passwords, API keys, or other sensitive
      information in your message.
    </p>
  </div>
</main>

);
}