import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import NavMenu from '../components/NavMenu';
import "./index.css";
/** @jsx jsx */
import { Styled , jsx } from 'theme-ui';

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Styled sx={{ fontFamily: `body`, maxWidth: `container`, m: `auto` }}>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        <NavMenu/>
        {children}
      </Styled>
    );
  }
}
