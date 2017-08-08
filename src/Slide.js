import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  color: white;
  background-color: black;

  @media screen and (min-width: 50em) {
    font-size: 4vw;
  }
`

const Inner = styled.div`
  width: 80vw;
`

const Slide = props => (
  <Root>
    <Inner {...props} />
  </Root>
)

export default Slide
