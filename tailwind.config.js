// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"], // zorg dat alle html/js bestanden gescand worden
  theme: {
    extend: {
      keyframes: {
        floatParticle: {
          '0%': { transform: 'translate(0,0) scale(1)', opacity: '0.3' },
          '50%': { transform: 'translate(-50px, -100px) scale(1.5)', opacity: '0.6' },
          '100%': { transform: 'translate(0,0) scale(1)', opacity: '0.3' },
        }
      },
      animation: {
        floatParticle: 'floatParticle linear infinite',
      }
    },
  },
  plugins: [],
}


