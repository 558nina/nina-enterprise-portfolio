"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BackgroundGrid from "./BackgroundGrid";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#07111F] px-6 pt-28 text-white">
      <BackgroundGrid />

      <div className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-[#07111F]/95 to-[#07111F]/30" />

      <div className="absolute right-0 top-0 h-full w-full lg:w-1/2">
        <Image
          src="/images/nina-headshot.png"
          alt="Nina Hesse"
          fill
          priority
          className="object-cover object-center opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-[#07111F]/50 to-[#07111F]/10" />
        <div className="absolute inset-0 bg-[#07111F]/25" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Transformation Leadership · Agile Delivery · AI Governance
          </p>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Transforming Delivery.
            <br />
            Accelerating Change.
            <br />
            Enabling AI.
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-cyan-300 md:text-3xl">
            Nina Hesse | Transformation Consultant & Agile Delivery Lead
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            I help organisations improve delivery performance, scale Agile ways
            of working, establish effective governance and adopt AI responsibly
            across complex enterprise environments.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#services"
              className="rounded-lg bg-cyan-400 px-8 py-4 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Explore Consulting
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-cyan-400/50 px-8 py-4 text-sm font-bold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
            >
              Let&apos;s Talk
            </a>

            <a
              href="/Nina-Hesse-CV.pdf"
              download
              className="rounded-lg border border-white/15 px-8 py-4 text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}