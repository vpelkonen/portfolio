import { createGlobalStyle, keyframes } from "styled-components"

import COLORS from '../constants/colors'
import { getTimeOfDay } from '../utils/time'

const backgroundAnimation = keyframes`
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
`

export default createGlobalStyle`
  html, body, #___gatsby, #gatsby-focus-wrapper {
    display: flex;
    flex: 1;
    min-height: 100%;
  }

  html {
    font-size: 18px;
    line-height: 1.5;
    padding: 1rem;
    background-color: ${COLORS.paper};
    @media (max-width: 768px) {
      padding: .5rem;
    }
  }

  body {
    font-family: 'Lato', sans-serif;
    color: ${COLORS[`${getTimeOfDay()}Foreground`]};
    background: linear-gradient(180deg, ${
      COLORS[`${getTimeOfDay()}Primary`]
    },  ${COLORS[`${getTimeOfDay()}Secondary`]});
    background-size: 250% 250%;
    animation: ${backgroundAnimation} 20s ease infinite;
  }

  p {
    margin: 0 0 1rem 0;
  }
`

export const CSSReset = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
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
    padding: 0;
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
