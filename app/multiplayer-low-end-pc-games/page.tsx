import type { Metadata } from "next";
import { LowEndGameSeoPage } from "@/components/LowEndGameSeoPage";
import { lowEndPcGames } from "@/lib/lowEndPcGames";

export const metadata: Metadata = {
  title: "Multiplayer Low-End PC Games (2026)",
  description:
    "Find multiplayer low-end PC games for old laptops, weak PCs, Intel HD graphics, and 4GB RAM systems.",
  alternates: { canonical: "https://bentools.site/multiplayer-low-end-pc-games" }
};

export default function MultiplayerLowEndPcGamesPage() {
  return (
    <LowEndGameSeoPage
      angle="multiplayer low-end PC games"
      eyebrow="Online low-spec games"
      faq={[
        {
          question: "Can low-end PCs play multiplayer games?",
          answer:
            "Yes. Many older online games and lightweight multiplayer games support weak PCs, but connection quality also matters."
        },
        {
          question: "Should I close apps before multiplayer games?",
          answer:
            "Yes. Closing browsers, overlays, and recording tools can improve FPS and reduce stutter."
        }
      ]}
      games={lowEndPcGames.filter((game) => game.mode === "Online")}
      h1="Multiplayer Low-End PC Games"
      intro="Browse online and multiplayer games that are more realistic for old laptops, 4GB RAM PCs, Intel HD graphics, and weak computers."
      tips={[
        "Use wired internet or stable Wi-Fi when possible.",
        "Lower effects and shadows before joining competitive matches.",
        "Avoid running voice chat on the same weak PC if performance drops.",
        "Pick older online games when you need smoother frame rates."
      ]}
    />
  );
}
