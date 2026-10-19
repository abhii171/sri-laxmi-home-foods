/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FBF6EA',
        surface: '#FFF8F5',
        'surface-container-low': '#FFF1EA',
        'surface-container': '#FFEADE',
        'surface-container-high': '#FFE3D2',
        'surface-container-highest': '#FFDCC6',
        primary: '#1F4D3A',
        'primary-container': '#023625',
        'on-primary': '#FFFFFF',
        secondary: '#C8631F',
        'on-secondary': '#FFFFFF',
        tertiary: '#D9A21B',
        'on-surface': '#2C1607',
        'on-surface-variant': '#5A3E2B',
        outline: '#717973',
        error: '#B3392F',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(42, 29, 18, 0.08)',
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [],
};
