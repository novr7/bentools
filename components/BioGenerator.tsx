"use client";

import { useMemo, useState } from "react";

type BioStyle = "Cute" | "Aesthetic" | "Dark" | "Anime" | "Soft" | "Gamer";

const styles: BioStyle[] = [
  "Cute",
  "Aesthetic",
  "Dark",
  "Anime",
  "Soft",
  "Gamer"
];

const bioBanks: Record<BioStyle, string[]> = {
  Cute: [
    "🌸 just a soft soul in a pixel world 🐰",
    "🧸 boba lover | dreamer | cozy vibes",
    "🍓 tiny heart, big pixel dreams",
    "🐰 collecting smiles & sunny moments",
    "💗 sweet days, soft plays, happy stays",
    "🫧 floating through Roblox with cute energy",
    "🌷 soft mood | kind heart | pastel wins",
    "🍡 cozy player with a sparkle mood",
    "🐾 little adventures, lovely memories",
    "🎀 powered by boba and good vibes"
  ],
  Aesthetic: [
    "✨ lost in dreams, found in pixels ☁️",
    "🌙 chasing stars & soft moments",
    "☁️ pixel skies and quiet magic",
    "🪐 moonlit thoughts, digital worlds",
    "🕯️ soft glow | calm mind | bright path",
    "🌫️ drifting where the pixels feel peaceful",
    "💫 making tiny memories in big worlds",
    "🌌 starlight mood, dreamer mode",
    "🦋 gentle chaos in a pretty universe",
    "🌿 calm days, clean fits, soft wins"
  ],
  Dark: [
    "🖤 walking through shadows alone",
    "🌑 silence speaks louder than words",
    "🕯️ quiet steps in midnight worlds",
    "⚔️ calm mind, dark aura, sharp focus",
    "🌘 moonless mood | steady soul",
    "🦇 shadows follow, victories stay",
    "🖤 low light, high focus",
    "🌑 built from silence and patience",
    "🕸️ drifting through the darker pixels",
    "⚫ quiet player with a midnight style"
  ],
  Anime: [
    "🍥 senpai noticed me... maybe?",
    "🗡️ living in my own anime arc",
    "🌸 main character energy loading",
    "🍜 ramen break before the next quest",
    "⚔️ soft heart, shonen spirit",
    "✨ training arc in progress",
    "🦊 kitsune mood | pixel journey",
    "🎴 side quest today, legend tomorrow",
    "🌙 anime dreams in Roblox scenes",
    "🍡 cozy arc with chaotic friends"
  ],
  Soft: [
    "☁️ gentle heart, quiet mind",
    "🌸 slow days & warm tea",
    "🫧 soft steps through pixel places",
    "🍵 calm vibes, kind words, cozy worlds",
    "🌷 quiet player with a warm glow",
    "🧺 soft mood | peaceful games",
    "☁️ taking it slow, making it sweet",
    "🕊️ gentle energy in every lobby",
    "🌼 small joys and softer skies",
    "🧸 cozy heart, calm adventure"
  ],
  Gamer: [
    "🎮 respawn > retry > win",
    "🔥 grinding till I glow",
    "⚡ queue up, lock in, level up",
    "🏆 small steps, big wins",
    "🎯 focus mode | clutch ready",
    "🕹️ pixels, quests, clean plays",
    "💥 retry today, victory soon",
    "🚀 leveling up one game at a time",
    "🎮 just one more round",
    "🔥 built for quests and clutch moments"
  ]
};

function rotateBios(style: BioStyle, seed: number): string[] {
  const bios = bioBanks[style];
  const offset = seed % bios.length;
  return [...bios.slice(offset), ...bios.slice(0, offset)].slice(0, 10);
}

export function BioGenerator() {
  const [style, setStyle] = useState<BioStyle>("Aesthetic");
  const [seed, setSeed] = useState(0);
  const [copied, setCopied] = useState<string | null>(null);
  const bios = useMemo(() => rotateBios(style, seed), [seed, style]);

  async function copyBio(bio: string) {
    await navigator.clipboard.writeText(bio);
    setCopied(bio);
    window.setTimeout(() => setCopied(null), 1600);
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-soft sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="w-full sm:max-w-xs">
          <label className="block text-sm font-bold text-slate-800" htmlFor="bio-style">
            Style
          </label>
          <select
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-4 text-base font-semibold text-slate-950 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            id="bio-style"
            onChange={(event) => setStyle(event.target.value as BioStyle)}
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
          Generate 10 bios
        </button>
      </div>

      <div className="mt-6 grid gap-3">
        {bios.map((bio) => (
          <div
            className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between"
            key={bio}
          >
            <p className="text-base font-semibold leading-7 text-slate-950">
              {bio}
            </p>
            <button
              className="shrink-0 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:border-blue-300 hover:text-blue-700"
              onClick={() => copyBio(bio)}
              type="button"
            >
              {copied === bio ? "Copied!" : "Copy"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
