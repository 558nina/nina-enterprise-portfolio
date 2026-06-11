"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Experience", href: "#experience" },
    { label: "Technical", href: "#technical" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "https://github.com/558nina" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 px-6 py-4 text-white backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#" className="leading-tight">
          <span className="block text-lg font-bold">Nina Hesse</span>
          <span className="hidden text-xs text-slate-400 sm:block">
            Agile Delivery & Transformation
          </span>
        </a>

        <div className="hidden items-center gap-6 text-sm font-medium text-slate-300 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-300 lg:hidden"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-4 max-w-7xl rounded-2xl border border-white/10 bg-slate-950/95 p-4 lg:hidden">
          <div className="flex flex-col gap-4 text-sm text-slate-300">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}