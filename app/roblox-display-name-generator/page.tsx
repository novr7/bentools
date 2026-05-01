import type { Metadata } from "next";
import { DisplayNameGenerator } from "@/components/ExpansionTools";
import { ToolPageSections } from "@/components/ToolPageSections";

export const metadata: Metadata = {
  title: "Roblox Display Name Ideas",
  description:
    "Generate Roblox display name ideas in cute, aesthetic, cool, and anime styles."
};

export default function RobloxDisplayNameGeneratorPage() {
  return (
    <ToolPageSections
      eyebrow="Display name ideas"
      faqs={[
        { question: "What is a Roblox display name?", answer: "A display name is the name shown on your profile and in many Roblox experiences." },
        { question: "Are display names the same as usernames?", answer: "No. Usernames identify the account, while display names are more flexible and style-focused." },
        { question: "Can I copy these names?", answer: "Yes. Every generated display name includes a copy button." }
      ]}
      h1="Roblox Display Name Ideas"
      howTo={["Select a style.", "Generate 20 display names.", "Copy your favorite and try it on Roblox."]}
      intro={
        <>
          <p>
            Roblox Display Name Generator helps you create stylish and unique
            display names. A good display name makes your profile more
            memorable and helps you stand out in games, friend lists, and social
            spaces. Unlike usernames, display names are often used to show mood,
            personality, or aesthetic style.
          </p>
          <p>
            This tool generates Roblox display name ideas across cute,
            aesthetic, cool, and anime styles. Use it when you want a name that
            feels more polished than a random word, or when you want inspiration
            before updating your profile. Generated names are ideas only, so
            check Roblox directly to confirm what can be used.
          </p>
        </>
      }
      introTitle="Generate stylish Roblox display names"
      tips={["Choose a display name that matches your avatar style.", "Keep it readable in chat and player lists.", "Avoid personal information in display names."]}
      tipsTitle="Display name tips"
    >
      <DisplayNameGenerator />
    </ToolPageSections>
  );
}
