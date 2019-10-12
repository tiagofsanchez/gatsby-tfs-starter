/** @jsx jsx */
import { Styled , jsx } from 'theme-ui';

import React from "react";
import { Link } from "gatsby";


class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <div>
        {/* Your post list here. */
        postList.map(post => (
          <Styled.h1>
            <Styled.a
              as={Link}
              to={post.path}
              key={post.title}
              sx={{ textDecoration: `none` }}
            >
              {post.title}
            </Styled.a>
          </Styled.h1>
        ))}
      </div>
    );
  }
}

export default PostListing;
