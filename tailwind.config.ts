import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: "#2E5E3A",
          gold: "#B08A3E",
          dark: "#1F2937",
          muted: "#6B7280",
          lightGreen: "#E8F0E0",
          lightGold: "#F5EDDB",
          lightBlue: "#E9F4FB",
          lightPink: "#FBECEB",
          lightYellow: "#F1EFE6",
          bg: "#FBF9F4",
        },
        badge: {
          hot: "#B33A2B",
          discount: "#2E5E3A",
          new: "#B08A3E",
        },
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
      },
      boxShadow: {
        card: "0 2px 12px rgba(0,0,0,0.04)",
        sidebar: "2px 0 15px rgba(0,0,0,0.03)",
        hover: "0 10px 25px rgba(0,0,0,0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      spacing: {
        "18": "4.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
