/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#FF6B35',
          foreground: '#ffffff',
          soft: 'rgba(255, 107, 53, 0.2)',
        },
        secondary: {
          DEFAULT: '#004E89',
          foreground: '#ffffff',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#2d2d2d',
          foreground: '#a0a0a0',
        },
        accent: {
          DEFAULT: '#F4A460',
          foreground: '#ffffff',
        },
        card: {
          DEFAULT: '#1a1a1a',
          foreground: '#ffffff',
        },
        brutal: {
          bg: '#1a1a1a',
          fg: '#ffffff',
          border: '#4a4a4a',
          accent: '#FF6B35',
          accent2: '#004E89',
        },
        liquid: {
          bg: '#0f0f0f',
          fg: '#ffffff',
          primary: '#004E89',
          secondary: '#FF6B35',
          tertiary: '#8B5E3C',
        },
        bhuvan: {
          blue: '#004E89',
          orange: '#FF6B35',
          gold: '#F4A460',
          charcoal: '#1a1a1a',
          sand: '#D2B48C',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        'brutal': '0',
        'liquid': '9999px',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        brutal: ['var(--font-display)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'brutal-xs': ['0.75rem', { lineHeight: '1', letterSpacing: '0.1em' }],
        'brutal-sm': ['0.875rem', { lineHeight: '1.1', letterSpacing: '0.05em' }],
        'brutal-base': ['1rem', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'brutal-lg': ['1.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'brutal-xl': ['2.25rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'brutal-2xl': ['3.5rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
        'brutal-3xl': ['5rem', { lineHeight: '0.95', letterSpacing: '-0.05em' }],
        'brutal-4xl': ['7rem', { lineHeight: '0.9', letterSpacing: '-0.06em' }],
      },
      animation: {
        'liquid-blob': 'liquid-blob 20s ease-in-out infinite',
        'liquid-morph': 'liquid-morph 8s ease-in-out infinite',
        'liquid-float': 'liquid-float 6s ease-in-out infinite',
        'liquid-pulse': 'liquid-pulse 4s ease-in-out infinite',
        'brutal-flicker': 'brutal-flicker 0.15s ease-in-out infinite alternate',
        'brutal-shake': 'brutal-shake 0.5s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 10s ease-in-out infinite',
        'text-reveal': 'text-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'scale-in': 'scale-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        'liquid-blob': {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%', transform: 'translate(20px, -20px) rotate(5deg)' },
          '50%': { borderRadius: '50% 60% 30% 60% / 30% 50% 60% 40%', transform: 'translate(-10px, 30px) rotate(-3deg)' },
          '75%': { borderRadius: '60% 30% 60% 50% / 70% 40% 50% 30%', transform: 'translate(-20px, -10px) rotate(2deg)' },
        },
        'liquid-morph': {
          '0%, 100%': { borderRadius: '40% 60% 60% 40% / 50% 40% 60% 50%', transform: 'scale(1) rotate(0deg)' },
          '33%': { borderRadius: '60% 40% 40% 60% / 60% 50% 40% 50%', transform: 'scale(1.05) rotate(2deg)' },
          '66%': { borderRadius: '50% 50% 50% 50% / 40% 60% 50% 40%', transform: 'scale(0.98) rotate(-1deg)' },
        },
        'liquid-float': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-15px) translateX(10px)' },
        },
        'liquid-pulse': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.08)' },
        },
        'brutal-flicker': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0.95' },
        },
        'brutal-shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-2px)' },
          '75%': { transform: 'translateX(2px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'text-reveal': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'liquid-gradient': 'linear-gradient(135deg, hsl(var(--liquid-primary)) 0%, hsl(var(--liquid-secondary)) 50%, hsl(var(--liquid-tertiary)) 100%)',
        'brutal-gradient': 'linear-gradient(90deg, hsl(var(--brutal-accent)) 0%, hsl(var(--brutal-accent2)) 100%)',
      },
      backgroundSize: {
        '300%': '300% 300%',
      },
      boxShadow: {
        'brutal': '4px 4px 0 0 hsl(var(--brutal-border))',
        'brutal-lg': '8px 8px 0 0 hsl(var(--brutal-border))',
        'brutal-xl': '12px 12px 0 0 hsl(var(--brutal-border))',
        'brutal-inset': 'inset 4px 4px 0 0 hsl(var(--brutal-border))',
        'liquid': '0 0 40px -10px hsl(var(--liquid-primary) / 0.5), 0 0 80px -20px hsl(var(--liquid-secondary) / 0.3)',
        'liquid-lg': '0 0 60px -10px hsl(var(--liquid-primary) / 0.6), 0 0 120px -20px hsl(var(--liquid-secondary) / 0.4)',
        'liquid-inner': 'inset 0 0 60px -10px hsl(var(--liquid-primary) / 0.3)',
      },
      transitionDuration: {
        'brutal': '0ms',
        'liquid': '300ms',
        'liquid-slow': '600ms',
      },
      transitionTimingFunction: {
        'brutal': 'steps(1)',
        'liquid': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}