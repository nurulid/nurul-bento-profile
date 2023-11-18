/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      padding: {
        '0.5': '1px',
      },
      keyframes: {
        bgWaves: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' }
        }
      },
      animation: {
        bgWaves: 'bgWaves 5s ease-in-out infinite',
      }
    },

  },
  plugins: [],
}

