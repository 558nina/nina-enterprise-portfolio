export default function TrustMetrics() {
  const organisations = [
    "LSEG",
    "Legal & General",
    "Capgemini",
    "Barclays",
    "Bupa",
    "easyJet",
    "Marks & Spencer",
  ];

  const metrics = [
    { value: "25%", label: "Delivery Throughput Increase" },
    { value: "30%", label: "Cloud Cost Reduction" },
    { value: "95%", label: "Stakeholder Satisfaction" },
  ];

  return (
    <section className="bg-[#0B0F1A] px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] px-8 py-10">
          <p className="mb-8 text-center text-sm uppercase tracking-[0.35em] text-cyan-300">
            Trusted Enterprise Experience
          </p>

          <div className="grid gap-4 text-center text-lg font-semibold text-slate-300 sm:grid-cols-2 lg:grid-cols-7">
            {organisations.map((organisation) => (
              <div
                key={organisation}
                className="rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-4 transition hover:border-cyan-400/30 hover:text-cyan-300"
              >
                {organisation}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
            >
              <p className="text-5xl font-bold text-cyan-300">{metric.value}</p>
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