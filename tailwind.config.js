/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            h2: {
              color: '#111827',
              fontWeight: '700',
              fontSize: '1.5rem',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h3: {
              color: '#111827',
              fontWeight: '600',
              fontSize: '1.25rem',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            p: {
              marginTop: '1rem',
              marginBottom: '1rem',
            },
            ul: {
              marginTop: '1rem',
              marginBottom: '1rem',
            },
            li: {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },
            'ul > li': {
              paddingLeft: '1.5rem',
              position: 'relative',
              '&::before': {
                content: '""',
                width: '0.375rem',
                height: '0.375rem',
                borderRadius: '50%',
                backgroundColor: '#6366f1',
                position: 'absolute',
                left: 0,
                top: '0.6875rem',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
