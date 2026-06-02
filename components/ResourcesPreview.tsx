type Resource = {
  title: string;
  category: string;
  description: string;
  link?: string;
  status: "Available" | "Coming Soon";
};

export default function ResourcesPreview() {
  const resources: Resource[] = [
    {
      title: "Enterprise RAID Log & Governance Dashboard",
      category: "Governance & Delivery",
      description:
        "PMO-ready RAID management and governance dashboard with automated Programme Health calculations, Governance Exposure scoring, executive reporting and stakeholder controls.",
      link: "/resources/Enterprise-RAID-Governance-Dashboard-v1.0.xlsx",
      status: "Available",
    },
    {
      title: "Programme Status Report & Executive Governance Pack",
      category: "Governance & Delivery",
      description:
        "Executive reporting pack featuring delivery dashboards, RAID reporting, sponsor updates, governance health indicators and a Plan-on-a-Page roadmap.",
      link: "/resources/Programme-Status-Report-Executive-Governance-Pack-v1.0.pptx",
      status: "Available",
    },
    {
      title: "AI Governance Pack",
      category: "AI & Delivery",
      description:
        "Practical governance templates covering AI adoption, approvals, risk controls, auditability and responsible usage.",
      status: "Coming Soon",
    },
    {
      title: "AI Readiness Assessment",
      category: "AI Strategy",
      description:
        "A structured framework to evaluate organisational readiness for AI adoption across people, process and technology.",
      status: "Coming Soon",
    },
    {
      title: "Sprint Dashboard Toolkit",
      category: "Agile Delivery",
      description:
        "A collection of reporting dashboards, metrics and forecasting templates for Agile delivery teams.",
      status: "Coming Soon",
    },
    {
      title: "Agentic Delivery Framework",
      category: "AI & Transformation",
      description:
        "A practical framework for introducing AI agents into delivery teams through governance, operating models and human oversight.",
      status: "Coming Soon",
    },
  ];

  return (
    <section id="resources" className="bg-[#0B0F1A] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
            Resources & Templates
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Tools, Frameworks & Delivery Assets
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            A growing collection of delivery templates, governance frameworks,
            AI adoption assets and practical tools developed through enterprise
            transformation experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.06] hover:shadow-[0_0_50px_rgba(34,211,238,0.08)]"
            >
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium text-cyan-200">
                  {resource.category}
                </span>

                <span
                  className={`rounded-full border px-3 py-1 text-xs font-medium ${
                    resource.status === "Available"
                      ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                      : "border-white/10 bg-white/[0.03] text-slate-400"
                  }`}
                >
                  {resource.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">
                {resource.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {resource.description}
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                {resource.status === "Available" && resource.link ? (
                  <a
                    href={resource.link}
                    download
                    className="inline-flex rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    Download Template
                  </a>
                ) : (
                  <span className="text-sm font-semibold text-cyan-300">
                    Coming Soon →
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}