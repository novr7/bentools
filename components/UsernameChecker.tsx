"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  type UsernameCheckResponse,
  validateRobloxUsernameFormat
} from "@/lib/robloxUsername";

const stateClasses: Record<UsernameCheckResponse["status"], string> = {
  available: "border-green-200 bg-green-50 text-green-900",
  taken: "border-amber-200 bg-amber-50 text-amber-900",
  invalid: "border-red-200 bg-red-50 text-red-900",
  inappropriate: "border-red-200 bg-red-50 text-red-900",
  error: "border-slate-200 bg-slate-50 text-slate-800"
};

export function UsernameChecker() {
  const searchParams = useSearchParams();
  const [username, setUsername] = useState(searchParams.get("username") ?? "");
  const [result, setResult] = useState<UsernameCheckResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const format = useMemo(
    () => validateRobloxUsernameFormat(username.trim()),
    [username]
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanUsername = username.trim();
    const localValidation = validateRobloxUsernameFormat(cleanUsername);

    if (!localValidation.valid) {
      setResult({
        username: cleanUsername,
        validFormat: false,
        available: null,
        status: "invalid",
        message: localValidation.message
      });
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(
        `/api/check-username?username=${encodeURIComponent(cleanUsername)}`
      );
      const data = (await response.json()) as UsernameCheckResponse;
      setResult(data);
    } catch {
      setResult({
        username: cleanUsername,
        validFormat: true,
        available: null,
        status: "error",
        message:
          "Live availability check is temporarily unavailable. Please verify on Roblox."
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-soft sm:p-6">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <label className="block text-sm font-bold text-slate-800" htmlFor="username">
          Roblox username
        </label>
        <input
          autoCapitalize="none"
          autoComplete="off"
          className="w-full rounded-lg border border-slate-300 px-4 py-4 text-lg font-semibold text-slate-950 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          id="username"
          maxLength={20}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Example_Player7"
          spellCheck={false}
          value={username}
        />
        {username.length > 0 && !format.valid ? (
          <p className="text-sm font-medium text-red-700">{format.message}</p>
        ) : (
          <p className="text-sm text-slate-500">
            3-20 characters, letters, numbers, and up to one underscore.
          </p>
        )}
        <button
          className="w-full rounded-lg bg-blue-700 px-5 py-4 text-base font-bold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-400 sm:w-auto"
          disabled={loading}
          type="submit"
        >
          {loading ? "Checking..." : "Check Username"}
        </button>
      </form>

      {result ? (
        <div
          className={`mt-5 rounded-lg border p-4 text-base font-semibold ${
            stateClasses[result.status]
          }`}
          role="status"
        >
          <p>{result.message}</p>
          <p className="mt-2 text-sm font-medium opacity-80">
            Status: {result.status}
          </p>
        </div>
      ) : null}
    </div>
  );
}
