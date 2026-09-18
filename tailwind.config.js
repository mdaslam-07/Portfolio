/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0B",
          soft: "#0F0F11",
        },
        surface: {
          DEFAULT: "#131316",
          raised: "#1A1A1E",
          border: "#232327",
        },
        paper: {
          DEFAULT: "#F3F1EC",
          dim: "#A6A5A8",
          faint: "#6E6D71",
        },
        ember: {
          DEFAULT: "#E8672B",
          soft: "#FF8F5C",
          dim: "#7A3A1D",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(243,241,236,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(243,241,236,0.035) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      maxWidth: {
        content: "1240px",
      },
    },
  },
  plugins: [],
}
