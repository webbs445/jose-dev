"use client";

export default function PartnersSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-12 md:pb-16">
      <div className="text-[11px] uppercase tracking-widest text-white/30 text-center mb-6">
        Trusted by teams working on security, uptime & growth
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-60">
        <div className="text-white/60 text-xs">AWS</div>
        <div className="text-white/60 text-xs">Cloudflare</div>
        <div className="text-white/60 text-xs">Lightsail</div>
        <div className="text-white/60 text-xs">MySQL</div>
        <div className="text-white/60 text-xs">Next.js</div>
        <div className="text-white/60 text-xs">Tailwind</div>
      </div>
    </section>
  );
}
