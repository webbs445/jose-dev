"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeaderNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-black/60 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-extrabold text-cyan-400 hover:text-violet-400 text-lg tracking-tight"
        >
          Jose<span className="text-white">Cyber</span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            href="/#services"
            className="relative text-white/80 hover:text-cyan-400 transition group"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/#audit"
            className="relative text-white/80 hover:text-cyan-400 transition group"
          >
            Free Audit
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/insights"
            className="relative text-white/80 hover:text-cyan-400 transition group"
          >
            Insights
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/#contact"
            className="relative text-white/80 hover:text-cyan-400 transition group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

      
      </div>

      {/* bottom border glow line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-400 via-violet-500 to-cyan-400 opacity-30 blur-[1px]" />
    </header>
  );
}
