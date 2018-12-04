import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const WebsiteTemplate = ({
  content,
  contentComponent,
  description,
  image,
  title,
  helmet,
  link,
  author
}) => {
  const PostContent = contentComponent || Content
  const img = image.childImageSharp.fluid.src
  return (
    <section>
      {helmet || ''}
      <div className="fl w-50 pa2">
        <h1>
          <a href={link} target="_blank">
            {title}
          </a>
        </h1>
        <img src={img} alt={`Image for ${title}`} />
        {author &&
          author.map((a, i) => (
            <li key={i}>
              <a href={author}>{author}</a>
            </li>
          ))}
        <PostContent content={content} />
      </div>
    </section>
  )
}

const Website = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <WebsiteTemplate
        content={post.html}
        contentComponent={HTMLContent}
        link={post.frontmatter.link}
        image={post.frontmatter.image}
        author={post.frontmatter.author}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

export default Website

export const pageQuery = graphql`
  query WebsiteByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
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
`
