type VideoCardProps = {
  category: string;
  title: string;
  duration: string;
  level: string;
  description: string;
};

export default function VideoCard({
  category,
  title,
  duration,
  level,
  description,
}: VideoCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]">
      <div className="relative h-48 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.22),_transparent_45%)]" />

        <div className="absolute left-5 top-5 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-cyan-200 backdrop-blur">
          {category}
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
            ▶
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
            {duration}
          </span>
          <span className="rounded-full border border-cyan-400/20 px-3 py-1 text-xs text-cyan-200">
            {level}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white">{title}</h3>

        <p className="mt-3 leading-7 text-slate-400">{description}</p>

        <button className="mt-6 text-sm font-semibold text-cyan-300 transition hover:text-cyan-100">
          Watch Video →
        </button>
      </div>
    </div>
  );
}