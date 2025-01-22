/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-1": "#004D1B",
        "accent-1": "#16a34a",
      },
      maxWidth: {
        center: "1980px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mountain-sunset": "url(/mountain-sunset_compressed.jpg)",
        highway: "url(/highway-dark_compressed.jpg)",
        truck: "url(/hero-truck_dark.jpg)",
      },
      keyframes: {
        "marquee-up": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        "marquee-up": "marquee-up var(--duration, 40s) linear infinite",
      },
    },
  },
  plugins: [],
};
