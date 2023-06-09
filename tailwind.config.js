/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#D4C5F6",
          200: "#A98FEE",
          300: "#7152CD",
          400: "#42279C",
          500: "#13005A",
          600: "#0E004D",
          700: "#0A0040",
          800: "#070034",
          900: "#05002B",
        },
        secondary: {
          100: "#CAFCD8",
          200: "#97F9BC",
          300: "#61EEA4",
          400: "#3ADE98",
          500: "#03C988",
          600: "#02AC85",
          700: "#01907D",
          800: "#007470",
          900: "#005A60",
        },
        success: {
          100: "#CDFBCF",
          200: "#9CF8AA",
          300: "#69EB89",
          400: "#42D877",
          500: "#0FBF5E",
          600: "#0AA45F",
          700: "#07895B",
          800: "#046E54",
          900: "#025B4E",
        },
        info: {
          100: "#CCF2FD",
          200: "#9AE0FB",
          300: "#67C5F5",
          400: "#41A8EC",
          500: "#087FE0",
          600: "#0562C0",
          700: "#0449A1",
          800: "#023381",
          900: "#01246B",
        },
        warning: {
          100: "#FFF9CC",
          200: "#FFF299",
          300: "#FFE866",
          400: "#FFDF3F",
          500: "#FFD000",
          600: "#DBAE00",
          700: "#B78E00",
          800: "#937000",
          900: "#7A5A00",
        },
        danger:{
          100: "#FDDAD0",
          200: "#FBADA2",
          300: "#F57673",
          400: "#EC4F5B",
          500: "#E01A3B",
          600: "#C01340",
          700: "#A10D41",
          800: "#81083E",
          900: "#6B043C"

        }
      },
    },
  },
  plugins: [],
};
