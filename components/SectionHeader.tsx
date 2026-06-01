type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-16 text-center">
      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300">
        {eyebrow}
      </p>

      <h2 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
        {description}
      </p>
    </div>
  );
}