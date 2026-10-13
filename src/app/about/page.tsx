import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link href="/" className="text-sm text-green-700 hover:underline mb-4 inline-block">← Home</Link>
        <h1 className="text-3xl font-bold text-slate-900 mb-6">About Main Nigeria Pidgin English</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
          <p>
            <strong>Main Nigeria Pidgin English</strong> is a Nigerian language technology platform created to give Nigerian Pidgin English a stronger place in the digital world.
          </p>
          <p>
            Our vision is to build a platform where people can speak naturally in Nigerian Pidgin, record their voices, participate in conversations, contribute language data, and help develop artificial intelligence that understands how Nigerians communicate.
          </p>
          <p>
            We believe Nigerian Pidgin is more than a way of speaking. It carries our culture, humour, stories, everyday experiences, and identity.
          </p>
          <p>
            Our mission is to give Nigerian Pidgin English a stronger voice in the world of artificial intelligence.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-10">Long-term goals</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Nigerian Pidgin speech recognition</li>
            <li>AI-generated Nigerian Pidgin speech</li>
            <li>Natural conversations between people and AI</li>
            <li>Voice-data collection and language research</li>
            <li>Integration with other AI applications</li>
          </ul>

          <p className="mt-8 text-sm text-slate-500">
            This is the Phase 1–3 foundation release. Core recording, consent separation, homepage, and dashboard scaffolding are implemented. Full backend, live matching, payments, and production AI integrations require further configuration and external services.
          </p>
        </div>
      </div>
    </div>
  );
}
