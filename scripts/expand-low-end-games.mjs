import fs from "node:fs/promises";

const games = [
  ["Stardew Valley", "Simulation", "2GB", "Integrated Graphics", "Paid", "Offline", "Runs well on older laptops and low-end PCs."],
  ["Terraria", "Sandbox", "2GB", "Integrated Graphics", "Paid", "Offline", "Lightweight 2D sandbox game with low hardware needs."],
  ["Undertale", "RPG", "2GB", "Integrated Graphics", "Paid", "Offline", "Retro visuals make it friendly for old laptops."],
  ["FTL: Faster Than Light", "Strategy", "2GB", "Integrated Graphics", "Paid", "Offline", "A light strategy game that works well without a strong GPU."],
  ["Into the Breach", "Strategy", "2GB", "Integrated Graphics", "Paid", "Offline", "Turn-based battles keep performance steady on weak PCs."],
  ["Celeste", "Indie", "2GB", "Integrated Graphics", "Paid", "Offline", "Fast 2D platforming with very modest system needs."],
  ["Brawlhalla", "Action", "2GB", "Integrated Graphics", "Free", "Online", "Free fighting game that scales well on low settings."],
  ["Old School RuneScape", "RPG", "2GB", "Integrated Graphics", "Free", "Online", "Classic MMO style that is friendly to older computers."],
  ["Among Us", "Indie", "2GB", "Integrated Graphics", "Paid", "Online", "Simple 2D visuals work well on low-spec laptops."],
  ["Don't Starve", "Indie", "2GB", "Integrated Graphics", "Paid", "Offline", "Stylized survival game with low graphics requirements."],
  ["Don't Starve Together", "Sandbox", "2GB", "Integrated Graphics", "Paid", "Online", "Co-op survival with stylized graphics and modest requirements."],
  ["Papers, Please", "Simulation", "2GB", "Integrated Graphics", "Paid", "Offline", "Minimal visuals make it reliable on old PCs."],
  ["Hotline Miami", "Action", "2GB", "Integrated Graphics", "Paid", "Offline", "Fast top-down action with lightweight graphics."],
  ["Hotline Miami 2: Wrong Number", "Action", "2GB", "Integrated Graphics", "Paid", "Offline", "Pixel art action that stays friendly to older hardware."],
  ["The Binding of Isaac: Rebirth", "Action", "2GB", "Integrated Graphics", "Paid", "Offline", "Low-spec roguelike action for short sessions."],
  ["Spelunky", "Indie", "2GB", "Integrated Graphics", "Paid", "Offline", "Lightweight platforming that suits old laptops."],
  ["Spelunky 2", "Indie", "4GB", "Intel HD", "Paid", "Offline", "A newer 2D platformer that still scales well on modest PCs."],
  ["Cave Story+", "Indie", "2GB", "Integrated Graphics", "Paid", "Offline", "Classic 2D adventure with tiny performance demands."],
  ["Plants vs. Zombies GOTY Edition", "Strategy", "2GB", "Integrated Graphics", "Paid", "Offline", "Casual tower defense that runs smoothly on weak PCs."],
  ["Peggle Deluxe", "Indie", "2GB", "Integrated Graphics", "Paid", "Offline", "Very light puzzle gameplay for older machines."],
  ["World of Goo", "Strategy", "2GB", "Integrated Graphics", "Paid", "Offline", "Physics puzzles with simple, low-spec-friendly scenes."],
  ["LIMBO", "Indie", "2GB", "Integrated Graphics", "Paid", "Offline", "Minimal art style keeps the game easy to run."],
  ["INSIDE", "Indie", "4GB", "Intel HD", "Paid", "Offline", "Cinematic side-scroller that can run on modest laptops."],
  ["Broforce", "Action", "2GB", "Integrated Graphics", "Paid", "Offline", "Pixel action that can run on modest hardware."],
  ["OpenTTD", "Simulation", "2GB", "Integrated Graphics", "Free", "Offline", "Free transport management game for very old PCs."],
  ["Dwarf Fortress", "Simulation", "4GB", "Integrated Graphics", "Paid", "Offline", "Deep colony simulation with simple visuals."],
  ["Cataclysm: Dark Days Ahead", "RPG", "2GB", "Integrated Graphics", "Free", "Offline", "Free roguelike survival game with lightweight visuals."],
  ["The Battle for Wesnoth", "Strategy", "2GB", "Integrated Graphics", "Free", "Offline", "Open-source turn-based strategy that runs on old hardware."],
  ["SuperTuxKart", "Racing", "2GB", "Intel HD", "Free", "Offline", "Free kart racing with settings that can be lowered."],
  ["TrackMania Nations Forever", "Racing", "2GB", "Intel HD", "Free", "Online", "Older racing game with a strong low-spec reputation."],
  ["FlatOut 2", "Racing", "2GB", "Intel HD", "Paid", "Offline", "Older arcade racing game with low requirements."],
  ["Portal", "Indie", "2GB", "Intel HD", "Paid", "Offline", "Classic puzzle game that runs well on many old PCs."],
  ["Portal 2", "Indie", "2GB", "Intel HD", "Paid", "Offline", "A polished puzzle game that remains friendly to older systems."],
  ["Half-Life", "Action", "2GB", "Integrated Graphics", "Paid", "Offline", "Classic FPS with extremely low modern hardware demands."],
  ["Half-Life 2", "Action", "2GB", "Intel HD", "Paid", "Offline", "Older Source engine game with flexible graphics settings."],
  ["Half-Life: Opposing Force", "Action", "2GB", "Integrated Graphics", "Paid", "Offline", "Classic expansion that runs on very weak hardware."],
  ["Half-Life: Blue Shift", "Action", "2GB", "Integrated Graphics", "Paid", "Offline", "Short classic FPS campaign with low requirements."],
  ["Counter-Strike", "Action", "2GB", "Integrated Graphics", "Paid", "Online", "Very old competitive shooter that runs on weak computers."],
  ["Counter-Strike: Source", "Action", "2GB", "Intel HD", "Paid", "Online", "Older Source shooter with low settings for modest PCs."],
  ["Team Fortress 2", "Action", "4GB", "Intel HD", "Free", "Online", "Free Source engine shooter that can work with low settings."],
  ["Alien Swarm: Reactive Drop", "Action", "4GB", "Intel HD", "Free", "Online", "Free co-op shooter with modest requirements."],
  ["Sven Co-op", "Action", "2GB", "Integrated Graphics", "Free", "Online", "Free co-op classic based on older Half-Life technology."],
  ["No More Room in Hell", "Horror", "2GB", "Intel HD", "Free", "Online", "Free zombie horror shooter for older machines."],
  ["Hearthstone", "Strategy", "4GB", "Intel HD", "Free", "Online", "Card battles are easier on weak GPUs than most 3D games."],
  ["Slay the Spire", "Strategy", "4GB", "Integrated Graphics", "Paid", "Offline", "Turn-based deckbuilding works smoothly on low-spec laptops."],
  ["RimWorld", "Simulation", "4GB", "Integrated Graphics", "Paid", "Offline", "Colony simulation with simple graphics and scalable settings."],
  ["Prison Architect", "Simulation", "4GB", "Intel HD", "Paid", "Offline", "Management sim with clear 2D visuals for modest PCs."],
  ["Factorio", "Simulation", "4GB", "Intel HD", "Paid", "Offline", "Runs well early on; large factories can need more CPU power."],
  ["Project Zomboid", "Horror", "4GB", "Intel HD", "Paid", "Offline", "Isometric zombie survival that can be tuned for low-end PCs."],
  ["Darkest Dungeon", "RPG", "4GB", "Integrated Graphics", "Paid", "Offline", "Turn-based RPG with 2D art and low graphics pressure."],
  ["Torchlight", "RPG", "2GB", "Intel HD", "Paid", "Offline", "Older action RPG that works on many low-spec systems."],
  ["Torchlight II", "RPG", "2GB", "Intel HD", "Paid", "Offline", "Colorful action RPG with friendly requirements."],
  ["Fallout: New Vegas", "RPG", "4GB", "Low-end Dedicated GPU", "Paid", "Offline", "Older open-world RPG that benefits from a basic dedicated GPU."],
  ["The Elder Scrolls III: Morrowind", "RPG", "2GB", "Integrated Graphics", "Paid", "Offline", "Classic RPG that runs on very old PCs."],
  ["The Elder Scrolls IV: Oblivion", "RPG", "2GB", "Intel HD", "Paid", "Offline", "Older 3D RPG that can run with lowered settings."],
  ["Garry's Mod", "Sandbox", "4GB", "Intel HD", "Paid", "Online", "Older Source engine sandbox with performance depending on servers."],
  ["Unturned", "Sandbox", "4GB", "Intel HD", "Free", "Online", "Free survival sandbox with simple visuals and adjustable settings."],
  ["Starbound", "Sandbox", "4GB", "Intel HD", "Paid", "Online", "2D space sandbox that works well on modest laptops."],
  ["Forager", "Sandbox", "4GB", "Intel HD", "Paid", "Offline", "Compact crafting and exploration game with simple visuals."],
  ["Townscaper", "Sandbox", "4GB", "Intel HD", "Paid", "Offline", "Relaxed building toy with very simple controls and visuals."],
  ["Muck", "Sandbox", "4GB", "Intel HD", "Free", "Online", "Free survival sandbox with simple graphics."],
  ["People Playground", "Sandbox", "4GB", "Intel HD", "Paid", "Offline", "2D physics sandbox for modest PCs."],
  ["Besiege", "Sandbox", "4GB", "Intel HD", "Paid", "Offline", "Physics building game that is manageable with smaller creations."],
  ["Poly Bridge", "Simulation", "4GB", "Intel HD", "Paid", "Offline", "Bridge puzzles with low graphics pressure."],
  ["Left 4 Dead", "Action", "4GB", "Low-end Dedicated GPU", "Paid", "Online", "Classic co-op shooter for older dedicated GPUs."],
  ["Left 4 Dead 2", "Action", "4GB", "Low-end Dedicated GPU", "Paid", "Online", "Co-op shooter that runs well on older dedicated GPUs."],
  ["Killing Floor", "Horror", "2GB", "Low-end Dedicated GPU", "Paid", "Online", "Older horror shooter for modest dedicated graphics cards."],
  ["Amnesia: The Dark Descent", "Horror", "2GB", "Intel HD", "Paid", "Offline", "Classic horror game that runs on many older PCs."],
  ["SCP: Secret Laboratory", "Horror", "8GB", "Low-end Dedicated GPU", "Free", "Online", "Free multiplayer horror that suits newer low-end PCs."],
  ["Cry of Fear", "Horror", "2GB", "Intel HD", "Free", "Offline", "Free horror title based on an older engine."],
  ["Doki Doki Literature Club", "Horror", "2GB", "Integrated Graphics", "Free", "Offline", "Visual novel horror that barely stresses old PCs."],
  ["Hollow Knight", "Action", "4GB", "Intel HD", "Paid", "Offline", "2D action game that can run well at lower settings."],
  ["Dead Cells", "Action", "4GB", "Intel HD", "Paid", "Offline", "Smooth 2D action that works on many low-end laptops."],
  ["Cuphead", "Action", "4GB", "Intel HD", "Paid", "Offline", "2D boss action with modest requirements."],
  ["Hades", "Action", "4GB", "Intel HD", "Paid", "Offline", "Polished action game playable on many low-end PCs at low settings."],
  ["Risk of Rain", "Action", "2GB", "Integrated Graphics", "Paid", "Offline", "Classic 2D roguelike action for weak PCs."],
  ["Risk of Rain Returns", "Action", "4GB", "Intel HD", "Paid", "Offline", "2D action roguelike suited to modest hardware."],
  ["Rogue Legacy", "Action", "2GB", "Integrated Graphics", "Paid", "Offline", "Lightweight action roguelite for old laptops."],
  ["Nuclear Throne", "Action", "2GB", "Integrated Graphics", "Paid", "Offline", "Fast 2D action with low system needs."],
  ["Enter the Gungeon", "Action", "4GB", "Intel HD", "Paid", "Offline", "Pixel action game that runs well on modest systems."],
  ["Castle Crashers", "Action", "2GB", "Integrated Graphics", "Paid", "Online", "Light beat-em-up with simple 2D visuals."],
  ["BattleBlock Theater", "Indie", "2GB", "Integrated Graphics", "Paid", "Online", "2D platforming that suits low-end PCs."],
  ["Nidhogg", "Action", "2GB", "Integrated Graphics", "Paid", "Online", "Minimal fencing game that runs on weak hardware."],
  ["Duck Game", "Action", "2GB", "Integrated Graphics", "Paid", "Online", "Small 2D party action game with low requirements."],
  ["Downwell", "Action", "2GB", "Integrated Graphics", "Paid", "Offline", "Tiny vertical action game for very old laptops."],
  ["VVVVVV", "Indie", "2GB", "Integrated Graphics", "Paid", "Offline", "Minimal platformer with very low hardware needs."],
  ["Super Meat Boy", "Indie", "2GB", "Integrated Graphics", "Paid", "Offline", "Fast 2D platforming for low-spec PCs."],
  ["FEZ", "Indie", "2GB", "Integrated Graphics", "Paid", "Offline", "Light puzzle platformer with modest system demands."],
  ["Axiom Verge", "Action", "2GB", "Integrated Graphics", "Paid", "Offline", "Retro action adventure that is kind to old PCs."],
  ["SteamWorld Dig", "Indie", "2GB", "Integrated Graphics", "Paid", "Offline", "Light digging adventure for integrated graphics."],
  ["SteamWorld Heist", "Strategy", "2GB", "Integrated Graphics", "Paid", "Offline", "Turn-based tactics with low GPU pressure."],
  ["Mark of the Ninja", "Action", "2GB", "Integrated Graphics", "Paid", "Offline", "2D stealth action with modest requirements."],
  ["Guacamelee! Gold Edition", "Action", "2GB", "Integrated Graphics", "Paid", "Offline", "Colorful 2D action that works on older PCs."],
  ["Bastion", "Action", "2GB", "Integrated Graphics", "Paid", "Offline", "Light action RPG with simple scenes and low requirements."],
  ["Transistor", "RPG", "4GB", "Intel HD", "Paid", "Offline", "Stylish action RPG that suits modest laptops."],
  ["A Short Hike", "Indie", "2GB", "Integrated Graphics", "Paid", "Offline", "Small exploration game with gentle low-spec demands."],
  ["To the Moon", "RPG", "2GB", "Integrated Graphics", "Paid", "Offline", "Story RPG with very light visuals."],
  ["Finding Paradise", "RPG", "2GB", "Integrated Graphics", "Paid", "Offline", "Story-focused RPG that works on old laptops."],
  ["Rakuen", "RPG", "2GB", "Integrated Graphics", "Paid", "Offline", "Light story adventure with simple graphics."],
  ["OneShot", "RPG", "2GB", "Integrated Graphics", "Paid", "Offline", "Small story puzzle RPG for weak PCs."],
  ["Gemini Rue", "Indie", "2GB", "Integrated Graphics", "Paid", "Offline", "Point-and-click adventure with very low requirements."],
  ["Technobabylon", "Indie", "2GB", "Integrated Graphics", "Paid", "Offline", "Adventure game that runs well on modest machines."],
  ["Primordia", "Indie", "2GB", "Integrated Graphics", "Paid", "Offline", "Low-spec point-and-click adventure."],
  ["Kathy Rain", "Indie", "2GB", "Integrated Graphics", "Paid", "Offline", "Pixel adventure that is easy on older laptops."],
  ["The Last Door - Collector's Edition", "Horror", "2GB", "Integrated Graphics", "Paid", "Offline", "Pixel horror adventure with tiny performance needs."],
  ["The Cat Lady", "Horror", "2GB", "Integrated Graphics", "Paid", "Offline", "Story horror game suited to low-end PCs."],
  ["Lone Survivor: The Director's Cut", "Horror", "2GB", "Integrated Graphics", "Paid", "Offline", "2D horror that works well on old laptops."],
  ["Detention", "Horror", "4GB", "Intel HD", "Paid", "Offline", "Atmospheric 2D horror with modest requirements."],
  ["The Coma: Recut", "Horror", "4GB", "Intel HD", "Paid", "Offline", "Side-scrolling horror game for modest PCs."],
  ["Mad Father", "Horror", "2GB", "Integrated Graphics", "Paid", "Offline", "Light RPG Maker horror for old computers."],
  ["The Witch's House MV", "Horror", "2GB", "Integrated Graphics", "Paid", "Offline", "RPG Maker horror with low requirements."],
  ["Yume Nikki", "Horror", "2GB", "Integrated Graphics", "Free", "Offline", "Free surreal classic with very low hardware needs."],
  ["Spooky's Jump Scare Mansion", "Horror", "4GB", "Intel HD", "Free", "Offline", "Free lightweight horror with simple graphics."],
  ["IMSCARED", "Horror", "2GB", "Integrated Graphics", "Paid", "Offline", "Low-spec horror experience for older PCs."],
  ["WORLD OF HORROR", "Horror", "4GB", "Integrated Graphics", "Paid", "Offline", "Lo-fi horror RPG that runs on modest machines."],
  ["Darkwood", "Horror", "4GB", "Intel HD", "Paid", "Offline", "Top-down horror that can run on low settings."],
  ["Fran Bow", "Horror", "2GB", "Integrated Graphics", "Paid", "Offline", "Point-and-click horror for low-spec laptops."],
  ["Little Misfortune", "Horror", "4GB", "Intel HD", "Paid", "Offline", "Story adventure with modest requirements."],
  ["Age of Empires II (2013)", "Strategy", "4GB", "Intel HD", "Paid", "Online", "Classic RTS that remains playable on older computers."],
  ["Age of Mythology: Extended Edition", "Strategy", "4GB", "Intel HD", "Paid", "Offline", "Older mythological RTS that can run on modest PCs."],
  ["Stronghold Crusader HD", "Strategy", "2GB", "Integrated Graphics", "Paid", "Offline", "Classic castle strategy with very low requirements."],
  ["Stronghold HD", "Strategy", "2GB", "Integrated Graphics", "Paid", "Offline", "Older strategy game that works on weak PCs."],
  ["Commandos: Behind Enemy Lines", "Strategy", "2GB", "Integrated Graphics", "Paid", "Offline", "Classic tactics game for very old systems."],
  ["Desperados: Wanted Dead or Alive", "Strategy", "2GB", "Integrated Graphics", "Paid", "Offline", "Classic tactics game with low modern requirements."],
  ["Heroes of Might & Magic III - HD Edition", "Strategy", "2GB", "Integrated Graphics", "Paid", "Offline", "Turn-based strategy that suits old laptops."],
  ["Sid Meier's Civilization IV", "Strategy", "2GB", "Intel HD", "Paid", "Offline", "Older 4X strategy that runs on low-spec PCs."],
  ["Sid Meier's Civilization V", "Strategy", "4GB", "Intel HD", "Paid", "Offline", "Playable on many modest laptops with low settings."],
  ["DEFCON", "Strategy", "2GB", "Integrated Graphics", "Paid", "Online", "Minimal strategy game with tiny GPU demands."],
  ["Uplink", "Strategy", "2GB", "Integrated Graphics", "Paid", "Offline", "Hacking strategy game with simple visuals."],
  ["Darwinia", "Strategy", "2GB", "Integrated Graphics", "Paid", "Offline", "Minimal strategy game for older computers."],
  ["Creeper World 3: Arc Eternal", "Strategy", "2GB", "Integrated Graphics", "Paid", "Offline", "2D strategy that performs well on modest systems."],
  ["Mindustry", "Strategy", "4GB", "Intel HD", "Paid", "Online", "Factory tower-defense game with simple visuals."],
  ["Mini Metro", "Simulation", "2GB", "Integrated Graphics", "Paid", "Offline", "Minimal transit puzzle game for weak PCs."],
  ["Mini Motorways", "Simulation", "4GB", "Intel HD", "Paid", "Offline", "Clean management puzzle game for modest laptops."],
  ["Banished", "Simulation", "4GB", "Intel HD", "Paid", "Offline", "City builder that can run on older PCs at low settings."],
  ["Kingdom: Classic", "Strategy", "2GB", "Integrated Graphics", "Free", "Offline", "Minimal side-scrolling strategy for old laptops."],
  ["Kingdom: New Lands", "Strategy", "2GB", "Integrated Graphics", "Paid", "Offline", "Light strategy game with pixel art visuals."],
  ["Reigns", "Strategy", "2GB", "Integrated Graphics", "Paid", "Offline", "Card-based kingdom management with tiny requirements."],
  ["Reigns: Her Majesty", "Strategy", "2GB", "Integrated Graphics", "Paid", "Offline", "Light card strategy game for low-end PCs."],
  ["Horizon Chase Turbo", "Racing", "4GB", "Intel HD", "Paid", "Offline", "Arcade racing with scalable visuals."],
  ["Absolute Drift", "Racing", "2GB", "Intel HD", "Paid", "Offline", "Minimal drifting game that works on modest laptops."],
  ["Slipstream", "Racing", "2GB", "Integrated Graphics", "Paid", "Offline", "Retro racing game with lightweight pixel visuals."],
  ["Retrowave", "Racing", "4GB", "Intel HD", "Paid", "Offline", "Simple arcade driving that can run on low settings."],
  ["Super Woden GP", "Racing", "4GB", "Intel HD", "Paid", "Offline", "Top-down racing with modest requirements."],
  ["Distance", "Racing", "4GB", "Low-end Dedicated GPU", "Paid", "Online", "Stylized racer that suits newer low-end dedicated GPUs."],
  ["F1 RACE STARS", "Racing", "4GB", "Low-end Dedicated GPU", "Paid", "Offline", "Older arcade racer that benefits from a basic dedicated GPU."]
];

