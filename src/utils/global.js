import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { lighten } from 'polished'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,700');
@import url('https://fonts.googleapis.com/css?family=Maven+Pro');
  ${reset}

  body {
    font-size: 100%;
    font-family: 'Maven Pro', sans-serif;
    background:  ${props => props.theme.white};;
    line-height: 1.33;
    color: ${props => props.theme.black};
    overflow-x: hidden;

    * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      box-sizing: border-box;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Fira Sans', sans-serif;
    font-weight: 700;
    font-style: oblique;
    padding-bottom: 20px;
  }


body, caption, th, td, input, textarea, select, option, legend, fieldset, h1, h2, h3, h4, h5, h6 {
  font-size-adjust: 0.5;
}

#___gatsby {
  font-size: 1em;
  line-height: 1.25;
}

@media (min-width: 43.75em) {
  #___gatsby {
    font-size: 1em;
    line-height: 1.375;
  }
}

h1 {
  font-size: 2em;
  line-height: 1.25;
}

@media (min-width: 43.75em) {
  h1 {
    font-size: 2.5em;
    line-height: 1.125;
  }
}

@media (min-width: 56.25em) {
  h1 {
    font-size: 3em;
    line-height: 1.05;
  }
}

h2 {
  font-size: 1.625em;
  line-height: 1.15384615;
}

@media (min-width: 43.75em) {
  h2 {
    font-size: 2em;
    line-height: 1.25;
  }
}

@media (min-width: 56.25em) {
  h2 {
    font-size: 2.25em;
    line-height: 1.25;
  }
}

h3 {
  font-size: 1.375em;
  line-height: 1.13636364;
}

@media (min-width: 43.75em) {
  h3 {
    font-size: 1.5em;
    line-height: 1.25;
  }
}

@media (min-width: 56.25em) {
  h3 {
    font-size: 1.75em;
    line-height: 1.25;
  }
}

h4 {
  font-size: 1.125em;
  line-height: 1.11111111;
}

@media (min-width: 43.75em) {
  h4 {
    line-height: 1.22222222;
  }
}

blockquote {
  font-size: 1.25em;
  line-height: 1.25;
}

@media (min-width: 43.75em) {
  blockquote {
    font-size: 1.5em;
    line-height: 1.45833333;
  }
}

  a {
    color: inherit;
    text-decoration: none;
    position: relative;
    color: ${props => props.theme.blue};


    &:hover {
      color: ${props => lighten(0.2, props.theme.blue)};
    }
  }

  .video-container {
    position: relative;
    padding-bottom: calc(50% - 30px);
    padding-top: 30px;
    height: 0;
    overflow: hidden;

  iframe,
  object,
  embed {
    max-width: 854px;
    max-height: 480px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
`

export default GlobalStyle
