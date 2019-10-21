import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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

    const categories = []
   /*  PostCategories.forEach(element => {
        const { category } = element.allMdx.edges.node.frontmatter
        categories.push(category)
    });   */  

    console.log(PostCategories)    
    return (
        <div>HERE ALL CATEGORIES</div>

  )
}

export default AllCategories
