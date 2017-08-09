import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

const headingColor = props => props.level === 1 ? ({
  padding: '8px',
  color: 'black',
  backgroundColor: 'white'
}) : null

const Heading = styled.h1`
  font-size: inherit;
  font-weight: inherit;
  margin: 0;
  ${headingColor}
`

const _Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

const Image = styled.div`
  width: 100vw;
  margin-left: -10vw;
  margin-right: -10vw;
  height: 100vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => props.src});
`

const Pre = styled.pre`
  font-family: inherit;
  font-size: 75%;
  margin: 0;
  white-space: pre-wrap;
  color: ${props => props.theme.colors.cyan};
`

const Code = styled.code`
  font-family: inherit;
  color: ${props => props.theme.colors.cyan};
`

const CodeBlock = props => <Pre children={props.literal} />

const BlockQuote = styled.blockquote`
  font-size: 50%;
  margin: 0;
  color: ${props => props.theme.colors.magenta};
`

const Link = styled.a`
  color: inherit;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const Item = styled.li`
  font-size: 75%;
  &::before {
    content: '- ';
  }
`

const renderers = {
  Heading,
  Image,
  Code,
  CodeBlock,
  BlockQuote,
  Link,
  List,
  Item,
}

const Markdown = props => (
  <ReactMarkdown
    source={props.children}
    renderers={renderers}
  />
)

export default Markdown
