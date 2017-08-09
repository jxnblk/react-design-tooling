import React from 'react'
import styled from 'styled-components'

const Root = styled.footer`
  padding: 32px;
`

const Link = styled.a`
  margin-right: 1em;
  color: inherit;
`

const Footer = props => (
  <Root>
    <Link href='https://github.com/jxnblk/react-design-tooling'>
      GitHub
    </Link>
    <Link href='http://jxnblk.com'>
      Jxnblk
    </Link>
  </Root>
)

export default Footer
