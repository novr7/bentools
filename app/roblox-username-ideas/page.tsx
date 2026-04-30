import type { Metadata } from "next";
import Link from "next/link";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { FAQ } from "@/components/FAQ";
import { UsernameIdeasBrowser } from "@/components/UsernameIdeasBrowser";

export const metadata: Metadata = {
  title: "Roblox Username Ideas by Style",
  description:
    "Browse Roblox username ideas by cute, cool, dark, and anime styles with copy-ready names."
};

const faqs = [
  {
    question: "What are Roblox username ideas?",
    answer:
      "Roblox username ideas are name suggestions you can browse for inspiration before choosing a final username."
  },
  {
    question: "Does this page check username availability?",
    answer:
      "No. This page focuses on browsing name ideas only. Use the Roblox Username Checker to validate and check a specific name."
  },
  {
    question: "Can I copy these username ideas?",
    answer:
      "Yes. Each idea has a copy button so you can save or test names quickly."
  }
];

export default function RobloxUsernameIdeasPage() {
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:py-12">
          <AdPlaceholder label="Top ad placeholder" />
          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Browse name inspiration
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-normal text-slate-950">
              Roblox Username Ideas
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Browse categorized Roblox username ideas without running a live
              availability check. Pick a style, generate a fresh set of names,
              and copy anything that fits your profile vibe. When you have a
              favorite, use the checker tool to validate the format and see if
              it may be available.
            </p>
          </div>
          <div className="mt-8">
            <UsernameIdeasBrowser />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-8">
        <AdPlaceholder label="Mid content ad placeholder" />
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-2xl font-bold text-slate-950">
            Ready to test a name?
          </h2>
          <p className="mt-2 text-slate-600">
            This page is for browsing ideas. Use the checker when you want to
            validate a username and run an availability check.
          </p>
          <Link
            className="mt-4 inline-flex rounded-md bg-slate-950 px-4 py-3 text-sm font-bold text-white hover:bg-slate-800"
            href="/roblox-username-checker"
          >
            Open username checker
          </Link>
        </div>
        <FAQ items={faqs} />
        <div className="mt-8">
          <AdPlaceholder label="Bottom ad placeholder" />
        </div>
      </section>
    </main>
  );
}
