"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function ScrollReveal({
  children,
  delay = 0,
  x = 0,
  y = 50,
  duration = 0.6,
  glow = false,
}: {
  children: React.ReactNode;
  delay?: number;
  x?: number;
  y?: number;
  duration?: number;
  glow?: boolean;
}) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          x,
          y,
          scale: 0.96,
          filter: glow ? "blur(6px)" : "none",
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
        },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration, delay, ease: "easeOut" }}
      className={glow ? "transition-shadow hover:shadow-[0_0_40px_rgba(0,255,255,0.2)]" : ""}
    >
      {children}
    </motion.div>
  );
}
