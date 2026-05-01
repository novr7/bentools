import type { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { FAQ } from "@/components/FAQ";
import { ContentSection, InternalToolLinks } from "@/components/SeoContent";
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

const internalLinks = [
  {
    href: "/roblox-username-checker",
    title: "Roblox Username Checker",
    description: "Check username format and live availability."
  },
  {
    href: "/roblox-username-ideas",
    title: "Roblox Username Ideas",
    description: "Browse categorized name ideas without checking availability."
  },
  {
    href: "/roblox-bio-generator",
    title: "Roblox Bio Generator",
    description: "Create aesthetic Roblox profile bios."
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
          </div>
          <div className="mt-8">
            <UsernameGenerator />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-8">
        <AdPlaceholder label="Middle content ad placeholder" />
        <ContentSection title="Create Roblox usernames by style">
          <p>
            The Roblox Username Generator helps you create unique and creative
            usernames instantly. Whether you want a cute, cool, anime, dark,
            aesthetic, or gamer name, this tool generates ideas that fit your
            style while keeping the output short and easy to copy. It is useful
            when you know the vibe you want but do not want to spend time
            testing random word combinations by hand.
          </p>
          <p>
            Instead of staring at a blank username box, choose a style and
            generate multiple suggestions in seconds. You can copy a name you
            like, generate a fresh set, or send a favorite to the checker page
            to validate it. Generated names are meant as inspiration, so always
            verify your final choice directly through Roblox before using it on
            an account.
          </p>
        </ContentSection>
        <ContentSection title="How to use the Roblox Username Generator">
          <ol className="list-decimal space-y-2 pl-5">
            <li>Select the username style that matches your profile.</li>
            <li>Click &quot;Generate 20 usernames&quot; to create a fresh list.</li>
            <li>Copy your favorite names or use the check button for a name.</li>
          </ol>
        </ContentSection>
        <ContentSection title="Username generator tips">
          <ul className="list-disc space-y-2 pl-5">
            <li>Generate more than once to compare different combinations.</li>
            <li>Pick names that are easy to spell and remember.</li>
            <li>Use the checker tool before deciding on a final username.</li>
            <li>Avoid names that include personal information.</li>
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
