"use client";

import { useMemo, useState } from "react";

type AvatarStyle = "Cute" | "Dark" | "Anime" | "Rich" | "Casual";

const styles: AvatarStyle[] = ["Cute", "Dark", "Anime", "Rich", "Casual"];

const styleParts: Record<
  AvatarStyle,
  {
    moods: string[];
    outfits: string[];
    accessories: string[];
    shoes: string[];
  }
> = {
  Cute: {
    moods: ["Soft pastel", "Cozy pink", "Boba-themed", "Sweet cloud", "Kawaii"],
    outfits: ["outfit", "hoodie fit", "skirt look", "sweater combo", "cozy set"],
    accessories: ["bunny hat", "heart glasses", "bear backpack", "flower clips", "ribbon hair"],
    shoes: ["white boots", "pink sneakers", "platform shoes", "soft slippers", "cream boots"]
  },
  Dark: {
    moods: ["Midnight", "Shadow", "Black and silver", "Gothic", "Moonlit"],
    outfits: ["layered outfit", "hoodie look", "streetwear fit", "cloak combo", "combat set"],
    accessories: ["spiked mask", "chain necklace", "dark wings", "raven hat", "silver horns"],
    shoes: ["combat boots", "black sneakers", "platform boots", "dark runners", "metallic boots"]
  },
  Anime: {
    moods: ["Main character", "Shonen", "Magical academy", "Kitsune", "Cyber anime"],
    outfits: ["uniform outfit", "battle fit", "school look", "hero jacket", "adventure set"],
    accessories: ["katana accessory", "fox ears", "round glasses", "anime hair", "cape scarf"],
    shoes: ["high-top sneakers", "academy boots", "runner shoes", "white trainers", "combat boots"]
  },
  Rich: {
    moods: ["Luxury", "Gold-trimmed", "VIP", "Designer-inspired", "Royal"],
    outfits: ["blazer outfit", "clean suit", "fur coat look", "premium streetwear", "formal set"],
    accessories: ["gold shades", "crown", "diamond chain", "luxury watch", "sleek handbag"],
    shoes: ["polished loafers", "white designer shoes", "gold sneakers", "black dress shoes", "clean boots"]
  },
  Casual: {
    moods: ["Everyday", "Relaxed", "Skater", "Clean neutral", "Weekend"],
    outfits: ["hoodie outfit", "jeans combo", "t-shirt fit", "oversized sweater", "denim look"],
    accessories: ["baseball cap", "simple backpack", "wire headphones", "beanie", "small glasses"],
    shoes: ["canvas sneakers", "running shoes", "white sneakers", "casual boots", "slip-on shoes"]
  }
};

function generateIdeas(style: AvatarStyle, seed: number): string[] {
  const parts = styleParts[style];

  return Array.from({ length: 10 }, (_, index) => {
    const offset = seed + index;
    const mood = parts.moods[offset % parts.moods.length];
    const outfit = parts.outfits[(offset + 1) % parts.outfits.length];
    const accessory = parts.accessories[(offset + 2) % parts.accessories.length];
    const shoes = parts.shoes[(offset + 3) % parts.shoes.length];

    return `${mood} ${outfit} with ${accessory} and ${shoes}`;
  });
}

export function AvatarIdeaGenerator() {
  const [style, setStyle] = useState<AvatarStyle>("Cute");
  const [seed, setSeed] = useState(0);
  const ideas = useMemo(() => generateIdeas(style, seed), [seed, style]);

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-soft sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="w-full sm:max-w-xs">
          <label className="block text-sm font-bold text-slate-800" htmlFor="avatar-style">
            Style
          </label>
          <select
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-4 text-base font-semibold text-slate-950 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            id="avatar-style"
            onChange={(event) => setStyle(event.target.value as AvatarStyle)}
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
          onClick={() => setSeed((value) => value + 3)}
          type="button"
        >
          Generate 10 ideas
        </button>
      </div>

      <div className="mt-6 grid gap-3">
        {ideas.map((idea) => (
          <div
            className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-base font-semibold leading-7 text-slate-950"
            key={idea}
          >
            {idea}
          </div>
        ))}
      </div>
    </div>
  );
}
