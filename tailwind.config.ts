import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0E1620",
          surface: "#15202B",
          alt: "#1B2836",
          border: "#26343F",
        },
        text: {
          DEFAULT: "#E8EEF4",
          muted: "#8FA3B5",
          faint: "#5B6E80",
        },
        teal: {
          DEFAULT: "#4FD8C4",
          dim: "#2E7C71",
        },
        amber: {
          DEFAULT: "#F2B84D",
          dim: "#8A6A2A",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, #1B2836 1px, transparent 1px), linear-gradient(to bottom, #1B2836 1px, transparent 1px)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        fadeUp: "fadeUp 0.6s ease-out both",
        scanline: "scanline 2.4s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
