import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'jam-purple': '#A855F7',
        'jam-pink': '#EC4899',
        'jam-gradient-start': '#000000',
        'jam-gradient-end': '#1F1F1F',
      },
      fontFamily: {
        'display': ['"Comic Neue"', 'cursive'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s infinite',
        'bounce-slow': 'bounce 3s infinite',
        'shine': 'shine 3s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} satisfies Config;