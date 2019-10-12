
 const darkPink = `#d23669`
 const pink = `pink`
 const blueGray = `#282c35`
 const lightblue = `#a5a4a6`
 const lightGray = '#eee'


export default {
  colors: {
    text: blueGray,
    primary: darkPink,
    heading: pink,
    background: lightGray,
    modes: {  
      dark: {
        background: blueGray,
        primary: pink,
        highlight: lightblue,
      },
    },
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif',
  },
  fontWeights: {
    body: 400,
    heading: 700,
  },
  styles: {
    h1: {
      fontSize: 50,
      fontFamily: 'heading',
      fontWeight: 'heading',
      color: 'primary',
      mt: 4,
      mb: 2,
    },
  }
};
