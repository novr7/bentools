"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  genreOptions,
  getGameCoverUrl,
  gpuOptions,
  gpuScore,
  lowEndPcGames,
  modeOptions,
  priceOptions,
  ramOptions,
  ramScore,
  type GameGenre,
  type GameGpu,
  type GameMode,
  type GamePrice,
  type GameRam,
  type LowEndPcGame
} from "@/lib/lowEndPcGames";

type AnyFilter<T extends string> = T | "Any";

type GameFilters = {
  ram: AnyFilter<GameRam>;
  gpu: AnyFilter<GameGpu>;
  genre: AnyFilter<GameGenre>;
  price: AnyFilter<GamePrice>;
  mode: AnyFilter<GameMode>;
};

const defaultFilters: GameFilters = {
  ram: "Any",
  gpu: "Any",
  genre: "Any",
  price: "Any",
  mode: "Any"
};

export function LowEndPcGameFinder() {
  const [draftFilters, setDraftFilters] = useState<GameFilters>(defaultFilters);
  const [activeFilters, setActiveFilters] = useState<GameFilters>(defaultFilters);
  const [copiedTitle, setCopiedTitle] = useState("");

  const matchingGames = useMemo(() => {
    return lowEndPcGames.filter((game) => matchesFilters(game, activeFilters));
  }, [activeFilters]);

  async function copyTitle(title: string) {
    await navigator.clipboard.writeText(title);
    setCopiedTitle(title);
    window.setTimeout(() => setCopiedTitle(""), 1400);
  }

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-soft sm:p-6">
      <div className="rounded-lg border border-slate-200 bg-slate-950 p-4 text-white sm:p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
              Ben Game Finder
            </p>
            <h2 className="mt-2 text-2xl font-bold">
              Find low end PC games by your specs
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-300">
            Filter a static list of {lowEndPcGames.length} lightweight PC games
            with cover images for old laptops, weak GPUs, and low RAM setups.
          </p>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <SelectFilter
            label="RAM"
            value={draftFilters.ram}
            options={["Any", ...ramOptions]}
            onChange={(value) =>
              setDraftFilters((current) => ({
                ...current,
                ram: value as GameFilters["ram"]
              }))
            }
          />
          <SelectFilter
            label="GPU"
            value={draftFilters.gpu}
            options={["Any", ...gpuOptions]}
            onChange={(value) =>
              setDraftFilters((current) => ({
                ...current,
                gpu: value as GameFilters["gpu"]
              }))
            }
          />
          <SelectFilter
            label="Genre"
            value={draftFilters.genre}
            options={["Any", ...genreOptions]}
            onChange={(value) =>
              setDraftFilters((current) => ({
                ...current,
                genre: value as GameFilters["genre"]
              }))
            }
          />
          <SelectFilter
            label="Price"
            value={draftFilters.price}
            options={["Any", ...priceOptions]}
            onChange={(value) =>
              setDraftFilters((current) => ({
                ...current,
                price: value as GameFilters["price"]
              }))
            }
          />
          <SelectFilter
            label="Mode"
            value={draftFilters.mode}
            options={["Any", ...modeOptions]}
            onChange={(value) =>
              setDraftFilters((current) => ({
                ...current,
                mode: value as GameFilters["mode"]
              }))
            }
          />
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <button
            className="rounded-md bg-emerald-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-300"
            onClick={() => setActiveFilters(draftFilters)}
            type="button"
          >
            Find Games
          </button>
          <button
            className="rounded-md border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            onClick={() => {
              setDraftFilters(defaultFilters);
              setActiveFilters(defaultFilters);
            }}
            type="button"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-950">
            Matching games
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            Showing {matchingGames.length} recommendations from the static MVP
            dataset.
          </p>
        </div>
      </div>

      {matchingGames.length > 0 ? (
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {matchingGames.map((game) => (
            <article
              className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50"
              key={`${game.title}-${game.genre}`}
            >
              <GameCover game={game} />
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                      {game.genre}
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-slate-950">
                      {game.title}
                    </h3>
                  </div>
                  <button
                    className="shrink-0 rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-bold text-slate-700 transition hover:border-emerald-400 hover:text-emerald-700"
                    onClick={() => copyTitle(game.title)}
                    type="button"
                  >
                    {copiedTitle === game.title ? "Copied" : "Copy"}
                  </button>
                </div>
                <dl className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <GameSpec label="Minimum RAM" value={game.minRam} />
                  <GameSpec label="GPU" value={game.gpu} />
                  <GameSpec label="Price" value={game.price} />
                  <GameSpec label="Mode" value={game.mode} />
                </dl>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {game.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-5 text-slate-800">
          <h3 className="text-lg font-bold">No results found</h3>
          <p className="mt-2 leading-7">
            Try choosing Any for price or mode, switch GPU to Integrated
            Graphics if you are unsure, or select a broader genre like Indie,
            Action, Strategy, or Sandbox.
          </p>
        </div>
      )}
    </section>
  );
}

function GameCover({ game }: { game: LowEndPcGame }) {
  const coverUrl = getGameCoverUrl(game);

  return (
    <div className="relative aspect-[16/7] overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950" />
      <div className="absolute inset-0 flex items-center justify-center px-5 text-center">
        <span className="text-sm font-bold uppercase tracking-wide text-white/70">
          {game.title}
        </span>
      </div>
      {coverUrl ? (
        <Image
          alt={`${game.title} cover image`}
          className="object-cover"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
          src={coverUrl}
        />
      ) : null}
    </div>
  );
}

function matchesFilters(game: LowEndPcGame, filters: GameFilters) {
  const matchesRam =
    filters.ram === "Any" || ramScore(game.minRam) <= ramScore(filters.ram);
  const matchesGpu =
    filters.gpu === "Any" || gpuScore(game.gpu) <= gpuScore(filters.gpu);
  const matchesGenre = filters.genre === "Any" || game.genre === filters.genre;
  const matchesPrice = filters.price === "Any" || game.price === filters.price;
  const matchesMode = filters.mode === "Any" || game.mode === filters.mode;

  return matchesRam && matchesGpu && matchesGenre && matchesPrice && matchesMode;
}

function SelectFilter({
  label,
  value,
  options,
  onChange
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-200">
        {label}
      </span>
      <select
        className="w-full rounded-md border border-white/15 bg-white px-3 py-3 text-sm text-slate-950 outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30"
        onChange={(event) => onChange(event.target.value)}
        value={value}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function GameSpec({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-3">
      <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </dt>
      <dd className="mt-1 font-semibold text-slate-900">{value}</dd>
    </div>
  );
}
