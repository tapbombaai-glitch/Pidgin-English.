"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);

    try {
      // Demo login only. This is not real authentication.
      await new Promise((resolve) => setTimeout(resolve, 500));

      const user = {
        email: normalizedEmail,
        name: normalizedEmail.split("@")[0],
        role: "user",
      };

      localStorage.setItem("mnpe_user", JSON.stringify(user));

      router.push("/dashboard");
    } catch {
      setError("Unable to sign in. Please try again.");
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md">
        <header className="mb-8 text-center">
          <Link
            href="/"
            aria-label="Main Nigeria Pidgin English homepage"
            className="mb-4 inline-flex items-center justify-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-2xl">
              🇳🇬
            </div>
          </Link>

          <h1 className="text-2xl font-bold text-slate-900">
            Sign In
          </h1>

          <p className="mt-2 text-slate-600">
            Welcome back to Main Nigeria Pidgin English
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="card space-y-5"
        >
          {error && (
            <div
              role="alert"
              className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700"
            >
              {error}
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex justify-end">
            <Link
              href="/auth/reset"
              className="text-sm text-green-700 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/register"
            className="font-semibold text-green-700 hover:underline"
          >
            Create Account
          </Link>
        </p>

        <p className="mt-4 text-center text-xs leading-5 text-slate-400">
          This login page currently uses demo authentication.
          Secure account authentication must be connected before
          using real accounts.
        </p>
      </div>
    </main>
  );
}