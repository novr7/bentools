import type { Metadata } from "next";
import Link from "next/link";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { FAQ } from "@/components/FAQ";
import { RelatedTools } from "@/components/RelatedTools";
import { UsernameGenerator } from "@/components/UsernameGenerator";

export const metadata: Metadata = {
  title: "Roblox Username Generator - Cute, Cool & Aesthetic Names",
  description:
    "Generate Roblox username ideas by style including cute, cool, anime, dark, aesthetic, and gamer names."
};

const faqs = [
  {
    question: "How does the Roblox username generator work?",
    answer:
      "It combines safe word banks, style words, gamer words, numbers, and underscore formats while keeping names within Roblox username rules."
  },
  {
    question: "Are generated Roblox usernames always available?",
    answer:
      "No. Generated names are ideas only. Use the checker button or verify directly on Roblox before choosing one."
  },
  {
    question: "What styles can I generate?",
    answer:
      "You can generate cute, cool, anime, dark, aesthetic, and gamer Roblox username ideas."
  },
  {
    question: "Can I copy generated usernames?",
    answer:
      "Yes. Each generated username includes a copy button with quick clipboard feedback."
  }
];

export default function RobloxUsernameGeneratorPage() {
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:py-12">
          <AdPlaceholder label="Top banner ad placeholder" />
          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Create clean name ideas
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-normal text-slate-950">
              Roblox Username Generator
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Pick a style and generate 20 Roblox username ideas that follow
              length, underscore, and character rules.
            </p>
          </div>
          <div className="mt-8">
            <UsernameGenerator />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-8">
        <AdPlaceholder label="Middle content ad placeholder" />
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-2xl font-bold text-slate-950">
            Already have a name?
          </h2>
          <p className="mt-2 text-slate-600">
            Check whether your Roblox username idea is valid and run a live
            availability check.
          </p>
          <Link
            className="mt-4 inline-flex rounded-md bg-slate-950 px-4 py-3 text-sm font-bold text-white hover:bg-slate-800"
            href="/roblox-username-checker"
          >
            Open username checker
          </Link>
        </div>
        <div className="mt-6 rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-2xl font-bold text-slate-950">
            Want to browse ideas?
          </h2>
          <p className="mt-2 text-slate-600">
            Open the ideas page for category-based Roblox username inspiration
            without availability checking.
          </p>
          <Link
            className="mt-4 inline-flex rounded-md bg-white px-4 py-3 text-sm font-bold text-slate-800 ring-1 ring-slate-300 hover:ring-blue-300"
            href="/roblox-username-ideas"
          >
            Browse username ideas
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
