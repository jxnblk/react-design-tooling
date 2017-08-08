import React from 'react'
import { render } from 'react-dom'
import { injectGlobal } from 'styled-components'
import App from './App'

injectGlobal`
* { box-sizing: border-box }
body {
  font-family: 'Roboto Mono', Menlo, monospace;
  line-height: 1.5;
  margin: 0;
  color: white;
  background-color: black;
}
`

render(<App />, app)
