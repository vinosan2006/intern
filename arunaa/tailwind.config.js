/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Charcoal/Slate colors for the premium dark mode
        brand: {
          950: '#0a0a0c', // Deepest background
          900: '#121214', // Section backgrounds
          800: '#1c1c1f', // Elevated cards
          700: '#27272a', // Borders
        },
        // Premium corporate blue accent
        accent: {
          500: '#2563eb', // Core blue
          400: '#3b82f6', // Hover states
          600: '#1d4ed8', // Active states
        },
        // Crisp Typography
        text: {
          primary: '#ffffff',
          secondary: '#a1a1aa', // Slate gray text
          muted: '#71717a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'], // For bold, high-contrast headings
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0em',
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.25em',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(37, 99, 235, 0.15)',
        'glow-hover': '0 0 30px rgba(37, 99, 235, 0.3)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
