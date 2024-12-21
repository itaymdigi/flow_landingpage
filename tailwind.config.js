/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2E5077",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#4DA1A9",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#79D7BE",
          foreground: "#ffffff",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 