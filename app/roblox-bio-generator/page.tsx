import type { Metadata } from "next";
import Link from "next/link";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { BioGenerator } from "@/components/BioGenerator";
import { FAQ } from "@/components/FAQ";
import { RelatedTools } from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Roblox Bio Generator - Aesthetic, Cute & Stylish Bios",
  description:
    "Generate Roblox bios with aesthetic, cute, anime, and gamer styles. Free Roblox bio generator with copy-ready text."
};

const faqs = [
  {
    question: "What is a Roblox bio?",
    answer:
      "A Roblox bio is the short text on a profile where players can share a vibe, hobby, quote, or simple introduction."
  },
  {
    question: "How long can a Roblox bio be?",
    answer:
      "Roblox profile descriptions can change over time, so keep your bio short and check the current limit inside Roblox before saving."
  },
  {
    question: "Are aesthetic bios allowed in Roblox?",
    answer:
      "Aesthetic bios are generally fine when they follow Roblox community standards and avoid offensive, adult, hateful, or unsafe content."
  },
  {
    question: "Can I use emojis in Roblox bio?",
    answer:
      "Roblox may allow many emojis and symbols, but support can vary by device and Roblox updates. Preview your bio after pasting it."
  }
];

export default function RobloxBioGeneratorPage() {
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:py-12">
          <AdPlaceholder label="Top ad placeholder" />
          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Copy-ready Roblox profile ideas
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-normal text-slate-950">
              Roblox Bio Generator
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              A Roblox bio is the short profile text players use to show their
              personality, mood, favorite style, or gaming energy before anyone
              joins them in a world. Aesthetic bios are popular because they
              make a profile feel more intentional with soft wording, symbols,
              emojis, and a clear vibe in just one or two lines. Instead of
              writing a long paragraph, many players choose a cute, anime,
              dark, soft, or gamer-style bio that is easy to read and quick to
              copy. This generator creates safe, teen-friendly Roblox bio ideas
              with no personal data, political content, or offensive wording.
              Pick a style, generate 10 bios, then copy the one that best
              matches your profile.
            </p>
          </div>
          <div className="mt-8">
            <BioGenerator />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-8">
        <AdPlaceholder label="Mid content ad placeholder" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Link
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-soft"
            href="/roblox-username-checker"
          >
            <h2 className="text-xl font-bold text-slate-950">
              Roblox Username Checker
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Check if your Roblox username idea follows the format rules and
              may be available.
            </p>
          </Link>
          <Link
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-soft"
            href="/roblox-username-generator"
          >
            <h2 className="text-xl font-bold text-slate-950">
              Roblox Username Generator
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Generate cute, cool, anime, dark, aesthetic, and gamer username
              ideas.
            </p>
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
