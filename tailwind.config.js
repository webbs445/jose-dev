/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: "#05060d",
          cyan: "#00ffff",
          violet: "#a855f7",
          blue: "#0ea5e9"
        },
        light: {
          bg: "#f9fafb",
          card: "#ffffff",
          text: "#0a0a0a",
          accent: "#06b6d4",
          border: "#e2e8f0",
          glow: "rgba(6,182,212,0.25)"
        }
      },
      boxShadow: {
        neon: "0 0 25px rgba(0,255,255,0.3)",
        "neon-violet": "0 0 25px rgba(150,0,255,0.25)",
        "inner-glow": "inset 0 0 20px rgba(0,255,255,0.2)"
      },
      backgroundImage: {
        "cyber-radial":
          "radial-gradient(circle at center, rgba(0,255,255,0.1) 0%, transparent 70%)",
        "cyber-diagonal":
          "linear-gradient(120deg, rgba(0,255,255,0.05) 10%, transparent 10%, transparent 90%, rgba(150,0,255,0.05) 90%)",
        "cyber-gradient":
          "linear-gradient(90deg, #00ffff 0%, #a855f7 100%)",
        "light-gradient":
          "linear-gradient(135deg, rgba(6,182,212,0.08), rgba(99,102,241,0.05))",
        "light-card":
          "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))"
      },
      animation: {
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        floatSlow: "floatSlow 6s ease-in-out infinite",
        cyberScroll: "cyberScroll 12s linear infinite",
        cyberShift: "cyberShift 18s ease-in-out infinite",
        cyberPulse: "cyberPulse 6s ease-in-out infinite"
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" }
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" }
        },
        cyberScroll: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 20px" }
        },
        cyberShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        },
        cyberPulse: {
          "0%,100%": { opacity: "0.25", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(1.05)" }
        }
      }
    }
  },
  plugins: []
};
