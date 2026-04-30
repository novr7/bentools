import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Roblox Username Checker & Generator",
    template: "%s | Roblox Username Tools"
  },
  description:
    "Check Roblox username availability and generate Roblox username ideas by style.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <header className="border-b border-slate-200 bg-white">
          <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
            <Link className="text-lg font-bold text-slate-950" href="/">
              Roblox Username Tools
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
                href="/roblox-avatar-idea-generator"
              >
                Avatar Ideas
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
