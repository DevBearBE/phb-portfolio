import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "polar-teal": "#065758",
        "polar-ice": "#e2f0ef",
        "polar-green": {
          light: "#a9d4d6",
          DEFAULT: "#82c3c5",
        },
        "polar-red": "#c46960",
        "lime-green": "#5CD85A",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      fontSize: {
        extreme: "13rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
