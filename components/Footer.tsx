export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070B14] px-6 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-bold">Arcvale Consulting</p>

          <p className="mt-2 text-sm text-slate-400">
            Enterprise Transformation • Delivery Excellence • AI Governance
          </p>

          <p className="mt-2 text-xs text-slate-500">
            Founded by Nina Hesse
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-slate-400">
          <a href="#experience" className="hover:text-cyan-300">
            Experience
          </a>

          <a href="#technical" className="hover:text-cyan-300">
            Technical Proof
          </a>

          <a href="#services" className="hover:text-cyan-300">
            Services
          </a>

          <a href="#" className="hover:text-cyan-300">
            LinkedIn
          </a>

          <a
            href="https://github.com/558nina"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300"
          >
            GitHub
          </a>

          <a
            href="mailto:info@arcvaleconsulting.com"
            className="hover:text-cyan-300"
          >
            Email
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/5 pt-6 text-xs text-slate-500">
        © 2026 Arcvale Consulting. All rights reserved.
      </div>
    </footer>
  );
}