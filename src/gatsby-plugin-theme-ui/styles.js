export default {
  root: {
    fontFamily: `body`,
  },
  pre: {
    variant: `prism`,
    fontFamily: `monospace`,
    tabSize: 4,
    hyphens: `none`,
    marginBottom: 3,
    color: `white`,
    bg: `prism.background`,
    overflow: `auto`,
    borderRadius: 5,
    p: 3,
  },
  code: {
    fontFamily: `monospace`,
    fontSize: `15px`,
  },
  inlineCode: {
    borderRadius: `0.3em`,
    bg: `muted`,
    p: `0.3em`,
  },
  // from typography overrideThemeStyles
  h1: {
    fontSize: 32,
    fontFamily: 'heading',
    fontWeight: 'heading',
    color: 'primary',
    mt: 4,
    mb: 4,
  },
  a: {
    color: `primary`,
  },
  p: {
    fontWeight:`body`,
    lineHeight: `body`,
    letterSpacing: `body`,
    code: {
      fontSize: `inherit`,
    },
  },
  li: {
    code: {
      fontSize: `inherit`,
    },
  },
  blockquote: {
    color: `inherit`,
    borderLeft: `solid 5px`,
    paddingLeft: `10px`,
    borderColor: `primary`,
    opacity: 0.8,
    fontStyle: `italic`,

  },
}
