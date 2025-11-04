"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "He stabilized our AWS setup, optimized caching, and dropped TTFB from 1.4s to 320ms. Zero downtime during the switchover.",
    name: "Operations Lead, SaaS company",
  },
  {
    quote:
      "Our WordPress kept getting injected with malware. Jose locked it down, cleaned the codebase, and set up backups and monitoring.",
    name: "Founder, E‑commerce brand",
  },
  {
    quote:
      "He fixed our mobile performance and CLS issues before a major ad campaign. Conversion lifted immediately after launch.",
    name: "Marketing Director, Agency client",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative mx-auto max-w-6xl px-6 py-16 md:py-24"
    >
      <div className="text-xs font-semibold uppercase tracking-wide text-cyan-400">
        Proof It Works
      </div>
      <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
        Real impact for real businesses
      </h2>
      <p className="mt-4 max-w-2xl text-white/60 text-base leading-relaxed">
        I work on live revenue-generating systems. No filler projects. No student
        work. Everything here is production.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_30px_120px_rgba(0,200,255,0.12)]"
          >
            <div className="text-white/80 text-sm leading-relaxed italic">
              “{t.quote}”
            </div>
            <div className="mt-4 text-[12px] font-medium text-cyan-300">
              {t.name}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
