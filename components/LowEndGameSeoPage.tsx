import { FAQ } from "@/components/FAQ";
import { ContentSection, InternalToolLinks } from "@/components/SeoContent";
import type { LowEndPcGame } from "@/lib/lowEndPcGames";

type LowEndGameSeoPageProps = {
  eyebrow: string;
  h1: string;
  intro: string;
  games: LowEndPcGame[];
  angle: string;
  tips: string[];
  faq: Array<{ question: string; answer: string }>;
};

const sharedLinks = [
  {
    href: "/low-end-pc-game-finder",
    title: "Explore the Low-End PC Game Finder",
    description: "Filter 300+ low end PC games by RAM, GPU, genre, price, and mode."
  },
  {
    href: "/games-for-2gb-ram",
    title: "Explore low end PC games for 2GB RAM",
    description: "Find extra-light games for very old laptops and weak PCs."
  },
  {
    href: "/games-for-4gb-ram",
    title: "Explore more low end PC games for 4GB RAM",
    description: "Browse smoother games for 4GB RAM PCs and Intel HD laptops."
  },
  {
    href: "/no-gpu-games",
    title: "Explore no GPU games for integrated graphics PCs",
    description: "Find games that can work without a dedicated graphics card."
  }
];

export function LowEndGameSeoPage({
  eyebrow,
  h1,
  intro,
  games,
  angle,
  tips,
  faq
}: LowEndGameSeoPageProps) {
  const visibleGames = games.slice(0, 24);

  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:py-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-normal text-slate-950">
            {h1}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            {intro}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-8">
        <ContentSection title={`Best ${angle}`}>
          <p>
            This page is built as a practical shortlist for players who want
            low end PC games without wasting time on titles that are too heavy.
            The recommendations focus on games that are more likely to work on
            weak computers, old laptops, Intel HD graphics, and 2GB or 4GB RAM
            systems. Instead of only listing names, each card includes the
            genre, RAM target, GPU target, price, mode, and a short note so you
            can compare options quickly.
          </p>
          <p>
            Use this list as a starting point, then open the main Low-End PC
            Game Finder when you want to filter more deeply. If your PC is
            very old, start with the safest games first, lower resolution, and
            close background apps before testing. If your machine has 4GB RAM
            or Intel HD graphics, you can try more games, but low settings are
            still the best first move.
          </p>
          <p>
            A useful low-end game page should help you build a shortlist, not
            just show a pile of names. Compare the cards by RAM, GPU, price,
            and play mode, then pick three or four games that match your
            setup. Free games are good for testing performance quickly, while
            offline paid games are often better for stable play on old laptops.
            If a title looks close to your hardware limit, check the official
            store requirements and try the lowest graphics preset first.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {visibleGames.map((game) => (
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

        <ContentSection title={`How to choose ${angle.toLowerCase()}`}>
          <p>
            Start by matching the game to the weakest part of your computer. A
            PC with very little RAM should favor smaller 2D games, older PC
            classics, card games, and turn-based titles. A computer with no
            dedicated graphics card should favor integrated graphics games,
            pixel art, and games with simple effects. If your PC has both low
            RAM and weak graphics, choose offline games first because they tend
            to be more predictable.
          </p>
          <p>
            The best low-end gaming experience usually comes from testing a
            few realistic games instead of forcing one demanding game to run.
            Build a shortlist, check official requirements, and try lower
            graphics settings before giving up. A game that looks simple can
            still be deep, replayable, and fun for many hours.
          </p>
        </ContentSection>

        <ContentSection title="Tips">
          <ul className="list-disc space-y-2 pl-5">
            {tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </ContentSection>

        <FAQ items={faq} />
        <InternalToolLinks
          includeDefaultLinks={false}
          links={sharedLinks}
          title="Explore more low-end PC game guides"
        />
      </section>
    </main>
  );
}
