import type { Metadata } from "next";
import { LowEndGameSeoPage } from "@/components/LowEndGameSeoPage";
import { lowEndPcGames } from "@/lib/lowEndPcGames";

export const metadata: Metadata = {
  title: "Low-End Horror Games (2026) - Scary Games for Weak PCs",
  description:
    "Find low-end horror games for old laptops, weak PCs, Intel HD graphics, and low RAM computers.",
  alternates: { canonical: "https://bentools.site/low-end-horror-games" }
};

export default function LowEndHorrorGamesPage() {
  return (
    <LowEndGameSeoPage
      angle="low-end horror games"
      eyebrow="Scary low-spec games"
      faq={[
        {
          question: "Can horror games run on low-end PCs?",
          answer:
            "Yes. Many 2D, older, and indie horror games can run on weak PCs with low settings."
        },
        {
          question: "Are offline horror games better for old laptops?",
          answer:
            "Often yes. Offline horror games avoid network overhead and are usually more predictable."
        }
      ]}
      games={lowEndPcGames.filter((game) => game.genre === "Horror")}
      h1="Low-End Horror Games"
      intro="Browse scary games that are more realistic for low-end laptops, weak PCs, Intel HD graphics, and older computers."
      tips={[
        "Lower shadows and lighting effects first.",
        "Choose older horror games for weak PCs.",
        "Use headphones instead of raising visual settings.",
        "Try offline horror games for stable performance."
      ]}
    />
  );
}
