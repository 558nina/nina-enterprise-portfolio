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
    <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white">{organisation}</h3>

        <div className="mt-3 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-cyan-400/20 px-3 py-1 text-xs text-cyan-300">
            {period}
          </span>

          <span className="text-sm text-slate-400">{role}</span>
        </div>
      </div>

      <div className="space-y-5">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-300">
            Challenge
          </p>
          <p className="leading-7 text-slate-300">{challenge}</p>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-300">
            Approach
          </p>
          <p className="leading-7 text-slate-300">{approach}</p>
        </div>

        <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-300">
            Result
          </p>
          <p className="font-medium leading-7 text-white">{outcome}</p>
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