import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import SimplePostListing from "../components/SimplePostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";


class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <SEO />
        <section sx={{display:`flex`, flexWrap: `wrap`, alignItems: `center`}}> 
          <div>
          <Styled.h1 sx={{color: `text`}}>Ola, I'm Tiago</Styled.h1>
          <Styled.p>I am learning to code ReactJS and I write about that and other related stuff here!</Styled.p>
          </div>
          <div>
            Will put my picture
          </div>
        </section>
        <section>
          <Styled.h1>
            Latest posts
          </Styled.h1>
          <SimplePostListing postEdges={postEdges} />
        </section>
        <section>
          <Styled.h1>

          </Styled.h1>
        </section>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
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
