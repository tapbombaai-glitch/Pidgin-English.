import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
                🇳🇬
              </div>
              <div>
                <span className="font-bold text-white text-lg">Main Nigeria Pidgin English</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Give Nigerian Pidgin a stronger voice in the world of artificial intelligence.
              Record, contribute, connect, and help build the future of Nigerian language technology.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/record" className="hover:text-green-400 transition-colors">Record Voice</Link></li>
              <li><Link href="/find-partner" className="hover:text-green-400 transition-colors">Find Partner</Link></li>
              <li><Link href="/dashboard" className="hover:text-green-400 transition-colors">Dashboard</Link></li>
              <li><Link href="/about" className="hover:text-green-400 transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-green-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-green-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/consent" className="hover:text-green-400 transition-colors">Voice Consent</Link></li>
              <li><Link href="/contact" className="hover:text-green-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Main Nigeria Pidgin English. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Built for Nigerian language technology • Phase 1–3 foundation
          </p>
        </div>
      </div>
    </footer>
  );
}
