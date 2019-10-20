import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import SimplePostListing from "../components/SimplePostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import SiteConfig from '../../data/SiteConfig';

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMdx.edges;
    const { userLinks } = SiteConfig
    


    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <SEO />
        <section>
          <div sx={{ textAlign: `center` }}>
            <img
              src="https://avatars1.githubusercontent.com/u/11288873?s=400&v=4"
              sx={{ width: 100, borderRadius: 999 }}
            />
            <Styled.h1 sx={{ color: `text` }}>
              Ola, I'm{" "}
              <Styled.h1
                sx={{ display: `inline`, borderBottom: `solid 2px ` }}
              >
                Tiago
              </Styled.h1>
            </Styled.h1>
          </div>
          <Styled.p>
            I am learning to code in ReactJS (from scratch) and I write
            about that and other related stuff here! Basically, sharing what
            I am learning!
          </Styled.p>
          {userLinks.map(data => (
            <Styled>{data.label}</Styled>
          ))}
        </section>
        <section>
          <Styled.h1>Latest posts</Styled.h1>
          <SimplePostListing postEdges={postEdges} />
        </section>
        <section>
          <Styled.h1 />
        </section>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMdx(
      limit: 3
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date(formatString: "MMMM Do, YYYY")
          }
          excerpt
          timeToRead
          frontmatter {
            category
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
