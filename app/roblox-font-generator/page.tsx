import type { Metadata } from "next";
import { FontGenerator } from "@/components/ExpansionTools";
import { ToolPageSections } from "@/components/ToolPageSections";

export const metadata: Metadata = {
  title: "Roblox Font Generator",
  description:
    "Use a Roblox font generator to convert normal text into fancy styles for profiles, bios, and display names."
};

export default function RobloxFontGeneratorPage() {
  return (
    <ToolPageSections
      eyebrow="Fancy text for Roblox"
      faqs={[
        { question: "What is a Roblox font generator?", answer: "It converts normal text into decorative Unicode styles that you can copy and try in Roblox." },
        { question: "Can I use fancy fonts in Roblox?", answer: "Many symbols and Unicode styles may work, but Roblox can change support or filter some characters." },
        { question: "Does this tool use an API?", answer: "No. All font styles are generated directly in your browser." }
      ]}
      h1="Roblox Font Generator"
      howTo={["Enter your text.", "Choose your favorite fancy style.", "Copy the style and paste it into Roblox."]}
      intro={
        <>
          <p>
            Roblox Font Generator allows you to convert normal text into
            stylish and fancy fonts that can be used in your Roblox profile,
            bio, or display name. Many players want unique text styles to stand
            out, and this tool helps you instantly generate creative font
            variations without downloading an app or using a paid service.
          </p>
          <p>
            Fancy Roblox text is useful when you want a profile that looks more
            aesthetic, a bio that feels more personal, or a display name idea
            that has extra style. Enter a short word or phrase, compare multiple
            font variations, and copy the one that fits your vibe. Always preview
            your final text inside Roblox because some devices or Roblox filters
            may display special characters differently.
          </p>
        </>
      }
      introTitle="Stylish fonts for Roblox profiles"
      tips={["Keep fancy text short for better readability.", "Preview symbols after pasting into Roblox.", "Avoid using too many decorative characters in one line."]}
      tipsTitle="Fancy font tips"
    >
      <FontGenerator />
    </ToolPageSections>
  );
}
