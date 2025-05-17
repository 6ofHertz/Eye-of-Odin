import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: ({ opacityVariable, opacityValue }) => ({
        background: `hsl(var(--background) / ${opacityVariable || opacityValue})`,
        foreground: `hsl(var(--foreground) / ${opacityVariable || opacityValue})`,
        card: `hsl(var(--card) / ${opacityVariable || opacityValue})`,
        'card-foreground': `hsl(var(--card-foreground) / ${opacityVariable || opacityValue})`,
        popover: `hsl(var(--popover) / ${opacityVariable || opacityValue})`,
        'popover-foreground': `hsl(var(--popover-foreground) / ${opacityVariable || opacityValue})`,
        primary: `hsl(var(--primary) / ${opacityVariable || opacityValue})`,
        'primary-foreground': `hsl(var(--primary-foreground) / ${opacityVariable || opacityValue})`,
        secondary: `hsl(var(--secondary) / ${opacityVariable || opacityValue})`,
        'secondary-foreground': `hsl(var(--secondary-foreground) / ${opacityVariable || opacityValue})`,
        muted: `hsl(var(--muted) / ${opacityVariable || opacityValue})`,
        'muted-foreground': `hsl(var(--muted-foreground) / ${opacityVariable || opacityValue})`,
        accent: `hsl(var(--accent) / ${opacityVariable || opacityValue})`,
        'accent-foreground': `hsl(var(--accent-foreground) / ${opacityVariable || opacityValue})`,
        destructive: `hsl(var(--destructive) / ${opacityVariable || opacityValue})`,
        border: '#444444',
        input: '#2A2A2A',
        ring: '#EEEEEE',
      }),
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0', opacity: '0' },
          to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
          to: { height: '0', opacity: '0' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'float-delay': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'wave': {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(5px) translateY(5px)' },
          '50%': { transform: 'translateX(0) translateY(10px)' },
          '75%': { transform: 'translateX(-5px) translateY(5px)' },
          '100%': { transform: 'translateX(0) translateY(0)' }
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { transform: 'scale(1.5)', opacity: '0' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'ping-slow': {
          '75%, 100%': {
            transform: 'scale(1.8)',
            opacity: '0'
          }
        },
        'ping-fast': {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0'
          }
        },
        'pulse-slow': {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0.8'
          }
        },
        'pulse-fast': {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0.7'
          }
        },
        'twinkle': {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0.2'
          }
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'float-delay': 'float 4s ease-in-out 1s infinite',
        'wave': 'wave 4s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'ping-slow': 'ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ping-fast': 'ping-fast 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse-slow': 'pulse-slow 3s infinite',
        'pulse-fast': 'pulse-fast 1.5s infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;