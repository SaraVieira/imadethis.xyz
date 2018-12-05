import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import styled from 'styled-components'
import getUrl from '../utils/getUrl'

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

const Button = styled.a`
  background: ${props => props.theme.red};
  border-radius: 4px;
  border-radius: 4px;
  padding: 12px 8px;
  color: white;
  font-weight: bold;
`

const Frame = styled.section`
  text-align: center;
  position: relative;
  cursor: pointer;
  perspective: 500px;

  .details {
    width: 100%;
    height: 100%;
    padding: 5% 8%;
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotateY(90deg);
    transform-origin: 50%;
    background: rgba(255, 255, 255, 0.9);
    opacity: 0;
    transition: all 0.4s ease-in;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  :hover .details {
    transform: translate(-50%, -50%) rotateY(0deg);
    opacity: 1;
  }
`

const Title = styled.h2`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  max-height: 50px;
`

const Author = styled.span`
  margin-bottom: 20px;
`

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <section className="mw9 center ph3-ns">
        <Grid>
          {posts.map(({ node: { id, frontmatter } }) => (
            <Frame key={id}>
              <Img
                fluid={frontmatter.image.childImageSharp.fluid}
                alt={frontmatter.title}
              />
              <div className="details">
                <Title>{frontmatter.title}</Title>
                {frontmatter.author && (
                  <Author>
                    Made by:
                    {frontmatter.author.map((a, i) => (
                      <a
                        key={a}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={a.toLowerCase().trim()}
                      >
                        {getUrl(a)}
                        {i === frontmatter.author.length - 1 ? '' : ', '}
                      </a>
                    ))}
                  </Author>
                )}
                <Button
                  target="_blank"
                  rel="noopener noreferrer"
                  href={frontmatter.link}
                >
                  Go to Website
                </Button>
              </div>
            </Frame>
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
          id
          fields {
            slug
          }
          frontmatter {
            image {
              childImageSharp {
                ... on ImageSharp {
                  fluid(maxWidth: 700) {
                    ...GatsbyImageSharpFluid_noBase64
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
