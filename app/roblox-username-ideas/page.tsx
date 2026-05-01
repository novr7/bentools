import type { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { FAQ } from "@/components/FAQ";
import { ContentSection, InternalToolLinks } from "@/components/SeoContent";
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

const internalLinks = [
  {
    href: "/roblox-username-checker",
    title: "Roblox Username Checker",
    description: "Validate username format and check availability."
  },
  {
    href: "/roblox-username-generator",
    title: "Roblox Username Generator",
    description: "Generate username ideas with more style options."
  },
  {
    href: "/roblox-bio-generator",
    title: "Roblox Bio Generator",
    description: "Create a profile bio to match your username."
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
          </div>
          <div className="mt-8">
            <UsernameIdeasBrowser />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-8">
        <AdPlaceholder label="Mid content ad placeholder" />
        <ContentSection title="Browse Roblox username ideas by style">
          <p>
            Roblox Username Ideas is built for browsing name inspiration by
            category. Unlike the main generator, this page does not focus on
            live availability checks. It gives you quick lists of cute, cool,
            dark, and anime-style username ideas so you can compare different
            vibes and copy names that match your profile.
          </p>
          <p>
            Use this page when you are still exploring and want a wider view of
            possible names before making a final choice. Once you find a name
            that feels right, open the Roblox Username Checker to validate the
            format and see whether it may be available.
          </p>
        </ContentSection>
        <ContentSection title="How to use Roblox Username Ideas">
          <ol className="list-decimal space-y-2 pl-5">
            <li>Select a style such as Cute, Cool, Dark, or Anime.</li>
            <li>Click &quot;Generate 20 usernames&quot; to refresh the list.</li>
            <li>Copy your favorite idea and check it before using it.</li>
          </ol>
        </ContentSection>
        <ContentSection title="Idea browsing tips">
          <ul className="list-disc space-y-2 pl-5">
            <li>Compare several styles before picking a final direction.</li>
            <li>Use the copy button to save names you want to test later.</li>
            <li>Keep your final username readable and easy to remember.</li>
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
