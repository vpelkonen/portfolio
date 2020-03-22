import React from "react"
import styled from 'styled-components'
import GlobalStyles, { CSSReset } from '../theme/global'

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`

const Main = styled.main`
  max-width: 800px;
  padding: 4rem 2rem 2rem 2rem;
`

export default ({ children }) => (
    <Wrapper>
      <CSSReset />
      <GlobalStyles />
      <Main>{children}</Main>
    </Wrapper>
)
