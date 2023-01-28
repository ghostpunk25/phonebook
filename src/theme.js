export const theme = {
   colors: {
      text: '#000',
      backgraund: '#fff',
      primary: '#a7a3a3',
      secondary: '#05a',
      accent: '#e6f6ff',
      moted: '#cae0dd',
      white: '#fff',
      green: 'green',
      red: 'red',
      blue: 'blue'
      // random: generateColor(),
   },
   space: [0, 2, 4, 6, 8, 16, 32, 64, 128, 256],
   fonts: {
      body: 'system-ui, sans-serif',
      heading: 'Roboto, sans-serif',
      minispace: 'system-ui, sans-serif',
   },
   fontSize: {
      xs: '12px',
      s: '14px',
      m: '16px',
      l: '32px',
      xl: '64px',
   },
   fontWeights: {
      normal: 400,
      medium: 500,
      bold: 700,
   },
   lineHeights: {
      body: 1.5,
      heading: 1.125,
   },
   borders: {
      none: 'none',
      normal: '1px solid',
   },
   radii: {
      none: '0',
      normal: '4px',
      round: '100%',
   },
};

// function generateColor() {
//    return '#' + Math.floor(Math.random() * 16777215).toString(16)
// }