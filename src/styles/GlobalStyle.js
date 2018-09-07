import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    height:100%;
  }

  body,
  #root,
  main {
    position:absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
  }

  a {
    text-decoration: none;
  }
`

export default GlobalStyle
