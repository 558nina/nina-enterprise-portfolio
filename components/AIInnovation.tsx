export default function AIInnovation() {
  const capabilities = [
    "Agentic Workflow Design",
    "AI Governance",
    "Human-in-the-Loop Controls",
    "Responsible AI Adoption",
  ];

  const workflow = [
    {
      step: "Project Updates",
      detail: "Delivery updates, blockers, sprint data and RAID information.",
    },
    {
      step: "AI Analysis",
      detail: "Agent reviews patterns, themes, dependencies and delivery risks.",
    },
    {
      step: "Risk Detection",
      detail: "Risks, issues and governance concerns are surfaced early.",
    },
    {
      step: "Executive Summary",
      detail: "Stakeholder-ready reporting is generated for review.",
    },
    {
      step: "Human Approval",
      detail: "Final judgement, approval and communication remain human-led.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0B0F1A] px-6 py-24 text-white">
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute left-0 bottom-1/4 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
              AI & Innovation
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              AI-enabled delivery leadership for modern transformation teams.
            </h2>
          </div>

          <p className="text-lg leading-8 text-slate-400">
            I focus on how AI can support delivery governance, risk visibility,
            stakeholder reporting and team effectiveness while maintaining
            human oversight, responsible use and clear accountability.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          {capabilities.map((item) => (
            <span
              key={item}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-200"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl md:p-8">
          <div className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-slate-400">Concept Workflow</p>
              <h3 className="mt-2 text-2xl font-bold">AI Delivery Assistant</h3>
            </div>

            <div className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-200">
              Human-in-the-loop model
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-5">
            {workflow.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="h-full rounded-3xl border border-white/10 bg-slate-950/50 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-sm font-bold text-cyan-300">
                    {index + 1}
                  </div>

                  <h4 className="text-lg font-bold text-white">{item.step}</h4>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.detail}
                  </p>
                </div>

                {index < workflow.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden h-px w-8 bg-cyan-400/40 lg:block" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
              Delivery Principle
            </p>
            <p className="mt-3 leading-7 text-slate-300">
              AI can accelerate delivery insight, reporting and risk visibility,
              but accountability, approval and decision-making remain with the
              delivery leader.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}