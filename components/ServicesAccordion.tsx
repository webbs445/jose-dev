"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Bug, Zap, Database, Globe } from "lucide-react";

const issues = [
  {
    title: "Site is vulnerable / exposed admin / malware risk",
    icon: <Shield className="h-4 w-4 text-cyan-300" />,
    body: [
      "Outdated plugins / themes",
      "No SSL or weak HTTPS config",
      "No WAF / firewall rules",
      "Direct admin URLs visible",
    ],
  },
  {
    title: "Site is slow and kills conversion",
    icon: <Zap className="h-4 w-4 text-violet-300" />,
    body: [
      "Poor Core Web Vitals (LCP / CLS)",
      "Huge images, no compression",
      "No caching or CDN routing",
      "Slow Time To First Byte",
    ],
  },
  {
    title: "Server / hosting keeps going down",
    icon: <Globe className="h-4 w-4 text-white/80" />,
    body: [
      "No rate limiting / DDoS exposure",
      "Bad DNS / no failover",
      "No alerts or uptime checks",
      "No rollback plan",
    ],
  },
  {
    title: "Database / panel / phpMyAdmin chaos",
    icon: <Database className="h-4 w-4 text-white/60" />,
    body: [
      "No backups / no restore plan",
      "Leaky credentials in code",
      "Open access to DB tools",
      "No access control / roles",
    ],
  },
  {
    title: "Random bugs in production nobody wants to touch",
    icon: <Bug className="h-4 w-4 text-red-400" />,
    body: [
      "Forms not sending / 500 errors",
      "Auth/session problems",
      "Broken layout on mobile",
      "JS errors in console on checkout",
    ],
  },
];

export default function ServicesAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="fixes"
      className="relative mx-auto max-w-6xl px-6 py-16 md:py-24"
    >
      <div className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wide text-cyan-400">
          Common problems I solve
        </div>
        <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          If this sounds like your website, I can fix it
        </h2>
        <p className="mt-4 text-white/60 text-base leading-relaxed">
          Real production issues. No agency fluff. This is the stuff that
          actually loses sales, gets you hacked, or embarrasses your brand.
        </p>
      </div>

      <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_40px_160px_rgba(120,0,255,0.18)]">
        {issues.map((item, i) => (
          <div key={i} className="px-5 py-4">
            <button
              className="flex w-full items-start justify-between text-left text-white"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex items-start gap-3">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {item.title}
                  </div>
                </div>
              </div>

              <div className="ml-4 text-xs text-cyan-300/70">
                {open === i ? "−" : "+"}
              </div>
            </button>

            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="pl-9 pr-2 text-[13px] text-white/60 leading-relaxed"
                >
                  <ul className="mt-3 space-y-2">
                    {item.body.map((line, j) => (
                      <li key={j}>• {line}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
