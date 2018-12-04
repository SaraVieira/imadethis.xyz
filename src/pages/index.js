import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <section className="mw9 center ph3-ns">
        <div className="cf ph2-ns">
          {posts.map(({ node: post }) => (
            <>
              <div className="fl w-100 w-50-ns pa2" key={post.id}>
                <h2>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                </h2>
                <p>
                  {post.excerpt}
                  <Link className="button is-small" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
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
              absolutePath
            }
            link
            author
            title
            templateKey
          }
        }
      }
    }
  }
`

export default IndexPage
