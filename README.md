# Roblox Username Checker, Generator, Bio Generator, Game Picker & Avatar Ideas

SEO-friendly Next.js web app for checking Roblox username format and availability, generating clean Roblox username ideas by style, creating aesthetic Roblox bios, picking random Roblox games, and generating avatar outfit ideas.

## Features

- Roblox username format validation before API calls
- Server-side availability check via `/api/check-username?username=NAME`
- Username generator with Cute, Cool, Anime, Dark, Aesthetic, and Gamer styles
- Roblox username ideas browser with Cute, Cool, Dark, and Anime styles
- Roblox bio generator with Cute, Aesthetic, Dark, Anime, Soft, and Gamer styles
- Random Roblox game picker with Obby, Horror, Anime, and RP categories
- Roblox avatar idea generator with Cute, Dark, Anime, Rich, and Casual styles
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
