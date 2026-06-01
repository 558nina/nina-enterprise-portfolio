"use client";

const journey = [
  {
    year: "2024",
    company: "London Stock Exchange Group",
    short: "LSEG",
    role: "Scrum Master / Agile Delivery Lead",
    focus: "DevOps Programme",
    achievement:
      "Improved delivery predictability through governance, forecasting and delivery metrics.",
    metrics: ["Delivery Predictability", "Stakeholder Confidence"],
    tags: ["DevOps", "Governance", "Forecasting", "CI/CD"],
  },
  {
    year: "2022",
    company: "Legal & General",
    short: "L&G",
    role: "Digital Scrum Master",
    focus: "Technology Accreditation",
    achievement:
      "Accelerated delivery throughput by 25% through improved planning, facilitation and execution discipline.",
    metrics: ["25% Throughput Increase", "Agile Maturity"],
    tags: ["Agile", "Planning", "Forecasting", "Transformation"],
  },
  {
    year: "2020",
    company: "Capgemini",
    short: "CAP",
    role: "Engagement Manager",
    focus: "Cloud & Infrastructure Services",
    achievement:
      "Led cloud migration, IAM and DevSecOps transformation engagements across Royal Mail, Bupa, easyJet and Barclays.",
    metrics: ["30% Cost Reduction", "25% Lead Time Reduction"],
    tags: ["Cloud", "IAM", "DevSecOps", "Consulting"],
  },
  {
    year: "2018",
    company: "Marks & Spencer",
    short: "M&S",
    role: "Project Manager",
    focus: "ServiceNow Transformation",
    achievement:
      "Delivered ServiceNow transformation on time and within budget while achieving 95% stakeholder satisfaction.",
    metrics: ["95% Satisfaction", "On-Time Delivery"],
    tags: ["ServiceNow", "PMO", "Governance", "Delivery"],
  },
];

export default function CareerTimeline() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#0B0F1A] px-6 py-24 text-white"
    >
      <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
            Career Journey
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Enterprise Transformation Experience
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            A consulting-led progression across Agile delivery, programme
            governance, cloud transformation, DevOps and enterprise technology
            leadership.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300/0 via-cyan-300/50 to-cyan-300/0 md:block" />

          <div className="space-y-10">
            {journey.map((item) => (
              <div key={item.company} className="relative md:pl-20">
                <div className="absolute left-0 top-8 hidden h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-[#0B0F1A] text-xs font-bold text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.18)] md:flex">
                  {item.short}
                </div>

                <div className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.05] hover:shadow-[0_0_50px_rgba(34,211,238,0.08)]">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-semibold text-cyan-300">
                          {item.year}
                        </span>

                        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                          {item.focus}
                        </span>
                      </div>

                      <h3 className="mt-5 text-2xl font-bold text-white">
                        {item.company}
                      </h3>

                      <p className="mt-2 text-sm text-slate-400">
                        {item.role}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 lg:max-w-sm lg:justify-end">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 grid gap-5 lg:grid-cols-[1.4fr_0.8fr]">
                    <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
                      <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
                        Transformation Highlight
                      </p>

                      <p className="mt-3 leading-7 text-slate-300">
                        {item.achievement}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                      <p className="text-sm font-semibold text-cyan-200">
                        Impact Signals
                      </p>

                      <div className="mt-4 space-y-3">
                        {item.metrics.map((metric) => (
                          <div
                            key={metric}
                            className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
                          >
                            {metric}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}