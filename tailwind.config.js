module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          // primary: "#a991f7",
          // secondary: "#f6d860",
          // accent: "#37cdbe",
          neutral: "#ededed",
          "base-100": "#ffffff",
        },
      },
      {
        dark: {
          "primary": "#f97316",
          "secondary": "#8b5cf6",
          "accent": "#06b6d4",
          "neutral": "#4C5154",
          "base-100": "#161819",
        },
      },
    ],
  },

}