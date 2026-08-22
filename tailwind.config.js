/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        cream: "#e8ddd0",
        gold: "#c8973a",
        goldDeep: "#7a5c1e",
        rust: "#c04020",
        forest: "#3a6e3a",
      },
      fontFamily: {
        caveat: ["Caveat", "cursive"],
        dm: ['"DM Serif Display"', "serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(var(--r, 0deg))" },
          "50%": { transform: "translateY(-14px) rotate(var(--r, 0deg))" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(var(--r, 0deg))" },
          "50%": { transform: "rotate(calc(var(--r, 0deg) + 3deg))" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        wiggle: "wiggle 3.5s ease-in-out infinite",
        "spin-slow": "spinSlow 18s linear infinite",
      },
    },
  },
  plugins: [],
};
