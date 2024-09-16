import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        themeColor: "#0c55aa",
        themeWhite: "#ffff",
        lightBg: "#F4F6F8",
        iconBg: "#B48237",
        productsBg: "#E5F0FF",
        lightblue: "#0888FF",
        lightOrange: "#FEB343",
        darkText: "#000000",
        bannerbg: "#115061",
        grays: "#E3ECF7",
      },
      fontFamily: {
        bodyFont: ["Oregano", "cursive", "sans-serif"],
        bannerFont: ["Oregano", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
