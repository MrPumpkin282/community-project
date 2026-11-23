import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        navy: {
          50: '#eef2f7',
          100: '#d4dce8',
          200: '#a9b9d1',
          300: '#7e96ba',
          400: '#5373a3',
          500: '#2d4a7a',
          600: '#1e3a5f',
          700: '#162d4a',
          800: '#0f2035',
          900: '#081420',
          950: '#040a12',
        },
        saffron: {
          50: '#fff8f0',
          100: '#ffecd4',
          200: '#ffd5a0',
          300: '#ffbe6d',
          400: '#ffa733',
          500: '#ff8c00',
          600: '#e07000',
          700: '#b85800',
          800: '#8f4400',
          900: '#663100',
        },
        forest: {
          50: '#f0f7f4',
          100: '#d4ebe0',
          200: '#a9d7c1',
          300: '#7ec3a2',
          400: '#53af83',
          500: '#2d8a60',
          600: '#1e6e4a',
          700: '#165238',
          800: '#0f3826',
          900: '#081e14',
        },
        india: {
          saffron: '#FF9933',
          green: '#138808',
          navy: '#000080',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['"Inter"', '"Noto Sans"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
