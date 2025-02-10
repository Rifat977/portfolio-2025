/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "rgb(var(--color-bg))",
        foreground: "rgb(var(--color-text))",
        primary: {
          DEFAULT: "rgb(var(--color-primary))",
          foreground: "rgb(var(--color-bg))",
        },
        secondary: {
          DEFAULT: "rgb(var(--color-secondary))",
          foreground: "rgb(var(--color-bg))",
        },
        accent: {
          DEFAULT: "rgb(var(--color-accent))",
          foreground: "rgb(var(--color-bg))",
        },
        muted: {
          DEFAULT: "rgba(var(--color-text), 0.1)",
          foreground: "rgba(var(--color-text), 0.5)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

