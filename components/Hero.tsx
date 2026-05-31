"use client";

import { motion } from "framer-motion";
import BackgroundGrid from "./BackgroundGrid";

export default function Hero() {
  const expertise = [
    "Agile Transformation",
    "Enterprise Delivery Leadership",
    "Cloud & DevOps Programmes",
    "Delivery Governance",
    "Stakeholder Management",
    "Coaching & Mentoring",
  ];

  const industries = [
    "Financial Services",
    "Healthcare",
    "Retail",
    "Aviation",
  ];

  const engagements = ["LSEG", "Legal & General", "Capgemini"];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B0F1A] px-6 pt-28 text-white">
      <BackgroundGrid />

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            Agile Delivery · Transformation · Governance
          </p>

          <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">
            Hi, I&apos;m Nina Hesse
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-cyan-300 md:text-3xl">
            Agile Delivery Lead | Transformation Consultant
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I help organisations improve delivery performance, scale Agile ways
            of working, and modernise technology delivery across complex
            enterprise environments.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            {engagements.map((company) => (
              <span
                key={company}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-cyan-200"
              >
                {company}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#services"
              className="rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Explore Consulting
            </a>

            <a
              href="#experience"
              className="rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
            >
              View Experience
            </a>

            <a
              href="#contact"
              className="text-sm font-semibold text-slate-300 transition hover:text-white"
            >
              Book Coaching →
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-[2rem] bg-cyan-400/10 blur-3xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl backdrop-blur-xl">
            <div className="mb-7 flex items-start justify-between gap-6 border-b border-white/10 pb-6">
              <div>
                <p className="text-sm text-slate-400">
                  Enterprise Transformation
                </p>
                <p className="mt-1 text-2xl font-semibold">
                  Transformation Specialist
                </p>
              </div>

              <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                Available
              </div>
            </div>

            <div className="space-y-3">
              {expertise.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/10 text-sm text-cyan-300">
                    ✓
                  </span>
                  <span className="text-sm font-medium text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5">
                <p className="text-sm font-semibold text-cyan-200">
                  Industries
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <span
                      key={industry}
                      className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs text-slate-300"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                <p className="text-sm font-semibold text-cyan-200">
                  Recent Engagements
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {engagements.map((engagement) => (
                    <span
                      key={engagement}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-200"
                    >
                      {engagement}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-7 rounded-2xl border border-white/10 bg-slate-950/40 p-5">
              <p className="text-sm font-semibold text-cyan-200">
                Positioning
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Bridging business strategy, Agile delivery, technical
                transformation and governance across complex enterprise
                environments.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}