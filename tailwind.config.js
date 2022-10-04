module.exports = {
  content: ['./src/**/*.{js,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sm_primary: {
          100: '#E6F0F6',
          200: '#D9E8F2',
          300: '#B5D3E5',
          400: '#95C0DA',
          500: '#77ADCF',
          600: '#4F95C1',
          700: '#357197',
          800: '#234C65'
        },
        sm_green: {
          100: '#D0EDE2',
          200: '#B9E4D4',
          300: '#5FE0B7'
        },
        sm_red: { 100: '#FAD4D4', 200: '#F5A9A9', 300: '#F17E7E' },
        sm_yellow: { 100: '#F6F5E8', 200: '#EDECD0', 300: '#E4E2B9' },
        sm_grey: {
          100: '#E7E7E7',
          200: '#CDCDCD',
          300: '#B3B3B3',
          400: '#A2A2A2',
          500: '#7F7F7F',
          600: '#F7F7F7'
        },
        primary: {
          100: '#F7FAFC',
          200: '#EDF2F7',
          300: '#E2E8F0',
          400: '#CBD5E0',
          500: '#A0AEC0',
          600: '#718096',
          700: '#4A5568',
          800: '#2D3748',
          900: '#1A202C'
        },
        blue: {
          100: '#E3F2FD',
          200: '#BBDEFB',
          300: '#90CAF9',
          400: '#64B5F6',
          500: '#42A5F5',
          600: '#2196F3',
          700: '#1E88E5',
          800: '#1976D2',
          900: '#1565C0'
        },
        gray: {
          100: '#F7F7F7',
          200: '#EBEBEB',
          300: '#DADADA',
          400: '#CACACA',
          500: '#B7B7B7',
          600: '#A4A4A4',
          700: '#8F8F8F',
          800: '#7A7A7A',
          900: '#646464'
        },
        red: {
          100: '#FFEBEB',
          200: '#FFD5D5',
          300: '#FFBDBD',
          400: '#FF9A9A',
          500: '#FF6D6D',
          600: '#FF4242',
          700: '#FF0000',
          800: '#CC0000',
          900: '#990000'
        },
        yellow: {
          100: '#FFFBEA',
          200: '#FFF3C4',
          300: '#FFE89E',
          400: '#FFDD6F',
          500: '#FFCD4D',
          600: '#FFB933',
          700: '#FF9E1A',
          800: '#FF7D0D',
          900: '#FF5A08'
        },
        green: {
          100: '#E3F9E5',
          200: '#B7F5D4',
          300: '#8BECC9',
          400: '#5FE0B7',
          500: '#2ECC71',
          600: '#1ABC9C',
          700: '#16A085',
          800: '#138D75',
          900: '#117A65'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
