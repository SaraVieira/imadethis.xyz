import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'

const Grid = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  align-items: self-end;
  margin-top: 60px;

  @media screen and (max-width: 990px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 740px) {
    grid-template-columns: 1fr;
  }
`

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <section className="mw9 center ph3-ns">
        <Grid>
          {posts.map(({ node: { excerpt, id, fields, frontmatter } }) => (
            <article key={id}>
              <h2>{frontmatter.title}</h2>
              <img
                src={frontmatter.image.childImageSharp.fluid.src}
                alt={frontmatter.title}
              />
              {/* <p className="pb2">{excerpt}</p> */}
              {/* <Link to={fields.slug}>Go to Website</Link> */}
            </article>
          ))}
        </Grid>
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
