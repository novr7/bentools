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
  },
  {
    title: "HoloCure - Save the Fans!",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "HoloCure - Save the Fans! is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2420510
  },
  {
    title: "Paper Lily - Chapter 1",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Paper Lily - Chapter 1 is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2220360
  },
  {
    title: "Project Kat - Paper Lily Prologue",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Project Kat - Paper Lily Prologue is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1698960
  },
  {
    title: "Öoo",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Öoo is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2721890
  },
  {
    title: "Aventura Copilului Albastru și Urât",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Aventura Copilului Albastru și Urât is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1530140
  },
  {
    title: "Smushi Come Home",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Smushi Come Home is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1740300
  },
  {
    title: "Catgirl",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Catgirl is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3569430
  },
  {
    title: "Super Lesbian Animal RPG",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Super Lesbian Animal RPG is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2124380
  },
  {
    title: "Moonleap",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Moonleap is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2166050
  },
  {
    title: "DFHack - Dwarf Fortress Modding Engine",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "DFHack - Dwarf Fortress Modding Engine is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2346660
  },
  {
    title: "MAHOUTEQ!",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "MAHOUTEQ! is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3793580
  },
  {
    title: "Hidden in Plain Sight",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Hidden in Plain Sight is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 303590
  },
  {
    title: "Strawberry Chocolate",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Strawberry Chocolate is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3579050
  },
  {
    title: "Don't Escape Trilogy",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Don't Escape Trilogy is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1070550
  },
  {
    title: "Vampire Survivors",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Vampire Survivors is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1794680
  },
  {
    title: "DELTARUNE",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "DELTARUNE is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1671210
  },
  {
    title: "Pizza Tower",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Pizza Tower is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2231450
  },
  {
    title: "Katana ZERO",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Katana ZERO is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 460950
  },
  {
    title: "Touhou Mystia's Izakaya",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Touhou Mystia's Izakaya is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1584090
  },
  {
    title: "Rhythm Doctor",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Rhythm Doctor is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 774181
  },
  {
    title: "Sheepy: A Short Adventure",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Sheepy: A Short Adventure is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1568400
  },
  {
    title: "Aseprite",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Aseprite is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 431730
  },
  {
    title: "Grimm's Hollow",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Grimm's Hollow is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1170880
  },
  {
    title: "Shelldiver",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Shelldiver is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3862670
  },
  {
    title: "Look Outside",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Look Outside is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3373660
  },
  {
    title: "Z.A.T.O. // I Love the World and Everything In It",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Z.A.T.O. // I Love the World and Everything In It is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 4122860
  },
  {
    title: "Hylics",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Hylics is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 397740
  },
  {
    title: "Magic Archery",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Magic Archery is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2905170
  },
  {
    title: "Buy a Croquette!",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Buy a Croquette! is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2167960
  },
  {
    title: "Kindergarten 2",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Kindergarten 2 is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1067850
  },
  {
    title: "Felvidek",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Felvidek is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2299900
  },
  {
    title: "Purrgatory",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Purrgatory is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1713610
  },
  {
    title: "Ib",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Ib is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1901370
  },
  {
    title: "OneShot: World Machine Edition",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "OneShot: World Machine Edition is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2915460
  },
  {
    title: "Word Game: Episode 0",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Word Game: Episode 0 is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1507970
  },
  {
    title: "The Supper",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "The Supper is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1171370
  },
  {
    title: "Picayune Dreams",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Picayune Dreams is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2088840
  },
  {
    title: "Your Turn To Die -Death Game By Majority-",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Your Turn To Die -Death Game By Majority- is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2067780
  },
  {
    title: "Just a To the Moon Series Beach Episode",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Just a To the Moon Series Beach Episode is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2159210
  },
  {
    title: "Loddlenaut",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Loddlenaut is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1644940
  },
  {
    title: "Path of Achra",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Path of Achra is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2128270
  },
  {
    title: "Handshakes",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Handshakes is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2171690
  },
  {
    title: "CATO: Buttered Cat",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "CATO: Buttered Cat is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1999520
  },
  {
    title: "The Powder Toy",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "The Powder Toy is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1148350
  },
  {
    title: "Mirage Feathers",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Mirage Feathers is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2719060
  },
  {
    title: "Don't Escape: 4 Days to Survive",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Don't Escape: 4 Days to Survive is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 611760
  },
  {
    title: "It Steals",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "It Steals is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1349060
  },
  {
    title: "BLACK BOX LSS - The Shining Immortal",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "BLACK BOX LSS - The Shining Immortal is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2434340
  },
  {
    title: "Endless Monday: Dreams and Deadlines",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Endless Monday: Dreams and Deadlines is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2262610
  },
  {
    title: "Angel at Dusk",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Angel at Dusk is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1405500
  },
  {
    title: "The Void Rains Upon Her Heart",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "The Void Rains Upon Her Heart is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 790060
  },
  {
    title: "Pipistrello and the Cursed Yoyo",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Pipistrello and the Cursed Yoyo is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2870350
  },
  {
    title: "像素女友",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "像素女友 is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1368860
  },
  {
    title: "花火与幽灵少女 - Hanabi and Ghost girl",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "花火与幽灵少女 - Hanabi and Ghost girl is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2302540
  },
  {
    title: "Ambidextro",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Ambidextro is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3445580
  },
  {
    title: "Fretless - The Wrath of Riffson",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Fretless - The Wrath of Riffson is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2429050
  },
  {
    title: "DOTOKOI / 像素男友",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "DOTOKOI / 像素男友 is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1198320
  },
  {
    title: "坦率的小红帽和爱说谎的狼",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "坦率的小红帽和爱说谎的狼 is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1216080
  },
  {
    title: "DAVE THE DIVER - DREDGE Content Pack",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "DAVE THE DIVER - DREDGE Content Pack is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2677020
  },
  {
    title: "Long Dream",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Long Dream is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2088030
  },
  {
    title: "Chrono Gear: Warden of Time",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Chrono Gear: Warden of Time is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3081840
  },
  {
    title: "Ticy Adventure Club : Queen of the Spring",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Ticy Adventure Club : Queen of the Spring is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2448980
  },
  {
    title: "DEVIL BLADE REBOOT",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "DEVIL BLADE REBOOT is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2882440
  },
  {
    title: "BLUE REVOLVER",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "BLUE REVOLVER is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 439490
  },
  {
    title: "Towards Future",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Towards Future is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1888010
  },
  {
    title: "Cirno! Lifts a Boulder",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Cirno! Lifts a Boulder is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 4173110
  },
  {
    title: "Cleo - a pirate's tale",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Cleo - a pirate's tale is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1361230
  },
  {
    title: "Star Fetchers : Escape from Pork Belly",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Star Fetchers : Escape from Pork Belly is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2869630
  },
  {
    title: "Annalynn",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Annalynn is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1508460
  },
  {
    title: "Garbanzo Quest",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Garbanzo Quest is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2105910
  },
  {
    title: "Vibrant Venture",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Vibrant Venture is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1264520
  },
  {
    title: "RAM: Random Access Mayhem",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "RAM: Random Access Mayhem is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2256450
  },
  {
    title: "Dangeresque: The Roomisode Triungulate",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Dangeresque: The Roomisode Triungulate is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2442020
  },
  {
    title: "Slash/Jump",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Slash/Jump is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3030210
  },
  {
    title: "Burger Shop 3",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Burger Shop 3 is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2505570
  },
  {
    title: "Mimic Logic",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Mimic Logic is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2455920
  },
  {
    title: "tModLoader",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "tModLoader is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1281930
  },
  {
    title: "Balatro",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Balatro is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2379780
  },
  {
    title: "OMORI",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "OMORI is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1150690
  },
  {
    title: "SANABI",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "SANABI is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1562700
  },
  {
    title: "VA-11 Hall-A: Cyberpunk Bartender Action",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "VA-11 Hall-A: Cyberpunk Bartender Action is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 447530
  },
  {
    title: "Fields of Mistria",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Fields of Mistria is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2142790
  },
  {
    title: "There Is No Game: Wrong Dimension",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "There Is No Game: Wrong Dimension is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1240210
  },
  {
    title: "Baba Is You",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Baba Is You is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 736260
  },
  {
    title: "The Expendabros",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "The Expendabros is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 312990
  },
  {
    title: "Outcore: Desktop Adventure",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Outcore: Desktop Adventure is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1275670
  },
  {
    title: "Tales of the Black Forest",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Tales of the Black Forest is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1093910
  },
  {
    title: "Webbed",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Webbed is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1390350
  },
  {
    title: "Touhou Luna Nights",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Touhou Luna Nights is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 851100
  },
  {
    title: "Nodebuster",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Nodebuster is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3107330
  },
  {
    title: "Eternal Senia",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Eternal Senia is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 351640
  },
  {
    title: "Post Void",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Post Void is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1285670
  },
  {
    title: "Gunpoint",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Gunpoint is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 206190
  },
  {
    title: "Winter Memories",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Winter Memories is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2495450
  },
  {
    title: "White Knuckle",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "White Knuckle is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3195790
  },
  {
    title: "The Case of the Golden Idol",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "The Case of the Golden Idol is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1677770
  },
  {
    title: "BAD END THEATER",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "BAD END THEATER is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1764390
  },
  {
    title: "At Home Alone Final",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "At Home Alone Final is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1740100
  },
  {
    title: "Tower Wizard",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Tower Wizard is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3372980
  },
  {
    title: "CULTIC",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "CULTIC is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1684930
  },
  {
    title: "Digseum",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Digseum is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3361470
  },
  {
    title: "Star Fetchers",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Star Fetchers is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1178030
  },
  {
    title: "In Stars And Time",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "In Stars And Time is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1677310
  },
  {
    title: "Bloody Hell",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Bloody Hell is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2056220
  },
  {
    title: "A Space for the Unbound",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "A Space for the Unbound is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1201270
  },
  {
    title: "Dungeon Munchies",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Dungeon Munchies is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 799640
  },
  {
    title: "Disfigure",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Disfigure is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2083160
  },
  {
    title: "Nightmare Kart",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Nightmare Kart is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2930160
  },
  {
    title: "Town to City",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Town to City is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3115220
  },
  {
    title: "Outpath: First Journey",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Outpath: First Journey is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2237980
  },
  {
    title: "Whisper of the House",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Whisper of the House is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2589500
  },
  {
    title: "我的小鲨鱼",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "我的小鲨鱼 is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2758540
  },
  {
    title: "The Drifter",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "The Drifter is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1170570
  },
  {
    title: "异化之恶〇Abnormal Treatment",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "异化之恶〇Abnormal Treatment is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1122750
  },
  {
    title: "Day of the Tentacle Remastered",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Day of the Tentacle Remastered is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 388210
  },
  {
    title: "Ticy Adventure Club",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Ticy Adventure Club is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2135690
  },
  {
    title: "D1AL-ogue",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "D1AL-ogue is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 4270390
  },
  {
    title: "Hylics 2",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Hylics 2 is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1286710
  },
  {
    title: "Princess Remedy in a World of Hurt",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Princess Remedy in a World of Hurt is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 407900
  },
  {
    title: "Chop Goblins",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Chop Goblins is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1935660
  },
  {
    title: "Mini Cozy Room: Lo-Fi",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Mini Cozy Room: Lo-Fi is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3511030
  },
  {
    title: "Grimshire",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Grimshire is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2238470
  },
  {
    title: "Lily's Well",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Lily's Well is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1834870
  },
  {
    title: "Cornerpond",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Cornerpond is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3454590
  },
  {
    title: "Swallow the Sea",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Swallow the Sea is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1511860
  },
  {
    title: "PockeDate! - Pocket Dating Simulator",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "PockeDate! - Pocket Dating Simulator is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3107350
  },
  {
    title: "Hello Charlotte EP2: Requiem Aeternam Deo",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Hello Charlotte EP2: Requiem Aeternam Deo is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 557630
  },
  {
    title: "COMPOUND",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "COMPOUND is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 615120
  },
  {
    title: "Backyard Baseball '97",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Backyard Baseball '97 is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3170540
  },
  {
    title: "Brutal Orchestra",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Brutal Orchestra is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1734320
  },
  {
    title: "Vampire Survivors: Ode to Castlevania",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Vampire Survivors: Ode to Castlevania is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3210350
  },
  {
    title: "Horsey Game",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Horsey Game is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3602570
  },
  {
    title: "Cattails: Wildwood Story",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Cattails: Wildwood Story is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1882500
  },
  {
    title: "Tribal Hunter",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Tribal Hunter is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1379870
  },
  {
    title: "Proverbs",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Proverbs is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3083300
  },
  {
    title: "My succubus Kukula",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "My succubus Kukula is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2848420
  },
  {
    title: "Omelet You Cook",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Omelet You Cook is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3205380
  },
  {
    title: "A Space For The Unbound - Prologue",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "A Space For The Unbound - Prologue is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1201280
  },
  {
    title: "永冻之壳 The Shell of Permafrost",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "永冻之壳 The Shell of Permafrost is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 976940
  },
  {
    title: "Fear the Spotlight",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Fear the Spotlight is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1959390
  },
  {
    title: "沉睡的法则 Things as They Are",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "沉睡的法则 Things as They Are is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 965820
  },
  {
    title: "Wheelchair Wizards",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Wheelchair Wizards is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3832630
  },
  {
    title: "Enjoy the Diner",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Enjoy the Diner is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2336980
  },
  {
    title: "Far Fishing",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Far Fishing is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3723470
  },
  {
    title: "Toree 2",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Toree 2 is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1722620
  },
  {
    title: "Kukoro: Stream chat games",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Kukoro: Stream chat games is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1166990
  },
  {
    title: "Mudborne: Frog Management Sim",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Mudborne: Frog Management Sim is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2355150
  },
  {
    title: "Lost Wiki: Kozlovka",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Lost Wiki: Kozlovka is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 4018950
  },
  {
    title: "Beatblock",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Beatblock is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3045200
  },
  {
    title: "Blackwell Epiphany",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Blackwell Epiphany is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 236930
  },
  {
    title: "Momotype",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Momotype is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1822190
  },
  {
    title: "Deep Sleep Trilogy",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Deep Sleep Trilogy is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1146510
  },
  {
    title: "Master of Magic Classic",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Master of Magic Classic is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1146370
  },
  {
    title: "Evil Egg",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Evil Egg is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3651950
  },
  {
    title: "Shogun Showdown: Prologue",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Shogun Showdown: Prologue is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2316330
  },
  {
    title: "Replicube",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Replicube is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3401490
  },
  {
    title: "Zombie Estate 2",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Zombie Estate 2 is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 512490
  },
  {
    title: "Electoral Carnage",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Electoral Carnage is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3706810
  },
  {
    title: "Bahamut2-dragon's bride",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Bahamut2-dragon's bride is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1673190
  },
  {
    title: "The Deadseat",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "The Deadseat is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3667230
  },
  {
    title: "FoE Remains",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "FoE Remains is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3908900
  },
  {
    title: "Come out, cat",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Come out, cat is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3930300
  },
  {
    title: "Slider",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Slider is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1916890
  },
  {
    title: "DAVE THE DIVER",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "DAVE THE DIVER is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1868140
  },
  {
    title: "Inscryption",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Inscryption is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1092790
  },
  {
    title: "Cookie Clicker",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Cookie Clicker is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1454400
  },
  {
    title: "Your Only Move Is HUSTLE",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Your Only Move Is HUSTLE is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2212330
  },
  {
    title: "Clone Drone in the Danger Zone",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Clone Drone in the Danger Zone is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 597170
  },
  {
    title: "Rivals of Aether",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Rivals of Aether is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 383980
  },
  {
    title: "Milk inside a bag of milk inside a bag of milk",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Milk inside a bag of milk inside a bag of milk is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1392820
  },
  {
    title: "Milk outside a bag of milk outside a bag of milk",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Milk outside a bag of milk outside a bag of milk is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1604000
  },
  {
    title: "The Test",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "The Test is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1241510
  },
  {
    title: "Streets of Rogue",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Streets of Rogue is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 512900
  },
  {
    title: "Rusty's Retirement",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Rusty's Retirement is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2666510
  },
  {
    title: "Until Then",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Until Then is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1574820
  },
  {
    title: "Vampire Crawlers: The Turbo Wildcard from Vampire Survivors",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Vampire Crawlers: The Turbo Wildcard from Vampire Survivors is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3265700
  },
  {
    title: "Tiny Rogues",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Tiny Rogues is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2088570
  },
  {
    title: "Kindergarten",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Kindergarten is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 589590
  },
  {
    title: "Kingdom Rush Frontiers - Tower Defense",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Kingdom Rush Frontiers - Tower Defense is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 458710
  },
  {
    title: "No Case Should Remain Unsolved",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "No Case Should Remain Unsolved is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2676840
  },
  {
    title: "Coloring Pixels",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Coloring Pixels is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 897330
  },
  {
    title: "There Is No Game: Jam Edition 2015",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "There Is No Game: Jam Edition 2015 is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1241700
  },
  {
    title: "Devil Daggers",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Devil Daggers is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 422970
  },
  {
    title: "Krita",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Krita is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 280680
  },
  {
    title: "Rusted Warfare - RTS",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Rusted Warfare - RTS is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 647960
  },
  {
    title: "Bit Blaster XL",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Bit Blaster XL is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 433950
  },
  {
    title: "枝江往事",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "枝江往事 is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1641270
  },
  {
    title: "Boneraiser Minions",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Boneraiser Minions is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1944570
  },
  {
    title: "PAC-MAN™ Championship Edition DX+",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "PAC-MAN™ Championship Edition DX+ is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 236450
  },
  {
    title: "SUPER CHICKEN JUMPER",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "SUPER CHICKEN JUMPER is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 584640
  },
  {
    title: "DEADBOLT",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "DEADBOLT is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 394970
  },
  {
    title: "Tails Noir: Prologue",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Tails Noir: Prologue is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 992310
  },
  {
    title: "LiEat",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "LiEat is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 373770
  },
  {
    title: "Beyond Citadel",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Beyond Citadel is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 3371240
  },
  {
    title: "Voidigo",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Voidigo is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1304680
  },
  {
    title: "Coloring Game 2",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Free" as GamePrice,
    mode: "Online" as GameMode,
    note: "Coloring Game 2 is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1216200
  },
  {
    title: "Progressbar95",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Progressbar95 is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 1304550
  },
  {
    title: "Freedom Planet",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Freedom Planet is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 248310
  },
  {
    title: "Ace Attorney Investigations Collection",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Ace Attorney Investigations Collection is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 2401970
  },
  {
    title: "Star of Providence",
    genre: "Indie" as GameGenre,
    minRam: "2GB" as GameRam,
    gpu: "Integrated Graphics" as GameGpu,
    price: "Paid" as GamePrice,
    mode: "Offline" as GameMode,
    note: "Star of Providence is a lightweight indie pick that is worth trying on old laptops and low-end PCs.",
    steamAppId: 603960
  }
];
