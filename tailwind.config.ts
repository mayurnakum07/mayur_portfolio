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
        ink: {
          DEFAULT: "var(--ink)",
          raised: "var(--ink-raised)",
          surface: "var(--ink-surface)",
          border: "var(--ink-border)",
          "border-hover": "var(--ink-border-hover)",
        },
        paper: {
          DEFAULT: "var(--paper)",
          muted: "var(--paper-muted)",
          faint: "var(--paper-faint)",
        },
        signal: {
          DEFAULT: "var(--signal)",
          dim: "var(--signal-dim)",
          muted: "var(--signal-muted)",
        },
        invert: {
          bg: "var(--invert-bg)",
          fg: "var(--invert-fg)",
          muted: "var(--invert-muted)",
          border: "var(--invert-border)",
        },
        success: "var(--success)",
        error: "var(--error)",
        /* Legacy aliases — other pages until migrated */
        background: "var(--ink)",
        foreground: "var(--paper)",
        muted: {
          DEFAULT: "var(--ink-surface)",
          foreground: "var(--paper-muted)",
        },
        surface: {
          1: "var(--ink-raised)",
          2: "var(--ink-surface)",
          3: "var(--ink-surface)",
          elevated: "var(--ink-surface)",
        },
        accent: {
          DEFAULT: "var(--signal)",
        },
        border: {
          DEFAULT: "var(--ink-border)",
          hover: "var(--ink-border-hover)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": [
          "clamp(2.75rem, 7.5vw, 6.5rem)",
          { lineHeight: "1.02", letterSpacing: "-0.035em", fontWeight: "700" },
        ],
        "display-lg": [
          "clamp(2.25rem, 5.5vw, 4.25rem)",
          { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" },
        ],
        "display-md": [
          "clamp(1.875rem, 3.5vw, 2.75rem)",
          { lineHeight: "1.12", letterSpacing: "-0.025em", fontWeight: "700" },
        ],
        "heading-lg": [
          "clamp(1.625rem, 3vw, 2.125rem)",
          { lineHeight: "1.22", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "heading-md": [
          "clamp(1.3125rem, 2.4vw, 1.625rem)",
          { lineHeight: "1.3", letterSpacing: "-0.015em", fontWeight: "600" },
        ],
        "body-lg": [
          "clamp(1.125rem, 1.8vw, 1.3125rem)",
          { lineHeight: "1.65", fontWeight: "400" },
        ],
        "body-md": ["1.125rem", { lineHeight: "1.7", fontWeight: "400" }],
        "body-sm": ["0.9375rem", { lineHeight: "1.65", fontWeight: "400" }],
        "meta-lg": [
          "0.8125rem",
          { lineHeight: "1.55", letterSpacing: "0.04em", fontWeight: "400" },
        ],
        "meta-sm": [
          "0.75rem",
          { lineHeight: "1.55", letterSpacing: "0.05em", fontWeight: "400" },
        ],
        "meta-xs": [
          "0.75rem",
          { lineHeight: "1.5", letterSpacing: "0.04em", fontWeight: "400" },
        ],
      },
      maxWidth: {
        page: "1440px",
        prose: "62ch",
        narrow: "640px",
        measure: "38rem",
      },
      borderRadius: {
        sm: "2px",
        DEFAULT: "2px",
        md: "2px",
        lg: "2px",
      },
      boxShadow: {
        artifact: "8px 8px 0 var(--ink-border)",
        "artifact-sm": "4px 4px 0 var(--ink-border)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
