import type { Metadata } from "next";
import { LowEndGameSeoPage } from "@/components/LowEndGameSeoPage";
import { lowEndPcGames } from "@/lib/lowEndPcGames";

export const metadata: Metadata = {
  title: "Games Under 1GB for Low-End PCs (2026)",
  description:
    "Find lightweight PC games under 1GB style picks for old laptops, weak PCs, 2GB RAM, and integrated graphics.",
  alternates: { canonical: "https://bentools.site/games-under-1gb" }
};

const games = lowEndPcGames.filter(
  (game) =>
    game.minRam === "2GB" &&
    game.gpu === "Integrated Graphics" &&
    (game.genre === "Indie" || game.genre === "Strategy" || game.genre === "RPG")
);

export default function GamesUnder1GbPage() {
  return (
    <LowEndGameSeoPage
      angle="games under 1GB style picks"
      eyebrow="Lightweight PC games"
      faq={[
        {
          question: "Are these games guaranteed to be under 1GB?",
          answer:
            "Install sizes can change after updates, so treat this as a lightweight shortlist and always check the store page before downloading."
        },
        {
          question: "Are small games better for low-end PCs?",
          answer:
            "Often yes. Smaller 2D and indie games usually need less storage, memory, and graphics power than modern 3D games."
        }
      ]}
      games={games}
      h1="Games Under 1GB for Low-End PCs"
      intro="Browse lightweight PC games that are good starting points when storage, RAM, and graphics power are limited. These picks favor small, simple, and low-spec friendly games for old laptops."
      tips={[
        "Check the current install size before downloading.",
        "Prefer 2D games and older classics when storage is tight.",
        "Avoid HD texture packs and large mods on old laptops.",
        "Sort the main finder by Small size for more lightweight picks."
      ]}
    />
  );
}
