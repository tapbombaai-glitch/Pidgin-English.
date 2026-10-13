"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);
const router = useRouter();

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();
setError("");

if (!name.trim() || !email.trim() || !password || !confirmPassword) {
  setError("Please fill in all fields.");
  return;
}

if (password.length < 8) {
  setError("Password must contain at least 8 characters.");
  return;
}

if (password !== confirmPassword) {
  setError("Passwords do not match.");
  return;
}

setLoading(true);

try {
  // Demo registration only. Replace with Supabase Auth before production.
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (typeof window !== "undefined") {
    localStorage.setItem(
      "mnpe_user",
      JSON.stringify({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        role: "user",
      })
    );
  }

  router.push("/dashboard");
} catch {
  setError("Registration failed. Please try again.");
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
        Create Your Account
      </h1>

      <p className="text-slate-600 mt-2">
        Join Main Nigeria Pidgin English and help preserve Nigerian languages.
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

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          Full Name
        </label>

        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
          placeholder="Enter your full name"
          autoComplete="name"
          required
        />
      </div>

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

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          Password
        </label>

        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
          placeholder="At least 8 characters"
          autoComplete="new-password"
          minLength={8}
          required
        />
      </div>

      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          Confirm Password
        </label>

        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
          placeholder="Enter your password again"
          autoComplete="new-password"
          minLength={8}
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-all"
      >
        {loading ? "Creating account..." : "Create Account"}
      </button>
    </form>

    <p className="text-center text-sm text-slate-600 mt-6">
      Already have an account?{" "}
      <Link
        href="/auth/login"
        className="text-green-700 font-semibold hover:underline"
      >
        Sign In
      </Link>
    </p>

    <p className="text-center text-xs text-slate-400 mt-4">
      Demo registration only. Secure account creation and email verification
      must be connected before production use.
    </p>
  </div>
</main>

);
}
