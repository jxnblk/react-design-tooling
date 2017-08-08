import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

const Provider = props => (
  <ThemeProvider theme={theme}>
    <div {...props} />
  </ThemeProvider>
)

export default Provider
