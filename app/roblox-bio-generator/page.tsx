import type { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { BioGenerator } from "@/components/BioGenerator";
import { FAQ } from "@/components/FAQ";
import { ContentSection, InternalToolLinks } from "@/components/SeoContent";

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

const internalLinks = [
  {
    href: "/roblox-username-checker",
    title: "Roblox Username Checker",
    description: "Check if a username is valid or available."
  },
  {
    href: "/roblox-username-generator",
    title: "Roblox Username Generator",
    description: "Generate Roblox username ideas by style."
  },
  {
    href: "/roblox-avatar-idea-generator",
    title: "Roblox Avatar Idea Generator",
    description: "Find outfit inspiration for your Roblox avatar."
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
          </div>
          <div className="mt-8">
            <BioGenerator />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-8">
        <AdPlaceholder label="Mid content ad placeholder" />
        <ContentSection title="Aesthetic Roblox bios for your profile">
          <p>
            A Roblox bio is a short description on your profile that shows your
            personality, mood, favorite games, or overall style. With our Roblox
            Bio Generator, you can create aesthetic, cute, dark, anime, soft, or
            gamer bios instantly without writing from scratch. A short profile
            line can make your account feel more expressive and help visitors
            understand your vibe before they add you or join you in a game.
          </p>
          <p>
            This Roblox bio generator aesthetic tool is designed for quick,
            copy-ready text. The bios use emojis, symbols, and safe wording so
            they feel stylish while staying friendly for teen players. Use it
            when you want a cozy profile, a darker mood, an anime-inspired line,
            or a gamer phrase that feels simple and memorable.
          </p>
        </ContentSection>
        <ContentSection title="How to use the Roblox Bio Generator">
          <ol className="list-decimal space-y-2 pl-5">
            <li>Select the bio style you want.</li>
            <li>Click &quot;Generate 10 bios&quot; to create copy-ready options.</li>
            <li>Copy the bio you like and paste it into your Roblox profile.</li>
          </ol>
        </ContentSection>
        <ContentSection title="Bio writing tips">
          <ul className="list-disc space-y-2 pl-5">
            <li>Keep your bio short so it is easy to read.</li>
            <li>Choose emojis that match your profile style.</li>
            <li>Avoid personal information such as age, location, or contacts.</li>
            <li>Preview your bio after pasting because symbols can vary by device.</li>
          </ul>
        </ContentSection>
        <FAQ items={faqs} />
        <InternalToolLinks links={internalLinks} />
        <div className="mt-8">
          <AdPlaceholder label="Bottom ad placeholder" />
        </div>
      </section>
    </main>
  );
}
