import type { Metadata } from "next";
import { FixedUsernameList } from "@/components/ExpansionTools";
import { ToolPageSections } from "@/components/ToolPageSections";

export const metadata: Metadata = {
  title: "Roblox Usernames for Girls",
  description:
    "Copy cute and aesthetic Roblox usernames for girls with stylish name ideas."
};

export default function RobloxUsernamesForGirlsPage() {
  return (
    <ToolPageSections
      eyebrow="Cute username ideas"
      faqs={[
        { question: "Are these usernames available?", answer: "They are ideas only. Use the Roblox Username Checker before choosing a final name." },
        { question: "Can anyone use these names?", answer: "Yes. The list is style-based and can be used by any player who likes cute or aesthetic names." },
        { question: "How many ideas are included?", answer: "This page includes 30 Roblox username ideas." }
      ]}
      h1="Roblox Usernames for Girls"
      howTo={["Browse the list of 30 names.", "Copy any username idea you like.", "Check availability before using it on Roblox."]}
      intro={
        <>
          <p>
            Looking for cute and aesthetic Roblox usernames for girls? This page
            provides a collection of creative and stylish name ideas perfect for
            any player who wants a soft, pretty, or memorable username. Names
            with words like mochi, bunny, peachy, pastel, and lunar are popular
            because they feel friendly and easy to remember.
          </p>
          <p>
            Use this list for quick inspiration when you are creating a new
            account, refreshing your style, or matching a username with a cute
            Roblox avatar. These usernames are suggestions, not live
            availability results, so copy your favorite and test it with the
            Roblox Username Checker before making a final choice.
          </p>
        </>
      }
      introTitle="Cute and aesthetic name ideas"
      tips={["Pick a name that is easy to spell.", "Try a soft word plus a unique style word.", "Use the checker tool before committing to a name."]}
      tipsTitle="Username tips"
    >
      <FixedUsernameList type="girls" />
    </ToolPageSections>
  );
}
