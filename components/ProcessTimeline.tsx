"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Rocket, Zap, Wrench } from "lucide-react";

export default function ProcessTimeline() {
  const steps = [
    {
      icon: <Wrench className="h-5 w-5 text-cyan-300" />,
      title: "1. Audit",
      desc: "Deep scan of security, performance, plugins, DNS, hosting, db access, backups.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-violet-300" />,
      title: "2. Patch & Lock Down",
      desc: "Close vulnerabilities. Enforce SSL, WAF, restricted admin, secure headers.",
    },
    {
      icon: <Zap className="h-5 w-5 text-yellow-300" />,
      title: "3. Optimize Speed",
      desc: "Fix Core Web Vitals, caching, compression, asset delivery, TTFB.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-white" />,
      title: "4. Deploy & Monitor",
      desc: "Hardened production rollout with rollback plan and uptime watch.",
    },
  ];

  return (
    <section
      id="process"
      className="relative mx-auto max-w-6xl px-6 py-16 md:py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-80px" }}
        className="text-2xl font-bold text-white md:text-3xl"
      >
        My Process
      </motion.h2>

      <p className="mt-4 max-w-2xl text-white/60 text-base leading-relaxed">
        This is how I take you from "risky and slow" → "secure and fast"
        without taking your business offline.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            viewport={{ once: true, margin: "-80px" }}
            className="relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_30px_120px_rgba(120,0,255,0.18)]"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              {step.icon}
              <span>{step.title}</span>
            </div>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
