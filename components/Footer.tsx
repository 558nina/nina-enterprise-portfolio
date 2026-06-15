import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070B14] px-6 py-6 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <Image
            src="/images/arcvale-brand-mark.png"
            alt="Arcvale Consulting"
            width={90}
            height={90}
            className="h-auto w-auto"
          />

          <p className="mt-2 text-sm text-slate-400">
            Enterprise Transformation • Delivery Excellence • AI Governance
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Founded by Nina Hesse
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-slate-400">
          <a href="#experience" className="hover:text-cyan-300">
            Experience
          </a>

          <a href="#services" className="hover:text-cyan-300">
            Services
          </a>

          <a href="#resources" className="hover:text-cyan-300">
            Resources
          </a>

          <a href="#contact" className="hover:text-cyan-300">
            Contact
          </a>

          <a
            href="mailto:info@arcvaleconsulting.com"
            className="hover:text-cyan-300"
          >
            Email
          </a>

          <a
            href="https://github.com/558nina"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="mx-auto mt-4 max-w-7xl border-t border-white/5 pt-4 text-xs text-slate-500">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Arcvale Consulting. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="/terms" className="hover:text-cyan-300">
              Terms & Conditions
            </a>

            <a href="/privacy" className="hover:text-cyan-300">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}