import { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00c1d4",
        secondary: "#1c1c1c",
        accent: "#f9f9f9",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      transform: {
        scaleY: "scaleY",
      },
    },
  },
  plugins: [],
};

export default config;
