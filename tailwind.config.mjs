/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{astro,html,js,jsx,ts,tsx,vue}",
    ],
    theme: {
        extend: {
        colors: {
            base: "var(--bg)",
            surface: "var(--surface)",
            border: "var(--border)",
            text: "var(--text)",
            muted: "var(--muted)",
            accent: "var(--accent)",
            "accent-2": "var(--accent-2)",
        },
        borderRadius: {
            card: "var(--radius-card)",
            btn: "var(--radius-btn)",
        },
        },
    },
    plugins: [],
};
