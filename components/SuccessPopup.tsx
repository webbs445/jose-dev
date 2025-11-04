"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";

interface PopupProps {
  show: boolean;
  onClose: () => void;
  type?: "success" | "error";
  title?: string;
  message?: string;
  duration?: number;
}

export default function Popup({
  show,
  onClose,
  type = "success",
  title,
  message,
  duration = 6000,
}: PopupProps) {
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; size: number; delay: number }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      delay: Math.random() * 5,
    }));
    setParticles(generated);
  }, []);

  useEffect(() => {
    if (show && duration) {
      const timer = setTimeout(() => onClose(), duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  const color = type === "error" ? "red" : "cyan";
  const glow =
    type === "error"
      ? "shadow-[0_0_50px_rgba(255,0,0,0.5)] border-red-400/40 bg-black/85"
      : "shadow-[0_0_50px_rgba(0,255,255,0.4)] border-cyan-400/30 bg-black/80";

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          {/* background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{
                  x: `${p.x}%`,
                  y: `${p.y}%`,
                  opacity: 0.3,
                  scale: 0,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.8, 1.2, 0.8],
                  y: [`${p.y}%`, `${p.y - 10}%`, `${p.y}%`],
                }}
                transition={{
                  duration: 5 + p.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`absolute rounded-full blur-md ${
                  type === "error" ? "bg-red-500" : "bg-cyan-400"
                }`}
                style={{
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  left: `${p.x}%`,
                }}
              />
            ))}
          </div>

          {/* popup card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className={`relative z-10 rounded-2xl border px-8 py-6 text-center ${glow}`}
          >
            {type === "error" ? (
              <AlertTriangle
                size={42}
                className="mx-auto mb-3 text-red-400 animate-pulse"
              />
            ) : (
              <CheckCircle2
                size={42}
                className="mx-auto mb-3 text-cyan-300 animate-pulse"
              />
            )}

            <h4
              className={`text-lg font-semibold mb-1 ${
                type === "error" ? "text-red-400" : "text-cyan-300"
              }`}
            >
              {title ||
                (type === "error" ? "Something Went Wrong!" : "Request Sent!")}
            </h4>
            <p className="text-white/70 text-sm mb-4">
              {message ||
                (type === "error"
                  ? "We couldn’t process your request. Please try again later."
                  : "Your submission has been received. We’ll get back to you soon.")}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className={`inline-flex items-center gap-2 rounded-lg border px-5 py-2 text-sm font-medium transition ${
                type === "error"
                  ? "border-red-400/40 bg-red-500/20 text-red-300 hover:bg-red-500/30"
                  : "border-cyan-400/40 bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30"
              }`}
            >
              <XCircle size={14} />
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
