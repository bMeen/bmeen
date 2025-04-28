import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        text: "var(--text-primary)",
        gray: "var(--gray)",
        "gray-secondary": "var(--secondary-gray)",
        "light-gray": "var(--light-gray)",
        orange: "var(--orange)",
        "orange-secondary": "var(--secondary-orange)",
        blue: "var(--blue)",
        "blue-secondary": "var(--secondary-blue)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
