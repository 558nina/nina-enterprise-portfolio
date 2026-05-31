type ExperienceCardProps = {
  organisation: string;
  role: string;
  period: string;
  challenge: string;
  approach: string;
  outcome: string;
  tags: string[];
};

export default function ExperienceCard({
  organisation,
  role,
  period,
  challenge,
  approach,
  outcome,
  tags,
}: ExperienceCardProps) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white">
          {organisation}
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          {role} • {period}
        </p>
      </div>

      <div className="space-y-5">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-300">
            Challenge
          </p>

          <p className="text-slate-300">
            {challenge}
          </p>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-300">
            Approach
          </p>

          <p className="text-slate-300">
            {approach}
          </p>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-300">
            Outcome
          </p>

          <p className="text-white font-medium">
            {outcome}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-cyan-400/20 px-3 py-1 text-xs text-cyan-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}