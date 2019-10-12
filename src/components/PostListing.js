/** @jsx jsx */
import { Styled , jsx } from 'theme-ui';
import React, { Fragment } from "react";
import { Link } from "gatsby";
import PostHeader from './PostHeader';


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
        timeToRead: postEdge.node.timeToRead,
        category: postEdge.node.frontmatter.category
      });
    });
    return postList;
  }

  

  render() {
    
    const postList = this.getPostList();
    console.log(postList)
    return (
      <div>
        {/* Your post list here. */
        postList.map(post => (
          <Fragment key={post.title}>
            <Styled.h1 >
              <Styled.a
                as={Link}
                to={post.path}
                sx={{ textDecoration: `none` }}
              >
                {post.title}
              </Styled.a>
            </Styled.h1>
            <PostHeader post={post}/>
            <Styled.p>
              {post.excerpt}
            </Styled.p>
          </Fragment>
        ))}
      </div>
    );
  }
}

export default PostListing;
