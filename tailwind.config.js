/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      width: {
        '13.5': '3.375rem',
        '120': '29.125rem',
        '128': '32.875rem',
      },
      height: {
        '13.5': '3.375rem',
        '80.5': '20.125rem',
        '92': '22.75rem',
      },
      padding: {
        '7.5': '1.875rem',
      },
      fontSize: {
        '1xs': ['0.875rem', '1.125rem'],
        '1s': ['1rem', '1.25rem'],
        '1.5xl': ['1.5rem', '1.875rem'],
      },
      fontWeight: {
        'semibold-plus': '650',
      },
      fontFamily: {
        'roobert-trial': 'Roobert-Regular'
      },
      borderWidth: {
        '1': '1px',
      },
      borderColor: {
        'twiist-blue': '#0171E3', 
      },
      boxShadow: {
        'form-custom': '0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}