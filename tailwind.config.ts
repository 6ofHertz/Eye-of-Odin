
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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// One Piece theme colors
				pirate: {
					navy: '#0F3460',
					gold: '#E6AF2E',
					red: '#BF1A2F',
					parchment: '#F5DEB3',
					dark: '#1A1A2E',
					ocean: '#1E4D8C',
					straw: '#FFCC66'
				}
			},
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
				'wave': {
					'0%': { transform: 'translateX(0) translateY(0)' },
					'25%': { transform: 'translateX(5px) translateY(5px)' },
					'50%': { transform: 'translateX(0) translateY(10px)' },
					'75%': { transform: 'translateX(-5px) translateY(5px)' },
					'100%': { transform: 'translateX(0) translateY(0)' }
				},
				'storm': {
					'0%, 100%': { transform: 'rotate(-3deg) translateY(0)' },
					'25%': { transform: 'rotate(0deg) translateY(5px)' },
					'50%': { transform: 'rotate(3deg) translateY(0)' },
					'75%': { transform: 'rotate(0deg) translateY(-5px)' }
				},
				'attack': {
					'0%, 100%': { transform: 'rotate(-5deg) translateY(-2px)' },
					'25%': { transform: 'rotate(2deg) translateY(7px)' },
					'50%': { transform: 'rotate(5deg) translateY(-2px)' },
					'75%': { transform: 'rotate(-2deg) translateY(7px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'wave': 'wave 4s ease-in-out infinite',
				'storm': 'storm 2s ease-in-out infinite',
				'attack': 'attack 1s ease-in-out infinite',
			},
			backgroundImage: {
				'ocean-pattern': "url('/images/ocean-bg.png')",
				'parchment-texture': "url('/images/parchment-bg.png')",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
