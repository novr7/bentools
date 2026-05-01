import { AdPlaceholder } from "@/components/AdPlaceholder";
import { ContentSection, InternalToolLinks } from "@/components/SeoContent";
import { FAQ } from "@/components/FAQ";

type FAQItem = {
  question: string;
  answer: string;
};

type ToolPageSectionsProps = {
  children: React.ReactNode;
  eyebrow: string;
  h1: string;
  introTitle: string;
  intro: React.ReactNode;
  howTo: string[];
  tipsTitle: string;
  tips: string[];
  faqs: FAQItem[];
};

export function ToolPageSections({
  children,
  eyebrow,
  h1,
  introTitle,
  intro,
  howTo,
  tipsTitle,
  tips,
  faqs
}: ToolPageSectionsProps) {
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:py-12">
          <AdPlaceholder label="Top ad placeholder" />
          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              {eyebrow}
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-normal text-slate-950">
              {h1}
            </h1>
          </div>
          <div className="mt-8">{children}</div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-8">
        <AdPlaceholder label="Mid content ad placeholder" />
        <ContentSection title={introTitle}>{intro}</ContentSection>
        <ContentSection title="How to use">
          <ol className="list-decimal space-y-2 pl-5">
            {howTo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </ContentSection>
        <ContentSection title={tipsTitle}>
          <ul className="list-disc space-y-2 pl-5">
            {tips.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </ContentSection>
        <FAQ items={faqs} />
        <InternalToolLinks />
        <div className="mt-8">
          <AdPlaceholder label="Bottom ad placeholder" />
        </div>
      </section>
    </main>
  );
}
