"use client";

import { useMemo, useState } from "react";

type GameCategory = "Obby" | "Horror" | "Anime" | "RP";
type CategoryFilter = "All" | GameCategory;
type MoodFilter = "Any" | "Chill" | "Scary" | "Competitive" | "Social";

type RobloxGame = {
  name: string;
  category: GameCategory;
  mood: Exclude<MoodFilter, "Any">;
};

const categories: CategoryFilter[] = ["All", "Obby", "Horror", "Anime", "RP"];
const moods: MoodFilter[] = ["Any", "Chill", "Scary", "Competitive", "Social"];

const games: RobloxGame[] = [
  { name: "Tower of Hell", category: "Obby", mood: "Competitive" },
  { name: "Mega Easy Obby", category: "Obby", mood: "Chill" },
  { name: "Cotton Obby", category: "Obby", mood: "Chill" },
  { name: "Escape Running Head", category: "Obby", mood: "Competitive" },
  { name: "Barry's Prison Run", category: "Obby", mood: "Competitive" },
  { name: "Speed Run 4", category: "Obby", mood: "Competitive" },
  { name: "Mega Fun Obby", category: "Obby", mood: "Chill" },
  { name: "Escape School Obby", category: "Obby", mood: "Chill" },
  { name: "Escape Grandma's House Obby", category: "Obby", mood: "Chill" },
  { name: "Escape Papa Pizza's Pizzeria", category: "Obby", mood: "Chill" },
  { name: "Impossible Squid Game Obby", category: "Obby", mood: "Competitive" },
  { name: "Rainbow Friends Obby", category: "Obby", mood: "Scary" },
  { name: "Parkour", category: "Obby", mood: "Competitive" },
  { name: "Flood Escape 2", category: "Obby", mood: "Competitive" },
  { name: "Obby Creator", category: "Obby", mood: "Social" },
  { name: "DOORS", category: "Horror", mood: "Scary" },
  { name: "Rainbow Friends", category: "Horror", mood: "Scary" },
  { name: "The Mimic", category: "Horror", mood: "Scary" },
  { name: "Piggy", category: "Horror", mood: "Scary" },
  { name: "Apeirophobia", category: "Horror", mood: "Scary" },
  { name: "Pressure", category: "Horror", mood: "Scary" },
  { name: "Break In 2", category: "Horror", mood: "Social" },
  { name: "3008", category: "Horror", mood: "Scary" },
  { name: "The Intruder", category: "Horror", mood: "Scary" },
  { name: "Geisha", category: "Horror", mood: "Scary" },
  { name: "Evade", category: "Horror", mood: "Competitive" },
  { name: "Spider", category: "Horror", mood: "Scary" },
  { name: "Bear", category: "Horror", mood: "Scary" },
  { name: "Elmira", category: "Horror", mood: "Scary" },
  { name: "Forgotten Memories", category: "Horror", mood: "Scary" },
  { name: "Blox Fruits", category: "Anime", mood: "Competitive" },
  { name: "Anime Fighters Simulator", category: "Anime", mood: "Chill" },
  { name: "Anime Champions Simulator", category: "Anime", mood: "Competitive" },
  { name: "Anime Defenders", category: "Anime", mood: "Competitive" },
  { name: "Anime Last Stand", category: "Anime", mood: "Competitive" },
  { name: "Anime Vanguards", category: "Anime", mood: "Competitive" },
  { name: "All Star Tower Defense", category: "Anime", mood: "Competitive" },
  { name: "Shindo Life", category: "Anime", mood: "Social" },
  { name: "Project Slayers", category: "Anime", mood: "Competitive" },
  { name: "King Legacy", category: "Anime", mood: "Competitive" },
  { name: "Grand Piece Online", category: "Anime", mood: "Competitive" },
  { name: "Anime Dimensions Simulator", category: "Anime", mood: "Chill" },
  { name: "Demonfall", category: "Anime", mood: "Competitive" },
  { name: "Heroes Battlegrounds", category: "Anime", mood: "Competitive" },
  { name: "A One Piece Game", category: "Anime", mood: "Social" },
  { name: "Brookhaven RP", category: "RP", mood: "Social" },
  { name: "Adopt Me!", category: "RP", mood: "Social" },
  { name: "Berry Avenue", category: "RP", mood: "Social" },
  { name: "Livetopia", category: "RP", mood: "Social" },
  { name: "MeepCity", category: "RP", mood: "Social" },
  { name: "Royale High", category: "RP", mood: "Social" },
  { name: "Welcome to Bloxburg", category: "RP", mood: "Chill" },
  { name: "Twilight Daycare", category: "RP", mood: "Social" },
  { name: "Maple Hospital", category: "RP", mood: "Social" },
  { name: "Emergency Hamburg", category: "RP", mood: "Social" },
  { name: "Greenville", category: "RP", mood: "Chill" },
  { name: "ER:LC", category: "RP", mood: "Social" },
  { name: "Cabin Crew Simulator", category: "RP", mood: "Chill" },
  { name: "Restaurant Tycoon 2", category: "RP", mood: "Chill" },
  { name: "Club Roblox", category: "RP", mood: "Social" }
];

function pickRandomGame(list: RobloxGame[]): RobloxGame {
  return list[Math.floor(Math.random() * list.length)];
}

export function RandomGamePicker() {
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [mood, setMood] = useState<MoodFilter>("Any");
  const filteredGames = useMemo(
    () =>
      games.filter(
        (game) =>
          (category === "All" || game.category === category) &&
          (mood === "Any" || game.mood === mood)
      ),
    [category, mood]
  );
  const [pickedGame, setPickedGame] = useState<RobloxGame>(() =>
    pickRandomGame(games)
  );

  function handlePick() {
    setPickedGame(pickRandomGame(filteredGames.length ? filteredGames : games));
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-soft sm:p-6">
      <div className="grid gap-4 sm:grid-cols-3 sm:items-end">
        <div className="w-full sm:max-w-xs">
          <label className="block text-sm font-bold text-slate-800" htmlFor="game-category">
            Genre
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
        <div className="w-full sm:max-w-xs">
          <label className="block text-sm font-bold text-slate-800" htmlFor="game-mood">
            Mood
          </label>
          <select
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-4 text-base font-semibold text-slate-950 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            id="game-mood"
            onChange={(event) => setMood(event.target.value as MoodFilter)}
            value={mood}
          >
            {moods.map((item) => (
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
          Genre: {pickedGame.category} | Mood: {pickedGame.mood}
        </p>
      </div>
    </div>
  );
}
