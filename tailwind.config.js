/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Main colors
        primary: {
          50: '#E6FFFA',
          100: '#B2F5EA',
          200: '#81E6D9',
          300: '#4FD1C5',
          400: '#38B2AC',
          500: '#319795',
          600: '#2C7A7B',
          700: '#285E61',
          800: '#234E52',
          900: '#1D4044',
          950: '#0F2C2D',
        },
        secondary: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
          950: '#2E1065',
        },
        accent: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
          950: '#431407',
        },
        success: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          500: '#10B981',
          700: '#047857',
        },
        warning: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          500: '#F59E0B',
          700: '#B45309',
        },
        error: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          500: '#EF4444',
          700: '#B91C1C',
        },
        dark: {
          100: '#242535',
          200: '#1E1F2C',
          300: '#181924',
          400: '#12131A',
          500: '#0C0D12',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px 2px rgba(49, 151, 149, 0.2)' },
          '50%': { boxShadow: '0 0 20px 5px rgba(49, 151, 149, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
        pulse: 'pulse 2s ease-in-out infinite',
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h1v1H0V0zm1 0h1v1H1V0zm1 0h1v1H2V0zm1 0h1v1H3V0zm1 0h1v1H4V0zm1 0h1v1H5V0zm1 0h1v1H6V0zm1 0h1v1H7V0zm1 0h1v1H8V0zm1 0h1v1H9V0zm1 0h1v1h-1V0zm1 0h1v1h-1V0zm1 0h1v1h-1V0zm1 0h1v1h-1V0zm1 0h1v1h-1V0zm1 0h1v1h-1V0zm1 0h1v1h-1V0zm1 0h1v1h-1V0zm1 0h1v1h-1V0zm1 0h1v1h-1V0zm1 0h1v1h-1V0zm1 0h1v1h-1V0zm1 0h1v1h-1V0zm1 0h1v1h-1V0zm1 0h1v1h-1V0zm1 0h1v1h-1V0zm1 0h1v1h-1V0zm1 0h1v1h-1V0zm1 0h1v1h-1V0zm1 0h1v1h-1V0zm1 0h1v1h-1V0zm1 0h1v1h-1V0zm1 0h1v1h-1V0zm1 0h1v1h-1V0zm1 0h1v1h-1V0zm1 0h1v1h-1V0zm1 0h1v1h-1V0zm1 0h1v1h-1V0zm1 0h1v1h-1V0zm1 0h1v1h-1V0zm1 0h1v1h-1V0z' fill='%23319795' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        'gradient-dark': 'linear-gradient(to bottom right, #1E1F2C, #0C0D12)',
      },
    },
  },
  plugins: [],
};