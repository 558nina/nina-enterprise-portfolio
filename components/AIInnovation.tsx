export default function AIInnovation() {
  const capabilities = [
    "Agentic Workflow Design",
    "AI Governance",
    "Human-in-the-Loop Controls",
    "Responsible AI Adoption",
  ];

  const workflow = [
    "Project Updates",
    "AI Analysis",
    "Risk Detection",
    "Executive Summary",
    "Human Approval",
  ];

  return (
    <section className="relative overflow-hidden bg-[#0B0F1A] px-6 py-24 text-white">
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
            AI & Innovation
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            AI-enabled delivery leadership for modern transformation teams.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            I focus on how AI can support delivery governance, risk visibility,
            stakeholder reporting and team effectiveness while maintaining
            human oversight, responsible use and clear accountability.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {capabilities.map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
          <div className="mb-8">
            <p className="text-sm text-slate-400">Concept Workflow</p>
            <h3 className="mt-2 text-2xl font-bold">
              AI Delivery Assistant
            </h3>
          </div>

          <div className="space-y-4">
            {workflow.map((step, index) => (
              <div key={step}>
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10 text-sm font-bold text-cyan-300">
                    {index + 1}
                  </div>

                  <div>
                    <p className="font-semibold text-white">{step}</p>
                    <p className="mt-1 text-sm text-slate-400">
                      {index === 0 &&
                        "Input delivery updates, blockers, risks and sprint information."}
                      {index === 1 &&
                        "AI reviews updates and identifies themes, dependencies and delivery signals."}
                      {index === 2 &&
                        "Potential risks, issues and governance concerns are highlighted."}
                      {index === 3 &&
                        "A concise stakeholder-ready status summary is generated."}
                      {index === 4 &&
                        "Final review remains with the delivery lead before communication."}
                    </p>
                  </div>
                </div>

                {index < workflow.length - 1 && (
                  <div className="ml-5 h-5 w-px bg-cyan-400/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}