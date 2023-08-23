const plugin = require("tailwindcss");

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    600: "hsl(45, 100%, 80%)",
                    500: "hsl(45, 100%, 70%)",
                    400: "hsl(45, 100%, 60%)",
                    DEFAULT: "hsl(45, 100%, 50%)",
                    200: "hsl(45, 100%, 40%)",
                    100: "hsl(45, 100%, 30%)",
                },
                secondary: {
                    900: "hsl(207, 12%, 75%)",
                    800: "hsl(207, 12%, 65%)",
                    700: "hsl(207, 12%, 55%)",
                    600: "hsl(207, 12%, 45%)",
                    500: "hsl(207, 12%, 35%)",
                    400: "hsl(207, 12%, 25%)",
                    DEFAULT: "hsl(207, 12%, 15%)",
                },
            },
        },
    },
    plugins: [
        plugin(function ({ matchVariant }) {
            matchVariant("min", (value) => `@media (min-width: ${value})`, {
                sort(a, z) {
                    return parseInt(a) - parseInt(z);
                },
            });
        }),
        plugin(function ({ matchVariant }) {
            matchVariant("max", (value) => `@media (max-width: ${value})`, {
                sort(a, z) {
                    return parseInt(a) - parseInt(z);
                },
            });
        }),
    ],
};
