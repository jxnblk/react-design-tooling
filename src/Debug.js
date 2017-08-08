import React from 'react'
import styled from 'styled-components'

const Pre = styled.pre`
  font-size: 14px;
  overflow: auto;
`

const Debug = props => <Pre children={JSON.stringify(props, null, 2)} />

export default Debug
