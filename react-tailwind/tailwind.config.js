// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        floatSlow: {
          '0%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(120px, 80px)' },
          '100%': { transform: 'translate(0px, 0px)' },
        },
        floatSlowReverse: {
          '0%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(-100px, -60px)' },
          '100%': { transform: 'translate(0px, 0px)' },
        },
      },
      animation: {
        floatSlow: 'floatSlow 18s ease-in-out infinite',
        floatSlowReverse: 'floatSlowReverse 22s ease-in-out infinite',
      },
    },
  },
}
