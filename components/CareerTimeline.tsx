"use client";

import { useState } from "react";

const journey = [
  {
    year: "2024",
    company: "London Stock Exchange Group",
    badge: "LSEG",
    role: "Scrum Master / Agile Delivery Lead",
    focus: "DevOps Programme",
    challenge:
      "Improve delivery predictability and governance across software and DevOps teams supporting strategic technology roadmaps.",
    actions: [
      "Introduced delivery forecasting and flow-based reporting",
      "Supported quarterly planning and backlog readiness",
      "Strengthened dependency management and stakeholder visibility",
      "Aligned delivery execution with OKRs and business priorities",
    ],
    outcome:
      "Improved delivery predictability and strengthened stakeholder confidence through transparent roadmap and performance reporting.",
    metrics: ["Delivery Predictability", "Stakeholder Confidence"],
    tags: ["DevOps", "Governance", "Forecasting", "CI/CD"],
  },
  {
    year: "2022",
    company: "Legal & General",
    badge: "L&G",
    role: "Digital Scrum Master",
    focus: "Technology Accreditation",
    challenge:
      "Support multiple Agile teams through enterprise technology transformation while improving planning maturity and delivery throughput.",
    actions: [
      "Introduced delivery planning and forecasting practices",
      "Facilitated cross-functional alignment between product, business and engineering",
      "Embedded Agile governance and continuous improvement practices",
      "Improved execution discipline across delivery teams",
    ],
    outcome:
      "Accelerated delivery throughput by 25% through improved planning, facilitation and execution discipline.",
    metrics: ["25% Throughput Increase", "Agile Maturity"],
    tags: ["Agile", "Planning", "Forecasting", "Transformation"],
  },
  {
    year: "2020",
    company: "Capgemini",
    badge: "CAP",
    role: "Engagement Manager",
    focus: "Cloud & Infrastructure Services",
    challenge:
      "Lead consulting delivery across cloud migration, IAM, DevSecOps and digital safety transformation programmes.",
    actions: [
      "Managed client engagement and delivery governance",
      "Supported cloud migration planning and prioritisation",
      "Coordinated stakeholder alignment across suppliers and client teams",
      "Supported DevSecOps adoption and release quality improvement",
    ],
    outcome:
      "Delivered measurable improvements across cost optimisation, delivery lead times and release quality.",
    metrics: ["30% Cost Reduction", "25% Lead Time Reduction", "15% Defect Reduction"],
    tags: ["Cloud", "IAM", "DevSecOps", "Consulting"],
  },
  {
    year: "2018",
    company: "Marks & Spencer",
    badge: "M&S",
    role: "Project Manager",
    focus: "ServiceNow Transformation",
    challenge:
      "Deliver a ServiceNow transformation aligned to operational and business objectives.",
    actions: [
      "Led end-to-end delivery planning and governance",
      "Managed stakeholder engagement and implementation readiness",
      "Introduced iterative delivery practices",
      "Oversaw reporting, issue resolution and adoption planning",
    ],
    outcome:
      "Delivered on time and within budget while achieving 95% stakeholder satisfaction.",
    metrics: ["95% Satisfaction", "On-Time Delivery", "Within Budget"],
    tags: ["ServiceNow", "PMO", "Governance", "Delivery"],
  },
];

export default function CareerTimeline() {
  const [activeCompany, setActiveCompany] = useState(journey[0].company);

  const activeItem =
    journey.find((item) => item.company === activeCompany) ?? journey[0];

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

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative">
            <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300/0 via-cyan-300/50 to-cyan-300/0 md:block" />

            <div className="space-y-6">
              {journey.map((item) => {
                const isActive = activeCompany === item.company;

                return (
                  <button
                    key={item.company}
                    onClick={() => setActiveCompany(item.company)}
                    className={`relative w-full text-left transition-all duration-300 md:pl-24 ${
                      isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <div
                      className={`absolute left-0 top-4 hidden h-16 w-16 items-center justify-center rounded-2xl border text-sm font-bold tracking-wider shadow-[0_0_30px_rgba(34,211,238,0.18)] md:flex ${
                        isActive
                          ? "border-cyan-300 bg-cyan-400 text-slate-950"
                          : "border-cyan-400/30 bg-[#0B0F1A] text-cyan-300"
                      }`}
                    >
                      {item.badge}
                    </div>

                    <div
                      className={`rounded-[1.5rem] border p-5 transition-all duration-300 ${
                        isActive
                          ? "border-cyan-400/50 bg-cyan-400/10"
                          : "border-white/10 bg-white/[0.03] hover:border-cyan-400/30"
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-semibold text-cyan-300">
                          {item.year}
                        </span>
                        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                          {item.focus}
                        </span>
                      </div>

                      <h3 className="mt-4 text-xl font-bold text-white">
                        {item.company}
                      </h3>

                      <p className="mt-2 text-sm text-slate-400">
                        {item.role}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl">
            <div className="flex flex-col gap-5 border-b border-white/10 pb-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-semibold text-cyan-300">
                    {activeItem.year}
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                    {activeItem.focus}
                  </span>
                </div>

                <h3 className="mt-5 text-3xl font-bold text-white">
                  {activeItem.company}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {activeItem.role}
                </p>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-sm font-bold tracking-wider text-cyan-300">
                {activeItem.badge}
              </div>
            </div>

            <div className="mt-7 grid gap-5">
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
                  Challenge
                </p>
                <p className="mt-3 leading-7 text-slate-300">
                  {activeItem.challenge}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
                  Delivery Actions
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {activeItem.actions.map((action) => (
                    <div
                      key={action}
                      className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-slate-300"
                    >
                      {action}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
                  Outcome
                </p>
                <p className="mt-3 leading-7 text-slate-200">
                  {activeItem.outcome}
                </p>
              </div>

              <div className="grid gap-5 lg:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                  <p className="text-sm font-semibold text-cyan-200">
                    Impact Signals
                  </p>

                  <div className="mt-4 space-y-3">
                    {activeItem.metrics.map((metric) => (
                      <div
                        key={metric}
                        className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                  <p className="text-sm font-semibold text-cyan-200">
                    Capability Areas
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {activeItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}