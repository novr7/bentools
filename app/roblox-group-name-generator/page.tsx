import type { Metadata } from "next";
import { GroupNameGenerator } from "@/components/ExpansionTools";
import { ToolPageSections } from "@/components/ToolPageSections";

export const metadata: Metadata = {
  title: "Roblox Group Name Ideas",
  description:
    "Generate creative Roblox group name ideas for clubs, squads, crews, and communities."
};

export default function RobloxGroupNameGeneratorPage() {
  return (
    <ToolPageSections
      eyebrow="Group name ideas"
      faqs={[
        { question: "What is a Roblox group name?", answer: "It is the public name of a Roblox community, crew, club, or group." },
        { question: "Are group names checked?", answer: "No. These are ideas only, so verify your final name on Roblox." },
        { question: "What styles are included?", answer: "The generator mixes cool, aesthetic, cozy, and gamer-style group words." }
      ]}
      h1="Roblox Group Name Ideas"
      howTo={["Click generate to create 20 group names.", "Copy your favorite idea.", "Check Roblox to confirm the group name can be used."]}
      intro={
        <>
          <p>
            Creating a Roblox group? This tool generates creative group name
            ideas that fit different styles like cool, funny, cozy, gamer, or
            aesthetic. A good group name can make your community easier to
            remember and more appealing to players who share the same vibe.
          </p>
          <p>
            Use these Roblox group name ideas for clubs, roleplay groups, avatar
            communities, friend squads, or game teams. The generator creates
            short names that are easy to read and adapt. You can copy a result,
            remix it with your own words, or use it as a starting point for a
            final group brand.
          </p>
        </>
      }
      introTitle="Generate Roblox group names"
      tips={["Choose a name that fits the group purpose.", "Keep it easy to spell.", "Avoid names that copy existing brands or communities."]}
      tipsTitle="Group naming tips"
    >
      <GroupNameGenerator />
    </ToolPageSections>
  );
}
