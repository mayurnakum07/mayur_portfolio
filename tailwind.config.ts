import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        surface: {
          1: "hsl(var(--surface-1))",
          2: "hsl(var(--surface-2))",
          3: "hsl(var(--surface-3))",
          elevated: "hsl(var(--surface-elevated))",
        },
        accent: {
          cyan: "hsl(var(--accent-cyan))",
          purple: "hsl(var(--accent-purple))",
          DEFAULT: "hsl(var(--accent-purple))",
        },
        border: {
          DEFAULT: "hsl(var(--border))",
          hover: "hsl(var(--border-hover))",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-lg": ["3.75rem", { lineHeight: "1.08", letterSpacing: "-0.025em", fontWeight: "700" }],
        "display-md": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "heading-lg": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "600" }],
        "heading-md": ["1.5rem", { lineHeight: "1.25", letterSpacing: "-0.015em", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7", fontWeight: "400" }],
        "body-md": ["1rem", { lineHeight: "1.65", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6", fontWeight: "400" }],
        "label": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.04em", fontWeight: "500" }],
      },
      spacing: {
        section: "6rem",
        "section-lg": "8rem",
        container: "1.5rem",
        "container-md": "2.5rem",
        "container-lg": "4rem",
        "container-xl": "6rem",
      },
      maxWidth: {
        page: "1400px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        "soft-lg": "var(--shadow-soft-lg)",
        glow: "var(--shadow-glow)",
        "glow-purple": "var(--shadow-glow-purple)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(hsl(var(--grid-line)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--grid-line)) 1px, transparent 1px)",
        "gradient-radial-cyan":
          "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(var(--accent-cyan) / 0.08), transparent)",
        "gradient-radial-purple":
          "radial-gradient(ellipse 60% 40% at 80% 60%, hsl(var(--accent-purple) / 0.06), transparent)",
        "gradient-accent": "linear-gradient(135deg, hsl(var(--accent-cyan)), hsl(var(--accent-purple)))",
      },
      backgroundSize: {
        grid: "64px 64px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
