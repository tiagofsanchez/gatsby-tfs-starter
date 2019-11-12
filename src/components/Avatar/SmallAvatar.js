import React from "react";
import siteConfig from "../../../data/SiteConfig";
import AvatarLinks from "./AvatarLinks";

/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const SmallAvatar = props => {
  const { avatar } = siteConfig;
  const { siteTitle } = siteConfig;

  return (
    <>
      <Styled.h2
        sx={{
          mt: 5,
          color: `primary`,
          mb: 0,
          borderTop: `1px solid`,
          pt: "15px"
        }}
      >
        {siteTitle}
      </Styled.h2>

      <div sx={{ display: `flex`, alignItems: `center`, mb: 2, mt: 2 }}>
        <img
          src={avatar.photo}
          sx={{ width: 70, height: 70, borderRadius: 999, mr: `15px` }}
        />
        <Styled.p>{avatar.description}</Styled.p>
      </div>
      <div sx={{ textAlign: `left` }}>
        <AvatarLinks sx={{ display: `inline-block` }} size={"small"} />
      </div>
    </>
  );
};

export default SmallAvatar;
