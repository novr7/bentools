import type { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { ContentSection, InternalToolLinks } from "@/components/SeoContent";
import { lowEndPcGames, ramScore } from "@/lib/lowEndPcGames";

export const metadata: Metadata = {
  title: "Games for 4GB RAM - Low Spec PC Games for Old Laptops",
  description:
    "Browse games for 4GB RAM PCs, low spec laptops, Intel HD graphics, and weak computers.",
  alternates: {
    canonical: "https://bentools.site/games-for-4gb-ram"
  }
};

const games = lowEndPcGames
  .filter((game) => ramScore(game.minRam) <= 4)
  .slice(0, 20);

const relatedLinks = [
  {
    href: "/low-end-pc-game-finder",
    title: "Explore more low end PC games for 4GB RAM",
    description: "Use filters to find games for 4gb ram, weak PCs, and low spec laptops."
  },
  {
    href: "/games-for-2gb-ram",
    title: "Explore lightweight low end PC games for 2GB RAM",
    description: "Find extra-light games for very old laptops."
  },
  {
    href: "/no-gpu-games",
    title: "Explore no GPU games for integrated graphics PCs",
    description: "Browse games for integrated graphics and no dedicated GPU."
  }
];

export default function GamesFor4GbRamPage() {
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:py-12">
          <AdPlaceholder label="Top banner ad placeholder" />
          <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Ben Game Finder
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-normal text-slate-950">
            Games for 4GB RAM
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Browse games for 4gb ram PCs, low spec laptops, Intel HD graphics,
            and older computers that need lightweight game recommendations.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-8">
        <ContentSection title="Best Games for 4GB RAM PCs">
          <p>
            A 4GB RAM computer gives you more room than a 2GB machine, but it
            is still a low-end setup for modern PC gaming. The best games for
            4gb ram systems are usually older 3D games, polished 2D indie
            games, card games, strategy games, and online games designed to run
            on a wide range of hardware. If your laptop also uses Intel HD or
            integrated graphics, you should still avoid demanding modern AAA
            titles and focus on low spec pc games with scalable settings.
          </p>
          <p>
            For smoother performance, test games at 720p, set shadows and
            effects to low, and avoid running browser tabs in the background.
            Games for low end pc hardware can feel excellent when they are
            chosen around the machine instead of forced beyond its limits. The
            list below mixes free, paid, offline, and online recommendations
            that are practical for 4GB RAM PCs.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {games.map((game) => (
              <article
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                key={game.title}
              >
                <h2 className="text-lg font-bold text-slate-950">
                  {game.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {game.genre} - {game.minRam} RAM - {game.gpu} - {game.price} -{" "}
                  {game.mode}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {game.note}
                </p>
              </article>
            ))}
          </div>
        </ContentSection>

        <ContentSection title="How to Use a 4GB RAM Game List">
          <p>
            Start by checking whether your PC has integrated graphics or a
            low-end dedicated GPU. If you only have Intel HD graphics, prefer
            2D games, older Source engine games, turn-based strategy, and
            indie titles. If you have a basic dedicated GPU, you can try more
            older 3D games, but low graphics settings are still important. The
            main finder lets you combine RAM, GPU, genre, price, and mode to
            narrow the list faster.
          </p>
        </ContentSection>

        <ContentSection title="Tips for Playing Games on 4GB RAM">
          <ul className="list-disc space-y-2 pl-5">
            <li>Start at 720p resolution before lowering every other setting.</li>
            <li>Turn shadows, anti-aliasing, bloom, and motion blur to low or off.</li>
            <li>Close browsers, launchers, overlays, and screen recorders first.</li>
            <li>Choose offline indie games when you want smoother performance.</li>
            <li>Use the main finder to compare free, paid, online, and offline games.</li>
          </ul>
        </ContentSection>

        <InternalToolLinks
          includeDefaultLinks={false}
          links={relatedLinks}
          title="Explore more low-end game pages"
        />
      </section>
    </main>
  );
}
