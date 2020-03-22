import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import GlobalStyles, { CSSReset } from '../theme/global'

const Main = styled.main`
  max-width: 920px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <CSSReset />
      <GlobalStyles />
      <Main>{children}</Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
