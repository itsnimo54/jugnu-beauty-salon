/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'rose-gold': {
          50: '#FDF9E7',
          100: '#FDF1C9',
          200: '#FBE5A0',
          300: '#F8D66F',
          400: '#E8C252',
          500: '#D4AF37',
          600: '#B8962E',
          700: '#917525',
          800: '#725623',
          900: '#5A4422',
        },
        'soft-pink': {
          50: '#FCE8EC',
          100: '#FAD0D8',
          200: '#F5A1B3',
          300: '#EF728C',
          400: '#E9436A',
          500: '#D4AF37',
          600: '#C5224D',
          700: '#A31A3E',
          800: '#811432',
          900: '#5F0E26',
        },
        luxury: {
          black: '#111111',
          charcoal: '#1a1a1a',
          dark: '#222222',
          gray: '#333333',
        },
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'Georgia', 'serif'],
        'cormorant': ['"Cormorant Garamond"', 'Georgia', 'serif'],
        'lato': ['Lato', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'luxury': '0 10px 40px rgba(212, 175, 55, 0.15)',
        'luxury-lg': '0 20px 60px rgba(212, 175, 55, 0.2)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'glass-dark': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 48px rgba(0, 0, 0, 0.12)',
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, #D4AF37 0%, #FCE8EC 50%, #D4AF37 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #F8D66F 50%, #D4AF37 100%)',
        'gradient-soft': 'linear-gradient(135deg, #FCE8EC 0%, #FFFFFF 100%)',
        'gradient-dark': 'linear-gradient(135deg, #111111 0%, #1a1a1a 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
