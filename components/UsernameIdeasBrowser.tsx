"use client";

import { useMemo, useState } from "react";

type IdeaStyle = "Cute" | "Cool" | "Dark" | "Anime";

const styles: IdeaStyle[] = ["Cute", "Cool", "Dark", "Anime"];

const wordBanks: Record<IdeaStyle, string[]> = {
  Cute: [
    "Mochi",
    "Bunny",
    "Peachy",
    "Boba",
    "Puffy",
    "Honey",
    "Kawaii",
    "Sprout",
    "Cupcake",
    "Twinkle"
  ],
  Cool: [
    "Nova",
    "Blaze",
    "Vortex",
    "Frost",
    "Rift",
    "Storm",
    "Echo",
    "Dash",
    "Apex",
    "Rocket"
  ],
  Dark: [
    "Void",
    "Raven",
    "Phantom",
    "Eclipse",
    "Dusk",
    "Noir",
    "Ghost",
    "Shade",
    "Midnight",
    "Hollow"
  ],
  Anime: [
    "Neko",
    "Kira",
    "Akira",
    "Kitsune",
    "Haru",
    "Yumi",
    "Senpai",
    "Ramen",
    "Shonen",
    "Mika"
  ]
};

const modifiers = [
  "Star",
  "Byte",
  "Wave",
  "Quest",
  "Mode",
  "Cloud",
  "Pulse",
  "Spark",
  "Arc",
  "Bloom"
];

function isValidUsernameIdea(username: string): boolean {
  const underscores = username.match(/_/g)?.length ?? 0;
  return (
    username.length >= 3 &&
    username.length <= 20 &&
    /^[A-Za-z0-9_]+$/.test(username) &&
    underscores <= 1 &&
    !username.startsWith("_") &&
    !username.endsWith("_")
  );
}

function generateIdeas(style: IdeaStyle, seed: number): string[] {
  const words = wordBanks[style];
  const results = new Set<string>();
  let index = seed * 11;

  while (results.size < 20) {
    const word = words[index % words.length];
    const nextWord = words[(index + 3) % words.length];
    const modifier = modifiers[(index + 5) % modifiers.length];
    const number = String(((index + 21) * 9) % 900 + 100);
    const candidates = [
      `${word}${modifier}`,
      `${word}${number}`,
      `${word}_${nextWord}`,
      `${modifier}${word}`
    ];

    for (const candidate of candidates) {
      if (isValidUsernameIdea(candidate)) {
        results.add(candidate);
      }

      if (results.size === 20) {
        break;
      }
    }

    index += 1;
  }

  return Array.from(results);
}

export function UsernameIdeasBrowser() {
  const [style, setStyle] = useState<IdeaStyle>("Cute");
  const [seed, setSeed] = useState(0);
  const [copied, setCopied] = useState<string | null>(null);
  const ideas = useMemo(() => generateIdeas(style, seed), [seed, style]);

  async function copyIdea(username: string) {
    await navigator.clipboard.writeText(username);
    setCopied(username);
    window.setTimeout(() => setCopied(null), 1600);
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-soft sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="w-full sm:max-w-xs">
          <label className="block text-sm font-bold text-slate-800" htmlFor="idea-style">
            Style
          </label>
          <select
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-4 text-base font-semibold text-slate-950 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            id="idea-style"
            onChange={(event) => setStyle(event.target.value as IdeaStyle)}
            value={style}
          >
            {styles.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <button
          className="rounded-lg bg-blue-700 px-5 py-4 text-base font-bold text-white transition hover:bg-blue-800"
          onClick={() => setSeed((value) => value + 1)}
          type="button"
        >
          Generate 20 usernames
        </button>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {ideas.map((idea) => (
          <div
            className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 sm:flex-row sm:items-center sm:justify-between"
            key={idea}
          >
            <span className="break-all text-base font-bold text-slate-950">
              {idea}
            </span>
            <button
              className="shrink-0 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:border-blue-300 hover:text-blue-700"
              onClick={() => copyIdea(idea)}
              type="button"
            >
              {copied === idea ? "Copied!" : "Copy"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
