"use client";

import { useMemo, useState } from "react";

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <button
      className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:border-blue-300 hover:text-blue-700"
      onClick={copy}
      type="button"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

function ToolShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-soft sm:p-6">
      {children}
    </div>
  );
}

const fontMaps = [
  { name: "Bold", a: 0x1d5ee, A: 0x1d5d4, zero: 0x1d7ec },
  { name: "Italic", a: 0x1d622, A: 0x1d608 },
  { name: "Serif Bold", a: 0x1d41a, A: 0x1d400, zero: 0x1d7ce },
  { name: "Script", a: 0x1d4b6, A: 0x1d49c },
  { name: "Fraktur", a: 0x1d51e, A: 0x1d504 },
  { name: "Double Struck", a: 0x1d552, A: 0x1d538, zero: 0x1d7d8 },
  { name: "Monospace", a: 0x1d68a, A: 0x1d670, zero: 0x1d7f6 }
];

function fancyText(text: string, map: (typeof fontMaps)[number]) {
  return Array.from(text)
    .map((char) => {
      const code = char.codePointAt(0) ?? 0;
      if (code >= 65 && code <= 90 && map.A) {
        return String.fromCodePoint(map.A + code - 65);
      }
      if (code >= 97 && code <= 122 && map.a) {
        return String.fromCodePoint(map.a + code - 97);
      }
      if (code >= 48 && code <= 57 && map.zero) {
        return String.fromCodePoint(map.zero + code - 48);
      }
      return char;
    })
    .join("");
}

export function FontGenerator() {
  const [text, setText] = useState("BenTools Roblox");
  const styles = useMemo(() => {
    const base = text.trim() || "BenTools Roblox";
    return [
      ...fontMaps.map((map) => ({ label: map.name, value: fancyText(base, map) })),
      { label: "Spaced", value: Array.from(base).join(" ") },
      { label: "Stars", value: `✦ ${base} ✦` },
      { label: "Hearts", value: `♡ ${base} ♡` },
      { label: "Soft", value: `꒰ ${base} ꒱` },
      { label: "Aesthetic", value: `・${base}・` },
      { label: "Bracket", value: `【 ${base} 】` },
      { label: "Wave", value: `～ ${base} ～` },
      { label: "Sparkle", value: `✧･ﾟ ${base} ﾟ･✧` }
    ];
  }, [text]);

  return (
    <ToolShell>
      <label className="block text-sm font-bold text-slate-800" htmlFor="font-text">
        Enter text
      </label>
      <input
        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-4 text-lg font-semibold text-slate-950 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        id="font-text"
        onChange={(event) => setText(event.target.value)}
        value={text}
      />
      <div className="mt-6 grid gap-3">
        {styles.map((style) => (
          <div
            className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between"
            key={style.label}
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
                {style.label}
              </p>
              <p className="mt-1 break-all text-lg font-bold text-slate-950">
                {style.value}
              </p>
            </div>
            <CopyButton value={style.value} />
          </div>
        ))}
      </div>
    </ToolShell>
  );
}

const symbolCategories = {
  Hearts: "♡ ♥ ❥ ❣ ღ ❤ ❦ ❧ ❀ ❁ ❃ ❋ ❊ ❈ ❉ 💜 💙 💛 💚 🖤 🤍".split(" "),
  Stars: "★ ☆ ✦ ✧ ✩ ✪ ✫ ✬ ✭ ✮ ✯ ✰ ⁂ ✨ ☄ ☾ ☽ ☼ ❂ ❇".split(" "),
  Arrows: "→ ← ↑ ↓ ↔ ↕ ⇢ ⇠ ⇡ ⇣ ➜ ➤ ➣ ➳ ➵ ➸ ➺ ➻ ➼ ➽".split(" "),
  Aesthetic: "・ ｡ ﾟ ･ ꒰ ꒱ 【 】 『 』 ︵ ︶ ୨ ୧ ⌁ ⊹ ♡ ✧ ⋆ ˚".split(" "),
  Gaming: "⚔ 🛡 ⚡ 🔥 🎮 🕹 🏆 🎯 💎 👑 ✪ ✦ ✧ ★ ☆ ⛧ ☠ ⚙".split(" ")
};

