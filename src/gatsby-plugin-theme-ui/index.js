
const darkPink = `#d23669`
const pink = `#ffa8b7`
const blueGray = `#282c35`
const lightblue = `#a5a4a6`
const lightGray = '#eee'

export default {
  colors: {
    text: "#000",
    background: lightGray,
    primary: darkPink,
    muted: "#f6f6f6f",
    modes: {
      dark: {
        text: "#fff",
        background: blueGray,
        primary: pink,
        muted: "#111",
      },
    }
  },
  sizes: {
    container: 800,
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif"
  },
  fontWeights: {
    body: 400,
    heading: 700
  },
  styles: {
    h1: {
      fontSize: 40,
      fontFamily: "heading",
      fontWeight: "heading",
      color:`primary`,
      mt: 4,
      mb: 2
    },
    h4: {
      fontSize: `16px`,
      fontFamily: "heading",
      fontWeight: "heading",
      color: `primary`
    },
    a: {
      color: `primary`,
      fontFamily: "heading",
    },
    p:{
      fontFamily:"body"
    } 
  }
};
