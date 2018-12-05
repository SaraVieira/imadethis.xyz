import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import Navbar from '../components/Navbar'
import 'tachyons/css/tachyons.min.css'
import GlobalStyle from '../utils/global'

import { setConfig } from 'react-hot-loader'

// Fix for hooks 🤷🏻‍♀️
setConfig({ pureSFC: true })

const theme = {
  white: '#FFFFFF',
  black: '#2C4251',
  red: '#D16666',
  blue: '#7C98B3',
  grey: '#C1C1C1',
  textLight: '#828282',
  dark: '#232323',
  lightGray: '#737272'
}

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <div className="">
          <Helmet>
            <html lang="en" />
            <title>{data.site.siteMetadata.title}</title>
            <meta
              name="description"
              content={data.site.siteMetadata.description}
            />

            <meta charset="utf-8" />

            <meta
              name="description"
              content="A home for everything you made in that weird weekend"
            />
            <meta
              name="image"
              content="https://rawcdn.githack.com/SaraVieira/imadethis.xyz/ab34aee653815e719f15056cbe6e46020e72f92e/src/img/favicon.png"
            />

            <meta itemProp="name" content="I made this" />
            <meta
              itemProp="description"
              content="A home for everything you made in that weird weekend"
            />
            <meta
              itemProp="image"
              content="https://rawcdn.githack.com/SaraVieira/imadethis.xyz/ab34aee653815e719f15056cbe6e46020e72f92e/src/img/favicon.png"
            />

            <meta name="og:title" content="I made this" />
            <meta
              name="og:description"
              content="A home for everything you made in that weird weekend"
            />
            <meta
              name="og:image"
              content="https://rawcdn.githack.com/SaraVieira/imadethis.xyz/ab34aee653815e719f15056cbe6e46020e72f92e/src/img/favicon.png"
            />
            <meta name="og:url" content="https://imadethis.xyz/" />
            <meta name="og:site_name" content="I made this" />
            <meta name="og:type" content="website" />
          </Helmet>
          <Navbar />
          <div>{children}</div>
          <GlobalStyle />
        </div>
      </ThemeProvider>
    )}
  />
)

export default TemplateWrapper
