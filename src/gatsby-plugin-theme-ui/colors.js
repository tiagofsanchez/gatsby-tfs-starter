const grey90 = `#232129`
const black80 = `#1B1F23`
const white = `#fff`
const lightWhite = `rgba(255, 255, 255, 0.86)`
const opaqueLightYellow = `rgba(255, 229, 100, 0.2)`
const opaqueLightWhite = `hsla(0, 0%, 100%, 0.2)`
const darkPink = `#d23669`
const pink = `pink`
const blueGray = `#282c35`
const lightblue = `#a5a4a6`
const lightGray = '#eee'
const gray = `#CCCCCC`

export default {
  text: blueGray,
  background: lightGray,
  primary: darkPink,
  secondary: black80,
  muted: gray,
  highlight: opaqueLightYellow,
  heading: grey90,
  prism: {
    background: `#011627`,
    comment: `#809393`,
    string: `#addb67`,
    var: `#d6deeb`,
    number: `#f78c6c`,
    constant: `#82aaff`,
    punctuation: `#c792ea`,
    className: `#ffc98b`,
    tag: `#ffa7c4`,
    boolean: `#ff5874`,
    property: `#80cbc4`,
    namespace: `#b2ccd6`,
    highlight: `hsla(207, 95%, 15%, 1)`,
  },
  modes: {
    dark: {
      text: lightWhite,
      background: blueGray,
      primary: pink,
      secondary: lightWhite,
      muted: opaqueLightWhite,
      highlight: lightblue,
      heading: white,
    },
  },
}
