"use client";

import { motion } from "framer-motion";
import { Shield, Gauge, Cloud, Cpu } from "lucide-react";

export default function SkillsSection() {
  const skills = [
    {
      icon: <Shield className="h-5 w-5 text-cyan-300" />,
      title: "Security & Hardening",
      items: [
        "SSL / HTTPS enforcement",
        "WAF & DDoS protection",
        "Secure headers (CSP / HSTS)",
        "Vulnerability patching & admin lock-down",
      ],
    },
    {
      icon: <Gauge className="h-5 w-5 text-violet-300" />,
      title: "Performance & Speed",
      items: [
        "Core Web Vitals fixes (LCP / CLS)",
        "Asset & image compression",
        "Caching strategy (CDN / browser / server)",
        "API response tuning",
      ],
    },
    {
      icon: <Cpu className="h-5 w-5 text-white" />,
      title: "Frontend Stack",
      items: [
        "React / Next.js / Vue",
        "TypeScript / Tailwind CSS",
        "Accessibility & SEO best practice",
        "High-conversion responsive UI",
      ],
    },
    {
      icon: <Cloud className="h-5 w-5 text-white/80" />,
      title: "Backend & Cloud",
      items: [
        "PHP / Node.js / Express",
        "MySQL / phpMyAdmin / Prisma ORM",
        "AWS Lightsail & Lambda",
        "Secure deploy / rollback / monitoring",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative mx-auto max-w-6xl px-6 py-16 md:py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-80px" }}
        className="text-2xl font-bold text-white md:text-3xl"
      >
        Capabilities & Stack
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, margin: "-80px" }}
        className="mt-4 max-w-2xl text-white/60 text-base leading-relaxed"
      >
        I stabilize, harden, and accelerate production websites. I work in
        live environments — not just clean demos.
      </motion.p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((block, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_30px_120px_rgba(0,200,255,0.12)]"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              {block.icon}
              <span>{block.title}</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              {block.items.map((tech, j) => (
                <li key={j}>• {tech}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
