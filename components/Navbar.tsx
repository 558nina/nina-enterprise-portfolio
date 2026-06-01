export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 px-6 py-4 text-white backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#" className="leading-tight">
          <span className="block text-lg font-bold">Nina Hesse</span>
          <span className="hidden text-xs text-slate-400 sm:block">
            Agile Delivery & Transformation
          </span>
        </a>

        <div className="flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#experience" className="hover:text-cyan-300">
            Experience
          </a>
          <a href="#technical" className="hover:text-cyan-300">
            Technical
          </a>
          <a href="#services" className="hover:text-cyan-300">
            Services
          </a>
          <a href="#contact" className="hover:text-cyan-300">
            Contact
          </a>
          <a href="#" className="hover:text-cyan-300">
            LinkedIn
          </a>
          <a href="https://github.com/558nina" className="hover:text-cyan-300">
            GitHub
          </a>
          <a
            href="/Nina-Hesse-CV.docx"
            download
            className="rounded-full bg-cyan-400 px-4 py-2 text-slate-950 hover:bg-cyan-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}