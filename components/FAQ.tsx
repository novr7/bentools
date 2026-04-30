type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
};

export function FAQ({ items }: FAQProps) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold text-slate-950">
        Frequently Asked Questions
      </h2>
      <div className="mt-4 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
        {items.map((item) => (
          <details className="group p-5" key={item.question}>
            <summary className="cursor-pointer list-none text-base font-bold text-slate-950">
              <span className="inline-flex w-full items-center justify-between gap-4">
                {item.question}
                <span className="text-blue-700 group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="mt-3 leading-7 text-slate-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
