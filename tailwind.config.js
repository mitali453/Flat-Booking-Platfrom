module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    backgroundImage: {
       
      },
      textColor: {
        yellow: {

          DEFAULT: '#b69100',

        }
      },
      backgroundColor: theme => ({

        'primary': '#b69100',

      }),

      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },

    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio'),],
  }

}
