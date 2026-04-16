import type { Config } from "tailwindcss";
import { colors } from "./src/shared/styles/tokens/colors";
import { spacing } from "./src/shared/styles/tokens/spacing";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        background: colors.background,
        foreground: colors.foreground,
        accent: colors.accent,
        border: colors.border,
        muted: colors.muted,
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        ...spacing,
      },

    },
  },
  plugins: [],
} satisfies Config;

