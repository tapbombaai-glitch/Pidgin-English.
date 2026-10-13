import Link from "next/link";

export default function HomePage() {
return (
<div className="min-h-screen">
{/* Hero Section */}
<section className="relative bg-gradient-to-br from-green-700 via-green-600 to-emerald-700 text-white overflow-hidden">
<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-6">
<span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
Nigerian Language Technology Platform
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
Give Nigerian Pidgin a Voice in the AI World
</h1>
<p className="text-lg sm:text-xl text-green-50 mb-8 leading-relaxed max-w-2xl">
Talk your Pidgin. Share your voice. Connect with people. Help build the future of Nigerian language technology.
</p>
<div className="flex flex-col sm:flex-row gap-4">
<Link
href="/record"
className="inline-flex items-center justify-center gap-2 bg-white text-green-700 font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-green-50 transition-all text-lg"
>
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
<path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a5 5 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
</svg>
Start Recording
</Link>
<Link
href="/find-partner"
className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white/10 transition-all text-lg"
>
Find a Partner
</Link>
</div>
</div>
</div>
</section>

  {/* How it works */}
  <section className="py-16 sm:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-3">How the Platform Works</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Simple steps to contribute your voice and help Nigerian Pidgin thrive in AI.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            step: "01",
            title: "Create Account",
            desc: "Sign up securely. Your recordings and personal data stay private and under your control.",
          },
          {
            step: "02",
            title: "Record Your Voice",
            desc: "Use the recording studio. Speak natural Nigerian Pidgin on topics you choose. Review before you submit.",
          },
          {
            step: "03",
            title: "Contribute & Earn",
            desc: "Join approved programmes. Track your contributions and eligible rewards with full transparency.",
          },
        ].map((item) => (
          <div key={item.step} className="card hover:shadow-md transition-shadow">
            <div className="text-4xl font-bold text-green-100 mb-3">{item.step}</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Why Pidgin matters */}
  <section className="py-16 sm:py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Why Nigerian Pidgin Matters
          </h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            Nigerian Pidgin is more than a way of speaking. It carries our culture, humour, stories, everyday experiences, and identity. Millions of people use it daily across Nigeria and the diaspora.
          </p>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Yet most AI systems still struggle to understand natural Nigerian Pidgin speech. Your voice recordings help close that gap — for speech recognition, voice assistants, education, entertainment, and more.
          </p>
          <Link href="/about" className="text-green-700 font-semibold hover:underline">
            Learn more about our mission →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Speakers", value: "75M+" },
            { label: "Goal", value: "AI Ready" },
            { label: "Focus", value: "Voice Data" },
            { label: "Community", value: "Open" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center">
              <div className="text-2xl font-bold text-green-600">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* Voice contributions */}
  <section className="py-16 sm:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-3">How Voice Contributions Help</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Every clear recording of natural Nigerian Pidgin strengthens the dataset that powers future speech technology.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Speech Recognition", desc: "Train models to understand real Naija speech." },
          { title: "Voice Assistants", desc: "Make technology speak and listen in Pidgin." },
          { title: "Education", desc: "Support language learning and research tools." },
          { title: "Business", desc: "Enable Nigerian companies to build local voice products." },
        ].map((item) => (
          <div key={item.title} className="card text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xl">
              ✓
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Programme highlight */}
  <section className="py-16 sm:py-20 bg-green-50">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
        Community Programme
      </div>
      <h2 className="text-3xl font-bold text-slate-900 mb-4">
        Gist With Person, Earn ₦500
      </h2>
      <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
        Talk 90 minutes of eligible Nigerian Pidgin conversation under the published programme rules.
        Verified minutes only. Transparent tracking. Secure reward ledger.
      </p>
      <Link
        href="/dashboard"
        className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl shadow-md transition-all"
      >
        View Programme Rules
      </Link>
    </div>
  </section>

  {/* Announcements */}
  <section className="py-16 sm:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">From Ademi — Announcements</h2>
      <div className="card bg-slate-50 border-dashed border-2 border-slate-200 text-center py-12">
        <p className="text-slate-500">No announcements yet. Check back soon.</p>
      </div>
    </div>
  </section>

  {/* Recent activity */}
  <section className="py-16 sm:py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Recent Activity</h2>
      <div className="card bg-white border-dashed border-2 border-slate-200 text-center py-12">
        <p className="text-slate-500">No public activity yet. Be the first to contribute!</p>
      </div>
    </div>
  </section>

  {/* FAQ teaser */}
  <section className="py-16 sm:py-20 bg-white">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          {
            q: "Is my recording private?",
            a: "Yes. Private recordings are only visible to you and authorised administrators under strict access controls. Dataset use requires separate, informed consent.",
          },
          {
            q: "Do I get paid automatically?",
            a: "No. Rewards are only paid after verification under published programme rules and when funding is available. The platform never fabricates earnings.",
          },
          {
            q: "Can Ademi clone my voice?",
            a: "Only if you give explicit, separate consent for voice modelling. Dataset contribution and voice cloning are different permissions.",
          },
        ].map((faq) => (
          <details key={faq.q} className="card group">
            <summary className="font-semibold text-slate-900 cursor-pointer list-none flex justify-between items-center">
              {faq.q}
              <span className="text-green-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-slate-600 text-sm leading-relaxed">{faq.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="py-16 sm:py-20 bg-green-700 text-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to give Pidgin a voice?</h2>
      <p className="text-green-100 mb-8 text-lg">
        Start recording today. Your contribution helps build better technology for millions of speakers.
      </p>
      <Link
        href="/record"
        className="inline-flex items-center justify-center gap-2 bg-white text-green-700 font-bold py-4 px-10 rounded-xl shadow-lg hover:bg-green-50 transition-all text-lg"
      >
        Start Recording Now
      </Link>
    </div>
  </section>
</div>

);
}
