export default function LearningHub() {
  const series = [
    {
      title: "AWS Hands-On",
      badge: "8 Planned Episodes",
      description:
        "Build practical AWS capability through guided demonstrations covering core cloud services, networking, security and monitoring.",
      topics: [
        "EC2",
        "S3",
        "VPC",
        "IAM",
        "Lambda",
        "RDS",
        "CloudWatch",
      ],
      footer: "AWS Fundamentals & Practical Demonstrations",
    },
    {
      title: "Cloud & Delivery Leadership",
      badge: "10 Planned Episodes",
      description:
        "Connect cloud technology with programme delivery, governance, Agile execution and enterprise transformation.",
      topics: [
        "Cloud Migration",
        "IAM",
        "Security",
        "RAID Management",
        "CI/CD",
        "Governance",
        "Delivery Metrics",
      ],
      footer: "Cloud Governance & Transformation Leadership",
    },
    {
      title: "AI for Delivery Leaders",
      badge: "8 Planned Episodes",
      description:
        "Explore how AI can be introduced, governed and leveraged across enterprise delivery teams and transformation programmes.",
      topics: [
        "AI Governance",
        "Agentic AI",
        "AI Assistants",
        "Enterprise AI",
        "Agile Teams",
        "Steering Committees",
        "Responsible AI",
      ],
      footer: "AI Adoption & Delivery Leadership",
    },
  ];

  return (
    <section
      id="learning-hub"
      className="bg-slate-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
            Cloud, AI & Delivery Learning Hub
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Practical Cloud Delivery, Governance & Transformation Leadership
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            A growing learning platform designed for Programme Managers, PMO
            Leaders, Scrum Masters, Delivery Managers and Transformation
            Consultants looking to strengthen their cloud, AI and delivery
            leadership capabilities.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {series.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_50px_rgba(34,211,238,0.08)]"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium text-cyan-200">
                  {item.title}
                </span>

                <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
                  Series Planned
                </span>
              </div>

              <h3 className="text-2xl font-bold">{item.badge}</h3>

              <p className="mt-4 leading-7 text-slate-400">
                {item.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {item.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full bg-white/5 px-3 py-2 text-sm text-slate-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm text-slate-400">{item.footer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 to-transparent p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Featured Launch Episode
          </p>

          <h3 className="mt-4 text-3xl font-bold">
            AI for Scrum Masters and Delivery Leads
          </h3>

          <p className="mt-4 max-w-3xl text-slate-300">
            Discover how AI is transforming Agile delivery, programme
            management and enterprise transformation. Learn where AI creates
            value, what risks leaders must manage and how delivery teams can
            adopt AI responsibly.
          </p>

          <div className="mt-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Launching Soon
          </div>
        </div>
      </div>
    </section>
  );
}