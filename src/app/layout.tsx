import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Main Nigeria Pidgin English | Give Nigerian Pidgin a Voice in the AI World",
  description:
    "Talk your Pidgin. Share your voice. Connect with people. Help build the future of Nigerian language technology. Record, contribute, and support Nigerian Pidgin AI.",
  keywords: [
    "Nigerian Pidgin",
    "Pidgin English",
    "Naija",
    "voice recording",
    "AI dataset",
    "speech recognition",
    "language technology",
  ],
  openGraph: {
    title: "Main Nigeria Pidgin English",
    description: "Give Nigerian Pidgin a Voice in the AI World",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}