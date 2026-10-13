"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type MNPEUser = {
name?: string;
email?: string;
role?: string;
};

const dashboardItems = [
{
title: "Voice Recording",
description: "Record your voice and contribute to Nigerian language datasets.",
href: "/recording",
icon: "🎙️",
},
{
title: "Find Partner",
description: "Connect with other contributors for voice conversations.",
href: "/find-partner",
icon: "🤝",
},
{
title: "My Rewards",
description: "View your contribution rewards and payment information.",
href: "/rewards",
icon: "💰",
},
{
title: "My Contributions",
description: "Track your recordings and contribution progress.",
href: "/contributions",
icon: "📊",
},
{
title: "Dataset Marketplace",
description: "Explore the Nigerian language dataset marketplace.",
href: "/marketplace",
icon: "🛒",
},
{
title: "Ademi AI",
description: "Get help navigating the Main Nigeria Pidgin English platform.",
href: "/ademi",
icon: "🤖",
},
];

export default function DashboardPage() {
const [user, setUser] = useState<MNPEUser | null>(null);
const [ready, setReady] = useState(false);

useEffect(() => {
try {
const savedUser = localStorage.getItem("mnpe_user");

  if (savedUser) {
    const parsedUser: unknown = JSON.parse(savedUser);

    if (
      parsedUser &&
      typeof parsedUser === "object" &&
      "email" in parsedUser &&
      typeof parsedUser.email === "string"
    ) {
      setUser(parsedUser as MNPEUser);
    }
  }
} catch {
  setUser(null);
} finally {
  setReady(true);
}

}, []);

if (!ready) {
return (
<main className="min-h-screen flex items-center justify-center bg-slate-50">
<p className="text-slate-600">Loading your dashboard...</p>
</main>
);
}

return (
<main className="min-h-screen bg-slate-50">
<header className="bg-white border-b border-slate-200">
<div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
<Link href="/" className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white text-xl">
🇳🇬
</div>

        <div>
          <h1 className="font-bold text-slate-900">
            Main Nigeria Pidgin English
          </h1>
          <p className="text-xs text-slate-500">
            Contributor Dashboard
          </p>
        </div>
      </Link>

      <Link
        href="/auth/login"
        onClick={() => {
          localStorage.removeItem("mnpe_user");
        }}
        className="text-sm font-semibold text-green-700 hover:underline"
      >
        Sign Out
      </Link>
    </div>
  </header>

  <section className="max-w-6xl mx-auto px-4 py-10">
    <div className="bg-green-700 rounded-2xl p-6 sm:p-8 text-white mb-8">
      <p className="text-green-100 text-sm mb-2">
        MAIN NIGERIA PIDGIN ENGLISH
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold">
        Welcome, {user?.name || "Contributor"}!
      </h2>

      <p className="mt-3 text-green-50 max-w-2xl">
        Help preserve Nigerian languages through voice contributions,
        meaningful conversations, and responsible dataset sharing.
      </p>

      {user?.email && (
        <p className="mt-4 text-sm text-green-100 break-all">
          {user.email}
        </p>
      )}
    </div>

    <div className="mb-6">
      <h2 className="text-xl font-bold text-slate-900">
        Your Workspace
      </h2>

      <p className="text-slate-600 mt-1">
        Choose a section to continue.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {dashboardItems.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-green-500 hover:shadow-md transition-all"
        >
          <div className="text-3xl mb-4" aria-hidden="true">
            {item.icon}
          </div>

          <h3 className="font-bold text-lg text-slate-900">
            {item.title}
          </h3>

          <p className="text-sm text-slate-600 mt-2 leading-6">
            {item.description}
          </p>

          <p className="mt-4 text-sm text-green-700 font-semibold">
            Open section →
          </p>
        </Link>
      ))}
    </div>

    {!user && (
      <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4">
        <p className="text-sm text-amber-900">
          You are not signed in with a saved demo profile.{" "}
          <Link
            href="/auth/login"
            className="font-semibold underline"
          >
            Sign in here
          </Link>
          .
        </p>
      </div>
    )}

    <div className="mt-10 border-t border-slate-200 pt-6 text-center">
      <p className="text-xs text-slate-500">
        Main Nigeria Pidgin English · Building technology for Nigerian languages.
      </p>
    </div>
  </section>
</main>

);
}