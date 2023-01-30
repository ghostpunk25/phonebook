export const theme = {
   colors: {
      text: '#cd4936',
      white: '#fff',
      btn: '#629eae',
      react: '#61dafb',
      hover: '#f99d90',
      black: '#000',
      random: generateColor(),
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
      m: '24px',
      l: '32px',
      xl: '38px',
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

function generateColor() {
   return '#' + Math.floor(Math.random() * 16777215).toString(16)
}