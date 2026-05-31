const resources = [
  "PMO RAID Log",
  "Project Plan Template",
  "Sprint Dashboard",
  "Agile Metrics Pack",
];

export default function ResourcesPreview() {
  return (
    <section className="bg-[#0B0F1A] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
            Delivery Resources
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">
            Templates & Toolkits Coming Soon
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Practical PMO, Agile and delivery templates designed to support
            planning, governance, reporting and execution.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => (
            <div
              key={resource}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <span className="rounded-full border border-cyan-400/20 px-3 py-1 text-xs text-cyan-200">
                Coming Soon
              </span>
              <h3 className="mt-6 text-xl font-bold">{resource}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                Downloadable resource for project delivery, governance and Agile
                execution.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}