export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070B14] px-6 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-bold">Nina Hesse</p>
          <p className="mt-2 text-sm text-slate-400">
            Agile Delivery & Transformation
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
          <a href="https://github.com/558nina" className="hover:text-cyan-300">
            GitHub
          </a>
          <a href="mailto:hesse.nina@yahoo.co.uk" className="hover:text-cyan-300">
            Email
          </a>
          <a href="/Nina-Hesse-CV.docx" download className="hover:text-cyan-300">
            Download CV
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl text-xs text-slate-500">
        © 2026 Nina Hesse. All rights reserved.
      </div>
    </footer>
  );
}