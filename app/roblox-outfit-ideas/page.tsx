import type { Metadata } from "next";
import { OutfitIdeasGenerator } from "@/components/ExpansionTools";
import { ToolPageSections } from "@/components/ToolPageSections";

export const metadata: Metadata = {
  title: "Roblox Outfit Ideas",
  description:
    "Generate Roblox outfit ideas for cute, anime, dark, aesthetic, and gamer avatar styles."
};

export default function RobloxOutfitIdeasPage() {
  return (
    <ToolPageSections
      eyebrow="Avatar outfit inspiration"
      faqs={[
        { question: "What are Roblox outfit ideas?", answer: "They are style concepts that help you plan clothing, accessories, colors, and avatar details." },
        { question: "Does this tool link to catalog items?", answer: "No. It gives general outfit inspiration that you can recreate with Roblox catalog items." },
        { question: "How many ideas are generated?", answer: "The tool generates 15 outfit ideas at a time." }
      ]}
      h1="Roblox Outfit Ideas"
      howTo={["Click the generate button.", "Review 15 outfit ideas.", "Use your favorite as inspiration in the Roblox catalog."]}
      intro={
        <>
          <p>
            Roblox outfit ideas help you design better avatars. A good outfit
            can make your character feel more memorable, match your username,
            and show your style in hangout, roleplay, anime, or adventure games.
            Instead of searching randomly through the catalog, use this tool to
            get a quick direction for your next look.
          </p>
          <p>
            Get inspiration for different styles including cute, anime, dark,
            aesthetic, gamer, rich, and casual looks. The ideas are short and
            flexible, so you can recreate them with items you already own or use
            them as a shopping guide in Roblox. Try generating several sets
            before choosing your final outfit theme.
          </p>
        </>
      }
      introTitle="Generate Roblox outfit ideas"
      tips={["Start with one main color palette.", "Use accessories to support the outfit, not overpower it.", "Match your outfit with your bio or display name."]}
      tipsTitle="Outfit styling tips"
    >
      <OutfitIdeasGenerator />
    </ToolPageSections>
  );
}
