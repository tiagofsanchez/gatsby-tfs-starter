import React from "react";
import AvatarLinks from "./AvatarLinks";
import { Link } from "gatsby";
import siteConfig from "../../../data/SiteConfig";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

const BigAvatar = props => {
  const { avatar } = siteConfig;

  return (
    <>
      <div sx={{ textAlign: `center` }}>
        <img src={avatar.photo} sx={{ width: 100, borderRadius: 999 }} />
        <Styled.h1 sx={{ color: `text` }}>
          Ola, I'm{" "}
          <Styled
            as={Link}
            to={"/about"}
            sx={{
              display: `inline`,
              borderBottom: `solid 4px`,
              fontSize: 32,
              color: `primary`,
              textDecoration: `none`,
              ":hover": {
                bg: `muted`,
                p: 1,
                borderRadius: `5px`
              }
            }}
          >
            Tiago
          </Styled>
        </Styled.h1>
      </div>
      <AvatarLinks />
      <Styled.p>{avatar.description}</Styled.p>
    </>
  );
};

export default BigAvatar;
