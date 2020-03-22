import React from "react"
import styled from 'styled-components'
import GlobalStyles, { CSSReset } from '../theme/global'

const Main = styled.main`
  max-width: 920px;
`

export default ({ children }) => (
    <>
      <CSSReset />
      <GlobalStyles />
      <Main>{children}</Main>
    </>
)
