"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";

type UserProfile = {
name: string;
email: string;
preferredLanguage: string;
};

const DEFAULT_PROFILE: UserProfile = {
name: "",
email: "",
preferredLanguage: "Nigerian Pidgin",
};

export default function ProfilePage() {
const [profile, setProfile] = useState<UserProfile>(DEFAULT_PROFILE);
const [loaded, setLoaded] = useState(false);
const [message, setMessage] = useState("");

useEffect(() => {
try {
const savedUser = localStorage.getItem("mnpe_user");

  if (savedUser) {
    const user = JSON.parse(savedUser);

    setProfile({
      name: typeof user.name === "string" ? user.name : "",
      email: typeof user.email === "string" ? user.email : "",
      preferredLanguage:
        typeof user.preferredLanguage === "string"
          ? user.preferredLanguage
          : "Nigerian Pidgin",
    });
  }
} catch {
  setMessage("We could not read your saved browser profile.");
} finally {
  setLoaded(true);
}

}, []);

function handleSave(event: FormEvent<HTMLFormElement>) {
event.preventDefault();
setMessage("");

const name = profile.name.trim();

if (!name) {
  setMessage("Please enter your display name.");
  return;
}

try {
  const savedUser = localStorage.getItem("mnpe_user");
  const existingUser = savedUser ? JSON.parse(savedUser) : {};

  const updatedUser = {
    ...existingUser,
    name,
    email: profile.email,
    preferredLanguage: profile.preferredLanguage,
  };

  localStorage.setItem("mnpe_user", JSON.stringify(updatedUser));
  setMessage(
    "Your profile was saved in this browser. Server-side account updates are not connected yet."
  );
} catch {
  setMessage("We could not save your profile. Please try again.");
}

}

if (!loaded) {
return (
<main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white">
<p className="text-slate-300">Loading your profile...</p>
</main>
);
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
        My Profile
      </h1>

      <p className="mt-3 text-slate-300">
        View and update your basic profile preferences.
      </p>
    </header>

    <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7">
      <div className="mb-6 flex items-center gap-4">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-2xl font-bold text-slate-950"
          aria-hidden="true"
        >
          {profile.name.trim().charAt(0).toUpperCase() || "U"}
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            {profile.name || "Your Account"}
          </h2>
          <p className="mt-1 break-all text-sm text-slate-400">
            {profile.email || "No email found in this browser"}
          </p>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-5">
        <div>
          <label
            htmlFor="profile-name"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Display Name
          </label>

          <input
            id="profile-name"
            type="text"
            autoComplete="name"
            maxLength={80}
            value={profile.name}
            onChange={(event) =>
              setProfile({ ...profile, name: event.target.value })
            }
            placeholder="Enter your name"
            required
            className="min-h-12 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 text-white outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label
            htmlFor="profile-email"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Email Address
          </label>

          <input
            id="profile-email"
            type="email"
            autoComplete="email"
            value={profile.email}
            readOnly
            className="min-h-12 w-full cursor-not-allowed rounded-xl border border-slate-800 bg-slate-950 px-4 text-slate-400"
          />

          <p className="mt-2 text-xs text-slate-500">
            Email changes must be handled by the real authentication
            service.
          </p>
        </div>

        <div>
          <label
            htmlFor="profile-language"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Preferred Language
          </label>

          <select
            id="profile-language"
            value={profile.preferredLanguage}
            onChange={(event) =>
              setProfile({
                ...profile,
                preferredLanguage: event.target.value,
              })
            }
            className="min-h-12 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 text-white outline-none focus:border-emerald-500"
          >
            <option value="Nigerian Pidgin">Nigerian Pidgin</option>
            <option value="English">English</option>
            <option value="Yoruba">Yoruba</option>
            <option value="Igbo">Igbo</option>
            <option value="Hausa">Hausa</option>
          </select>
        </div>

        <button
          type="submit"
          className="min-h-12 w-full rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-slate-950 hover:bg-emerald-400"
        >
          Save Profile
        </button>

        {message && (
          <p
            role="status"
            className="rounded-xl border border-slate-700 bg-slate-950 p-4 text-sm leading-6 text-slate-300"
          >
            {message}
          </p>
        )}
      </form>
    </section>

    <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <h2 className="font-semibold">Account Security</h2>

      <p className="mt-2 text-sm leading-6 text-slate-400">
        Real account protection, password changes, and private user
        settings must be managed through verified server-side
        authentication. Browser storage alone is not secure account
        protection.
      </p>
    </section>
  </div>
</main>

);
}