/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"], // Activate dark mode based on class
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		colors: {
		  // Light Theme (Default)
		  background: 'hsl(var(--background-light, 0 0% 100%))',
		  foreground: 'hsl(var(--foreground-light, 0 0% 0%))',
		  card: {
			DEFAULT: 'hsl(var(--card-light, 0 0% 98%))',
			foreground: 'hsl(var(--card-foreground-light, 0 0% 10%))',
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover-light, 0 0% 100%))',
			foreground: 'hsl(var(--popover-foreground-light, 0 0% 10%))',
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary-light, 220 90% 56%))',
			foreground: 'hsl(var(--primary-foreground-light, 0 0% 100%))',
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary-light, 180 62% 45%))',
			foreground: 'hsl(var(--secondary-foreground-light, 0 0% 100%))',
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted-light, 0 0% 90%))',
			foreground: 'hsl(var(--muted-foreground-light, 0 0% 20%))',
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent-light, 48 100% 67%))',
			foreground: 'hsl(var(--accent-foreground-light, 0 0% 100%))',
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive-light, 0 90% 65%))',
			foreground: 'hsl(var(--destructive-foreground-light, 0 0% 100%))',
		  },
		  border: 'hsl(var(--border-light, 0 0% 85%))',
		  input: 'hsl(var(--input-light, 0 0% 100%))',
		  ring: 'hsl(var(--ring-light, 220 90% 56%))',
  
		  // Dark Theme (Activated via 'dark' class)
		  'dark-background': 'hsl(var(--background-dark, 0 0% 12%))',
		  'dark-foreground': 'hsl(var(--foreground-dark, 0 0% 95%))',
		  'dark-card': {
			DEFAULT: 'hsl(var(--card-dark, 0 0% 15%))',
			foreground: 'hsl(var(--card-foreground-dark, 0 0% 90%))',
		  },
		  'dark-popover': {
			DEFAULT: 'hsl(var(--popover-dark, 0 0% 14%))',
			foreground: 'hsl(var(--popover-foreground-dark, 0 0% 85%))',
		  },
		  'dark-primary': {
			DEFAULT: 'hsl(var(--primary-dark, 220 80% 60%))',
			foreground: 'hsl(var(--primary-foreground-dark, 0 0% 100%))',
		  },
		  'dark-secondary': {
			DEFAULT: 'hsl(var(--secondary-dark, 180 60% 40%))',
			foreground: 'hsl(var(--secondary-foreground-dark, 0 0% 100%))',
		  },
		  'dark-muted': {
			DEFAULT: 'hsl(var(--muted-dark, 0 0% 25%))',
			foreground: 'hsl(var(--muted-foreground-dark, 0 0% 75%))',
		  },
		  'dark-accent': {
			DEFAULT: 'hsl(var(--accent-dark, 48 100% 40%))',
			foreground: 'hsl(var(--accent-foreground-dark, 0 0% 100%))',
		  },
		  'dark-destructive': {
			DEFAULT: 'hsl(var(--destructive-dark, 0 80% 50%))',
			foreground: 'hsl(var(--destructive-foreground-dark, 0 0% 100%))',
		  },
		  'dark-border': 'hsl(var(--border-dark, 0 0% 25%))',
		  'dark-input': 'hsl(var(--input-dark, 0 0% 15%))',
		  'dark-ring': 'hsl(var(--ring-dark, 220 80% 60%))',
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
	  },
	},
	plugins: [require('tailwindcss-animate')],
  };
  