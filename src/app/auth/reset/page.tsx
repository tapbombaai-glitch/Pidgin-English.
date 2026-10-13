"use client";

import Link from "next/link";
import { useState } from "react";

export default function ResetPasswordPage() {
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();

setMessage("");
setError("");

if (!email.trim()) {
  setError("Please enter your email address.");
  return;
}

setLoading(true);

try {
  // Demo only. Connect Supabase Auth to send real reset emails.
  await new Promise((resolve) => setTimeout(resolve, 800));

  setMessage(
    "Your request has been received. Password reset emails will be available when secure authentication is connected."
  );
} catch {
  setError("Something went wrong. Please try again.");
} finally {
  setLoading(false);
}

};

return (
<main className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4">
<div className="w-full max-w-md">
<div className="text-center mb-8">
<Link href="/" className="inline-flex items-center gap-2 mb-4">
<div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white text-2xl">
🇳🇬
</div>
</Link>

      <h1 className="text-2xl font-bold text-slate-900">
        Reset Your Password
      </h1>

      <p className="text-slate-600 mt-2">
        Enter your email address to request help resetting your password.
      </p>
    </div>

    <form onSubmit={handleSubmit} className="card space-y-5">
      {error && (
        <div
          role="alert"
          className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
        >
          {error}
        </div>
      )}

      {message && (
        <div
          role="status"
          className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm"
        >
          {message}
        </div>
      )}

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          Email Address
        </label>

        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
          placeholder="you@example.com"
          autoComplete="email"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-all"
      >
        {loading ? "Submitting..." : "Request Password Reset"}
      </button>
    </form>

    <p className="text-center text-sm text-slate-600 mt-6">
      Remember your password?{" "}
      <Link
        href="/auth/login"
        className="text-green-700 font-semibold hover:underline"
      >
        Sign In
      </Link>
    </p>

    <p className="text-center text-xs text-slate-400 mt-4">
      Password reset emails require Supabase authentication to be connected.
    </p>
  </div>
</main>

);
}