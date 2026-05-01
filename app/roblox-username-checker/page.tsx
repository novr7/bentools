import type { Metadata } from "next";
import { Suspense } from "react";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { FAQ } from "@/components/FAQ";
import { ContentSection, InternalToolLinks } from "@/components/SeoContent";
import { UsernameChecker } from "@/components/UsernameChecker";

export const metadata: Metadata = {
  title: "Roblox Username Checker - Check Name Availability",
  description:
    "Check if a Roblox username is valid or available. Free Roblox username checker with instant format validation."
};

const faqs = [
  {
    question: "What makes a Roblox username valid?",
    answer:
      "A valid Roblox username is 3 to 20 characters long and uses only letters, numbers, and underscores. This checker validates the format before making a live availability request."
  },
  {
    question: "Can Roblox usernames have underscores?",
    answer:
      "Yes. Roblox usernames can include up to one underscore, but the underscore cannot be the first or last character."
  },
  {
    question: "Why is my Roblox username not available?",
    answer:
      "A username may already be taken, blocked by Roblox moderation, reserved, or temporarily unavailable through Roblox's validation system."
  },
  {
    question: "Is this tool official Roblox?",
    answer:
      "No. This tool is not affiliated with Roblox. Always verify important username choices directly on Roblox."
  }
];

const internalLinks = [
  {
    href: "/roblox-username-generator",
    title: "Roblox Username Generator",
    description: "Generate creative username options by style."
  },
  {
    href: "/roblox-username-ideas",
    title: "Roblox Username Ideas",
    description: "Browse cute, cool, dark, and anime username ideas."
  },
  {
    href: "/roblox-bio-generator",
    title: "Roblox Bio Generator",
    description: "Create copy-ready Roblox profile bios."
  }
];

export default function RobloxUsernameCheckerPage() {
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:py-12">
          <AdPlaceholder label="Top banner ad placeholder" />
          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Validate and check
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-normal text-slate-950">
              Roblox Username Checker
            </h1>
          </div>
          <div className="mt-8">
            <Suspense
              fallback={
                <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
                  Loading checker...
                </div>
              }
            >
              <UsernameChecker />
            </Suspense>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            This tool is not affiliated with Roblox.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-8">
        <AdPlaceholder label="Middle content ad placeholder" />
        <ContentSection title="Roblox username availability made simple">
          <p>
            Roblox Username Checker is a free tool that helps you check if a
            Roblox username is available or already taken. Choosing the right
            username matters because it represents your identity in Roblox
            games, social interactions, groups, and your public profile. A clear
            name is easier for friends to remember and can make your account
            feel more polished from the start.
          </p>
          <p>
            With this Roblox username availability tool, you can instantly
            verify whether a name follows basic Roblox format rules before
            trying it on Roblox. The checker validates length, allowed
            characters, and underscore placement first, then runs a server-side
            availability request when possible. That saves time, reduces trial
            and error, and helps you move faster from rough ideas to a username
            you actually want to use.
          </p>
        </ContentSection>
        <ContentSection title="How to use the Roblox Username Checker">
          <ol className="list-decimal space-y-2 pl-5">
            <li>Enter your desired username in the input box.</li>
            <li>Click the &quot;Check Username&quot; button.</li>
            <li>
              Read the result: Available means the username may be usable, Taken
              means it is already in use, and Invalid means it does not follow
              Roblox username rules.
            </li>
          </ol>
          <p>
            Make sure your username follows Roblox guidelines, including length,
            allowed characters, and underscore rules.
          </p>
        </ContentSection>
        <ContentSection title="Tips for choosing a good Roblox username">
          <ul className="list-disc space-y-2 pl-5">
            <li>Keep it short and memorable.</li>
            <li>Avoid random numbers unless they make the name better.</li>
            <li>Use unique words or combinations that match your style.</li>
            <li>Try a theme like cute, cool, anime, dark, or aesthetic.</li>
          </ul>
        </ContentSection>
        <FAQ items={faqs} />
        <InternalToolLinks links={internalLinks} />
        <div className="mt-8">
          <AdPlaceholder label="Bottom ad placeholder" />
        </div>
      </section>
    </main>
  );
}
