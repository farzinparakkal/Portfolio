/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out',
        'fade-in-down': 'fadeInDown 1.5s ease-in-out',
        'fade-in-up': 'fadeInUp 1.5s ease-in-out',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'pulse-fast': 'pulse 0.75s linear infinite',
        'zoom-in': 'zoomIn 1s ease-in-out',
        'shake': 'shake 0.5s ease-in-out', // Shake effect
        'slide-in-left': 'slideInLeft 1s ease-out', // Slide in from left
        'slide-in-right': 'slideInRight 1s ease-out', // Slide in from right
        'bounce-button': 'bounce 1s infinite', // Bounce effect for buttons
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        zoomIn: {
          '0%': { opacity: 0, transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        shake: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        bounceButton: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      colors: {
        customBlue: '#1DA1F2',
        customPurple: '#794BC4',
        customPink: '#F5348D',
        customGreen: '#34D399',
        customGray: '#2D3748',
        customOrange: '#FFA500', // Added custom orange
        customRed: '#FF0000', // Added custom red
        customYellow: '#FFFF00', // Added custom yellow
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        serif: ['Merriweather', 'serif'],
        display: ['Oswald', 'sans-serif'], // Added display font for headings
        body: ['Open Sans', 'sans-serif'], // Added body font
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '36': '9rem', // Added new spacing value
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem', // Added larger border radius
        '4xl': '2.5rem', // Added extra larger border radius
      },
      boxShadow: {
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 4px 6px rgba(0, 0, 0, 0.6)',
        'custom-xl': '0 8px 12px rgba(0, 0, 0, 0.15)', // Added custom shadow
        'custom-button': '0 4px 8px rgba(0, 0, 0, 0.2)', // Added custom button shadow
      },
    },
  },
  plugins: [],
};