export function SymbolsCopy() {
  const [copied, setCopied] = useState<string | null>(null);

  async function copy(symbol: string) {
    await navigator.clipboard.writeText(symbol);
    setCopied(symbol);
    window.setTimeout(() => setCopied(null), 1000);
  }

  return (
    <ToolShell>
      <div className="space-y-6">
        {Object.entries(symbolCategories).map(([category, symbols]) => (
          <section key={category}>
            <h2 className="text-xl font-bold text-slate-950">{category}</h2>
            <div className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-8 md:grid-cols-10">
              {symbols.map((symbol) => (
                <button
                  className="min-h-12 rounded-lg border border-slate-200 bg-slate-50 text-xl font-bold text-slate-950 hover:border-blue-300 hover:bg-white"
                  key={`${category}-${symbol}`}
                  onClick={() => copy(symbol)}
                  type="button"
                >
                  {copied === symbol ? "✓" : symbol}
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
    </ToolShell>
  );
}

type Style = "Cute" | "Aesthetic" | "Cool" | "Anime";

const displayWords: Record<Style, string[]> = {
  Cute: ["Mochi", "Bunny", "Peachy", "Boba", "Honey", "Puffy", "Cupcake"],
  Aesthetic: ["Lunar", "Velvet", "Misty", "Cloudy", "Dream", "Aura", "Muse"],
  Cool: ["Nova", "Vortex", "Blaze", "Frost", "Shadow", "Apex", "Rift"],
  Anime: ["Neko", "Kira", "Akira", "Kitsune", "Haru", "Yumi", "Senpai"]
};

function generateNames(style: Style, count: number, seed: number) {
  const words = displayWords[style];
  const suffixes = ["Star", "Mode", "Wave", "Vibe", "Quest", "Spark", "Arc"];
  return Array.from({ length: count }, (_, index) => {
    const offset = seed + index;
    return `${words[offset % words.length]}${suffixes[(offset + 2) % suffixes.length]}`;
  });
}

export function DisplayNameGenerator() {
  const [style, setStyle] = useState<Style>("Cute");
  const [seed, setSeed] = useState(0);
  const names = useMemo(() => generateNames(style, 20, seed), [style, seed]);

  return (
    <ToolShell>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SelectStyle value={style} onChange={setStyle} />
        <ActionButton onClick={() => setSeed((value) => value + 1)}>
          Generate 20 display names
        </ActionButton>
      </div>
      <CopyGrid items={names} />
    </ToolShell>
  );
}

function SelectStyle({
  value,
  onChange
}: {
  value: Style;
  onChange: (value: Style) => void;
}) {
  return (
    <div className="w-full sm:max-w-xs">
      <label className="block text-sm font-bold text-slate-800" htmlFor="style">
        Style
      </label>
      <select
        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-4 text-base font-semibold text-slate-950 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        id="style"
        onChange={(event) => onChange(event.target.value as Style)}
        value={value}
      >
        {(["Cute", "Aesthetic", "Cool", "Anime"] as Style[]).map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

function ActionButton({
  children,
  onClick
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      className="rounded-lg bg-blue-700 px-5 py-4 text-base font-bold text-white transition hover:bg-blue-800"
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

function CopyGrid({ items }: { items: string[] }) {
  return (
    <div className="mt-6 grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <div
          className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 sm:flex-row sm:items-center sm:justify-between"
          key={item}
        >
          <span className="break-all text-base font-bold text-slate-950">
            {item}
          </span>
          <CopyButton value={item} />
        </div>
      ))}
    </div>
  );
}

const girlNames = [
  "MochiBunny", "PeachyBloom", "KawaiiLuna", "BobaAngel", "HoneyCloud",
  "VelvetMimi", "CherryAura", "PastelYumi", "SoftCupcake", "LunarBabe",
  "PinkNova", "MistyKitten", "DreamyMochi", "BunnySpark", "SugarLily",
  "CozyKira", "CloudyNeko", "RosyPixel", "TwinkleBoba", "SweetMika",
  "FlowerMode", "PeachMoon", "BobaPrincess", "AuraDoll", "KawaiiQuest",
  "MochiMuse", "HoneyStar", "RibbonNova", "LilyVibe", "SoftYumi"
];

const boyNames = [
  "BlazeRider", "FrostKnight", "NovaClutch", "ShadowQuest", "VortexKing",
  "ApexStorm", "RocketDash", "RiftHunter", "PixelBoss", "IronWave",
  "CoolPhantom", "StormMode", "ClutchHero", "DarkRunner", "TurboNova",
  "AceVortex", "PowerFrost", "QuestRanger", "BlazePixel", "NoScopeRift",
  "MaxStorm", "GhostApex", "FireClutch", "VibeKnight", "RocketKing",
  "DashLegend", "FrostRider", "IronNova", "PixelRanger", "ShadowBoss"
];

export function FixedUsernameList({ type }: { type: "girls" | "boys" }) {
  return <ToolShell><CopyGrid items={type === "girls" ? girlNames : boyNames} /></ToolShell>;
}

const bioIdeas = [
  "just a soft soul in a pixel world", "boba lover | cozy gamer", "lost in dreams, found in pixels",
  "chasing stars and small wins", "main character energy loading", "quiet player, loud dreams",
  "respawn, retry, win", "soft heart, strong avatar", "pixel skies and calm vibes",
  "living in my own Roblox arc", "dream big, play kind", "made of coffee and quests",
  "cute fit, chill mood", "one more round", "collecting memories in every lobby",
  "low drama, high vibes", "building my little world", "sparkle mode activated",
  "casual player, cozy heart", "adventure starts here", "do not disturb, gaming",
  "anime arc in progress", "soft days and warm tea", "cloudy mood, bright wins",
  "here for fun and friends", "leveling up slowly", "tiny avatar, big dreams",
  "kind words only", "pixel dreamer", "playing my own way", "good vibes in every server",
  "cute but competitive", "midnight mood", "stars, quests, and cozy fits",
  "just exploring", "new game, same me", "Roblox is my comfort zone",
  "grinding with style", "peaceful player", "pastel pixels", "dark fit, soft heart",
  "friends, games, memories", "quiet mind, gamer soul", "made for side quests",
  "smiles and speedruns", "creative mode always", "no rush, just vibes",
  "avatar under construction", "soft profile energy", "see you in game"
];

export function BioIdeasList() {
  return <ToolShell><CopyGrid items={bioIdeas} /></ToolShell>;
}

export function UsernameCombiner() {
  const [first, setFirst] = useState("Pixel");
  const [second, setSecond] = useState("Nova");
  const ideas = useMemo(() => {
    const a = cleanWord(first) || "Pixel";
    const b = cleanWord(second) || "Nova";
    return [
      `${a}${b}`, `${b}${a}`, `${a}_${b}`, `${a}${b}X`, `${b}${a}7`,
      `${a}Mode`, `${b}Quest`, `${a}${b}Wave`, `${a}By${b}`, `${b}With${a}`,
      `${a}${b}Star`, `${a}And${b}`
    ].filter((item) => item.length <= 20);
  }, [first, second]);

  return (
    <ToolShell>
      <div className="grid gap-4 sm:grid-cols-2">
        <WordInput id="first-word" label="First word" value={first} onChange={setFirst} />
        <WordInput id="second-word" label="Second word" value={second} onChange={setSecond} />
      </div>
      <CopyGrid items={ideas} />
    </ToolShell>
  );
}

function cleanWord(value: string) {
  return value.replace(/[^A-Za-z0-9]/g, "").slice(0, 10);
}

function WordInput({
  id,
  label,
  value,
  onChange
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-bold text-slate-800" htmlFor={id}>
        {label}
      </label>
      <input
        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-4 text-lg font-semibold text-slate-950 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        id={id}
        onChange={(event) => onChange(event.target.value)}
        value={value}
      />
    </div>
  );
}

export function GroupNameGenerator() {
  const [seed, setSeed] = useState(0);
  const names = useMemo(() => {
    const prefixes = ["Pixel", "Nova", "Royal", "Shadow", "Boba", "Vibe", "Quest", "Lunar", "Apex", "Cozy"];
    const suffixes = ["Crew", "Club", "Squad", "Society", "Legends", "Hub", "Guild", "Collective", "Nation", "Studio"];
    return Array.from({ length: 20 }, (_, index) => `${prefixes[(seed + index) % prefixes.length]} ${suffixes[(seed + index + 3) % suffixes.length]}`);
  }, [seed]);
  return <ToolShell><ActionButton onClick={() => setSeed((value) => value + 1)}>Generate 20 group names</ActionButton><CopyGrid items={names} /></ToolShell>;
}

export function OutfitIdeasGenerator() {
  const [seed, setSeed] = useState(0);
  const ideas = useMemo(() => {
    const moods = ["Cute pastel", "Dark streetwear", "Anime school", "Rich casual", "Soft cozy", "Cyber gamer", "Royal purple", "Cloudy aesthetic"];
    const pieces = ["hoodie with bunny ears", "black coat with silver chains", "uniform with anime hair", "blazer with gold shades", "sweater with white boots", "jacket with headphones", "cape with crown", "denim fit with soft accessories"];
    return Array.from({ length: 15 }, (_, index) => `${moods[(seed + index) % moods.length]} outfit with ${pieces[(seed + index + 2) % pieces.length]}`);
  }, [seed]);
  return <ToolShell><ActionButton onClick={() => setSeed((value) => value + 1)}>Generate 15 outfit ideas</ActionButton><CopyGrid items={ideas} /></ToolShell>;
}
