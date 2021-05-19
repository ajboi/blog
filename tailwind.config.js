module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
    ],
    // These options are passed through directly to PurgeCSS
    options: {
      safelist: ["bg-red-500", "px-4", "active"],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
