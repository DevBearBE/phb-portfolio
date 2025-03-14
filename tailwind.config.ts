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
        "polar-teal": {
          50: "#edfffd",
          100: "#c2fffc",
          200: "#85fffa",
          300: "#40fff8",
          400: "#09f8ed",
          500: "#00dcd4",
          600: "#00b1ae",
          700: "#008c8c",
          800: "#006d6f",
          DEFAULT: "#065758",
          900: "#003538",
        },
        "polar-ice": {
          50: "#f4f9f9",
          DEFAULT: "#e2f0ef",
          100: "#b6d9d7",
          200: "#8abebd",
          300: "#619fa0",
          400: "#478385",
          500: "#37686a",
          600: "#2f5356",
          700: "#294446",
          800: "#26393b",
          900: "#112122",
        },
        "polar-green": {
          50: "#f2f9f8",
          100: "#ddf0f0",
          200: "#bfe1e2",
          DEFAULT: "#82c3c5",
          300: "#60adb0",
          400: "#449196",
          500: "#3b787f",
          600: "#356369",
          700: "#325258",
          800: "#2d464c",
          900: "#1a2d32",
        },
        "polar-red": {
          50: "#fbf6f5",
          100: "#f8e9e8",
          200: "#f2d9d6",
          300: "#e8bdb9",
          400: "#d99790",
          DEFAULT: "#c46960",
          500: "#b3584f",
          600: "#954840",
          700: "#7c3e38",
          800: "#693833",
          900: "#381a17",
        },
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
