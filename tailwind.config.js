module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue-900': "#161831",
      'blue-400': "#006DFF",
      'white': "#fff",
      'zinx-100': "#D1D1D1",
      'red-400': "#FF2F04"
    },
    extend: {
      gridTemplateRows: {
        '3': '1fr'
      },
      dropShadow: {
        '3xl': [
          '5px 5px 6px #006DFF',
          '-5px 5px 6px #006DFF',
          '0px -8px 6px #006DFF'
        ]
      }
    },
  },
  plugins: [],
}
