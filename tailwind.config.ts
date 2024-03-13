import type { Config } from 'tailwindcss';
const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'text-main': '#020617',
        transfers: '#00bf78',
      },
      keyframes: {
        'scrolling-header-animation': {
          '0%': { top: '0em' },
          '25%': { top: '-1.27em' },
          '50%': { top: '-2.54em' },
          '75%, 100%': { top: '-3.81em' },
        },
        'slide-up-fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translate(0px, 10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(0px, 0px)',
          },
        },
      },
      animation: {
        'scrolling-header': 'scrolling-header-animation 12s forwards',
        'fade-in': 'slide-up-fade-in 1s linear forwards',
      },
    },
  },
  plugins: [
    plugin(function ({
      matchUtilities,
      theme,
    }: {
      matchUtilities: any;
      theme: any;
    }) {
      matchUtilities(
        {
          'animate-delay': (value: any) => ({
            animationDelay: value,
          }),
        },
        { values: theme('transitionDelay') }
      );
    }),
  ],
};
export default config;
