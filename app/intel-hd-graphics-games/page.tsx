import type { Metadata } from "next";
import { LowEndGameSeoPage } from "@/components/LowEndGameSeoPage";
import { lowEndPcGames } from "@/lib/lowEndPcGames";

export const metadata: Metadata = {
  title: "Intel HD Graphics Games (2026) - Low-End PC Picks",
  description:
    "Find games for Intel HD graphics, integrated graphics laptops, weak PCs, and low-end computers.",
  alternates: { canonical: "https://bentools.site/intel-hd-graphics-games" }
};

export default function IntelHdGraphicsGamesPage() {
  return (
    <LowEndGameSeoPage
      angle="Intel HD graphics games"
      eyebrow="Integrated graphics games"
      faq={[
        {
          question: "Can Intel HD graphics run games?",
          answer:
            "Yes. Intel HD graphics can run many older games, 2D indie games, strategy games, and low-spec titles."
        },
        {
          question: "What settings should I use for Intel HD?",
          answer:
            "Start at 720p, lower shadows, turn off anti-aliasing, and close background apps."
        }
      ]}
      games={lowEndPcGames.filter(
        (game) => game.gpu === "Integrated Graphics" || game.gpu === "Intel HD"
      )}
      h1="Intel HD Graphics Games"
      intro="Find PC games that can work on Intel HD graphics, integrated graphics laptops, and old computers without a modern dedicated GPU."
      tips={[
        "Use 720p resolution for smoother FPS.",
        "Turn shadows and post-processing off first.",
        "Prefer 2D and older engine games.",
        "Avoid high-resolution texture packs."
      ]}
    />
  );
}
