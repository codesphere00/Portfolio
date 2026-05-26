/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/**/*.{js,ts,jsx,tsx}", // adjust if needed
];
export const theme = {
    extend: {},
};
export const plugins = [
    require('tailwind-scrollbar'),
];
