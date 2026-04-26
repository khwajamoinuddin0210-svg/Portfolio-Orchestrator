import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05070b",
        panel: "rgba(12, 16, 24, 0.72)",
        line: "rgba(255, 255, 255, 0.12)",
        signal: "#9ee6ff",
        pulse: "#bcf8d2",
        flare: "#f7b7ff"
      },
      boxShadow: {
        glow: "0 0 50px rgba(158, 230, 255, 0.18)",
        panel: "0 24px 90px rgba(0, 0, 0, 0.35)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"]
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at 20% 20%, rgba(158, 230, 255, 0.16), transparent 30%), radial-gradient(circle at 78% 12%, rgba(247, 183, 255, 0.14), transparent 26%), radial-gradient(circle at 52% 86%, rgba(188, 248, 210, 0.12), transparent 28%)"
      }
    }
  },
  plugins: []
};

export default config;
