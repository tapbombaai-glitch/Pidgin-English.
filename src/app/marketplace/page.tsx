"use client";

import Link from "next/link";
import { useState } from "react";

type Dataset = {
id: number;
name: string;
language: string;
description: string;
category: string;
status: string;
};

const datasets: Dataset[] = [
{
id: 1,
name: "Nigerian Pidgin Conversations",
language: "Nigerian Pidgin",
description:
"A dataset category for everyday Nigerian Pidgin conversations.",
category: "Conversation",
status: "Coming Soon",
},
{
id: 2,
name: "Nigerian Pidgin Reading",
language: "Nigerian Pidgin",
description:
"A dataset category for people reading prepared text aloud.",
category: "Reading",
status: "Coming Soon",
},
{
id: 3,
name: "Nigerian Languages Collection",
language: "Yoruba, Igbo and Hausa",
description:
"A foundation for discovering voice datasets across Nigerian languages.",
category: "Multilingual",
status: "Coming Soon",
},
];

export default function MarketplacePage() {
const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");

const filteredDatasets = datasets.filter((dataset) => {
const matchesSearch = "${dataset.name} ${dataset.language} ${dataset.description}"
.toLowerCase()
.includes(search.toLowerCase());

const matchesCategory =
  category === "All" || dataset.category === category;

return matchesSearch && matchesCategory;

});

return (
<main className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-6">
<div className="mx-auto max-w-6xl">
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
        Dataset Marketplace
      </h1>

      <p className="mt-3 max-w-2xl text-slate-300">
        Explore Nigerian language voice dataset categories and prepare for
        future dataset discovery and purchasing.
      </p>
    </header>

    <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6">
      <h2 className="text-xl font-semibold">Find a Dataset</h2>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="dataset-search"
            className="mb-2 block text-sm text-slate-300"
          >
            Search datasets
          </label>

          <input
            id="dataset-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search language or dataset..."
            className="min-h-12 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 text-white outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label
            htmlFor="dataset-category"
            className="mb-2 block text-sm text-slate-300"
          >
            Dataset category
          </label>

          <select
            id="dataset-category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="min-h-12 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 text-white outline-none focus:border-emerald-500"
          >
            <option value="All">All Categories</option>
            <option value="Conversation">Conversation</option>
            <option value="Reading">Reading</option>
            <option value="Multilingual">Multilingual</option>
          </select>
        </div>
      </div>
    </section>

    <section className="mt-8">
      <div className="mb-5 flex items-center justify-between gap-3">
        <h2 className="text-xl font-semibold">Available Categories</h2>

        <span className="text-sm text-slate-400">
          {filteredDatasets.length} results
        </span>
      </div>

      {filteredDatasets.length === 0 ? (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
          <p className="font-semibold">No matching datasets found.</p>
          <p className="mt-2 text-sm text-slate-400">
            Try another search or select a different category.
          </p>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredDatasets.map((dataset) => (
            <article
              key={dataset.id}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                  {dataset.category}
                </span>

                <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">
                  {dataset.status}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-bold">{dataset.name}</h3>

              <p className="mt-2 text-sm text-slate-400">
                Language: {dataset.language}
              </p>

              <p className="mt-4 flex-1 text-sm leading-6 text-slate-300">
                {dataset.description}
              </p>

              <button
                type="button"
                disabled
                className="mt-6 min-h-11 w-full cursor-not-allowed rounded-xl bg-slate-800 px-4 py-3 font-semibold text-slate-400"
              >
                Purchasing Not Yet Available
              </button>
            </article>
          ))}
        </div>
      )}
    </section>

    <section className="mt-8 rounded-2xl border border-emerald-900 bg-emerald-950/30 p-5">
      <h2 className="font-semibold text-emerald-300">
        Are you a voice contributor?
      </h2>

      <p className="mt-2 text-sm leading-6 text-slate-300">
        Continue to the recording page to explore the recording interface.
        Recording uploads, dataset approval, sales, and contributor
        payments still need to be connected to the secure backend.
      </p>

      <Link
        href="/recording"
        className="mt-4 inline-flex min-h-11 items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-slate-950 hover:bg-emerald-400"
      >
        Go to Recording
      </Link>
    </section>

    <p className="mt-6 text-xs leading-5 text-slate-500">
      These are example dataset categories, not real datasets available
      for sale. No purchase or payment is processed on this page.
    </p>
  </div>
</main>

);
}