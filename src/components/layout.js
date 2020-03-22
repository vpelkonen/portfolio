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
  max-width: 760px;
  padding: 1.5rem;
  @media(min-width: 769px) {
    padding-top: 10%;
  }
`

export default ({ children }) => (
    <Wrapper>
      <CSSReset />
      <GlobalStyles />
      <Main>{children}</Main>
    </Wrapper>
)
