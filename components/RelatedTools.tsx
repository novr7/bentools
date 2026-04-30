const relatedTools = ["More Roblox tools coming soon"];

export function RelatedTools() {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold text-slate-950">
        Related tools coming soon
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {relatedTools.map((tool) => (
          <div
            className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700"
            key={tool}
          >
            {tool}
          </div>
        ))}
      </div>
    </section>
  );
}
