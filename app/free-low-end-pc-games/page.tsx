import type { Metadata } from "next";
import { LowEndGameSeoPage } from "@/components/LowEndGameSeoPage";
import { lowEndPcGames } from "@/lib/lowEndPcGames";

export const metadata: Metadata = {
  title: "Free Low-End PC Games (2026) - Lightweight Free Games",
  description:
    "Find free low-end PC games for weak computers, old laptops, Intel HD graphics, and 2GB or 4GB RAM PCs.",
  alternates: { canonical: "https://bentools.site/free-low-end-pc-games" }
};

export default function FreeLowEndPcGamesPage() {
  return (
    <LowEndGameSeoPage
      angle="free low-end PC games"
      eyebrow="Free lightweight games"
      faq={[
        {
          question: "Are free low-end PC games included in the finder?",
          answer:
            "Yes. Use the Free filter to show free low-end games that are easier to test before spending money."
        },
        {
          question: "Can free games run on weak PCs?",
          answer:
            "Many free games can run on weak PCs, especially older online games, 2D games, and simple indie games."
        }
      ]}
      games={lowEndPcGames.filter((game) => game.price === "Free")}
      h1="Free Low-End PC Games"
      intro="Find free games that can run on low-end laptops, weak PCs, integrated graphics, and older computers. These picks are useful when you want to test performance before buying anything."
      tips={[
        "Use official stores and launchers only.",
        "Close overlays and chat apps before playing online games.",
        "Try low resolution first if frame rate is unstable.",
        "Use the Free filter in the main finder for more options."
      ]}
    />
  );
}
