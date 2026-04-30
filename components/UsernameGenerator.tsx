"use client";

import { useMemo, useState } from "react";
import {
  generateRobloxUsernames,
  type UsernameStyle
} from "@/lib/robloxUsername";

const styles: UsernameStyle[] = [
  "Cute",
  "Cool",
  "Anime",
  "Dark",
  "Aesthetic",
  "Gamer"
];

export function UsernameGenerator() {
  const [style, setStyle] = useState<UsernameStyle>("Cute");
  const [seed, setSeed] = useState(0);
  const [copied, setCopied] = useState<string | null>(null);
  const usernames = useMemo(
    () => generateRobloxUsernames(style, 20, seed),
    [seed, style]
  );

  async function copyUsername(username: string) {
    await navigator.clipboard.writeText(username);
    setCopied(username);
    window.setTimeout(() => setCopied(null), 1600);
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-soft sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="w-full sm:max-w-xs">
          <label className="block text-sm font-bold text-slate-800" htmlFor="style">
            Style
          </label>
          <select
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-4 text-base font-semibold text-slate-950 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            id="style"
            onChange={(event) => setStyle(event.target.value as UsernameStyle)}
            value={style}
          >
            {styles.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <button
          className="rounded-lg bg-blue-700 px-5 py-4 text-base font-bold text-white transition hover:bg-blue-800"
          onClick={() => setSeed((value) => value + 1)}
          type="button"
        >
          Generate 20 usernames
        </button>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {usernames.map((username) => (
          <div
            className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 sm:flex-row sm:items-center sm:justify-between"
            key={username}
          >
            <span className="break-all text-base font-bold text-slate-950">
              {username}
            </span>
            <div className="flex shrink-0 gap-2">
              <button
                className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:border-blue-300 hover:text-blue-700"
                onClick={() => copyUsername(username)}
                type="button"
              >
                {copied === username ? "Copied" : "Copy"}
              </button>
              <a
                className="rounded-md bg-slate-950 px-3 py-2 text-sm font-bold text-white hover:bg-slate-800"
                href={`/roblox-username-checker?username=${encodeURIComponent(
                  username
                )}`}
              >
                Check
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
