"use client";

import { motion } from "framer-motion";
import BackgroundGrid from "./BackgroundGrid";
import PremiumCard from "./PremiumCard";

export default function Hero() {
  const engagements = ["LSEG", "Legal & General", "Capgemini"];

  const badges = [
    "Agile Transformation",
    "AI Adoption",
    "Delivery Leadership",
    "Enterprise Governance",
  ];

  return (
    <section className="relative overflow-hidden bg-[#0B0F1A] px-6 pb-20 pt-28 text-white">
      <BackgroundGrid />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            Agile Delivery · Transformation · AI Enablement
          </p>

          <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">
            Hi, I&apos;m Nina Hesse
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-cyan-300 md:text-3xl">
            Agile Delivery Lead | Transformation Consultant
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I help organisations improve delivery performance, scale Agile ways
            of working, adopt AI responsibly and modernise technology delivery
            across complex enterprise environments.
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
              href="/Nina-Hesse-CV.pdf"
              download
              className="rounded-full border border-cyan-400/30 px-7 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
            >
              Download CV
            </a>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm font-semibold text-cyan-300">
              Available for
            </p>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-300">
              <span>✓ Contract Engagements</span>
              <span>✓ Transformation Programmes</span>
              <span>✓ AI Adoption Initiatives</span>
              <span>✓ Coaching & Mentoring</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-[2rem] bg-cyan-400/10 blur-3xl" />

          <PremiumCard className="p-8 shadow-2xl">
            <div className="relative flex min-h-[520px] flex-col items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.16),transparent_55%)]" />

              <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10 shadow-[0_0_80px_rgba(34,211,238,0.18)]">
                <div className="absolute inset-6 rounded-full border border-white/10" />
                <div className="absolute inset-12 rounded-full border border-cyan-300/20" />

                <span className="text-7xl font-bold tracking-tight text-white">
                  NH
                </span>
              </div>

              <div className="relative mt-8 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                  Enterprise Transformation
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  Delivery Leadership Profile
                </h3>

                <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-400">
                  Bridging Agile delivery, AI adoption, technical
                  transformation and governance across complex enterprise
                  environments.
                </p>
              </div>

              <div className="relative mt-8 grid w-full gap-3 sm:grid-cols-2">
                {badges.map((badge) => (
                  <div
                    key={badge}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-sm text-slate-300"
                  >
                    {badge}
                  </div>
                ))}
              </div>

              <div className="relative mt-8 flex w-full flex-col gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-cyan-200">
                    Availability
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Open to contract, consulting and coaching opportunities.
                  </p>
                </div>

                <span className="rounded-full bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
                  Available
                </span>
              </div>
            </div>
          </PremiumCard>
        </motion.div>
      </div>
    </section>
  );
}