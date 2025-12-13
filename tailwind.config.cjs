/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Manrope', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                background: '#080808',
                surface: '#121212',
                'surface-hover': '#1A1A1A',
                primary: '#FFFFFF',
                secondary: '#A1A1AA',
                tertiary: '#52525B',
                accent: {
                    DEFAULT: '#3B82F6',
                    hover: '#2563EB',
                    glow: 'rgba(59, 130, 246, 0.5)'
                },
                border: '#27272A',
            },
        },
    },
    plugins: [],
}