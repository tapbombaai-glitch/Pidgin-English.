"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

type ChatMessage = {
id: number;
role: "user" | "assistant";
text: string;
};

const welcomeMessage: ChatMessage = {
id: 1,
role: "assistant",
text: "Hello! I be Ademi, your Main Nigeria Pidgin English assistant. How I fit help you today?",
};

function getDemoReply(message: string): string {
const text = message.toLowerCase();

if (text.includes("record") || text.includes("voice")) {
return "You fit visit the Recording page to explore the voice recording interface. Your recording must be connected to the secure server before e fit count as an official contribution.";
}

if (text.includes("reward") || text.includes("money") || text.includes("payment")) {
return "You fit check your Rewards page to see the rewards interface. Real earnings and payments must come from verified contribution records on the secure backend.";
}

if (text.includes("partner") || text.includes("conversation")) {
return "Visit Find Partner to explore the partner matching page. Real-time matching still needs the matching service to be connected.";
}

if (text.includes("dataset") || text.includes("marketplace")) {
return "Visit the Dataset Marketplace to explore the dataset categories. Buying and selling will become available after the secure marketplace and payment systems are connected.";
}

if (text.includes("pidgin") || text.includes("language")) {
return "Main Nigeria Pidgin English aims to support Nigerian Pidgin and other Nigerian languages. We dey build the platform one step at a time!";
}

return "Thank you for your message! I be the Ademi assistant interface. My real AI brain never connect yet, but you fit explore the platform using the links below.";
}

export default function AdemiPage() {
const [messages, setMessages] = useState<ChatMessage[]>([
welcomeMessage,
]);
const [input, setInput] = useState("");

function handleSubmit(event: FormEvent<HTMLFormElement>) {
event.preventDefault();

const text = input.trim();

if (!text) return;

const userMessage: ChatMessage = {
  id: Date.now(),
  role: "user",
  text,
};

const assistantMessage: ChatMessage = {
  id: Date.now() + 1,
  role: "assistant",
  text: getDemoReply(text),
};

setMessages((previous) => [
  ...previous,
  userMessage,
  assistantMessage,
]);

setInput("");

}

function clearChat() {
setMessages([
{
...welcomeMessage,
id: Date.now(),
},
]);
}

return (
<main className="min-h-screen bg-slate-950 px-4 py-6 text-white sm:px-6 sm:py-8">
<div className="mx-auto max-w-4xl">
<Link
href="/dashboard"
className="inline-block text-sm text-slate-300 hover:text-white"
>
← Back to Dashboard
</Link>

    <header className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6">
      <div className="flex items-center gap-4">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-3xl"
          aria-hidden="true"
        >
          🤖
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Main Nigeria Pidgin English
          </p>

          <h1 className="mt-1 text-3xl font-bold">Ademi AI</h1>

          <p className="mt-1 text-sm text-slate-400">
            Your Nigerian language platform assistant
          </p>
        </div>
      </div>
    </header>

    <section className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      <div className="flex items-center justify-between gap-3 border-b border-slate-800 p-4">
        <div>
          <h2 className="font-semibold">Chat with Ademi</h2>
          <p className="mt-1 text-xs text-slate-400">
            Demo assistant · AI service not connected
          </p>
        </div>

        <button
          type="button"
          onClick={clearChat}
          className="min-h-10 rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300 hover:bg-slate-800"
        >
          Clear Chat
        </button>
      </div>

      <div
        className="flex min-h-[320px] max-h-[480px] flex-col gap-4 overflow-y-auto p-4 sm:p-6"
        aria-live="polite"
        aria-label="Chat messages"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`max-w-[90%] rounded-2xl px-4 py-3 sm:max-w-[80%] ${
              message.role === "user"
                ? "self-end rounded-br-sm bg-emerald-500 text-slate-950"
                : "self-start rounded-bl-sm border border-slate-700 bg-slate-800 text-white"
            }`}
          >
            <p className="mb-1 text-xs font-bold opacity-70">
              {message.role === "user" ? "You" : "Ademi"}
            </p>

            <p className="whitespace-pre-wrap text-sm leading-6">
              {message.text}
            </p>
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="border-t border-slate-800 p-4 sm:p-5"
      >
        <label
          htmlFor="ademi-message"
          className="mb-2 block text-sm text-slate-300"
        >
          Your message
        </label>

        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            id="ademi-message"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask Ademi a question..."
            maxLength={1000}
            className="min-h-12 min-w-0 flex-1 rounded-xl border border-slate-700 bg-slate-950 px-4 text-white outline-none focus:border-emerald-500"
          />

          <button
            type="submit"
            disabled={!input.trim()}
            className="min-h-12 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>

    <section className="mt-6">
      <h2 className="mb-3 text-lg font-semibold">Quick Links</h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Link
          href="/recording"
          className="rounded-xl border border-slate-800 bg-slate-900 p-4 hover:border-emerald-500"
        >
          <span className="font-semibold">🎙️ Voice Recording</span>
          <p className="mt-1 text-sm text-slate-400">
            Open the recording interface.
          </p>
        </Link>

        <Link
          href="/find-partner"
          className="rounded-xl border border-slate-800 bg-slate-900 p-4 hover:border-emerald-500"
        >
          <span className="font-semibold">🤝 Find Partner</span>
          <p className="mt-1 text-sm text-slate-400">
            Explore the partner matching page.
          </p>
        </Link>

        <Link
          href="/rewards"
          className="rounded-xl border border-slate-800 bg-slate-900 p-4 hover:border-emerald-500"
        >
          <span className="font-semibold">💰 Rewards</span>
          <p className="mt-1 text-sm text-slate-400">
            View the rewards interface.
          </p>
        </Link>

        <Link
          href="/marketplace"
          className="rounded-xl border border-slate-800 bg-slate-900 p-4 hover:border-emerald-500"
        >
          <span className="font-semibold">📚 Dataset Marketplace</span>
          <p className="mt-1 text-sm text-slate-400">
            Explore dataset categories.
          </p>
        </Link>
      </div>
    </section>

    <p className="mt-6 text-xs leading-5 text-slate-500">
      This version uses predefined demo replies. Do not enter passwords,
      API keys, payment details, or other confidential information.
    </p>
  </div>
</main>

);
}