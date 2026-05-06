import type { Metadata } from "next";
import { LowEndGameSeoPage } from "@/components/LowEndGameSeoPage";
import { lowEndPcGames } from "@/lib/lowEndPcGames";

export const metadata: Metadata = {
  title: "Best Indie Games for Low-End PC (2026)",
  description:
    "Find the best indie games for low-end PCs, old laptops, integrated graphics, and 2GB or 4GB RAM computers.",
  alternates: { canonical: "https://bentools.site/best-indie-games-for-low-end-pc" }
};

export default function BestIndieGamesForLowEndPcPage() {
  return (
    <LowEndGameSeoPage
      angle="indie games for low-end PC"
      eyebrow="Best indie low-spec games"
      faq={[
        {
          question: "Are indie games better for weak PCs?",
          answer:
            "Many indie games are better for weak PCs because they often use 2D art, smaller worlds, and flexible settings."
        },
        {
          question: "Can indie games run on 2GB RAM?",
          answer:
            "Some indie games can run on 2GB RAM, especially older 2D games and lightweight RPGs."
        }
      ]}
      games={lowEndPcGames.filter((game) => game.genre === "Indie")}
      h1="Best Indie Games for Low-End PC"
      intro="Find indie games that are friendly to low-end PCs, old laptops, integrated graphics, and 2GB or 4GB RAM systems."
      tips={[
        "Start with 2D indie games if your laptop is old.",
        "Check install size before downloading.",
        "Avoid heavy mods on low RAM machines.",
        "Use Small size sorting in the main finder for more picks."
      ]}
    />
  );
}
