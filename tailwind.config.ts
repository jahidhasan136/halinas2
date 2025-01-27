import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          md: "1rem",
          lg: "4rem",
          xl: "7rem",
          // "2xl": "8rem",
        },
        screens: {
          "2xl": "1940px",
          xl: "1440px",
          lg: "1024px",
          md: "100%",
          sm: "100%",
        },
      },
      colors: {
        primary: "#E0E721",
        secondary: "#0057B8",
        white: "#FFFFFF",
        white2: "#F1F1F1",
        black: "#000000",
        black2: "#3E3D3D",
      },
      fontFamily: {
        mulish: [
          "Mulish", // Add Mulish as a custom font family
          ...defaultTheme.fontFamily.sans, // Fallback to sans-serif
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
