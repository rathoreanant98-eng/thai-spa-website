import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        forest: '#2b221d',
        ink: '#201a17',
        ivory: '#f6f0e7',
        linen: '#ded2c3',
        sage: '#9b8a7a',
        champagne: '#b88658',
        taupe: '#8b796a',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 28px 80px rgba(47, 34, 26, 0.10)',
      },
    },
  },
  plugins: [],
};

export default config;
