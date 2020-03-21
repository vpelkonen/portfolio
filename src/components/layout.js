import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import { CSSReset } from '../theme/global'

const Main = styled.main`
  align-self: center;
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
      <Main>{children}</Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
