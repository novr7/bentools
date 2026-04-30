import type { Metadata } from "next";
import Link from "next/link";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { AvatarIdeaGenerator } from "@/components/AvatarIdeaGenerator";
import { FAQ } from "@/components/FAQ";

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
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Generate quick Roblox avatar outfit ideas by style. Pick cute,
              dark, anime, rich, or casual, then use the result as inspiration
              for clothing, accessories, colors, and shoes in the Roblox catalog.
            </p>
          </div>
          <div className="mt-8">
            <AvatarIdeaGenerator />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-8">
        <AdPlaceholder label="Mid content ad placeholder" />
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-950">
            More Roblox tools
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {toolLinks.map((tool) => (
              <Link
                className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-soft"
                href={tool.href}
                key={tool.href}
              >
                {tool.title}
              </Link>
            ))}
          </div>
        </section>
        <FAQ items={faqs} />
        <div className="mt-8">
          <AdPlaceholder label="Bottom ad placeholder" />
        </div>
      </section>
    </main>
  );
}