const overrides = new Map([
  ["OpenTTD", 1536610],
  ["SuperTuxKart", 2783900],
  ["Hearthstone", undefined],
  ["Cataclysm: Dark Days Ahead", 2330750]
]);

function jsString(value) {
  return JSON.stringify(value);
}

async function findSteamAppId(title) {
  if (overrides.has(title)) {
    return overrides.get(title);
  }

  const url = `https://store.steampowered.com/api/storesearch/?term=${encodeURIComponent(
    title
  )}&l=english&cc=us`;
  const response = await fetch(url);
  if (!response.ok) {
    return undefined;
  }

  const data = await response.json();
  const items = Array.isArray(data.items) ? data.items : [];
  const normalizedTitle = title.toLowerCase();
  const exact = items.find((item) => item.name?.toLowerCase() === normalizedTitle);
  return (exact ?? items[0])?.id;
}

const rows = [];
for (const game of games) {
  const [title, genre, minRam, gpu, price, mode, note] = game;
  const steamAppId = await findSteamAppId(title);
  rows.push({ title, genre, minRam, gpu, price, mode, note, steamAppId });
  await new Promise((resolve) => setTimeout(resolve, 90));
}

const output = `export type GameRam = "2GB" | "4GB" | "8GB";

export type GameGpu =
  | "Integrated Graphics"
  | "Intel HD"
  | "Low-end Dedicated GPU";

export type GameGenre =
  | "Action"
  | "RPG"
  | "Simulation"
  | "Strategy"
  | "Horror"
  | "Racing"
  | "Sandbox"
  | "Indie";

export type GamePrice = "Free" | "Paid";
export type GameMode = "Offline" | "Online";

export type LowEndPcGame = {
  title: string;
  genre: GameGenre;
  minRam: GameRam;
  gpu: GameGpu;
  price: GamePrice;
  mode: GameMode;
  note: string;
  steamAppId?: number;
};

export const ramOptions: GameRam[] = ["2GB", "4GB", "8GB"];
export const gpuOptions: GameGpu[] = [
  "Integrated Graphics",
  "Intel HD",
  "Low-end Dedicated GPU"
];
export const genreOptions: GameGenre[] = [
  "Action",
  "RPG",
  "Simulation",
  "Strategy",
  "Horror",
  "Racing",
  "Sandbox",
  "Indie"
];
export const priceOptions: GamePrice[] = ["Free", "Paid"];
export const modeOptions: GameMode[] = ["Offline", "Online"];

export function ramScore(ram: GameRam) {
  return Number(ram.replace("GB", ""));
}

export function gpuScore(gpu: GameGpu) {
  if (gpu === "Integrated Graphics") {
    return 1;
  }

  if (gpu === "Intel HD") {
    return 2;
  }

  return 3;
}

export function getGameCoverUrl(game: LowEndPcGame) {
  if (!game.steamAppId) {
    return "";
  }

  return \`https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/\${game.steamAppId}/header.jpg\`;
}

export const lowEndPcGames: LowEndPcGame[] = [
${rows
  .map((game) => {
    const steamLine =
      typeof game.steamAppId === "number"
        ? `,\n    steamAppId: ${game.steamAppId}`
        : "";
    return `  {
    title: ${jsString(game.title)},
    genre: ${jsString(game.genre)} as GameGenre,
    minRam: ${jsString(game.minRam)} as GameRam,
    gpu: ${jsString(game.gpu)} as GameGpu,
    price: ${jsString(game.price)} as GamePrice,
    mode: ${jsString(game.mode)} as GameMode,
    note: ${jsString(game.note)}${steamLine}
  }`;
  })
  .join(",\n")}
];
`;

await fs.writeFile("lib/lowEndPcGames.ts", output);
console.log(`Wrote ${rows.length} games`);
console.log(`With Steam covers: ${rows.filter((row) => row.steamAppId).length}`);
