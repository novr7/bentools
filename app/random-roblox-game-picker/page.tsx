import type { Metadata } from "next";
import Link from "next/link";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { FAQ } from "@/components/FAQ";
import { RandomGamePicker } from "@/components/RandomGamePicker";
import { RelatedTools } from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Random Roblox Game Picker - Find What to Play",
  description:
    "Pick a random Roblox game to play from popular Obby, Horror, Anime, and RP categories."
};

const faqs = [
  {
    question: "What is the Random Roblox Game Picker?",
    answer:
      "It is a simple tool that randomly suggests a Roblox game from a static list of popular games and categories."
  },
  {
    question: "Can I pick a game by category?",
    answer:
      "Yes. Use the category filter to pick from Obby, Horror, Anime, or RP games before pressing the random button."
  },
  {
    question: "Are these Roblox games official recommendations?",
    answer:
      "No. This page is an unofficial discovery tool and is not affiliated with Roblox or the listed games."
  },
  {
    question: "Does this tool use the Roblox API?",
    answer:
      "No. The picker uses a static dataset, so it loads fast and works without external API calls."
  }
];

const toolLinks = [
  {
    href: "/roblox-username-checker",
    title: "Roblox Username Checker",
    description: "Validate a Roblox username and check live availability."
  },
  {
    href: "/roblox-username-generator",
    title: "Roblox Username Generator",
    description: "Generate cute, cool, anime, dark, aesthetic, and gamer names."
  },
  {
    href: "/roblox-bio-generator",
    title: "Roblox Bio Generator",
    description: "Create short aesthetic Roblox bios with copy-ready text."
  }
];

export default function RandomRobloxGamePickerPage() {
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:py-12">
          <AdPlaceholder label="Top ad placeholder" />
          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Find something to play
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-normal text-slate-950">
              Random Roblox Game Picker
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Roblox has thousands of experiences, so choosing what to play can
              take longer than starting the game. This random Roblox game picker
              helps you quickly discover an idea from popular categories like
              Obby, Horror, Anime, and RP. Use it when your group cannot decide,
              when you want a fresh game night pick, or when you simply want to
              try something outside your usual favorites. The list is static for
              speed and does not require any external API calls.
            </p>
          </div>
          <div className="mt-8">
            <RandomGamePicker />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-8">
        <AdPlaceholder label="Mid content ad placeholder" />
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-950">
            More Roblox tools
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {toolLinks.map((tool) => (
              <Link
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-soft"
                href={tool.href}
                key={tool.href}
              >
                <h3 className="text-lg font-bold text-slate-950">
                  {tool.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
        <FAQ items={faqs} />
        <RelatedTools />
        <div className="mt-8">
          <AdPlaceholder label="Bottom ad placeholder" />
        </div>
      </section>
    </main>
  );
}
