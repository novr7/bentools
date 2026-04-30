import Link from "next/link";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { RelatedTools } from "@/components/RelatedTools";

const tools = [
  {
    href: "/roblox-username-checker",
    title: "Roblox Username Checker",
    description:
      "Check username format instantly and run a live availability check when Roblox is reachable."
  },
  {
    href: "/roblox-username-generator",
    title: "Roblox Username Generator",
    description:
      "Generate Roblox username ideas by style, then copy your favorites in one tap."
  },
  {
    href: "/roblox-username-ideas",
    title: "Roblox Username Ideas",
    description:
      "Browse cute, cool, dark, and anime username ideas without availability checks."
  },
  {
    href: "/roblox-bio-generator",
    title: "Roblox Bio Generator",
    description:
      "Create aesthetic, cute, anime, dark, soft, and gamer bios with copy-ready text."
  },
  {
    href: "/random-roblox-game-picker",
    title: "Random Roblox Game Picker",
    description:
      "Pick a random Roblox game from Obby, Horror, Anime, and RP categories."
  },
  {
    href: "/roblox-avatar-idea-generator",
    title: "Roblox Avatar Idea Generator",
    description:
      "Generate cute, dark, anime, rich, and casual Roblox avatar outfit ideas."
  }
];

export default function HomePage() {
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <AdPlaceholder label="Top banner ad placeholder" />
          <div className="mt-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Free Roblox name tools
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">
              Roblox Username Checker & Generator
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Quickly validate Roblox username rules, check whether a name may
              be available, and create clean username ideas for cute, cool,
              anime, dark, aesthetic, or gamer styles, then discover what to
              play next.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <Link
                className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:shadow-soft"
                href={tool.href}
                key={tool.href}
              >
                <h2 className="text-xl font-bold text-slate-950">
                  {tool.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-8">
        <AdPlaceholder label="Middle content ad placeholder" />
        <RelatedTools />
        <div className="mt-8">
          <AdPlaceholder label="Bottom ad placeholder" />
        </div>
      </section>
    </main>
  );
}
