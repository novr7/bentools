import type { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { FAQ } from "@/components/FAQ";
import { LowEndPcGameFinder } from "@/components/LowEndPcGameFinder";
import { ContentSection, InternalToolLinks } from "@/components/SeoContent";

export const metadata: Metadata = {
  title: "Low-end PC Game Finder - Find Games for Low Spec Laptops",
  description:
    "Use Ben Game Finder to find low end PC games for old laptops, weak specs, integrated graphics, 2GB RAM, 4GB RAM, offline play, and free games.",
  alternates: {
    canonical: "https://bentools.site/low-end-pc-game-finder"
  },
  openGraph: {
    title: "Low-end PC Game Finder",
    description:
      "Filter lightweight PC games by RAM, GPU, genre, price, and online or offline mode.",
    url: "https://bentools.site/low-end-pc-game-finder",
    type: "website"
  }
};

const faqs = [
  {
    question: "What is a low-end PC?",
    answer:
      "A low-end PC is usually an older laptop, office desktop, or budget computer with limited RAM, integrated graphics, an older processor, or no dedicated graphics card."
  },
  {
    question: "Can I play PC games without a graphics card?",
    answer:
      "Yes. Many lightweight PC games run on integrated graphics or Intel HD graphics, especially older games, 2D indie games, strategy games, and offline games with simple visuals."
  },
  {
    question: "What games run on 2GB RAM?",
    answer:
      "Games such as Stardew Valley, Terraria, Undertale, FTL, Celeste, OpenTTD, and older classic games are good starting points for 2GB RAM PCs."
  },
  {
    question: "Are free low-end PC games included?",
    answer:
      "Yes. The dataset includes free low-end PC games such as Brawlhalla, Old School RuneScape, OpenTTD, Battle for Wesnoth, TrackMania Nations Forever, and more."
  },
  {
    question: "Do offline games run better on low-end laptops?",
    answer:
      "Offline games often run better because they avoid network lag, background launchers, and online service overhead. Lightweight indie and older offline games are usually the safest picks."
  },
  {
    question: "How accurate are these recommendations?",
    answer:
      "The recommendations are practical shortlists based on low-spec friendliness, not live benchmarks. Always check official requirements and lower resolution or graphics settings if your PC is close to the minimum specs."
  }
];

const internalLinks = [
  {
    href: "/games-for-2gb-ram-pc",
    title: "Games for 2GB RAM PC",
    description: "Find lightweight games for very old laptops and PCs."
  },
  {
    href: "/games-for-4gb-ram-pc",
    title: "Games for 4GB RAM PC",
    description: "Browse games that fit common low-spec laptop setups."
  },
  {
    href: "/games-for-no-graphics-card",
    title: "Games for No Graphics Card",
    description: "Discover games for integrated graphics and weak GPUs."
  },
  {
    href: "/free-low-end-pc-games",
    title: "Free Low-end PC Games",
    description: "Find free games that can run on old or budget PCs."
  },
  {
    href: "/offline-games-for-low-end-pc",
    title: "Offline Games for Low-end PC",
    description: "Pick offline games for laptops with weak specs or poor internet."
  }
];

export default function LowEndPcGameFinderPage() {
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:py-12">
          <AdPlaceholder label="Top banner ad placeholder" />
          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Ben Game Finder
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-normal text-slate-950">
              Low-end PC Game Finder
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Find low end PC games for old laptops, low spec PCs, integrated
              graphics, and computers that struggle with modern releases.
            </p>
          </div>
          <div className="mt-8">
            <LowEndPcGameFinder />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-8">
        <AdPlaceholder label="Middle content ad placeholder" />
        <ContentSection title="Find games for low end PCs faster">
          <p>
            A low-end PC game finder is a simple tool that helps you discover
            PC games that are more likely to run on old laptops, budget
            desktops, and computers with weak specs. Many players have machines
            with 2GB or 4GB RAM, integrated graphics, Intel HD graphics, or no
            dedicated graphics card, so browsing normal game stores can waste a
            lot of time. Big screenshots and modern system requirements do not
            always make it clear which games are realistic for low-spec
            hardware.
          </p>
          <p>
            Ben Game Finder uses filters for RAM, GPU type, genre, price, and
            online or offline mode to narrow the list quickly. Instead of
            guessing, you can select your closest PC specs and review text cards
            with the game title, minimum RAM, GPU requirement, price, mode, and
            a short note. This MVP uses a static dataset only, which keeps the
            page fast, lightweight, and ready for Vercel without a database or
            external API.
          </p>
        </ContentSection>

        <ContentSection title="How to use">
          <ol className="list-decimal space-y-2 pl-5">
            <li>Select your RAM.</li>
            <li>Choose your GPU type.</li>
            <li>Pick a genre, price, or mode.</li>
            <li>Click Find Games.</li>
            <li>Review the recommended games.</li>
          </ol>
        </ContentSection>

        <ContentSection title="Tips for low end PC games">
          <ul className="list-disc space-y-2 pl-5">
            <li>Start with 2GB or 4GB RAM if your laptop is old.</li>
            <li>
              Choose Integrated Graphics if you do not have a dedicated GPU.
            </li>
            <li>Offline indie games usually run better on low-end PCs.</li>
            <li>
              Lower resolution and graphics settings can improve FPS.
            </li>
          </ul>
        </ContentSection>

        <FAQ items={faqs} />
        <InternalToolLinks
          includeDefaultLinks={false}
          links={internalLinks}
          title="Related low-end PC game guides"
        />
        <div className="mt-8">
          <AdPlaceholder label="Bottom ad placeholder" />
        </div>
      </section>
    </main>
  );
}
