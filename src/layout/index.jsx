import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import NavMenu from "../components/NavMenu";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <Styled
        sx={{
          fontFamily: `body`,
          m: `auto`,
          maxWidth: `container`,
          width: ["90%", "100%", "100%"]
        }}
      >
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        <NavMenu menuLinks={config.menuLinks} />
        <div style={{ marginTop: `120px`, marginBottom: `50px` }}>
          {children}
        </div>
      </Styled>
    );
  }
}
