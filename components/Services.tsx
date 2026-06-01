export default function Services() {
  const services = [
    {
      title: "Enterprise Transformation Consulting",
      description:
        "Support for Agile transformation, delivery governance, programme recovery, cloud & DevOps delivery and AI adoption initiatives.",
      offerings: [
        "Agile Transformation",
        "Programme Recovery",
        "Delivery Governance",
        "Cloud & DevOps Delivery",
        "AI Adoption & Delivery Enablement",
      ],
    },
    {
      title: "Coaching & Mentoring",
      description:
        "Practical coaching for Scrum Masters, Project Managers, Delivery Managers and aspiring transformation leaders.",
      offerings: [
        "Career Coaching",
        "Interview Preparation",
        "Scrum Master Mentoring",
        "Project Management Coaching",
        "Leadership Development",
      ],
    },
    {
      title: "Training & Workshops",
      description:
        "Interactive workshops designed to improve delivery performance, Agile maturity, stakeholder engagement and AI readiness.",
      offerings: [
        "Agile Ways of Working",
        "Delivery Forecasting",
        "Stakeholder Management",
        "AI for Delivery Leaders",
        "Agentic AI Fundamentals",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#0B0F1A] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
            Services
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            How I Can Help
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Combining Agile delivery leadership, enterprise transformation
            experience and practical AI adoption knowledge to help organisations
            deliver change with confidence.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.06] hover:shadow-[0_0_50px_rgba(34,211,238,0.08)]"
            >
              <h3 className="text-2xl font-bold text-white">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {service.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {service.offerings.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-2 text-xs font-medium text-cyan-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <a
                  href="#contact"
                  className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                >
                  Discuss Engagement →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}