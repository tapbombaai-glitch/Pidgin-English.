"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type RewardSummary = {
completedContributions: number;
totalRewards: number;
paidRewards: number;
pendingRewards: number;
};

export default function RewardsPage() {
const [userEmail, setUserEmail] = useState("");
const [summary, setSummary] = useState<RewardSummary>({
completedContributions: 0,
totalRewards: 0,
paidRewards: 0,
pendingRewards: 0,
});

useEffect(() => {
try {
const savedUser = localStorage.getItem("mnpe_user");

  if (savedUser) {
    const parsed = JSON.parse(savedUser);

    if (typeof parsed.email === "string") {
      setUserEmail(parsed.email);
    }
  }

  // Real reward figures must come from a secure server-side database.
  // Do not treat these initial values as actual earnings.
  setSummary({
    completedContributions: 0,
    totalRewards: 0,
    paidRewards: 0,
    pendingRewards: 0,
  });
} catch {
  setUserEmail("");
}

}, []);

const formatCurrency = (amount: number) =>
new Intl.NumberFormat("en-NG", {
style: "currency",
currency: "NGN",
maximumFractionDigits: 2,
}).format(amount);

const cards = [
{
title: "Total Rewards",
value: formatCurrency(summary.totalRewards),
icon: "💰",
},
{
title: "Paid Rewards",
value: formatCurrency(summary.paidRewards),
icon: "✅",
},
{
title: "Pending Rewards",
value: formatCurrency(summary.pendingRewards),
icon: "⏳",
},
{
title: "Completed Contributions",
value: String(summary.completedContributions),
icon: "🎙️",
},
];

return (
<main className="min-h-screen bg-slate-50 px-4 py-8 sm:py-12">
<div className="max-w-5xl mx-auto">
<Link
href="/dashboard"
className="inline-flex items-center text-sm font-semibold text-green-700 hover:underline mb-6"
>
← Back to Dashboard
</Link>

    <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="mb-8">
        <div className="text-4xl mb-3" aria-hidden="true">
          💰
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          My Rewards
        </h1>

        <p className="text-slate-600 mt-2">
          Track your approved contributions and reward payments.
        </p>

        {userEmail && (
          <p className="text-sm text-slate-500 mt-2 break-all">
            Account: {userEmail}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.map((card) => (
          <article
            key={card.title}
            className="border border-slate-200 rounded-xl p-5 bg-white"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm text-slate-600">{card.title}</p>
              <span className="text-2xl" aria-hidden="true">
                {card.icon}
              </span>
            </div>

            <p className="text-2xl font-bold text-slate-900 mt-3">
              {card.value}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-bold text-slate-900 mb-3">
          Reward History
        </h2>

        <div className="border border-slate-200 rounded-xl p-6 text-center bg-slate-50">
          <p className="text-3xl mb-2" aria-hidden="true">
            🧾
          </p>

          <p className="font-semibold text-slate-800">
            No reward records available yet
          </p>

          <p className="text-sm text-slate-600 mt-2">
            Approved reward records will appear here after the secure
            rewards service is connected.
          </p>
        </div>
      </div>

      <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4">
        <h2 className="font-semibold text-amber-900">
          Important Information
        </h2>

        <p className="text-sm text-amber-900 mt-2 leading-6">
          The amounts shown above are currently zero placeholders, not
          actual earnings or payment promises. Reward amounts, eligibility,
          approval, and payment status must be verified by the platform's
          secure backend.
        </p>
      </div>

      <div className="mt-6">
        <Link
          href="/contributions"
          className="inline-flex items-center justify-center w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-5 rounded-xl transition-colors"
        >
          View My Contributions →
        </Link>
      </div>
    </section>

    <p className="text-xs text-slate-500 text-center mt-6 leading-5">
      Main Nigeria Pidgin English · Rewards and payments must be verified
      through secure server-side records.
    </p>
  </div>
</main>

);
}