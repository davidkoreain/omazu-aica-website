/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0A0D14',
          navy: '#0F172A',
          blue: '#2563EB',
          cyan: '#06B6D4',
          accent: '#3B82F6',
          light: '#F8FAFC',
          card: '#1E293B',
          border: '#334155'
        }
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
