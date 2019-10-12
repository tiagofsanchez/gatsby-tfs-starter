import React, { Fragment } from 'react';
import _ from "lodash"; 
import { Link } from 'gatsby'
import PostTages from './PostTags';

/** @jsx jsx */
import { Styled , jsx} from 'theme-ui'



const PostHeader = (props) => { 
    const { post } = props;
    
    return (
      <Fragment>
        <div sx={{ display: `flex`, flexDirection: `column` }}>
          <small>
            {post.date} / {post.timeToRead} minute(s) reading time
          </small>
          <div sx={{ display: `flex`, mt:2 }}>
            <Styled.p
              as={Link}
              sx={{
                color: `primary`,
                textDecoration: `none`,
                borderBottom: `solid 4px `,
                boxSizing: `content-box`,
                display: `inline-block`,
                px: `4px`,
                pb:1,
                mb: `10px`,
                mr: 2
              }}
              to={`/categories/${_.kebabCase(post.category)}/`}
            >
              {post.category}
            </Styled.p>
            <PostTages tags={post.tags} />
          </div>
        </div>
      </Fragment>
    );

}

export default PostHeader;

