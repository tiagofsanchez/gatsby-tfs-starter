import React from "react";
import siteConfig from "../../../data/SiteConfig";
import AvatarLinks from "./AvatarLinks"

/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const SmallAvatar = props => {
  const { avatar } = siteConfig;
  const { siteTitle } = siteConfig;

  return (
    <>
      <Styled.h3
        sx={{
          mt: 5,
          color: `primary`,
          mb: 0,
          borderTop: `1px solid`,
          pt: "15px",
          textAlign:`center`
        }}
      >
        {siteTitle}
      </Styled.h3>

      <div sx={{ display: `flex`, alignItems: `center`}}>
        <img
          src={avatar.photo}
          sx={{ width: 70, height: 70, borderRadius: 999, mr: `15px`}}
        />
        <Styled.p>{avatar.description}</Styled.p>
      </div>
      <AvatarLinks sx={{textAlign:`left`}} size={"small"} />
      
    </>
  );
};

export default SmallAvatar;
