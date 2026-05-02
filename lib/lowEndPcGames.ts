export type GameRam = "2GB" | "4GB" | "8GB";

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

  return `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${game.steamAppId}/header.jpg`;
}

export const lowEndPcGames: LowEndPcGame[] = [
  {
    title: "Stardew Valley",
    genre: "Simulation" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Runs well on older laptops and low-end PCs.",
    steamAppId: 413150
  },
  {
    title: "Terraria",
    genre: "Sandbox" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Lightweight 2D sandbox game with low hardware needs.",
    steamAppId: 105600
  },
  {
    title: "Undertale",
    genre: "RPG" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Retro visuals make it friendly for old laptops.",
    steamAppId: 391540
  },
  {
    title: "FTL: Faster Than Light",
    genre: "Strategy" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "A light strategy game that works well without a strong GPU.",
    steamAppId: 212680
  },
  {
    title: "Into the Breach",
    genre: "Strategy" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Turn-based battles keep performance steady on weak PCs.",
    steamAppId: 590380
  },
  {
    title: "Celeste",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Fast 2D platforming with very modest system needs.",
    steamAppId: 504230
  },
  {
    title: "Brawlhalla",
    genre: "Action" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Free fighting game that scales well on low settings.",
    steamAppId: 291550
  },
  {
    title: "Old School RuneScape",
    genre: "RPG" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Classic MMO style that is friendly to older computers.",
    steamAppId: 1343370
  },
  {
    title: "Among Us",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Online" as GameMode,
    note: "Simple 2D visuals work well on low-spec laptops.",
    steamAppId: 945360
  },
  {
    title: "Don't Starve",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Stylized survival game with low graphics requirements.",
    steamAppId: 219740
  },
  {
    title: "Don't Starve Together",
    genre: "Sandbox" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Online" as GameMode,
    note: "Co-op survival with stylized graphics and modest requirements.",
    steamAppId: 322330
  },
  {
    title: "Papers, Please",
    genre: "Simulation" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Minimal visuals make it reliable on old PCs.",
    steamAppId: 239030
  },
  {
    title: "Hotline Miami",
    genre: "Action" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Fast top-down action with lightweight graphics.",
    steamAppId: 219150
  },
  {
    title: "Hotline Miami 2: Wrong Number",
    genre: "Action" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Pixel art action that stays friendly to older hardware.",
    steamAppId: 274170
  },
  {
    title: "The Binding of Isaac: Rebirth",
    genre: "Action" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Low-spec roguelike action for short sessions.",
    steamAppId: 250900
  },
  {
    title: "Spelunky",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Lightweight platforming that suits old laptops.",
    steamAppId: 239350
  },
  {
    title: "Spelunky 2",
    genre: "Indie" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "A newer 2D platformer that still scales well on modest PCs.",
    steamAppId: 418530
  },
  {
    title: "Cave Story+",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Classic 2D adventure with tiny performance demands.",
    steamAppId: 200900
  },
  {
    title: "Plants vs. Zombies GOTY Edition",
    genre: "Strategy" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Casual tower defense that runs smoothly on weak PCs.",
    steamAppId: 3590
  },
  {
    title: "Peggle Deluxe",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Very light puzzle gameplay for older machines.",
    steamAppId: 3480
  },
  {
    title: "World of Goo",
    genre: "Strategy" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Physics puzzles with simple, low-spec-friendly scenes.",
    steamAppId: 22000
  },
  {
    title: "LIMBO",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Minimal art style keeps the game easy to run.",
    steamAppId: 48000
  },
  {
    title: "INSIDE",
    genre: "Indie" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Cinematic side-scroller that can run on modest laptops.",
    steamAppId: 304430
  },
  {
    title: "Broforce",
    genre: "Action" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Pixel action that can run on modest hardware.",
    steamAppId: 274190
  },
  {
    title: "OpenTTD",
    genre: "Simulation" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Free transport management game for very old PCs.",
    steamAppId: 1536610
  },
  {
    title: "Dwarf Fortress",
    genre: "Simulation" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Deep colony simulation with simple visuals.",
    steamAppId: 975370
  },
  {
    title: "Cataclysm: Dark Days Ahead",
    genre: "RPG" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Free roguelike survival game with lightweight visuals.",
    steamAppId: 2330750
  },
  {
    title: "The Battle for Wesnoth",
    genre: "Strategy" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Open-source turn-based strategy that runs on old hardware."
  },
  {
    title: "SuperTuxKart",
    genre: "Racing" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Free kart racing with settings that can be lowered.",
    steamAppId: 2783900
  },
  {
    title: "TrackMania Nations Forever",
    genre: "Racing" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Older racing game with a strong low-spec reputation."
  },
  {
    title: "FlatOut 2",
    genre: "Racing" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Older arcade racing game with low requirements.",
    steamAppId: 2990
  },
  {
    title: "Portal",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Classic puzzle game that runs well on many old PCs.",
    steamAppId: 400
  },
  {
    title: "Portal 2",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "A polished puzzle game that remains friendly to older systems.",
    steamAppId: 620
  },
  {
    title: "Half-Life",
    genre: "Action" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Classic FPS with extremely low modern hardware demands.",
    steamAppId: 70
  },
  {
    title: "Half-Life 2",
    genre: "Action" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Older Source engine game with flexible graphics settings.",
    steamAppId: 220
  },
  {
    title: "Half-Life: Opposing Force",
    genre: "Action" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Classic expansion that runs on very weak hardware.",
    steamAppId: 50
  },
  {
    title: "Half-Life: Blue Shift",
    genre: "Action" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Short classic FPS campaign with low requirements.",
    steamAppId: 130
  },
  {
    title: "Counter-Strike",
    genre: "Action" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Online" as GameMode,
    note: "Very old competitive shooter that runs on weak computers.",
    steamAppId: 10
  },
  {
    title: "Counter-Strike: Source",
    genre: "Action" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Online" as GameMode,
    note: "Older Source shooter with low settings for modest PCs.",
    steamAppId: 240
  },
  {
    title: "Team Fortress 2",
    genre: "Action" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Free Source engine shooter that can work with low settings.",
    steamAppId: 440
  },
  {
    title: "Alien Swarm: Reactive Drop",
    genre: "Action" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Free co-op shooter with modest requirements.",
    steamAppId: 563560
  },
  {
    title: "Sven Co-op",
    genre: "Action" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Free co-op classic based on older Half-Life technology.",
    steamAppId: 225840
  },
  {
    title: "No More Room in Hell",
    genre: "Horror" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Free zombie horror shooter for older machines.",
    steamAppId: 224260
  },
  {
    title: "Hearthstone",
    genre: "Strategy" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Card battles are easier on weak GPUs than most 3D games."
  },
  {
    title: "Slay the Spire",
    genre: "Strategy" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Turn-based deckbuilding works smoothly on low-spec laptops.",
    steamAppId: 646570
  },
  {
    title: "RimWorld",
    genre: "Simulation" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Colony simulation with simple graphics and scalable settings.",
    steamAppId: 294100
  },
  {
    title: "Prison Architect",
    genre: "Simulation" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Management sim with clear 2D visuals for modest PCs.",
    steamAppId: 233450
  },
  {
    title: "Factorio",
    genre: "Simulation" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Runs well early on; large factories can need more CPU power.",
    steamAppId: 427520
  },
  {
    title: "Project Zomboid",
    genre: "Horror" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Isometric zombie survival that can be tuned for low-end PCs.",
    steamAppId: 108600
  },
  {
    title: "Darkest Dungeon",
    genre: "RPG" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Turn-based RPG with 2D art and low graphics pressure.",
    steamAppId: 262060
  },
  {
    title: "Torchlight",
    genre: "RPG" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Older action RPG that works on many low-spec systems.",
    steamAppId: 41500
  },
  {
    title: "Torchlight II",
    genre: "RPG" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Colorful action RPG with friendly requirements.",
    steamAppId: 200710
  },
  {
    title: "Fallout: New Vegas",
    genre: "RPG" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Low-end Dedicated GPU" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Older open-world RPG that benefits from a basic dedicated GPU.",
    steamAppId: 22380
  },
  {
    title: "The Elder Scrolls III: Morrowind",
    genre: "RPG" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Classic RPG that runs on very old PCs.",
    steamAppId: 22320
  },
  {
    title: "The Elder Scrolls IV: Oblivion",
    genre: "RPG" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Older 3D RPG that can run with lowered settings.",
    steamAppId: 2623190
  },
  {
    title: "Garry's Mod",
    genre: "Sandbox" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Online" as GameMode,
    note: "Older Source engine sandbox with performance depending on servers.",
    steamAppId: 4000
  },
  {
    title: "Unturned",
    genre: "Sandbox" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Free survival sandbox with simple visuals and adjustable settings.",
    steamAppId: 304930
  },
  {
    title: "Starbound",
    genre: "Sandbox" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Online" as GameMode,
    note: "2D space sandbox that works well on modest laptops.",
    steamAppId: 211820
  },
  {
    title: "Forager",
    genre: "Sandbox" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Compact crafting and exploration game with simple visuals.",
    steamAppId: 751780
  },
  {
    title: "Townscaper",
    genre: "Sandbox" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Relaxed building toy with very simple controls and visuals.",
    steamAppId: 1291340
  },
  {
    title: "Muck",
    genre: "Sandbox" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Free survival sandbox with simple graphics.",
    steamAppId: 1625450
  },
  {
    title: "People Playground",
    genre: "Sandbox" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "2D physics sandbox for modest PCs.",
    steamAppId: 1118200
  },
  {
    title: "Besiege",
    genre: "Sandbox" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Physics building game that is manageable with smaller creations.",
    steamAppId: 346010
  },
  {
    title: "Poly Bridge",
    genre: "Simulation" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Bridge puzzles with low graphics pressure.",
    steamAppId: 367450
  },
  {
    title: "Left 4 Dead",
    genre: "Action" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Low-end Dedicated GPU" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Online" as GameMode,
    note: "Classic co-op shooter for older dedicated GPUs.",
    steamAppId: 500
  },
  {
    title: "Left 4 Dead 2",
    genre: "Action" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Low-end Dedicated GPU" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Online" as GameMode,
    note: "Co-op shooter that runs well on older dedicated GPUs.",
    steamAppId: 550
  },
  {
    title: "Killing Floor",
    genre: "Horror" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Low-end Dedicated GPU" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Online" as GameMode,
    note: "Older horror shooter for modest dedicated graphics cards.",
    steamAppId: 1250
  },
  {
    title: "Amnesia: The Dark Descent",
    genre: "Horror" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Classic horror game that runs on many older PCs.",
    steamAppId: 57300
  },
  {
    title: "SCP: Secret Laboratory",
    genre: "Horror" as GameGenre,
    minRam: "8GB" as GameRam,
    gpu: "Low-end Dedicated GPU" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Free multiplayer horror that suits newer low-end PCs.",
    steamAppId: 700330
  },
  {
    title: "Cry of Fear",
    genre: "Horror" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Free horror title based on an older engine.",
    steamAppId: 223710
  },
  {
    title: "Doki Doki Literature Club",
    genre: "Horror" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Visual novel horror that barely stresses old PCs.",
    steamAppId: 698780
  },
  {
    title: "Hollow Knight",
    genre: "Action" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "2D action game that can run well at lower settings.",
    steamAppId: 367520
  },
  {
    title: "Dead Cells",
    genre: "Action" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Smooth 2D action that works on many low-end laptops.",
    steamAppId: 588650
  },
  {
    title: "Cuphead",
    genre: "Action" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "2D boss action with modest requirements.",
    steamAppId: 268910
  },
  {
    title: "Hades",
    genre: "Action" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Polished action game playable on many low-end PCs at low settings.",
    steamAppId: 1145360
  },
  {
    title: "Risk of Rain",
    genre: "Action" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Classic 2D roguelike action for weak PCs.",
    steamAppId: 632360
  },
  {
    title: "Risk of Rain Returns",
    genre: "Action" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "2D action roguelike suited to modest hardware.",
    steamAppId: 1337520
  },
  {
    title: "Rogue Legacy",
    genre: "Action" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Lightweight action roguelite for old laptops.",
    steamAppId: 241600
  },
  {
    title: "Nuclear Throne",
    genre: "Action" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Fast 2D action with low system needs.",
    steamAppId: 242680
  },
  {
    title: "Enter the Gungeon",
    genre: "Action" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Pixel action game that runs well on modest systems.",
    steamAppId: 311690
  },
  {
    title: "Castle Crashers",
    genre: "Action" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Online" as GameMode,
    note: "Light beat-em-up with simple 2D visuals.",
    steamAppId: 204360
  },
  {
    title: "BattleBlock Theater",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Online" as GameMode,
    note: "2D platforming that suits low-end PCs."
  },
  {
    title: "Nidhogg",
    genre: "Action" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Online" as GameMode,
    note: "Minimal fencing game that runs on weak hardware.",
    steamAppId: 94400
  },
  {
    title: "Duck Game",
    genre: "Action" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Online" as GameMode,
    note: "Small 2D party action game with low requirements.",
    steamAppId: 312530
  },
  {
    title: "Downwell",
    genre: "Action" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Tiny vertical action game for very old laptops.",
    steamAppId: 360740
  },
  {
    title: "VVVVVV",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Minimal platformer with very low hardware needs.",
    steamAppId: 70300
  },
  {
    title: "Super Meat Boy",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Fast 2D platforming for low-spec PCs.",
    steamAppId: 40800
  },
  {
    title: "FEZ",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Light puzzle platformer with modest system demands.",
    steamAppId: 224760
  },
  {
    title: "Axiom Verge",
    genre: "Action" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Retro action adventure that is kind to old PCs.",
    steamAppId: 332200
  },
  {
    title: "SteamWorld Dig",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Light digging adventure for integrated graphics.",
    steamAppId: 252410
  },
  {
    title: "SteamWorld Heist",
    genre: "Strategy" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Turn-based tactics with low GPU pressure.",
    steamAppId: 322190
  },
  {
    title: "Mark of the Ninja",
    genre: "Action" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "2D stealth action with modest requirements.",
    steamAppId: 214560
  },
  {
    title: "Guacamelee! Gold Edition",
    genre: "Action" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Colorful 2D action that works on older PCs.",
    steamAppId: 214770
  },
  {
    title: "Bastion",
    genre: "Action" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Light action RPG with simple scenes and low requirements.",
    steamAppId: 107100
  },
  {
    title: "Transistor",
    genre: "RPG" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Stylish action RPG that suits modest laptops.",
    steamAppId: 237930
  },
  {
    title: "A Short Hike",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Small exploration game with gentle low-spec demands.",
    steamAppId: 1055540
  },
  {
    title: "To the Moon",
    genre: "RPG" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Story RPG with very light visuals.",
    steamAppId: 3626460
  },
  {
    title: "Finding Paradise",
    genre: "RPG" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Story-focused RPG that works on old laptops.",
    steamAppId: 337340
  },
  {
    title: "Rakuen",
    genre: "RPG" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Light story adventure with simple graphics.",
    steamAppId: 559210
  },
  {
    title: "OneShot",
    genre: "RPG" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Small story puzzle RPG for weak PCs.",
    steamAppId: 420530
  },
  {
    title: "Gemini Rue",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Point-and-click adventure with very low requirements.",
    steamAppId: 80310
  },
  {
    title: "Technobabylon",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Adventure game that runs well on modest machines.",
    steamAppId: 307580
  },
  {
    title: "Primordia",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Low-spec point-and-click adventure.",
    steamAppId: 227000
  },
  {
    title: "Kathy Rain",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Pixel adventure that is easy on older laptops.",
    steamAppId: 370910
  },
  {
    title: "The Last Door - Collector's Edition",
    genre: "Horror" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Pixel horror adventure with tiny performance needs.",
    steamAppId: 284390
  },
  {
    title: "The Cat Lady",
    genre: "Horror" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Story horror game suited to low-end PCs.",
    steamAppId: 253110
  },
  {
    title: "Lone Survivor: The Director's Cut",
    genre: "Horror" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "2D horror that works well on old laptops.",
    steamAppId: 209830
  },
  {
    title: "Detention",
    genre: "Horror" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Atmospheric 2D horror with modest requirements.",
    steamAppId: 555220
  },
  {
    title: "The Coma: Recut",
    genre: "Horror" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Side-scrolling horror game for modest PCs.",
    steamAppId: 600090
  },
  {
    title: "Mad Father",
    genre: "Horror" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Light RPG Maker horror for old computers.",
    steamAppId: 483980
  },
  {
    title: "The Witch's House MV",
    genre: "Horror" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "RPG Maker horror with low requirements.",
    steamAppId: 885810
  },
  {
    title: "Yume Nikki",
    genre: "Horror" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Free surreal classic with very low hardware needs.",
    steamAppId: 650700
  },
  {
    title: "Spooky's Jump Scare Mansion",
    genre: "Horror" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Free lightweight horror with simple graphics.",
    steamAppId: 356670
  },
  {
    title: "IMSCARED",
    genre: "Horror" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Low-spec horror experience for older PCs.",
    steamAppId: 429720
  },
  {
    title: "WORLD OF HORROR",
    genre: "Horror" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Lo-fi horror RPG that runs on modest machines.",
    steamAppId: 913740
  },
  {
    title: "Darkwood",
    genre: "Horror" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Top-down horror that can run on low settings.",
    steamAppId: 274520
  },
  {
    title: "Fran Bow",
    genre: "Horror" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Point-and-click horror for low-spec laptops.",
    steamAppId: 362680
  },
  {
    title: "Little Misfortune",
    genre: "Horror" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Story adventure with modest requirements.",
    steamAppId: 714120
  },
  {
    title: "Age of Empires II (2013)",
    genre: "Strategy" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Online" as GameMode,
    note: "Classic RTS that remains playable on older computers.",
    steamAppId: 355950
  },
  {
    title: "Age of Mythology: Extended Edition",
    genre: "Strategy" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Older mythological RTS that can run on modest PCs.",
    steamAppId: 266840
  },
  {
    title: "Stronghold Crusader HD",
    genre: "Strategy" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Classic castle strategy with very low requirements.",
    steamAppId: 40970
  },
  {
    title: "Stronghold HD",
    genre: "Strategy" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Older strategy game that works on weak PCs.",
    steamAppId: 40950
  },
  {
    title: "Commandos: Behind Enemy Lines",
    genre: "Strategy" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Classic tactics game for very old systems.",
    steamAppId: 6800
  },
  {
    title: "Desperados: Wanted Dead or Alive",
    genre: "Strategy" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Classic tactics game with low modern requirements.",
    steamAppId: 260730
  },
  {
    title: "Heroes of Might & Magic III - HD Edition",
    genre: "Strategy" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Turn-based strategy that suits old laptops.",
    steamAppId: 297000
  },
  {
    title: "Sid Meier's Civilization IV",
    genre: "Strategy" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Older 4X strategy that runs on low-spec PCs.",
    steamAppId: 3900
  },
  {
    title: "Sid Meier's Civilization V",
    genre: "Strategy" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Playable on many modest laptops with low settings.",
    steamAppId: 8930
  },
  {
    title: "DEFCON",
    genre: "Strategy" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Online" as GameMode,
    note: "Minimal strategy game with tiny GPU demands.",
    steamAppId: 1520
  },
  {
    title: "Uplink",
    genre: "Strategy" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Hacking strategy game with simple visuals.",
    steamAppId: 1510
  },
  {
    title: "Darwinia",
    genre: "Strategy" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Minimal strategy game for older computers.",
    steamAppId: 1500
  },
  {
    title: "Creeper World 3: Arc Eternal",
    genre: "Strategy" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "2D strategy that performs well on modest systems.",
    steamAppId: 280220
  },
  {
    title: "Mindustry",
    genre: "Strategy" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Online" as GameMode,
    note: "Factory tower-defense game with simple visuals.",
    steamAppId: 1127400
  },
  {
    title: "Mini Metro",
    genre: "Simulation" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Minimal transit puzzle game for weak PCs.",
    steamAppId: 287980
  },
  {
    title: "Mini Motorways",
    genre: "Simulation" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Clean management puzzle game for modest laptops.",
    steamAppId: 1127500
  },
  {
    title: "Banished",
    genre: "Simulation" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "City builder that can run on older PCs at low settings.",
    steamAppId: 242920
  },
  {
    title: "Kingdom: Classic",
    genre: "Strategy" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Minimal side-scrolling strategy for old laptops.",
    steamAppId: 368230
  },
  {
    title: "Kingdom: New Lands",
    genre: "Strategy" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Light strategy game with pixel art visuals.",
    steamAppId: 496300
  },
  {
    title: "Reigns",
    genre: "Strategy" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Card-based kingdom management with tiny requirements.",
    steamAppId: 474750
  },
  {
    title: "Reigns: Her Majesty",
    genre: "Strategy" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Light card strategy game for low-end PCs.",
    steamAppId: 717640
  },
  {
    title: "Horizon Chase Turbo",
    genre: "Racing" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Arcade racing with scalable visuals.",
    steamAppId: 389140
  },
  {
    title: "Absolute Drift",
    genre: "Racing" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Minimal drifting game that works on modest laptops.",
    steamAppId: 320140
  },
  {
    title: "Slipstream",
    genre: "Racing" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Retro racing game with lightweight pixel visuals.",
    steamAppId: 732810
  },
  {
    title: "Retrowave",
    genre: "Racing" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Simple arcade driving that can run on low settings.",
    steamAppId: 1239690
  },
  {
    title: "Super Woden GP",
    genre: "Racing" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Intel HD" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Top-down racing with modest requirements.",
    steamAppId: 1534180
  },
  {
    title: "Distance",
    genre: "Racing" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Low-end Dedicated GPU" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Online" as GameMode,
    note: "Stylized racer that suits newer low-end dedicated GPUs.",
    steamAppId: 233610
  },
  {
    title: "F1 RACE STARS",
    genre: "Racing" as GameGenre,
    minRam: "4GB" as GameRam,
    gpu: "Low-end Dedicated GPU" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Older arcade racer that benefits from a basic dedicated GPU."
  }
];
