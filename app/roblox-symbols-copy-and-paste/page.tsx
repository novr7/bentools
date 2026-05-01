import type { Metadata } from "next";
import { SymbolsCopy } from "@/components/ExpansionTools";
import { ToolPageSections } from "@/components/ToolPageSections";

export const metadata: Metadata = {
  title: "Roblox Symbols Copy and Paste",
  description:
    "Copy Roblox symbols including hearts, stars, arrows, aesthetic symbols, and gaming icons."
};

export default function RobloxSymbolsCopyPage() {
  return (
    <ToolPageSections
      eyebrow="Symbols for profiles"
      faqs={[
        { question: "What are Roblox symbols?", answer: "Roblox symbols are special characters that players copy into bios, display names, and profile text." },
        { question: "Can symbols be used in usernames?", answer: "Roblox usernames have strict rules, so symbols usually work better in bios or display names." },
        { question: "How do I copy a symbol?", answer: "Click any symbol tile and it will be copied to your clipboard." }
      ]}
      h1="Roblox Symbols Copy and Paste"
      howTo={["Choose a category like hearts, stars, or arrows.", "Click a symbol to copy it.", "Paste the symbol into your Roblox bio or profile text."]}
      intro={
        <>
          <p>
            Roblox Symbols Copy and Paste lets you quickly find and use special
            symbols in your profile, display name, or bio. Symbols make your
            profile more attractive and unique because they add personality
            without requiring long text. Hearts, stars, arrows, brackets, and
            gaming icons can help your Roblox profile feel more aesthetic,
            playful, or stylish.
          </p>
          <p>
            This symbols page is organized by category so you can browse faster.
            Use hearts for cute profiles, stars for aesthetic bios, arrows for
            clean separators, and gaming symbols when you want a stronger
            Roblox-themed look. Some symbols may display differently depending
            on your device, so test your final profile after pasting.
          </p>
        </>
      }
      introTitle="Copy Roblox symbols instantly"
      tips={["Use symbols as accents, not full sentences.", "Combine symbols with a short bio for a cleaner look.", "Check Roblox after pasting because some symbols may be filtered."]}
      tipsTitle="Symbol tips"
    >
      <SymbolsCopy />
    </ToolPageSections>
  );
}
