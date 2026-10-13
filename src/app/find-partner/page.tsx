"use client";

import Link from "next/link";
import { useState } from "react";

type Language = "Nigerian Pidgin" | "Yoruba" | "Igbo" | "Hausa";

export default function FindPartnerPage() {
const [language, setLanguage] = useState<Language>("Nigerian Pidgin");
const [duration, setDuration] = useState("15");
const [availability, setAvailability] = useState("available");
const [message, setMessage] = useState("");

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
event.preventDefault();
setMessage(
"Your preferences have been selected. Partner matching will become available when the secure matching service is connected."
);
};

return (
<main className="min-h-screen bg-slate-50 px-4 py-8 sm:py-12">
<div className="max-w-3xl mx-auto">
<Link
href="/dashboard"
className="inline-flex items-center text-sm font-semibold text-green-700 hover:underline mb-6"
>
← Back to Dashboard
</Link>

    <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="text-center mb-8">
        <div className="text-5xl mb-4" aria-hidden="true">
          🤝
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Find a Conversation Partner
        </h1>

        <p className="text-slate-600 mt-3 leading-6">
          Connect with fellow contributors to practise conversations
          and help preserve Nigerian languages.
        </p>
      </div>

      <div className="bg-green-50 border border-green-100 rounded-xl p-4 mb-6">
        <h2 className="font-semibold text-green-900">
          How it will work
        </h2>

        <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-green-900">
          <li>Select your preferred language.</li>
          <li>Choose a conversation duration.</li>
          <li>Set your availability.</li>
          <li>Get matched when the matching service is available.</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="language"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Preferred Language
          </label>

          <select
            id="language"
            value={language}
            onChange={(event) =>
              setLanguage(event.target.value as Language)
            }
            className="w-full border border-slate-300 rounded-xl px-4 py-3 bg-white focus:ring-2 focus:ring-green-500 outline-none"
          >
            <option value="Nigerian Pidgin">Nigerian Pidgin</option>
            <option value="Yoruba">Yoruba</option>
            <option value="Igbo">Igbo</option>
            <option value="Hausa">Hausa</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="duration"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Conversation Duration
          </label>

          <select
            id="duration"
            value={duration}
            onChange={(event) => setDuration(event.target.value)}
            className="w-full border border-slate-300 rounded-xl px-4 py-3 bg-white focus:ring-2 focus:ring-green-500 outline-none"
          >
            <option value="15">15 minutes</option>
            <option value="30">30 minutes</option>
            <option value="60">60 minutes</option>
            <option value="90">90 minutes</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="availability"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Your Availability
          </label>

          <select
            id="availability"
            value={availability}
            onChange={(event) => setAvailability(event.target.value)}
            className="w-full border border-slate-300 rounded-xl px-4 py-3 bg-white focus:ring-2 focus:ring-green-500 outline-none"
          >
            <option value="available">Available now</option>
            <option value="later">Available later</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-5 rounded-xl transition-colors"
        >
          Find a Partner
        </button>
      </form>

      {message && (
        <div
          role="status"
          className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-900"
        >
          {message}
        </div>
      )}

      <div className="mt-8 border-t border-slate-200 pt-6">
        <h2 className="font-semibold text-slate-900 mb-2">
          Your Safety Matters
        </h2>

        <p className="text-sm text-slate-600 leading-6">
          Only participate with informed consent. Avoid sharing passwords,
          financial information, or other sensitive personal details.
          Recording conversations requires clear consent from everyone
          involved.
        </p>
      </div>

      <p className="text-xs text-slate-500 mt-6 leading-5">
        This page collects preferences in the browser only. It does not
        connect you to another person or save a matching request yet.
        Real matching requires a secure backend.
      </p>
    </section>
  </div>
</main>

);
}