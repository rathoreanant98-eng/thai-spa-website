import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        forest: '#17352d',
        ink: '#151714',
        ivory: '#f4efe5',
        linen: '#e7dfd0',
        sage: '#9eaa91',
        champagne: '#b99a62',
        taupe: '#9d8e7c',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(17, 31, 26, 0.10)',
      },
    },
  },
  plugins: [],
};

export default config;
