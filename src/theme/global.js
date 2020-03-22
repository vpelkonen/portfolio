import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  html, body, #___gatsby, #gatsby-focus-wrapper {
    display: flex;
    flex: 1;
  }
`

export const CSSReset = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    font-size: 16px;
    line-height: 1.4;
  }

  a {
    text-decoration: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ul,
  ol {
    list-style-type: none;
  }

  ul[class],
  ol[class] {
    padding: 0;
    list-style: none;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  img {
    max-width: 100%;
    display: block;
  }

  article > * + * {
    margin-top: 1em;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`
