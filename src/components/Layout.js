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
        <div className="pa2">
          <Helmet>
            <html lang="en" />
            <title>{data.site.siteMetadata.title}</title>
            <meta
              name="description"
              content={data.site.siteMetadata.description}
            />
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
