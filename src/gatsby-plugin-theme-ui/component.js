/** @jsx jsx */
/* import { jsx } from "theme-ui"
import { preToCodeBlock } from "mdx-utils"
import PrismCodeBlock from "@theme-ui/prism"

const CodeBlock = preProps => {
  const props = preToCodeBlock(preProps)

  if (props) {
    const { codeString, ...restProps } = props

    return (
      <div sx={{ mb: 2 }}>
        <PrismCodeBlock {...restProps}>{codeString}</PrismCodeBlock>
      </div>
    )
  } else {
    return <pre {...preProps} />
  }
}

export default {
  pre: CodeBlock,
} */

// src/gatsby-plugin-theme-ui/components.js
import Prism from '@theme-ui/prism'
export default {
  pre: props => props.children,
  code: Prism,
}