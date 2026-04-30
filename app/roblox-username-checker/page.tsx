import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { FAQ } from "@/components/FAQ";
import { RelatedTools } from "@/components/RelatedTools";
import { UsernameChecker } from "@/components/UsernameChecker";

export const metadata: Metadata = {
  title: "Roblox Username Checker - Check Name Availability",
  description:
    "Check if a Roblox username is valid or available. Free Roblox username checker with instant format validation."
};

const faqs = [
  {
    question: "What makes a Roblox username valid?",
    answer:
      "A valid Roblox username is 3 to 20 characters long and uses only letters, numbers, and underscores. This checker validates the format before making a live availability request."
  },
  {
    question: "Can Roblox usernames have underscores?",
    answer:
      "Yes. Roblox usernames can include up to one underscore, but the underscore cannot be the first or last character."
  },
  {
    question: "Why is my Roblox username not available?",
    answer:
      "A username may already be taken, blocked by Roblox moderation, reserved, or temporarily unavailable through Roblox's validation system."
  },
  {
    question: "Is this tool official Roblox?",
    answer:
      "No. This tool is not affiliated with Roblox. Always verify important username choices directly on Roblox."
  }
];

export default function RobloxUsernameCheckerPage() {
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:py-12">
          <AdPlaceholder label="Top banner ad placeholder" />
          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Validate and check
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-normal text-slate-950">
              Roblox Username Checker
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Enter a Roblox username to check local formatting rules first,
              then run a server-side availability check.
            </p>
          </div>
          <div className="mt-8">
            <Suspense fallback={<div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">Loading checker...</div>}>
              <UsernameChecker />
            </Suspense>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            This tool is not affiliated with Roblox.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-8">
        <AdPlaceholder label="Middle content ad placeholder" />
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-2xl font-bold text-slate-950">
            Need name ideas first?
          </h2>
          <p className="mt-2 text-slate-600">
            Generate style-based Roblox username ideas, copy the best ones, and
            come back here to check availability.
          </p>
          <Link
            className="mt-4 inline-flex rounded-md bg-slate-950 px-4 py-3 text-sm font-bold text-white hover:bg-slate-800"
            href="/roblox-username-generator"
          >
            Open username generator
          </Link>
        </div>
        <FAQ items={faqs} />
        <RelatedTools />
        <div className="mt-8">
          <AdPlaceholder label="Bottom ad placeholder" />
        </div>
      </section>
    </main>
  );
}
