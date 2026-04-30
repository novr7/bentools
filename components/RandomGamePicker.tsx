"use client";

import { useMemo, useState } from "react";

type GameCategory = "Obby" | "Horror" | "Anime" | "RP";
type CategoryFilter = "All" | GameCategory;

type RobloxGame = {
  name: string;
  category: GameCategory;
};

const categories: CategoryFilter[] = ["All", "Obby", "Horror", "Anime", "RP"];

const games: RobloxGame[] = [
  { name: "Tower of Hell", category: "Obby" },
  { name: "Mega Easy Obby", category: "Obby" },
  { name: "Cotton Obby", category: "Obby" },
  { name: "Escape Running Head", category: "Obby" },
  { name: "Barry's Prison Run", category: "Obby" },
  { name: "Speed Run 4", category: "Obby" },
  { name: "Mega Fun Obby", category: "Obby" },
  { name: "Escape School Obby", category: "Obby" },
  { name: "Escape Grandma's House Obby", category: "Obby" },
  { name: "Escape Papa Pizza's Pizzeria", category: "Obby" },
  { name: "Impossible Squid Game Obby", category: "Obby" },
  { name: "Rainbow Friends Obby", category: "Obby" },
  { name: "Parkour", category: "Obby" },
  { name: "Flood Escape 2", category: "Obby" },
  { name: "Obby Creator", category: "Obby" },
  { name: "DOORS", category: "Horror" },
  { name: "Rainbow Friends", category: "Horror" },
  { name: "The Mimic", category: "Horror" },
  { name: "Piggy", category: "Horror" },
  { name: "Apeirophobia", category: "Horror" },
  { name: "Pressure", category: "Horror" },
  { name: "Break In 2", category: "Horror" },
  { name: "3008", category: "Horror" },
  { name: "The Intruder", category: "Horror" },
  { name: "Geisha", category: "Horror" },
  { name: "Evade", category: "Horror" },
  { name: "Spider", category: "Horror" },
  { name: "Bear", category: "Horror" },
  { name: "Elmira", category: "Horror" },
  { name: "Forgotten Memories", category: "Horror" },
  { name: "Blox Fruits", category: "Anime" },
  { name: "Anime Fighters Simulator", category: "Anime" },
  { name: "Anime Champions Simulator", category: "Anime" },
  { name: "Anime Defenders", category: "Anime" },
  { name: "Anime Last Stand", category: "Anime" },
  { name: "Anime Vanguards", category: "Anime" },
  { name: "All Star Tower Defense", category: "Anime" },
  { name: "Shindo Life", category: "Anime" },
  { name: "Project Slayers", category: "Anime" },
  { name: "King Legacy", category: "Anime" },
  { name: "Grand Piece Online", category: "Anime" },
  { name: "Anime Dimensions Simulator", category: "Anime" },
  { name: "Demonfall", category: "Anime" },
  { name: "Heroes Battlegrounds", category: "Anime" },
  { name: "A One Piece Game", category: "Anime" },
  { name: "Brookhaven RP", category: "RP" },
  { name: "Adopt Me!", category: "RP" },
  { name: "Berry Avenue", category: "RP" },
  { name: "Livetopia", category: "RP" },
  { name: "MeepCity", category: "RP" },
  { name: "Royale High", category: "RP" },
  { name: "Welcome to Bloxburg", category: "RP" },
  { name: "Twilight Daycare", category: "RP" },
  { name: "Maple Hospital", category: "RP" },
  { name: "Emergency Hamburg", category: "RP" },
  { name: "Greenville", category: "RP" },
  { name: "ER:LC", category: "RP" },
  { name: "Cabin Crew Simulator", category: "RP" },
  { name: "Restaurant Tycoon 2", category: "RP" },
  { name: "Club Roblox", category: "RP" }
];

function pickRandomGame(list: RobloxGame[]): RobloxGame {
  return list[Math.floor(Math.random() * list.length)];
}

export function RandomGamePicker() {
  const [category, setCategory] = useState<CategoryFilter>("All");
  const filteredGames = useMemo(
    () =>
      category === "All"
        ? games
        : games.filter((game) => game.category === category),
    [category]
  );
  const [pickedGame, setPickedGame] = useState<RobloxGame>(() =>
    pickRandomGame(games)
  );

  function handlePick() {
    setPickedGame(pickRandomGame(filteredGames));
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-soft sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="w-full sm:max-w-xs">
          <label className="block text-sm font-bold text-slate-800" htmlFor="game-category">
            Category
          </label>
          <select
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-4 text-base font-semibold text-slate-950 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            id="game-category"
            onChange={(event) =>
              setCategory(event.target.value as CategoryFilter)
            }
            value={category}
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <button
          className="rounded-lg bg-blue-700 px-5 py-4 text-base font-bold text-white transition hover:bg-blue-800"
          onClick={handlePick}
          type="button"
        >
          Pick Random Game
        </button>
      </div>

      <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-5">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
          Your random pick
        </p>
        <h2 className="mt-2 text-3xl font-bold text-slate-950">
          {pickedGame.name}
        </h2>
        <p className="mt-3 inline-flex rounded-md bg-white px-3 py-2 text-sm font-bold text-slate-700">
          Category: {pickedGame.category}
        </p>
      </div>
    </div>
  );
}
