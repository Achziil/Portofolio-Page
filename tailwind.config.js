module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '425px',
      // => @media (min-width: 576px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1440px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '2560px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        snow: '#fff6f6ff',
        redsalsa: '#ff595eff',
        eerieblack: '#141414',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
