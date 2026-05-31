type TechThumbnailProps = {
  category: string;
};

export default function TechThumbnail({ category }: TechThumbnailProps) {
  return (
    <div className="relative h-48 overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.24),transparent_42%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:36px_36px] opacity-25" />

      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/30" />
      <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/50 bg-cyan-300/10" />

      <div className="absolute inset-x-10 top-1/2 h-px bg-cyan-300/30" />
      <div className="absolute inset-y-10 left-1/2 w-px bg-cyan-300/30" />

      <div className="absolute left-5 top-5 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-cyan-200 backdrop-blur">
        {category}
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 shadow-[0_0_40px_rgba(34,211,238,0.18)]">
          ▶
        </div>
      </div>
    </div>
  );
}