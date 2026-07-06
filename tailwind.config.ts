import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0E14",
        surface: "#0F1520",
        surface2: "#151C29",
        surface3: "#1B2432",
        border: {
          DEFAULT: "rgba(255,255,255,0.07)",
          strong: "rgba(255,255,255,0.14)",
        },
        ink: {
          DEFAULT: "#E7ECF3",
          muted: "#8B96A8",
          faint: "#5A6577",
        },
        brand: {
          DEFAULT: "#2F6FED",
          dim: "#1E4FBE",
          soft: "rgba(47,111,237,0.12)",
        },
        signal: {
          safe: "#22C55E",
          warn: "#F5A623",
          danger: "#EF4444",
          info: "#38BDF8",
        },
        term: {
          bg: "#070C08",
          green: "#3DDC84",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Inter",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "SF Mono",
          "Consolas",
          "Liberation Mono",
          "Menlo",
          "monospace",
        ],
      },
      boxShadow: {
        panel: "0 1px 0 rgba(255,255,255,0.03) inset, 0 8px 24px rgba(0,0,0,0.35)",
        glow: "0 0 0 1px rgba(47,111,237,0.35), 0 0 24px rgba(47,111,237,0.15)",
      },
      borderRadius: {
        card: "14px",
      },
      keyframes: {
        pulseDot: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: ".4", transform: "scale(1.6)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        pulseDot: "pulseDot 2s ease-in-out infinite",
        ticker: "ticker 42s linear infinite",
        blink: "blink 1s step-end infinite",
        fadeUp: "fadeUp .25s ease",
      },
    },
  },
  plugins: [],
};
export default config;
