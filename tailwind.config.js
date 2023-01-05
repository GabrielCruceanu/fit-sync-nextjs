const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        gray: colors.zinc,
        teal: colors.teal,
        primary: colors.teal,
        blue: colors.teal,
      },
      backgroundImage: ({ theme }) => ({
        'vc-border-gradient': `radial-gradient(at left top, ${theme(
          'colors.gray.500',
        )}, 50px, ${theme('colors.gray.800')} 50%)`,
      }),
      keyframes: ({ theme }) => ({
        rerender: {
          '0%': {
            ['border-color']: theme('colors.teal.500'),
          },
          '40%': {
            ['border-color']: theme('colors.teal.500'),
          },
        },
        highlight: {
          '0%': {
            background: theme('colors.teal.500'),
            color: theme('colors.white'),
          },
          '40%': {
            background: theme('colors.teal.500'),
            color: theme('colors.white'),
          },
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        translateXReset: {
          '100%': {
            transform: 'translateX(0)',
          },
        },
        fadeToTransparent: {
          '0%': {
            opacity: 1,
          },
          '40%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('flowbite/plugin')],
};
