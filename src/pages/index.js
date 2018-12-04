import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <section className="mw9 center ph3-ns">
        <div className="cf ph2-ns">
          {posts.map(({ node: { excerpt, id, fields, frontmatter } }) => (
            <>
              <div className="fl w-100 w-33-ns pa2" key={id}>
                <h2>{frontmatter.title}</h2>
                <img
                  src={frontmatter.image.childImageSharp.fluid.src}
                  alt={frontmatter.title}
                />
                <p className="pb2">{excerpt}</p>
                <Link to={fields.slug}>Go to Website</Link>
              </div>
            </>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "website" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            image {
              childImageSharp {
                ... on ImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            link
            author
            title
          }
        }
      }
    }
  }
`

export default IndexPage
