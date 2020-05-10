import { Theme } from 'styled-system'

export const theme: Theme = {
  colors: {
    primary: '#d63447',
    secondary: '#d63447',
    lightContrast: '#f6eedf',
    darkContrast: '#d1cebd',
    lightText: '#fff',
    darkText: '#000',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: [0, 4, 8, 16, 32, 64, 128, 256, 512, 1024],
  breakpoints: ['480px', '839px', '1024px'],
  fonts: ['Poppins', 'Roboto'],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
}
