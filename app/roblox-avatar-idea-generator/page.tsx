import type { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { AvatarIdeaGenerator } from "@/components/AvatarIdeaGenerator";
import { FAQ } from "@/components/FAQ";
import { ContentSection, InternalToolLinks } from "@/components/SeoContent";

export const metadata: Metadata = {
  title: "Roblox Avatar Idea Generator",
  description:
    "Generate Roblox avatar outfit ideas for cute, dark, anime, rich, and casual styles."
};

const faqs = [
  {
    question: "What is a Roblox avatar idea?",
    answer:
      "A Roblox avatar idea is a short outfit concept that helps you choose clothing, accessories, colors, and a style direction for your avatar."
  },
  {
    question: "Does this tool use the Roblox catalog?",
    answer:
      "No. It uses template-based ideas only, so you can search Roblox for similar items or adapt the idea with items you already own."
  },
  {
    question: "Can I generate different avatar styles?",
    answer:
      "Yes. You can generate cute, dark, anime, rich, and casual avatar outfit ideas."
  }
];

const toolLinks = [
  { href: "/roblox-username-checker", title: "Roblox Username Checker" },
  { href: "/roblox-username-generator", title: "Roblox Username Generator" },
  { href: "/roblox-bio-generator", title: "Roblox Bio Generator" },
  { href: "/random-roblox-game-picker", title: "Random Roblox Game Picker" }
];

export default function RobloxAvatarIdeaGeneratorPage() {
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:py-12">
          <AdPlaceholder label="Top ad placeholder" />
          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Outfit inspiration
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-normal text-slate-950">
              Roblox Avatar Ideas
            </h1>
          </div>
          <div className="mt-8">
            <AvatarIdeaGenerator />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-8">
        <AdPlaceholder label="Mid content ad placeholder" />
        <ContentSection title="Roblox avatar ideas for better outfits">
          <p>
            Looking for new Roblox avatar ideas? This tool generates outfit and
            style ideas to help you customize your character without starting
            from a blank look. A strong avatar can make your profile more
            recognizable, match your username or bio, and help you express the
            style you want in roleplay, hangout, simulator, or adventure games.
          </p>
          <p>
            From cute and aesthetic looks to dark, anime, rich, and casual
            styles, you can quickly find inspiration for clothing, accessories,
            colors, and shoes. The ideas are template-based, so they are not
            tied to a specific catalog item. Use them as a direction, then
            search Roblox for similar pieces or remix the suggestion with items
            you already own.
          </p>
        </ContentSection>
        <ContentSection title="How to use the Roblox Avatar Idea Generator">
          <ol className="list-decimal space-y-2 pl-5">
            <li>Select an avatar style such as Cute, Dark, Anime, Rich, or Casual.</li>
            <li>Click &quot;Generate 10 ideas&quot; to create outfit concepts.</li>
            <li>Use your favorite idea as inspiration in the Roblox catalog.</li>
          </ol>
        </ContentSection>
        <ContentSection title="Avatar styling tips">
          <ul className="list-disc space-y-2 pl-5">
            <li>Match your avatar style with your username and bio.</li>
            <li>Choose one main color palette before adding accessories.</li>
            <li>Use accessories sparingly so the outfit stays clean.</li>
            <li>Save several ideas before buying catalog items.</li>
          </ul>
        </ContentSection>
        <FAQ items={faqs} />
        <InternalToolLinks
          links={toolLinks.map((tool) => ({
            ...tool,
            description: "Open another BenTools Roblox utility."
          }))}
        />
        <div className="mt-8">
          <AdPlaceholder label="Bottom ad placeholder" />
        </div>
      </section>
    </main>
  );
}
