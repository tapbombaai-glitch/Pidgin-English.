"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Phase 2 scaffolding: real auth (NextAuth / Clerk / Supabase) will replace this.
    // Demo: accept any non-empty credentials and store a mock session.
    if (!email || !password) {
      setError("Please enter email and password.");
      setLoading(false);
      return;
    }

    await new Promise((r) => setTimeout(r, 800));
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "mnpe_user",
        JSON.stringify({ email, name: email.split("@")[0], role: "user" })
      );
    }
    setLoading(false);
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
              🇳🇬
            </div>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Sign In</h1>
          <p className="text-slate-600 mt-1">Welcome back to Main Nigeria Pidgin English</p>
        </div>

        <form onSubmit={handleSubmit} className="card space-y-5">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="flex justify-end">
            <Link href="/auth/reset" className="text-sm text-green-700 hover:underline">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-all"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-sm text-slate-600 mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/auth/register" className="text-green-700 font-semibold hover:underline">
            Create Account
          </Link>
        </p>
        <p className="text-center text-xs text-slate-400 mt-4">
          Phase 2: Demo auth only. Production will use secure managed authentication with email verification.
        </p>
      </div>
    </div>
  );
}
