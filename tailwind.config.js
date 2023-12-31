module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 200: "#f0f0f0", 500: "#a1a1a1", 800: "#4f4f4f" },
        light_green: { 100: "#d0f8d0" },
        blue: { 200: "#a2c7ff", A100: "#80abff" },
        green: { 800: "#009c0f", A100: "#a2ffc7" },
        black: { 900: "#000000" },
        deep_orange: { 200: "#ffa2a2" },
        purple: { A100: "#e1a2ff" },
        white: { A700: "#ffffff" },
        yellow: { 200: "#fff0a2" },
      },
      fontFamily: { inter: "Inter", nunito: "Nunito" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
