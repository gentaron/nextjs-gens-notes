import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-black': '#000000',
        'cyan-accent': '#06B6D4',
        'pure-white': '#FFFFFF',
        'electric-purple': '#8B5CF6',
        'hot-pink': '#EC4899',
      },
      backgroundImage: {
        'gradient-purple-pink': 'linear-gradient(to right, #8B5CF6, #EC4899)',
      },
      keyframes: {
        'gradient-pulse': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'gradient-move': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'gradient-pulse': 'gradient-pulse 10s ease infinite',
        'gradient-move': 'gradient-move 10s ease infinite alternate',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;