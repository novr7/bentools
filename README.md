# Roblox Username Checker, Generator, Bio Generator, Game Picker & Avatar Ideas

SEO-friendly Next.js web app for Roblox username checks, name ideas, bio tools, fancy fonts, symbols, game discovery, avatar ideas, outfit ideas, group name brainstorming, and the Ben Game Finder low-end PC game tool.

## Features

- Roblox username format validation before API calls
- Server-side availability check via `/api/check-username?username=NAME`
- Username generator with Cute, Cool, Anime, Dark, Aesthetic, and Gamer styles
- Roblox username ideas browser with Cute, Cool, Dark, and Anime styles
- Roblox bio generator with Cute, Aesthetic, Dark, Anime, Soft, and Gamer styles
- Random Roblox game picker with Obby, Horror, Anime, and RP categories
- Roblox avatar idea generator with Cute, Dark, Anime, Rich, and Casual styles
- Roblox font generator and symbols copy page
- Display name, girls username, boys username, bio ideas, username combiner, group name, and outfit idea tools
- Ben Game Finder low-end PC game finder with 100+ static low-spec game recommendations
- Filters for RAM, GPU, genre, free/paid games, and online/offline mode
- Game result cards with cover images when available
- Copy-to-clipboard feedback
- SEO metadata and FAQ content on tool pages
- AdSense-ready placeholder areas
- No database required for MVP

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Vercel-ready deployment

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Routes

- `/`
- `/roblox-username-checker`
- `/roblox-username-generator`
- `/roblox-username-ideas`
- `/roblox-bio-generator`
- `/random-roblox-game-picker`
- `/roblox-avatar-idea-generator`
- `/low-end-pc-game-finder`
- `/roblox-font-generator`
- `/roblox-symbols-copy-and-paste`
- `/roblox-display-name-generator`
- `/roblox-usernames-for-girls`
- `/roblox-usernames-for-boys`
- `/roblox-bio-ideas`
- `/roblox-username-combiner`
- `/roblox-group-name-generator`
- `/roblox-outfit-ideas`

## Build

```bash
npm run build
```

## Deploy to Vercel

1. Push the project to a Git repository.
2. Import the repository in Vercel.
3. Use the default Next.js build settings.
4. Add the production domain `bentools.site`.
5. Add `bentools.online` and `www.bentools.online` if you want redirects to the `.site` domain.
6. Deploy.

## Domain Setup

For `bentools.site`, configure DNS at your domain provider with the records Vercel shows in Project Domains. Vercel's general-purpose records are:

- Apex/root domain: `A` record pointing to `76.76.21.21`
- `www`: `CNAME` record pointing to `cname.vercel-dns-0.com`

For `.online` to `.site` redirects, add `bentools.online` and `www.bentools.online` to the same Vercel project, then configure their DNS to Vercel as well. The app redirects those hosts to `https://bentools.site`.

## Roblox API Note

The app calls Roblox username validation server-side through a wrapper in `lib/robloxUsername.ts`. If Roblox blocks, changes, or rate-limits the endpoint, the checker returns:

`Live availability check is temporarily unavailable. Please verify on Roblox.`

The generator continues to work without the live API.
