import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Roblox Username Checker & Generator",
    template: "%s | Roblox Username Tools"
  },
  description:
    "Check Roblox username availability and generate Roblox username ideas by style.",
  metadataBase: new URL("https://bentools.site"),
  openGraph: {
    title: "BenTools - Roblox Tools Hub",
    description:
      "Free Roblox username, bio, avatar, and game picker tools.",
    images: ["/bentools-logo.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <GoogleAnalytics />
        <header className="border-b border-slate-200 bg-white">
          <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
            <Link className="inline-flex w-fit items-center" href="/">
              <Image
                alt="BenTools Roblox Tools Hub"
                className="h-14 w-auto"
                height={120}
                priority
                src="/bentools-logo.png"
                width={168}
              />
              <span className="sr-only">BenTools Roblox Tools Hub</span>
            </Link>
            <div className="flex flex-wrap gap-2 text-sm font-medium text-slate-700">
              <Link
                className="rounded-md px-3 py-2 hover:bg-slate-100"
                href="/roblox-username-checker"
              >
                Checker
              </Link>
              <Link
                className="rounded-md px-3 py-2 hover:bg-slate-100"
                href="/roblox-username-generator"
              >
                Generator
              </Link>
              <Link
                className="rounded-md px-3 py-2 hover:bg-slate-100"
                href="/roblox-username-ideas"
              >
                Ideas
              </Link>
              <Link
                className="rounded-md px-3 py-2 hover:bg-slate-100"
                href="/roblox-bio-generator"
              >
                Bio Generator
              </Link>
              <Link
                className="rounded-md px-3 py-2 hover:bg-slate-100"
                href="/random-roblox-game-picker"
              >
                Game Picker
              </Link>
              <Link
                className="rounded-md px-3 py-2 hover:bg-slate-100"
                href="/low-end-pc-game-finder"
              >
                Ben Game Finder
              </Link>
              <Link
                className="rounded-md px-3 py-2 hover:bg-slate-100"
                href="/roblox-avatar-idea-generator"
              >
                Avatar Ideas
              </Link>
              <Link
                className="rounded-md px-3 py-2 hover:bg-slate-100"
                href="/roblox-font-generator"
              >
                Fonts
              </Link>
              <Link
                className="rounded-md px-3 py-2 hover:bg-slate-100"
                href="/roblox-symbols-copy-and-paste"
              >
                Symbols
              </Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600">
            This tool is not affiliated with Roblox.
          </div>
        </footer>
      </body>
    </html>
  );
}
