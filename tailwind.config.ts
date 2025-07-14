import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ink-black': '#1C2526',
        'charcoal-gray': '#333333',
        'deep-red': '#8B0000',
        'gold': '#D4A017',
        'crisp-white': '#FFFFFF',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'display': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 8vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-xl': ['clamp(2rem, 5vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-lg': ['clamp(1.5rem, 4vw, 2.25rem)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(1.25rem, 3vw, 1.875rem)', { lineHeight: '1.4' }],
        'display-sm': ['clamp(1.125rem, 2.5vw, 1.5rem)', { lineHeight: '1.4' }],
        'display-xs': ['clamp(1rem, 2vw, 1.25rem)', { lineHeight: '1.5' }],
        'body-xl': ['clamp(1.125rem, 2.5vw, 1.25rem)', { lineHeight: '1.7' }],
        'body-lg': ['clamp(1rem, 2vw, 1.125rem)', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.025em' }],
        'label': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.025em' }],
        'stat': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'xxs': '0.625rem',
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'black': '900',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'zoom-in': 'zoom-in 0.3s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'zoom-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      boxShadow: {
        'glow-gold': '0 0 20px rgba(212, 161, 23, 0.3)',
        'glow-red': '0 0 20px rgba(139, 0, 0, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(212, 161, 23, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

export default config