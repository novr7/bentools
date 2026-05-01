import type { Metadata } from "next";
import { UsernameCombiner } from "@/components/ExpansionTools";
import { ToolPageSections } from "@/components/ToolPageSections";

export const metadata: Metadata = {
  title: "Username Generator Combo",
  description:
    "Combine two words into unique Roblox username ideas with a username combiner."
};

export default function RobloxUsernameCombinerPage() {
  return (
    <ToolPageSections
      eyebrow="Combine two words"
      faqs={[
        { question: "What is a username combiner?", answer: "It merges two words into multiple username ideas and variations." },
        { question: "Does it check availability?", answer: "No. Use the Roblox Username Checker after generating a combo." },
        { question: "Can I use numbers?", answer: "Yes. The combiner accepts letters and numbers." }
      ]}
      h1="Username Generator Combo"
      howTo={["Enter two words you like.", "Review the combined username ideas.", "Copy a name and check it before using it."]}
      intro={
        <>
          <p>
            Username Combiner helps you create unique names by merging words
            together. This is perfect when your desired username is already
            taken or when you want something more personal than a random
            generator result. You can combine a favorite word, style, nickname,
            game theme, or aesthetic idea into one username.
          </p>
          <p>
            The tool creates several combinations using both words in different
            orders, with underscores, suffixes, and short variations. It is
            useful for Roblox usernames, display name inspiration, and group
            name brainstorming. Keep your final name short, readable, and safe
            for Roblox before checking availability.
          </p>
        </>
      }
      introTitle="Make unique username combinations"
      tips={["Use short words for cleaner results.", "Try a style word plus a gamer word.", "Check the final name before using it on Roblox."]}
      tipsTitle="Combiner tips"
    >
      <UsernameCombiner />
    </ToolPageSections>
  );
}
