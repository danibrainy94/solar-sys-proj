/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        revolve: {
          '0%': {transform: 'rotate(0deg)translateX(45px) rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)translateX(45px) rotate(-360deg)'},
        },

        revolve2: {
          '0%': {transform: 'rotate(0deg)translateX(60px) rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)translateX(60px) rotate(-360deg)'},
        },

        revolve3: {
          '0%': {transform: 'rotate(0deg)translateX(77px) rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)translateX(77px) rotate(-360deg)'},
        },

        revolveMoon: {
          '0%': {transform: 'rotate(0deg)translateX(13px) rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)translateX(13px) rotate(-360deg)'},
        },

        revolve4: {
          '0%': {transform: 'rotate(0deg)translateX(102px) rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)translateX(102px) rotate(-360deg)'},
        },

        revolve5: {
          '0%': {transform: 'rotate(0deg)translateX(130px) rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)translateX(130px) rotate(-360deg)'},
        },

        revolve6: {
          '0%': {transform: 'rotate(0deg)translateX(160px) rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)translateX(160px) rotate(-360deg)'},
        },

        revolve7: {
          '0%': {transform: 'rotate(0deg)translateX(195px) rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)translateX(195px) rotate(-360deg)'},
        },

        revolve8: {
          '0%': {transform: 'rotate(0deg)translateX(225px) rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)translateX(225px) rotate(-360deg)'},
        },

        rotate: {
          '0%':{transform: 'rotate(0deg)'},
          '100%':{transform: 'rotate(360deg)'}
        },

        revolveAst: {
          '0%': {transform: 'rotate(0deg)translateX(200px) rotate(0deg)'},
          '100%': {transform: 'rotate(180deg)translateX(960px) rotate(-360deg)'},
        }

      },
      animation: {
        rotate:'rotate 10s linear infinite',
        revolve: 'revolve 15s linear infinite',
        revolve2:'revolve2 25s linear infinite',
        revolve3:'revolve3 35s linear infinite',
        revolve4:'revolve4 45s linear infinite',
        revolve5:'revolve5 55s linear infinite',
        revolve6:'revolve6 65s linear infinite',
        revolve7:'revolve7 75s linear infinite',
        revolve8:'revolve8 85s linear infinite',
        revolveMoon:'revolveMoon 4s linear infinite',
        revolveAst:'revolveAst 65s linear infinite'
      }
    },
  },
  plugins: [],
}

