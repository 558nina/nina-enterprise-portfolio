const services = [
  {
    title: "Enterprise Consulting",
    subtitle: "For organisations and transformation teams",
    description:
      "Support for Agile transformation, delivery governance, programme recovery, DevOps delivery and stakeholder alignment.",
    items: [
      "Agile transformation",
      "Delivery governance",
      "Programme recovery",
      "Cloud & DevOps delivery",
    ],
    cta: "Explore Consulting",
  },
  {
    title: "Coaching & Mentoring",
    subtitle: "For individuals and emerging delivery leaders",
    description:
      "Practical coaching for Scrum Masters, Project Managers and Agile professionals looking to grow their delivery confidence.",
    items: [
      "Scrum Master coaching",
      "Project Manager mentoring",
      "Interview preparation",
      "Career progression",
    ],
    cta: "Book Coaching",
  },
  {
    title: "Templates & Resources",
    subtitle: "For delivery teams and professionals",
    description:
      "Downloadable PMO, Agile and delivery templates designed to support governance, planning, reporting and execution.",
    items: [
      "PMO templates",
      "RAID logs",
      "Sprint dashboards",
      "Agile metrics packs",
    ],
    cta: "View Resources",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0B0F1A] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
            Services
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            How I Can Support You
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Practical support for enterprise transformation teams, aspiring
            delivery professionals and organisations improving technology
            delivery.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
            >
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                {service.subtitle}
              </p>

              <h3 className="text-2xl font-bold text-white">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {service.description}
              </p>

              <div className="mt-8 space-y-3">
                {service.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-8 inline-flex text-sm font-semibold text-cyan-300 transition hover:text-cyan-100"
              >
                {service.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}