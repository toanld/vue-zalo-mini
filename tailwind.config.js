import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms'; // Import plugin @tailwindcss/forms chính xác

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./modules/**/*.{vue,js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            overflow: {
                'auto-touch': 'auto',
            },
            colors: {
                primary: {
                    "1050": "#f94949",
                    "1000": "#edf1f8",
                    "50": "#eef2ff",
                    "100": "#e0e7ff",
                    "200": "#c7d2fe",
                    "300": "#a5b4fc",
                    "400": "#818cf8",
                    "500": "#6366f1",
                    "600": "#4f46e5",
                    "700": "#4338ca",
                    "800": "#3730a3",
                    "900": "#312e81",
                    "950": "#1e1b4b",
                },
                'main': 'var(--color-main)',
                'bghover': 'var(--color-bg-hover)',
                'icon': '#768286',
                'vtd-primary-500': 'var(--color-main)',
                'vtd-primary-50': 'var(--color-bg-hover)',
                'vtd-primary-300': 'var(--color-bg-hover)',
            },
            boxShadow: {
                'main': '0 0 10px 1px var(--color-bg-hover)',
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [
        forms, // Plugin forms đúng cách
    ],
};
