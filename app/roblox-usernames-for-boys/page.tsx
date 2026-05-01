import type { Metadata } from "next";
import { FixedUsernameList } from "@/components/ExpansionTools";
import { ToolPageSections } from "@/components/ToolPageSections";

export const metadata: Metadata = {
  title: "Roblox Usernames for Boys",
  description:
    "Generate cool and powerful Roblox usernames for boys with copy-ready ideas."
};

export default function RobloxUsernamesForBoysPage() {
  return (
    <ToolPageSections
      eyebrow="Cool username ideas"
      faqs={[
        { question: "Are these usernames checked for availability?", answer: "No. They are ideas only, so use the checker tool before choosing one." },
        { question: "What style are these names?", answer: "The list focuses on cool, strong, gamer, and action-style usernames." },
        { question: "Can I copy the names?", answer: "Yes. Each username idea includes a copy button." }
      ]}
      h1="Roblox Usernames for Boys"
      howTo={["Browse the generated name ideas.", "Copy any name that matches your style.", "Use the checker tool to test availability."]}
      intro={
        <>
          <p>
            Find cool and powerful Roblox usernames for boys with this quick
            idea list. Whether you want something funny, strong, gamer-inspired,
            or unique, this tool helps you generate ideas quickly without
            starting from a blank page. Names with words like blaze, frost,
            nova, shadow, and clutch can give your profile a bold gaming style.
          </p>
          <p>
            These usernames are made for inspiration and browsing. You can copy
            a name, adjust it, add a number if needed, or combine it with your
            own favorite word. Before using a final username, check whether it
            follows Roblox rules and whether it may be available.
          </p>
        </>
      }
      introTitle="Cool Roblox usernames for boys"
      tips={["Use strong words that still sound readable.", "Avoid too many random numbers.", "Match your username with your avatar or group style."]}
      tipsTitle="Username tips"
    >
      <FixedUsernameList type="boys" />
    </ToolPageSections>
  );
}
