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

export const lowEndPcGames: LowEndPcGame[] = [
  {
    title: "Stardew Valley",
    genre: "Simulation",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Paid",
    mode: "Offline",
    note: "Runs well on older laptops and low-end PCs."
  },
  {
    title: "Terraria",
    genre: "Sandbox",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Paid",
    mode: "Offline",
    note: "Lightweight 2D sandbox game with low hardware needs."
  },
  {
    title: "Undertale",
    genre: "RPG",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Paid",
    mode: "Offline",
    note: "Retro visuals make it friendly for old laptops."
  },
  {
    title: "FTL: Faster Than Light",
    genre: "Strategy",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Paid",
    mode: "Offline",
    note: "A light strategy game that works well without a strong GPU."
  },
  {
    title: "Into the Breach",
    genre: "Strategy",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Paid",
    mode: "Offline",
    note: "Turn-based battles keep performance steady on weak PCs."
  },
  {
    title: "Celeste",
    genre: "Indie",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Paid",
    mode: "Offline",
    note: "Fast 2D platforming with very modest system needs."
  },
  {
    title: "Brawlhalla",
    genre: "Action",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Free",
    mode: "Online",
    note: "Free fighting game that scales well on low settings."
  },
  {
    title: "Old School RuneScape",
    genre: "RPG",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Free",
    mode: "Online",
    note: "Classic MMO style that is friendly to older computers."
  },
  {
    title: "Among Us",
    genre: "Indie",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Paid",
    mode: "Online",
    note: "Simple 2D visuals work well on low-spec laptops."
  },
  {
    title: "Don't Starve",
    genre: "Indie",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Paid",
    mode: "Offline",
    note: "Stylized survival game with low graphics requirements."
  },
  {
    title: "Papers, Please",
    genre: "Simulation",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Paid",
    mode: "Offline",
    note: "Minimal visuals make it reliable on old PCs."
  },
  {
    title: "Hotline Miami",
    genre: "Action",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Paid",
    mode: "Offline",
    note: "Fast top-down action with lightweight graphics."
  },
  {
    title: "The Binding of Isaac: Rebirth",
    genre: "Action",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Paid",
    mode: "Offline",
    note: "Low-spec roguelike action for short sessions."
  },
  {
    title: "Spelunky",
    genre: "Indie",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Paid",
    mode: "Offline",
    note: "Lightweight platforming that suits old laptops."
  },
  {
    title: "Cave Story+",
    genre: "Indie",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Paid",
    mode: "Offline",
    note: "Classic 2D adventure with tiny performance demands."
  },
  {
    title: "Plants vs. Zombies",
    genre: "Strategy",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Paid",
    mode: "Offline",
    note: "Casual tower defense that runs smoothly on weak PCs."
  },
  {
    title: "Peggle Deluxe",
    genre: "Indie",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Paid",
    mode: "Offline",
    note: "Very light puzzle gameplay for older machines."
  },
  {
    title: "World of Goo",
    genre: "Strategy",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Paid",
    mode: "Offline",
    note: "Physics puzzles with simple, low-spec-friendly scenes."
  },
  {
    title: "Limbo",
    genre: "Indie",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Paid",
    mode: "Offline",
    note: "Minimal art style keeps the game easy to run."
  },
  {
    title: "Broforce",
    genre: "Action",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Paid",
    mode: "Offline",
    note: "Pixel action that can run on modest hardware."
  },
  {
    title: "OpenTTD",
    genre: "Simulation",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Free",
    mode: "Offline",
    note: "Free transport management game for very old PCs."
  },
  {
    title: "Dwarf Fortress Classic",
    genre: "Simulation",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Free",
    mode: "Offline",
    note: "ASCII-style classic that focuses on CPU and simulation."
  },
  {
    title: "Cataclysm: Dark Days Ahead",
    genre: "RPG",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Free",
    mode: "Offline",
    note: "Free roguelike survival game with lightweight visuals."
  },
  {
    title: "Battle for Wesnoth",
    genre: "Strategy",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Free",
    mode: "Offline",
    note: "Open-source turn-based strategy that runs on old hardware."
  },
  {
    title: "SuperTuxKart",
    genre: "Racing",
    minRam: "2GB",
    gpu: "Intel HD",
    price: "Free",
    mode: "Offline",
    note: "Free kart racing with settings that can be lowered."
  },
  {
    title: "TrackMania Nations Forever",
    genre: "Racing",
    minRam: "2GB",
    gpu: "Intel HD",
    price: "Free",
    mode: "Online",
    note: "Older racing game with a strong low-spec reputation."
  },
  {
    title: "Need for Speed: Most Wanted 2005",
    genre: "Racing",
    minRam: "2GB",
    gpu: "Intel HD",
    price: "Paid",
    mode: "Offline",
    note: "Classic racer that can run on many older dedicated or Intel HD GPUs."
  },
  {
    title: "FlatOut 2",
    genre: "Racing",
    minRam: "2GB",
    gpu: "Intel HD",
    price: "Paid",
    mode: "Offline",
    note: "Older arcade racing game with low requirements."
  },
  {
    title: "Portal",
    genre: "Indie",
    minRam: "2GB",
    gpu: "Intel HD",
    price: "Paid",
    mode: "Offline",
    note: "Classic puzzle game that runs well on many old PCs."
  },
  {
    title: "Half-Life 2",
    genre: "Action",
    minRam: "2GB",
    gpu: "Intel HD",
    price: "Paid",
    mode: "Offline",
    note: "Older Source engine game with flexible graphics settings."
  },
  {
    title: "Counter-Strike 1.6",
    genre: "Action",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Paid",
    mode: "Online",
    note: "Very old competitive shooter that runs on weak computers."
  },
  {
    title: "Team Fortress 2",
    genre: "Action",
    minRam: "4GB",
    gpu: "Intel HD",
    price: "Free",
    mode: "Online",
    note: "Free Source engine shooter that can work with low settings."
  },
  {
    title: "League of Legends",
    genre: "Strategy",
    minRam: "4GB",
    gpu: "Intel HD",
    price: "Free",
    mode: "Online",
    note: "Popular online game designed to support a wide range of PCs."
  },
  {
    title: "Valorant",
    genre: "Action",
    minRam: "4GB",
    gpu: "Intel HD",
    price: "Free",
    mode: "Online",
    note: "Competitive shooter built for high FPS on accessible hardware."
  },
  {
    title: "Hearthstone",
    genre: "Strategy",
    minRam: "4GB",
    gpu: "Intel HD",
    price: "Free",
    mode: "Online",
    note: "Card battles are easier on weak GPUs than most 3D games."
  },
  {
    title: "Slay the Spire",
    genre: "Strategy",
    minRam: "4GB",
    gpu: "Integrated Graphics",
    price: "Paid",
    mode: "Offline",
    note: "Turn-based deckbuilding works smoothly on low-spec laptops."
  },
  {
    title: "RimWorld",
    genre: "Simulation",
    minRam: "4GB",
    gpu: "Integrated Graphics",
    price: "Paid",
    mode: "Offline",
    note: "Colony simulation with simple graphics and scalable settings."
  },
  {
    title: "Prison Architect",
    genre: "Simulation",
    minRam: "4GB",
    gpu: "Intel HD",
    price: "Paid",
    mode: "Offline",
    note: "Management sim with clear 2D visuals for modest PCs."
  },
  {
    title: "Factorio",
    genre: "Simulation",
    minRam: "4GB",
    gpu: "Intel HD",
    price: "Paid",
    mode: "Offline",
    note: "Runs well early on; large factories can need more CPU power."
  },
  {
    title: "Project Zomboid",
    genre: "Horror",
    minRam: "4GB",
    gpu: "Intel HD",
    price: "Paid",
    mode: "Offline",
    note: "Isometric zombie survival that can be tuned for low-end PCs."
  },
  {
    title: "Darkest Dungeon",
    genre: "RPG",
    minRam: "4GB",
    gpu: "Integrated Graphics",
    price: "Paid",
    mode: "Offline",
    note: "Turn-based RPG with 2D art and low graphics pressure."
  },
  {
    title: "Torchlight II",
    genre: "RPG",
    minRam: "2GB",
    gpu: "Intel HD",
    price: "Paid",
    mode: "Offline",
    note: "Older action RPG that works on many low-spec systems."
  },
  {
    title: "Diablo II: Lord of Destruction",
    genre: "RPG",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Paid",
    mode: "Offline",
    note: "Classic RPG with extremely low modern hardware demands."
  },
  {
    title: "Fallout: New Vegas",
    genre: "RPG",
    minRam: "4GB",
    gpu: "Low-end Dedicated GPU",
    price: "Paid",
    mode: "Offline",
    note: "Older open-world RPG that benefits from a basic dedicated GPU."
  },
  {
    title: "The Elder Scrolls III: Morrowind",
    genre: "RPG",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Paid",
    mode: "Offline",
    note: "Classic RPG that runs on very old PCs."
  },
  {
    title: "The Elder Scrolls IV: Oblivion",
    genre: "RPG",
    minRam: "2GB",
    gpu: "Intel HD",
    price: "Paid",
    mode: "Offline",
    note: "Older 3D RPG that can run with lowered settings."
  },
  {
    title: "Minecraft Bedrock",
    genre: "Sandbox",
    minRam: "4GB",
    gpu: "Intel HD",
    price: "Paid",
    mode: "Online",
    note: "Lower render distance helps it run on low-spec laptops."
  },
  {
    title: "Roblox",
    genre: "Sandbox",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Free",
    mode: "Online",
    note: "Many Roblox experiences run on basic laptops, but heavier games vary."
  },
  {
    title: "Garry's Mod",
    genre: "Sandbox",
    minRam: "4GB",
    gpu: "Intel HD",
    price: "Paid",
    mode: "Online",
    note: "Older Source engine sandbox with performance depending on servers."
  },
  {
    title: "Unturned",
    genre: "Sandbox",
    minRam: "4GB",
    gpu: "Intel HD",
    price: "Free",
    mode: "Online",
    note: "Free survival sandbox with simple visuals and adjustable settings."
  },
  {
    title: "Left 4 Dead 2",
    genre: "Action",
    minRam: "4GB",
    gpu: "Low-end Dedicated GPU",
    price: "Paid",
    mode: "Online",
    note: "Co-op shooter that runs well on older dedicated GPUs."
  },
  {
    title: "Killing Floor",
    genre: "Horror",
    minRam: "2GB",
    gpu: "Low-end Dedicated GPU",
    price: "Paid",
    mode: "Online",
    note: "Older horror shooter for modest dedicated graphics cards."
  },
  {
    title: "Amnesia: The Dark Descent",
    genre: "Horror",
    minRam: "2GB",
    gpu: "Intel HD",
    price: "Paid",
    mode: "Offline",
    note: "Classic horror game that runs on many older PCs."
  },
  {
    title: "SCP - Containment Breach",
    genre: "Horror",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Free",
    mode: "Offline",
    note: "Free horror game with very low minimum requirements."
  },
  {
    title: "Cry of Fear",
    genre: "Horror",
    minRam: "2GB",
    gpu: "Intel HD",
    price: "Free",
    mode: "Offline",
    note: "Free horror title based on an older engine."
  },
  {
    title: "Doki Doki Literature Club",
    genre: "Horror",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Free",
    mode: "Offline",
    note: "Visual novel horror that barely stresses old PCs."
  },
  {
    title: "Hollow Knight",
    genre: "Action",
    minRam: "4GB",
    gpu: "Intel HD",
    price: "Paid",
    mode: "Offline",
    note: "2D action game that can run well at lower settings."
  },
  {
    title: "Dead Cells",
    genre: "Action",
    minRam: "4GB",
    gpu: "Intel HD",
    price: "Paid",
    mode: "Offline",
    note: "Smooth 2D action that works on many low-end laptops."
  },
  {
    title: "Cuphead",
    genre: "Action",
    minRam: "4GB",
    gpu: "Intel HD",
    price: "Paid",
    mode: "Offline",
    note: "2D boss action with modest requirements."
  },
  {
    title: "Hades",
    genre: "Action",
    minRam: "4GB",
    gpu: "Intel HD",
    price: "Paid",
    mode: "Offline",
    note: "Polished action game that is playable on many low-end PCs at low settings."
  },
  {
    title: "Risk of Rain Returns",
    genre: "Action",
    minRam: "4GB",
    gpu: "Intel HD",
    price: "Paid",
    mode: "Offline",
    note: "2D action roguelike suited to modest hardware."
  },
  {
    title: "Age of Empires II HD",
    genre: "Strategy",
    minRam: "4GB",
    gpu: "Intel HD",
    price: "Paid",
    mode: "Offline",
    note: "Classic RTS that remains playable on older computers."
  },
  {
    title: "Command & Conquer: Red Alert 2",
    genre: "Strategy",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Paid",
    mode: "Offline",
    note: "Classic strategy game with very light hardware needs."
  },
  {
    title: "Star Wars: Knights of the Old Republic",
    genre: "RPG",
    minRam: "2GB",
    gpu: "Intel HD",
    price: "Paid",
    mode: "Offline",
    note: "Older story RPG that works well on low-spec PCs."
  },
  {
    title: "Bastion",
    genre: "Action",
    minRam: "2GB",
    gpu: "Integrated Graphics",
    price: "Paid",
    mode: "Offline",
    note: "Light action RPG with simple scenes and low requirements."
  }
];
