import type { ReactNode } from "react";
import Link from "next/link";

type ContentSectionProps = {
  title: string;
  children: ReactNode;
};

type ToolLink = {
  href: string;
  title: string;
  description: string;
};

type InternalToolLinksProps = {
  links?: ToolLink[];
};

const defaultLinks: ToolLink[] = [
  {
    href: "/roblox-username-checker",
    title: "Roblox Username Checker",
    description: "Check username format and availability."
  },
  {
    href: "/roblox-bio-generator",
    title: "Roblox Bio Generator",
    description: "Generate aesthetic Roblox bios."
  },
  {
    href: "/roblox-font-generator",
    title: "Roblox Font Generator",
    description: "Convert normal text into fancy Roblox styles."
  }
];

export function ContentSection({ title, children }: ContentSectionProps) {
  return (
    <section className="mt-8 rounded-lg border border-slate-200 bg-white p-5">
      <h2 className="text-2xl font-bold text-slate-950">{title}</h2>
      <div className="mt-3 space-y-3 leading-7 text-slate-600">{children}</div>
    </section>
  );
}

export function InternalToolLinks({ links = defaultLinks }: InternalToolLinksProps) {
  const mergedLinks = [
    ...links,
    ...defaultLinks.filter(
      (defaultLink) => !links.some((link) => link.href === defaultLink.href)
    )
  ];

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold text-slate-950">More Roblox tools</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mergedLinks.map((tool) => (
          <Link
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-soft"
            href={tool.href}
            key={tool.href}
          >
            <h3 className="text-lg font-bold text-slate-950">{tool.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {tool.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
