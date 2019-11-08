import React from "react";
/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

const TagHeader = props => {
  const { tag } = props;
  return (
    <Styled
      sx={{
        display: `flex`,
        textAlign: `center`,
        alignItems: `baseline`,
        borderBottom: `1px solid`
      }}
    >
      <Styled.h2 sx={{ color: `primary`, fontSize: `10`, mr: 2 }}>
        Your filtered for:
      </Styled.h2>
      <Styled.h3
        sx={{
          color: `text`,
          mr: 1,
          mb: 4,
          boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.5)`,
          p: `5px`,
          borderRadius: `4px`,
          boxSizing: `content-box`
        }}
      >
        {tag}
      </Styled.h3>
    </Styled>
  );
};

export default TagHeader;
