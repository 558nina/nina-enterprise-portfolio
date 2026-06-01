import Image from "next/image";

const logos = [
  {
    name: "London Stock Exchange Group",
    logo: "/company-logos/lseg.png",
  },
  {
    name: "Legal & General",
    logo: "/company-logos/legal-general.png",
  },
  {
    name: "Capgemini",
    logo: "/company-logos/capgemini.png",
  },
  {
    name: "Barclays",
    logo: "/company-logos/barclays.png",
  },
  {
    name: "Bupa",
    logo: "/company-logos/bupa.png",
  },
  {
    name: "easyJet",
    logo: "/company-logos/easyjet.png",
  },
  {
    name: "Marks & Spencer",
    logo: "/company-logos/marks-spencer.png",
  },
];

export default function LogoMarquee() {
  const repeatedLogos = [...logos, ...logos];

  return (
    <section className="overflow-hidden border-y border-white/10 bg-[#070B14] py-6 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-center text-xs uppercase tracking-[0.35em] text-slate-500">
          Experience delivering transformation across leading global organisations
        </p>

        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#070B14] to-transparent" />

          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#070B14] to-transparent" />

          <div className="flex w-max animate-[scrollLeft_45s_linear_infinite] gap-6 px-6">
            {repeatedLogos.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                title={item.name}
                className="group flex h-28 w-52 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-4 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.06] hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={300}
                  height={120}
                  className="max-h-20 w-auto object-contain opacity-80 brightness-125 transition duration-500 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}