export type UsernameStatus =
  | "available"
  | "taken"
  | "invalid"
  | "inappropriate"
  | "error";

export type UsernameCheckResponse = {
  username: string;
  validFormat: boolean;
  available: boolean | null;
  status: UsernameStatus;
  message: string;
};

export type UsernameStyle =
  | "Cute"
  | "Cool"
  | "Anime"
  | "Dark"
  | "Aesthetic"
  | "Gamer";

type FormatValidation = {
  valid: boolean;
  message: string;
};

type RobloxValidationResponse = {
  code?: number;
  message?: string;
};

const styleWords: Record<UsernameStyle, string[]> = {
  Cute: ["Bunny", "Mochi", "Peachy", "Kawaii", "Boba", "Puffy", "Honey"],
  Cool: ["Shadow", "Frost", "Nova", "Vortex", "Blaze", "Storm", "Rift"],
  Anime: ["Neko", "Senpai", "Akira", "Kira", "Kitsune", "Haru", "Yumi"],
  Dark: ["Phantom", "Void", "Raven", "Eclipse", "Ghost", "Noir", "Dusk"],
  Aesthetic: ["Lunar", "Misty", "Velvet", "Cloudy", "Dream", "Aura", "Ivy"],
  Gamer: ["XP", "Clutch", "NoScope", "Pixel", "Quest", "Combo", "Level"]
};

const gamerWords = [
  "XP",
  "Clutch",
  "NoScope",
  "Pixel",
  "Quest",
  "Dash",
  "Win",
  "Loot"
];

const suffixes = [
  "Star",
  "Wave",
  "Spark",
  "Byte",
  "Hero",
  "Mode",
  "Rush",
  "Core"
];

export function normalizeUsername(username: string): string {
  return username.trim();
}

export function validateRobloxUsernameFormat(
  username: string
): FormatValidation {
  if (!username) {
    return {
      valid: false,
      message: "Enter a Roblox username to check."
    };
  }

  if (username.length < 3 || username.length > 20) {
    return {
      valid: false,
      message: "Roblox usernames must be 3 to 20 characters long."
    };
  }

  if (!/^[A-Za-z0-9_]+$/.test(username)) {
    return {
      valid: false,
      message: "Use letters, numbers, and underscores only."
    };
  }

  const underscores = username.match(/_/g)?.length ?? 0;
  if (underscores > 1) {
    return {
      valid: false,
      message: "Roblox usernames can have at most one underscore."
    };
  }

  if (username.startsWith("_") || username.endsWith("_")) {
    return {
      valid: false,
      message: "An underscore cannot be the first or last character."
    };
  }

  return {
    valid: true,
    message: "Username format looks valid."
  };
}

export async function checkRobloxUsernameAvailability(
  username: string
): Promise<Omit<UsernameCheckResponse, "username" | "validFormat">> {
  try {
    const endpoint = buildRobloxUsernameValidationUrl(username);
    const response = await fetch(endpoint, {
      headers: {
        accept: "application/json"
      },
      next: {
        revalidate: 0
      }
    });

    if (!response.ok) {
      return unavailableFallback();
    }

    const data = (await response.json()) as RobloxValidationResponse;
    return mapRobloxValidationResponse(data);
  } catch {
    return unavailableFallback();
  }
}

function buildRobloxUsernameValidationUrl(username: string): string {
  const url = new URL("https://auth.roblox.com/v1/usernames/validate");
  url.searchParams.set("request.username", username);
  url.searchParams.set("request.birthday", "2000-01-01");
  return url.toString();
}

function mapRobloxValidationResponse(
  data: RobloxValidationResponse
): Omit<UsernameCheckResponse, "username" | "validFormat"> {
  const message = data.message?.toLowerCase() ?? "";

  if (data.code === 0 || message.includes("valid")) {
    return {
      available: true,
      status: "available",
      message: "Available. This username appears to be valid and available."
    };
  }

  if (
    data.code === 1 ||
    message.includes("already") ||
    message.includes("taken") ||
    message.includes("in use")
  ) {
    return {
      available: false,
      status: "taken",
      message: "Taken. This username is not available."
    };
  }

  if (
    message.includes("appropriate") ||
    message.includes("moderation") ||
    message.includes("blocked") ||
    data.code === 2
  ) {
    return {
      available: null,
      status: "inappropriate",
      message: "Not appropriate or blocked by Roblox."
    };
  }

  if (
    message.includes("invalid") ||
    message.includes("length") ||
    data.code === 3 ||
    data.code === 4 ||
    data.code === 5
  ) {
    return {
      available: null,
      status: "invalid",
      message: data.message ?? "Invalid username format."
    };
  }

  return {
    available: null,
    status: "error",
    message:
      "Live availability check is temporarily unavailable. Please verify on Roblox."
  };
}

function unavailableFallback(): Omit<
  UsernameCheckResponse,
  "username" | "validFormat"
> {
  return {
    available: null,
    status: "error",
    message:
      "Live availability check is temporarily unavailable. Please verify on Roblox."
  };
}

export function generateRobloxUsernames(
  style: UsernameStyle,
  count: number,
  seed = 0
): string[] {
  const results = new Set<string>();
  const words = styleWords[style];
  let index = seed * 37;

  while (results.size < count && index < seed * 37 + 400) {
    const word = words[index % words.length];
    const secondWord = words[(index + 2) % words.length];
    const gamerWord = gamerWords[(index + 3) % gamerWords.length];
    const suffix = suffixes[(index + 5) % suffixes.length];
    const number = String(((index + 17) * 7) % 990 + 10);

    const candidates = [
      `${word}${suffix}`,
      `${word}${number}`,
      `${word}_${secondWord}`,
      `${word}${gamerWord}`,
      `${gamerWord}${word}`
    ];

    for (const candidate of candidates) {
      if (
        validateRobloxUsernameFormat(candidate).valid &&
        !results.has(candidate)
      ) {
        results.add(candidate);
      }

      if (results.size === count) {
        break;
      }
    }

    index += 1;
  }

  return Array.from(results);
}
