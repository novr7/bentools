import fs from "node:fs/promises";

const targetAdditions = 200;

const sources = [
  { tag: 3964, genre: "Indie", minRam: "2GB", gpu: "Integrated Graphics", mode: "Offline" },
  { tag: 3871, genre: "Indie", minRam: "2GB", gpu: "Integrated Graphics", mode: "Offline" },
  { tag: 492, genre: "Indie", minRam: "2GB", gpu: "Integrated Graphics", mode: "Offline" },
  { tag: 9, genre: "Strategy", minRam: "2GB", gpu: "Integrated Graphics", mode: "Offline" },
  { tag: 122, genre: "RPG", minRam: "2GB", gpu: "Integrated Graphics", mode: "Offline" },
  { tag: 19, genre: "Action", minRam: "4GB", gpu: "Intel HD", mode: "Offline" },
  { tag: 599, genre: "Simulation", minRam: "4GB", gpu: "Intel HD", mode: "Offline" },
  { tag: 1667, genre: "Horror", minRam: "4GB", gpu: "Intel HD", mode: "Offline" },
  { tag: 699, genre: "Racing", minRam: "4GB", gpu: "Intel HD", mode: "Offline" },
  { tag: 3810, genre: "Sandbox", minRam: "4GB", gpu: "Intel HD", mode: "Online" }
];

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function isLikelyMainGame(title) {
  const blocked = [
    " soundtrack",
    " ost",
    " artbook",
    " art book",
    " dlc",
    " demo",
    " playtest",
    " supporter pack",
    " upgrade",
    " expansion pass"
  ];
  const normalized = ` ${title.toLowerCase()} `;
  return !blocked.some((term) => normalized.includes(term));
}

function parseResults(html, source) {
  const chunks = html.split(/<a href="https:\/\/store\.steampowered\.com\/app\//g).slice(1);
  return chunks
    .map((chunk) => {
      const appId = Number(chunk.match(/^(\d+)\//)?.[1]);
      const title = decodeHtml(chunk.match(/<span class="title">([\s\S]*?)<\/span>/)?.[1]?.trim() ?? "");
      const price = /Free To Play|Free<\/div>|Free\s*</i.test(chunk) ? "Free" : "Paid";

      if (!appId || !title || !isLikelyMainGame(title)) {
        return null;
      }

      return {
        title,
        genre: source.genre,
        minRam: source.minRam,
        gpu: source.gpu,
        price,
        mode: price === "Free" && source.genre !== "Horror" ? "Online" : source.mode,
        note: makeNote(title, source.genre, source.minRam, source.gpu),
        steamAppId: appId
      };
    })
    .filter(Boolean);
}

function makeNote(title, genre, minRam, gpu) {
  if (minRam === "2GB") {
    return `${title} is a lightweight ${genre.toLowerCase()} pick that is worth trying on old laptops and low-end PCs.`;
  }

  if (gpu === "Intel HD") {
    return `${title} can be a practical ${genre.toLowerCase()} option for 4GB RAM PCs with Intel HD or similar graphics.`;
  }

  return `${title} is a low-spec ${genre.toLowerCase()} game to test with reduced resolution and graphics settings.`;
}

function toEntry(game) {
  return `  {
    title: ${JSON.stringify(game.title)},
    genre: ${JSON.stringify(game.genre)} as GameGenre,
    minRam: ${JSON.stringify(game.minRam)} as GameRam,
    gpu: ${JSON.stringify(game.gpu)} as GameGpu,
    price: ${JSON.stringify(game.price)} as GamePrice,
    mode: ${JSON.stringify(game.mode)} as GameMode,
    note: ${JSON.stringify(game.note)},
    steamAppId: ${game.steamAppId}
  }`;
}

const filePath = "lib/lowEndPcGames.ts";
const existing = await fs.readFile(filePath, "utf8");
const seenTitles = new Set(
  [...existing.matchAll(/title: "([^"]+)"/g)].map((match) => match[1].toLowerCase())
);
const seenAppIds = new Set(
  [...existing.matchAll(/steamAppId: (\d+)/g)].map((match) => Number(match[1]))
);

const additions = [];

for (const source of sources) {
  for (const start of [0, 50, 100, 150, 200]) {
    if (additions.length >= targetAdditions) {
      break;
    }

    const url = `https://store.steampowered.com/search/results/?query&start=${start}&count=50&dynamic_data=&sort_by=Reviews_DESC&tags=${source.tag}&infinite=1`;
    const response = await fetch(url);
    if (!response.ok) {
      continue;
    }

    const data = await response.json();
    for (const game of parseResults(data.results_html ?? "", source)) {
      const titleKey = game.title.toLowerCase();
      if (seenTitles.has(titleKey) || seenAppIds.has(game.steamAppId)) {
        continue;
      }

      seenTitles.add(titleKey);
      seenAppIds.add(game.steamAppId);
      additions.push(game);

      if (additions.length >= targetAdditions) {
        break;
      }
    }

    await new Promise((resolve) => setTimeout(resolve, 120));
  }
}

if (additions.length < targetAdditions) {
  throw new Error(`Only found ${additions.length} additions`);
}

const insertion = `,\n${additions.map(toEntry).join(",\n")}\n`;
const updated = existing.replace(/\n\];\s*$/, `${insertion}];\n`);
await fs.writeFile(filePath, updated);

console.log(`Added ${additions.length} games`);
