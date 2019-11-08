import React from "react";
/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

const CatHeader = props => {
  const { category } = props;
  return (
    <Styled
      sx={{
        display: `flex`,
        textAlign: `center`,
        alignItems: `baseline`,
        borderBottom: `1px solid`,
        color: `primary`
      }}
    >
      <Styled.h2 sx={{ color: `primary`, fontSize: `10`, mr: 2 }}>
        Posts category as
      </Styled.h2>
      <Styled.h3
        sx={{
          color: `primary`,
          textDecoration: `none`,
          border: `solid 1px`,
          boxSizing: `content-box`,
          display: `inline-block`,
          px: `4px`,
          borderRadius: `5px`,
          p: 1,
          mr: 2
        }}
      >
        {category}
      </Styled.h3>
    </Styled>
  );
};

export default CatHeader;
