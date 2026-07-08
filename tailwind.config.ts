import type { Config } from 'tailwindcss';

/**
 * Configuración de Tailwind CSS.
 * Modo oscuro controlado por clase (".dark" en <html>) para que el toggle
 * de ThemeContext funcione sin depender del sistema operativo.
 * Paleta: verde esmeralda + azul petróleo + blanco/cremas, según el brief.
 */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#0f9d72',
          light: '#34c495',
          dark: '#0a7050',
        },
        petrol: {
          DEFAULT: '#0f3d4d',
          light: '#1c5e73',
          dark: '#082530',
        },
        cream: {
          DEFAULT: '#faf6ef',
          dark: '#f0e9db',
        },
      },
      fontFamily: {
        sans: ['"Poppins"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px rgba(15, 61, 77, 0.12)',
        'soft-dark': '0 10px 40px rgba(0, 0, 0, 0.4)',
      },
      borderRadius: {
        xl2: '1.75rem',
      },
      keyframes: {
        'paw-walk': {
          '0%': { transform: 'translateX(-10%)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateX(110%)', opacity: '0' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'paw-walk': 'paw-walk 8s linear infinite',
        'fade-up': 'fade-up .6s ease forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
