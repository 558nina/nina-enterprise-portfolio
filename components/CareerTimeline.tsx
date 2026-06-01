"use client";

const journey = [
  {
    year: "2024",
    company: "London Stock Exchange Group",
    role: "Agile Delivery Lead",
    achievement:
      "Improved delivery predictability through governance, forecasting and delivery metrics.",
  },
  {
    year: "2022",
    company: "Legal & General",
    role: "Digital Scrum Master",
    achievement:
      "Increased delivery throughput by 25% through improved planning and execution discipline.",
  },
  {
    year: "2020",
    company: "Capgemini",
    role: "Engagement Manager",
    achievement:
      "Led cloud migration, IAM and DevSecOps transformation engagements across enterprise clients.",
  },
  {
    year: "2018",
    company: "Marks & Spencer",
    role: "Project Manager",
    achievement:
      "Delivered ServiceNow transformation on time with 95% stakeholder satisfaction.",
  },
];

export default function CareerTimeline() {
  return (
    <section
      id="experience"
      className="relative bg-[#0B0F1A] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
            Career Journey
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Enterprise Transformation Experience
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            A progression through Agile delivery, project management,
            transformation consulting and enterprise technology leadership.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-[24px] top-0 h-full w-px bg-cyan-400/30" />

          <div className="space-y-12">
            {journey.map((item) => (
              <div key={item.company} className="relative flex gap-8">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                  ●
                </div>

                <div className="flex-1 rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="rounded-full border border-cyan-400/20 px-3 py-1 text-xs text-cyan-300">
                      {item.year}
                    </span>

                    <span className="text-sm text-slate-400">
                      {item.role}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold">
                    {item.company}
                  </h3>

                  <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
                    <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
                      Highlight
                    </p>

                    <p className="mt-3 leading-7 text-slate-300">
                      {item.achievement}
                    </p>
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