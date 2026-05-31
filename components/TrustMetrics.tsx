export default function TrustMetrics() {
  const organisations = [
    "London Stock Exchange Group",
    "Legal & General",
    "Capgemini",
    "Barclays",
    "Bupa",
    "easyJet",
    "Marks & Spencer",
  ];

  const metrics = [
    {
      value: "25%",
      label: "Delivery throughput improvement",
    },
    {
      value: "30%",
      label: "Operational cost reduction",
    },
    {
      value: "95%",
      label: "Stakeholder satisfaction",
    },
  ];

  return (
    <section className="bg-[#0B0F1A] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <p className="mb-6 text-center text-sm uppercase tracking-[0.3em] text-cyan-300">
            Enterprise Experience
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-semibold text-slate-300">
            {organisations.map((organisation) => (
              <span
                key={organisation}
                className="transition hover:text-cyan-300"
              >
                {organisation}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center"
            >
              <p className="text-5xl font-bold text-cyan-300">
                {metric.value}
              </p>

              <p className="mt-3 text-sm font-medium text-slate-300">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}