import styles from "./styles";
import colors from "./colors";
import prism from "./prism";


export default {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    container: 600
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    monospace: "Menlo, monospace"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeight: {
    body: 1.5,
    heading: 1.125
  },
  letterSpacing: {
    body: "normal",
    caps: "0.2em"
  },
  styles,
  prism,
  colors,
};
