"use client";
import { motion } from "framer-motion";

export default function GlowGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-[0.07]">
      <motion.div
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[radial-gradient(circle,#00ffff_1px,transparent_1px)] [background-size:40px_40px]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,rgba(0,0,0,0)_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050a12] via-transparent to-transparent" />
    </div>
  );
}
