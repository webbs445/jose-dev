"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Gauge, ArrowRight } from "lucide-react";

export default function FooterCTA() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-80px" }}
        className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-b from-cyan-950/40 to-violet-950/40 p-10 text-center shadow-[0_0_80px_rgba(0,255,255,0.15)] backdrop-blur-md"
      >
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.12)_0%,transparent_70%)] blur-[60px]" />
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_bottom_left,rgba(150,0,255,0.15)_0%,transparent_70%)] blur-[60px]" />

        <div className="relative mx-auto flex justify-center gap-3 text-cyan-300/80">
          <ShieldCheck className="h-6 w-6" />
          <Gauge className="h-6 w-6 text-violet-300" />
        </div>

        <h2 className="relative mt-6 bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-2xl font-bold leading-tight text-transparent md:text-3xl lg:text-4xl">
          Let’s secure and accelerate your website.
        </h2>

        <p className="relative mx-auto mt-4 max-w-2xl text-sm text-white/70 md:text-base">
          I audit, harden, and optimize production sites that are currently
          making you money. No rebuild fluff unless you actually need it.
        </p>

        <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-300 ring-1 ring-cyan-400/40 transition-all hover:bg-cyan-500/20 hover:text-white hover:ring-cyan-300/60"
          >
            Schedule Free Audit
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

          <a
            href="#fixes"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white/70 hover:bg-white/[0.08] hover:text-white"
          >
            See Common Issues
          </a>
        </div>
      </motion.div>
    </section>
  );
}
