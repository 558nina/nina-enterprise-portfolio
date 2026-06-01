const logos = [
  { label: "LSEG", full: "London Stock Exchange Group" },
  { label: "L&G", full: "Legal & General" },
  { label: "CAPGEMINI", full: "Capgemini" },
  { label: "BARCLAYS", full: "Barclays" },
  { label: "BUPA", full: "Bupa" },
  { label: "easyJet", full: "easyJet" },
  { label: "M&S", full: "Marks & Spencer" },
];

export default function LogoTrustBar() {
  return (
    <section className="border-y border-white/10 bg-[#070B14] px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-center text-xs uppercase tracking-[0.35em] text-slate-500">
          Trusted experience across enterprise teams and programmes
        </p>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
          {logos.map((logo) => (
            <div
              key={logo.full}
              title={logo.full}
              className="flex h-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-center transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.06] hover:text-cyan-300"
            >
              <span className="text-sm font-bold tracking-wider text-slate-300">
                {logo.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}