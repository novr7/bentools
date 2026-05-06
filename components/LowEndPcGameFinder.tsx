"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
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

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params: Record<string, string | number>
    ) => void;
  }
}

type AnyFilter<T extends string> = T | "Any";

type GameFilters = {
  ram: AnyFilter<GameRam>;
  gpu: AnyFilter<GameGpu>;
  genre: AnyFilter<GameGenre>;
  price: AnyFilter<GamePrice>;
  mode: AnyFilter<GameMode>;
};

type SortMode = "best-performance" | "small-size";
type QuickFilter =
  | "2gb"
  | "4gb"
  | "no-gpu"
  | "under-1gb"
  | "free"
  | "multiplayer";

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
  const [sortMode, setSortMode] = useState<SortMode>("best-performance");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFiltering, setIsFiltering] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copiedTitle, setCopiedTitle] = useState("");

  const matchingGames = useMemo(() => {
    return lowEndPcGames
      .filter((game) => matchesFilters(game, activeFilters))
      .filter((game) =>
        game.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
      )
      .sort((first, second) => sortGames(first, second, sortMode));
  }, [activeFilters, searchQuery, sortMode]);

  const smoothGames = matchingGames.filter(isSmoothPick);
  const playableGames = matchingGames.length - smoothGames.length;
  const featuredGames = getFeaturedGames();

  useEffect(() => {
    const sentDepths = new Set<number>();
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 900);
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) {
        return;
      }

      const depth = Math.round((window.scrollY / scrollable) * 100);
      for (const target of [25, 50, 75, 90]) {
        if (depth >= target && !sentDepths.has(target)) {
          sentDepths.add(target);
          trackEvent("game_finder_scroll_depth", { depth: target });
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  async function copyTitle(title: string) {
    await navigator.clipboard.writeText(title);
    trackEvent("game_card_click", { game_title: title, action: "copy" });
    setCopiedTitle(title);
    window.setTimeout(() => setCopiedTitle(""), 1400);
  }

  function applyFilters(nextFilters = draftFilters) {
    setIsFiltering(true);
    setActiveFilters(nextFilters);
    trackEvent("game_finder_filter_click", {
      ram: nextFilters.ram,
      gpu: nextFilters.gpu,
      genre: nextFilters.genre,
      price: nextFilters.price,
      mode: nextFilters.mode
    });
    trackEvent("game_finder_top_specs", {
      ram: nextFilters.ram,
      gpu: nextFilters.gpu
    });
    window.setTimeout(() => setIsFiltering(false), 180);
  }

  function applyQuickFilter(filter: QuickFilter) {
    const quickFilters: Record<QuickFilter, GameFilters> = {
      "2gb": { ...defaultFilters, ram: "2GB" },
      "4gb": { ...defaultFilters, ram: "4GB" },
      "no-gpu": { ...defaultFilters, gpu: "Integrated Graphics" },
      "under-1gb": { ...defaultFilters, ram: "2GB", genre: "Indie" },
      free: { ...defaultFilters, price: "Free" },
      multiplayer: { ...defaultFilters, mode: "Online" }
    };
    const nextFilters = quickFilters[filter];
    setDraftFilters(nextFilters);
    if (filter === "under-1gb") {
      setSortMode("small-size");
    }
    trackEvent("game_finder_quick_filter", { filter });
    applyFilters(nextFilters);
  }

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-soft sm:p-6">
      <div className="sticky top-3 z-20 rounded-lg border border-slate-200 bg-slate-950 p-4 text-white shadow-soft sm:p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
              Ben Game Finder
            </p>
            <h2 className="mt-2 text-2xl font-bold">
              Best Games for Your PC
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-300">
            Filter a static list of {lowEndPcGames.length} lightweight PC games
            with cover images for old laptops, weak GPUs, and low RAM setups.
          </p>
        </div>

        <div className="mt-5 rounded-lg border border-emerald-300/30 bg-white/10 p-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
            Top Picks
          </p>
          <h3 className="mt-1 text-xl font-bold">Best games for your PC:</h3>
          <ul className="mt-3 grid gap-2 text-sm font-semibold text-white sm:grid-cols-3">
            {["Stardew Valley", "Terraria", "Undertale"].map((title) => (
              <li className="rounded-md bg-white/10 px-3 py-2" key={title}>
                {title}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-6">
          <QuickFilterButton label="Games for 2GB RAM" onClick={() => applyQuickFilter("2gb")} />
          <QuickFilterButton label="Games for 4GB RAM" onClick={() => applyQuickFilter("4gb")} />
          <QuickFilterButton label="No GPU Games" onClick={() => applyQuickFilter("no-gpu")} />
          <QuickFilterButton label="Games Under 1GB" onClick={() => applyQuickFilter("under-1gb")} />
          <QuickFilterButton label="Free Games" onClick={() => applyQuickFilter("free")} />
          <QuickFilterButton label="Multiplayer Games" onClick={() => applyQuickFilter("multiplayer")} />
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
            onClick={() => applyFilters()}
            type="button"
          >
            Find Games
          </button>
          <button
            className="rounded-md border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            onClick={() => {
              setDraftFilters(defaultFilters);
              setSearchQuery("");
              applyFilters(defaultFilters);
            }}
            type="button"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="mt-6">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700">
            Search game names
          </span>
          <input
            className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
            onChange={(event) => {
              setSearchQuery(event.target.value);
              trackEvent("game_finder_search_usage", {
                length: event.target.value.length
              });
            }}
            placeholder="Search Stardew Valley, Terraria, Undertale..."
            value={searchQuery}
          />
        </label>
      </div>

      <section className="mt-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Featured Picks
        </p>
        <h2 className="mt-1 text-2xl font-bold text-slate-950">
          Best Low-End PC Games Right Now
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredGames.map((game) => (
            <FeaturedGameCard game={game} key={game.title} />
          ))}
        </div>
      </section>

      <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Result Summary
          </p>
          <h3 className="text-xl font-bold text-slate-950">
            Your PC can run {matchingGames.length} games smoothly
          </h3>
          <div className="mt-3 grid gap-3 text-sm sm:grid-cols-2">
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-2xl font-bold text-emerald-800">
                {smoothGames.length}
              </p>
              <p className="mt-1 font-semibold text-slate-700">
                games smoothly
              </p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
              <p className="text-2xl font-bold text-amber-800">
                {playableGames}
              </p>
              <p className="mt-1 font-semibold text-slate-700">
                games playable with low settings
              </p>
            </div>
          </div>
        </div>
        <label className="block min-w-52">
          <span className="mb-2 block text-sm font-semibold text-slate-700">
            Sort results
          </span>
          <select
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-3 text-sm text-slate-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
            onChange={(event) => setSortMode(event.target.value as SortMode)}
            value={sortMode}
          >
            <option value="best-performance">Best performance</option>
            <option value="small-size">Small size</option>
          </select>
        </label>
      </div>

      {isFiltering ? (
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              className="h-96 animate-pulse rounded-lg border border-slate-200 bg-slate-100"
              key={index}
            />
          ))}
        </div>
      ) : matchingGames.length > 0 ? (
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {matchingGames.map((game) => (
            <article
              className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-soft"
              key={`${game.title}-${game.genre}`}
              onClick={() =>
                trackEvent("game_card_click", {
                  game_title: game.title,
                  action: "open_card"
                })
              }
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
                    <PerformanceLabel game={game} />
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
                <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                    Quick low-spec guide
                  </p>
                  <div className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
                    <p>
                      <span className="font-semibold text-slate-950">
                        Why it fits:
                      </span>{" "}
                      {getPerformanceSummary(game)}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-950">
                        Best settings:
                      </span>{" "}
                      {getBestSettings(game)}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-950">
                        Play this if:
                      </span>{" "}
                      {getPlayStyle(game)}
                    </p>
                  </div>
                </div>
                <SimilarGames game={game} />
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
      {showScrollTop ? (
        <button
          className="fixed bottom-5 right-5 z-30 rounded-full bg-slate-950 px-4 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-emerald-700"
          onClick={() => {
            trackEvent("game_finder_scroll_top", { action: "click" });
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          type="button"
        >
          Back to top
        </button>
      ) : null}
    </section>
  );
}

function QuickFilterButton({
  label,
  onClick
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      className="rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:border-emerald-300 hover:bg-emerald-300/15"
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
}

function FeaturedGameCard({ game }: { game: LowEndPcGame }) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-soft">
      <GameCover game={game} />
      <div className="p-4">
        <h3 className="font-bold text-slate-950">{game.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{game.note}</p>
        <PerformanceLabel game={game} />
      </div>
    </article>
  );
}

function PerformanceLabel({ game }: { game: LowEndPcGame }) {
  const label = getPerformanceLabel(game);
  const className =
    label === "Runs Smoothly"
      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
      : label === "Playable"
        ? "border-amber-200 bg-amber-50 text-amber-700"
        : "border-rose-200 bg-rose-50 text-rose-700";

  return (
    <span className={`mt-3 inline-flex rounded-full border px-3 py-1 text-xs font-bold ${className}`}>
      {label}
    </span>
  );
}

function SimilarGames({ game }: { game: LowEndPcGame }) {
  const similarGames = lowEndPcGames
    .filter((item) => item.genre === game.genre && item.title !== game.title)
    .slice(0, 3);

  if (similarGames.length === 0) {
    return null;
  }

  return (
    <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4">
      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
        Similar games
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {similarGames.map((item) => (
          <span
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
            key={item.title}
          >
            {item.title}
          </span>
        ))}
      </div>
    </div>
  );
}

function getFeaturedGames() {
  const titles = [
    "Stardew Valley",
    "Terraria",
    "Undertale",
    "Hotline Miami",
    "LIMBO",
    "FTL: Faster Than Light",
    "Vampire Survivors",
    "Celeste"
  ];

  return titles
    .map((title) => lowEndPcGames.find((game) => game.title === title))
    .filter((game): game is LowEndPcGame => Boolean(game));
}

function getPerformanceLabel(game: LowEndPcGame) {
  if (isSmoothPick(game)) {
    return "Runs Smoothly";
  }

  if (game.minRam === "8GB" || game.gpu === "Low-end Dedicated GPU") {
    return "Might Lag";
  }

  return "Playable";
}

function trackEvent(name: string, params: Record<string, string | number>) {
  window.gtag?.("event", name, params);
}

function isSmoothPick(game: LowEndPcGame) {
  return ramScore(game.minRam) <= 4 && game.gpu !== "Low-end Dedicated GPU";
}

function sortGames(first: LowEndPcGame, second: LowEndPcGame, sortMode: SortMode) {
  if (sortMode === "small-size") {
    return sizeScore(first) - sizeScore(second);
  }

  return (
    ramScore(first.minRam) - ramScore(second.minRam) ||
    gpuScore(first.gpu) - gpuScore(second.gpu) ||
    first.title.localeCompare(second.title)
  );
}

function sizeScore(game: LowEndPcGame) {
  const genreScore =
    game.genre === "Indie" || game.genre === "Strategy" || game.genre === "RPG"
      ? 0
      : game.genre === "Simulation" || game.genre === "Sandbox"
        ? 1
        : 2;

  return genreScore + ramScore(game.minRam) + gpuScore(game.gpu);
}

function getPerformanceSummary(game: LowEndPcGame) {
  if (game.gpu === "Integrated Graphics") {
    return `${game.title} is a safer low-end pick because it does not need a dedicated GPU and is a good match for integrated graphics PCs.`;
  }

  if (game.gpu === "Intel HD") {
    return `${game.title} is best for old laptops with Intel HD or similar integrated graphics, especially when visual settings are reduced.`;
  }

  return `${game.title} can still work on weak PCs, but it is a better fit when the computer has a low-end dedicated GPU.`;
}

function getBestSettings(game: LowEndPcGame) {
  const resolution =
    game.minRam === "2GB"
      ? "Use 720p or lower, close browsers, and keep effects low"
      : "Start at 720p, lower shadows, and turn off extra effects";

  if (game.genre === "Racing" || game.genre === "Action" || game.genre === "Horror") {
    return `${resolution} to keep frame rate stable during faster scenes.`;
  }

  if (game.genre === "Simulation" || game.genre === "Strategy" || game.genre === "Sandbox") {
    return `${resolution}; large maps, heavy saves, or many objects may need extra CPU and RAM.`;
  }

  return `${resolution}; this type of game usually stays comfortable on older laptops.`;
}

function getPlayStyle(game: LowEndPcGame) {
  const modeText =
    game.mode === "Offline"
      ? "you want a low-stress offline game that does not depend on internet quality"
      : "you want an online game that can still run on weaker hardware";

  const priceText =
    game.price === "Free"
      ? " and prefer testing a free game before spending money"
      : " and want a polished paid game that is still friendly to old PCs";

  return `${modeText}${priceText}.`;
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
