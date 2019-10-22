import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import _ from "lodash";
import { Link } from 'gatsby'

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";



const AllCategories = () => {
    const PostCategories = useStaticQuery(graphql`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              category
            }
          }
        }
      }
    }
  `)

    const { edges } = PostCategories.allMdx

    const categorySet = new Set();
    //this erases the duplicates of categories that I have
    edges.forEach(element => {
        const category = element.node.frontmatter
        if(category.category) {
            categorySet.add(category.category)
        }
    });
    //this will pass that into an array so that I can loop
    const array =[]
    categorySet.forEach(cat => {
        array.push(cat)
    })
    const renderCategories = array.map(cat => {
        return (
          <Styled
            key={cat}
            as={Link}
            to={`/categories/${_.kebabCase(cat)}/`}
            sx={{
              m: 2,
              color: `primary`,
              border: `solid 3px`,
              borderRadius: `5px`,
              textDecoration: `none`,
              fontSize:26,
              p: 2, 
              ":hover": {
                  bg: `muted`
              }
            }}
          >
            {cat}
          </Styled>
        );
    })

    return (
      <>
        <Styled sx={{ display: `flex`, flexWrap: `wrap`, justifyContent:`center` }}>
          {renderCategories}
        </Styled>
      </>
    );
}

export default AllCategories
