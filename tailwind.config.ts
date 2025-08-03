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
			fontFamily: {
				'orbitron': ['Orbitron', 'monospace'],
				'inter': ['Inter', 'sans-serif'],
			},
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
				'crypto-purple': 'hsl(var(--crypto-purple))',
				'crypto-blue': 'hsl(var(--crypto-blue))',
				'neon-green': 'hsl(var(--neon-green))',
				'neon-pink': 'hsl(var(--neon-pink))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'swap-slide': {
					'0%': { transform: 'translateX(-50px) scale(0.8)', opacity: '0' },
					'25%': { transform: 'translateX(-10px) scale(1)', opacity: '1' },
					'75%': { transform: 'translateX(10px) scale(1)', opacity: '1' },
					'100%': { transform: 'translateX(50px) scale(0.8)', opacity: '0' }
				},
				'crypto-pulse': {
					'0%': { transform: 'scale(1)', boxShadow: '0 0 0 0 hsl(var(--crypto-purple) / 0.4)' },
					'50%': { transform: 'scale(1.05)', boxShadow: '0 0 0 10px hsl(var(--crypto-purple) / 0)' },
					'100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 hsl(var(--crypto-purple) / 0)' }
				},
				'checkmark': {
					'0%': { transform: 'scale(0) rotate(0deg)', opacity: '0' },
					'50%': { transform: 'scale(1.3) rotate(180deg)', opacity: '1' },
					'100%': { transform: 'scale(1) rotate(360deg)', opacity: '1' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(30px) scale(0.95)' },
					'100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(50px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'glow-pulse': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--crypto-purple) / 0.3), 0 0 40px hsl(var(--crypto-blue) / 0.2)' },
					'50%': { boxShadow: '0 0 40px hsl(var(--crypto-purple) / 0.6), 0 0 80px hsl(var(--crypto-blue) / 0.4)' }
				},
				'neon-glow': {
					'0%, 100%': { filter: 'drop-shadow(0 0 5px hsl(var(--neon-green))) drop-shadow(0 0 10px hsl(var(--crypto-blue)))' },
					'50%': { filter: 'drop-shadow(0 0 10px hsl(var(--neon-green))) drop-shadow(0 0 20px hsl(var(--crypto-blue))) drop-shadow(0 0 30px hsl(var(--neon-pink)))' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'equalizer': {
					'0%, 100%': { height: '10px' },
					'25%': { height: '30px' },
					'50%': { height: '20px' },
					'75%': { height: '40px' }
				},
				'wave': {
					'0%': { transform: 'scaleY(1)' },
					'50%': { transform: 'scaleY(0.5)' },
					'100%': { transform: 'scaleY(1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'swap-slide': 'swap-slide 2.5s ease-in-out',
				'crypto-pulse': 'crypto-pulse 2s infinite',
				'checkmark': 'checkmark 0.8s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'slide-up': 'slide-up 0.6s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'neon-glow': 'neon-glow 1.5s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'equalizer': 'equalizer 0.5s ease-in-out infinite',
				'wave': 'wave 1s ease-in-out infinite'
			},
			backgroundImage: {
				'crypto-gradient': 'var(--crypto-gradient)',
				'neon-gradient': 'var(--neon-gradient)',
				'glass': 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
				'mesh-gradient': 'radial-gradient(circle at 25% 25%, hsl(var(--crypto-purple) / 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, hsl(var(--crypto-blue) / 0.3) 0%, transparent 50%)'
			},
			boxShadow: {
				'glow': '0 0 20px hsl(var(--crypto-purple) / 0.5)',
				'glow-lg': '0 0 30px hsl(var(--crypto-purple) / 0.4), 0 0 60px hsl(var(--crypto-blue) / 0.3)',
				'neon': '0 0 5px hsl(var(--neon-green)), 0 0 10px hsl(var(--neon-green)), 0 0 15px hsl(var(--neon-green))'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
