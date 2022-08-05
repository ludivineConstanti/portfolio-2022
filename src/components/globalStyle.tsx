import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle<{ canscroll: boolean }>`
  body {
    padding: 0;
    margin: 0;
    overflow-y: ${p => (p.canscroll ? "scroll;" : "hidden")};
    font-family: 'Questrial', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
  #gatsby-focus-wrapper {
    position: relative;
    max-width: 100vw;
    overflow-x: hidden;
  }
  h1 {
    font-family: utopia-std-headline;
  }
  h1, h2, h3, h4, h5, h6, p, li, a {
    margin: 0;
    padding: 0;
  }
  h2, h3, h4, h5, h6, p, li, a {
    font-weight: normal;
  }
  a {
    cursor: pointer;
    text-decoration: none;
  }
  button {
    border: none;
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle
