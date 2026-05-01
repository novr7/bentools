import type { Metadata } from "next";
import { BioIdeasList } from "@/components/ExpansionTools";
import { ToolPageSections } from "@/components/ToolPageSections";

export const metadata: Metadata = {
  title: "Roblox Bio Ideas",
  description:
    "Copy aesthetic, cute, and creative Roblox bio ideas for your profile."
};

export default function RobloxBioIdeasPage() {
  return (
    <ToolPageSections
      eyebrow="Copy-ready bios"
      faqs={[
        { question: "What are Roblox bio ideas?", answer: "They are short profile text ideas that help you express your mood, style, or personality." },
        { question: "Is this a generator?", answer: "No. This page is a curated list of 50 copy-ready bio ideas." },
        { question: "Can I edit the bios?", answer: "Yes. Copy any idea and change words or symbols to match your profile." }
      ]}
      h1="Roblox Bio Ideas"
      howTo={["Browse the bio ideas.", "Copy one that matches your style.", "Paste it into your Roblox profile and edit if needed."]}
      intro={
        <>
          <p>
            Roblox bio ideas help you express your personality in a short and
            simple way. Your bio can show whether you like cozy games, anime
            style, roleplay, competitive gaming, or aesthetic profile text. A
            good Roblox bio does not need to be long; it only needs to feel like
            you and be easy for other players to read.
          </p>
          <p>
            This page includes aesthetic, cute, and creative bios that you can
            copy and use instantly. Use the list when you want a profile update
            without generating new text each time. You can also combine these
            ideas with symbols from the symbols page or fancy text from the font
            generator.
          </p>
        </>
      }
      introTitle="Copy Roblox bio ideas instantly"
      tips={["Keep profile text safe and friendly.", "Avoid sharing personal information.", "Use a short bio that matches your username and avatar."]}
      tipsTitle="Bio tips"
    >
      <BioIdeasList />
    </ToolPageSections>
  );
}
