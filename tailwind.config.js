/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', 'var(--font-hanken-grotesk)'],
      'serif': ['ui-serif', 'Georgia', "ogg", "Bodoni Moda", 'var(--font-cormorant)'],
      // 'bodoniModa':["Bodoni Moda"],
      // 'cormorant':["Cormorant","serif"],
      // 'sometype':["Sometype","sans-serif"],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald',],
      'body': ['"Open Sans"',],
    }
  },
  plugins: [],
};
