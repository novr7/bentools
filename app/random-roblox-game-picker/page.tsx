import type { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { FAQ } from "@/components/FAQ";
import { RandomGamePicker } from "@/components/RandomGamePicker";
import { ContentSection, InternalToolLinks } from "@/components/SeoContent";

export const metadata: Metadata = {
  title: "What to Play Roblox - Random Roblox Game Picker",
  description:
    "Not sure what to play on Roblox? Find games by genre and mood with this Roblox game finder."
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
              What to Play Roblox Game Finder
            </h1>
          </div>
          <div className="mt-8">
            <RandomGamePicker />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-8">
        <AdPlaceholder label="Mid content ad placeholder" />
        <ContentSection title="Find a Roblox game to play next">
          <p>
            Not sure what to play on Roblox? Use the Roblox Game Finder to
            discover new games instantly. With thousands of games available,
            choosing one can be difficult, especially when you are deciding with
            friends or want something different from your usual favorites. This
            tool gives you a quick suggestion so you can spend less time
            searching and more time playing.
          </p>
          <p>
            The picker uses a static list of popular Roblox games across Obby,
            Horror, Anime, and RP categories. You can filter by genre and mood,
            then let the tool choose a game that fits what you want to play.
            Because it does not call an external API, it loads quickly and works
            as a simple random decision helper whenever you need a fresh Roblox
            experience.
          </p>
        </ContentSection>
        <ContentSection title="How to use the Random Roblox Game Picker">
          <ol className="list-decimal space-y-2 pl-5">
            <li>Choose a genre or leave the filter set to All.</li>
            <li>Choose a mood such as Chill, Scary, Competitive, or Social.</li>
            <li>Click &quot;Pick Random Game&quot;.</li>
            <li>Use the suggested game name as your next Roblox play idea.</li>
          </ol>
        </ContentSection>
        <ContentSection title="When to use this picker">
          <ul className="list-disc space-y-2 pl-5">
            <li>Use it when your group cannot decide what to play.</li>
            <li>Try a new category when your usual games feel stale.</li>
            <li>Refresh the pick until you find a game that sounds fun.</li>
          </ul>
        </ContentSection>
        <FAQ items={faqs} />
        <InternalToolLinks links={toolLinks} />
        <div className="mt-8">
          <AdPlaceholder label="Bottom ad placeholder" />
        </div>
      </section>
    </main>
  );
}
