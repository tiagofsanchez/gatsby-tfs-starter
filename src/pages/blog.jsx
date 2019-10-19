import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Blog extends React.Component {
  render() {
    const postEdges = this.props.data.allMdx.edges;
    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <SEO />
        <PostListing postEdges={postEdges} />
      </Layout>
    );
  }
}

export default Blog;

/* eslint no-undef: "off" */
export const blogQuery = graphql`
  query BlogQuery {
    allMdx(limit: 2000, sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          fields {
            slug
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
