import type { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { ContentSection, InternalToolLinks } from "@/components/SeoContent";
import { lowEndPcGames } from "@/lib/lowEndPcGames";

export const metadata: Metadata = {
  title: "No GPU Games - Games for Integrated Graphics PCs",
  description:
    "Find no GPU games for integrated graphics, Intel HD laptops, weak PCs, and low-end computers.",
  alternates: {
    canonical: "https://bentools.site/no-gpu-games"
  }
};

const games = lowEndPcGames
  .filter(
    (game) => game.gpu === "Integrated Graphics" || game.gpu === "Intel HD"
  )
  .slice(0, 20);

const relatedLinks = [
  {
    href: "/low-end-pc-game-finder",
    title: "Explore no GPU games in the Low End PC Game Finder",
    description: "Filter games by RAM, GPU, genre, price, and mode."
  },
  {
    href: "/games-for-2gb-ram",
    title: "Explore low end PC games for 2GB RAM",
    description: "Find games for older PCs with very limited memory."
  },
  {
    href: "/games-for-4gb-ram",
    title: "Explore more low end PC games for 4GB RAM",
    description: "Browse games for 4gb ram laptops and weak computers."
  }
];

export default function NoGpuGamesPage() {
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:py-12">
          <AdPlaceholder label="Top banner ad placeholder" />
          <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Ben Game Finder
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-normal text-slate-950">
            No GPU Games for Integrated Graphics PCs
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Find games for PCs with no graphics card, integrated graphics,
            Intel HD, and low-end laptop hardware.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-8">
        <ContentSection title="Best No GPU Games">
          <p>
            A PC with no dedicated graphics card can still play many low end pc
            games. In most cases, no GPU means your computer uses integrated
            graphics built into the processor, such as Intel HD, Intel UHD, or
            similar onboard graphics. These chips share memory with the rest of
            the system, so they perform best with lightweight games, older
            engines, 2D visuals, and simple scenes. Modern high-end 3D games
            are usually not a good target for this type of computer.
          </p>
          <p>
            The safest no GPU games are indie platformers, card games,
            point-and-click adventures, classic shooters, light strategy games,
            and offline titles that do not need constant background services.
            If you want games for low end pc setups without a graphics card,
            start with Integrated Graphics in the main finder, then narrow by
            RAM, genre, price, and mode. For many users, this is the fastest
            way to discover low spec pc games that actually match their
            hardware.
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

        <ContentSection title="How to Improve No GPU Game Performance">
          <p>
            Lower resolution first, then reduce shadows, lighting, effects,
            and anti-aliasing. Keep the laptop plugged in, choose a performance
            power mode, and close browsers before launching the game. Offline
            indie games often run better because they avoid extra network and
            launcher overhead. If a game offers windowed mode or a low-spec
            preset, test those settings before giving up.
          </p>
        </ContentSection>

        <ContentSection title="Tips for Playing Games Without a Dedicated GPU">
          <ul className="list-disc space-y-2 pl-5">
            <li>Choose Integrated Graphics in the finder if you do not know your GPU.</li>
            <li>Start with older PC games, 2D indie games, and turn-based games.</li>
            <li>Lower texture quality and shadows before changing advanced settings.</li>
            <li>Keep your laptop plugged in and use a performance power profile.</li>
            <li>Avoid browser tabs and overlays that share memory with integrated graphics.</li>
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
