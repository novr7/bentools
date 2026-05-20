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
  coverUrl?: string;
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
  if (game.coverUrl) {
    return game.coverUrl;
  }

  const externalCoverBaseUrl = process.env.NEXT_PUBLIC_LOW_END_GAME_COVER_BASE_URL;
  if (externalCoverBaseUrl && game.steamAppId) {
    return `${externalCoverBaseUrl.replace(/\/$/, "")}/${game.steamAppId}.jpg`;
  }

  if (!game.steamAppId) {
    return "";
  }

  return `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${game.steamAppId}/header.jpg`;
}
