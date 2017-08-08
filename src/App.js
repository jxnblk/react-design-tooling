import React from 'react'
import md from 'raw-loader!../DECK.md'
import { createProvider } from 'refunk'
import ThemeProvider from './ThemeProvider'
import Carousel from './Carousel'
import Slide from './Slide'
import Markdown from './Markdown'
import KeyboardShortcuts from './KeyboardShortcuts'
import XRay from 'react-x-ray'
import Index from './Index'
import Debug from './Debug'
import {
  dec,
  inc,
  toggleXRay
} from './updaters'

const slides = md.split('---\n')
  .filter(n => n.length)

const hoc = createProvider({
  index: 0,
  xray: false
})

const App = hoc(props => (
  <ThemeProvider>
    <XRay disabled={!props.xray}>
      <Carousel
        index={props.index % slides.length}
        length={slides.length}>
        {slides.map(slide => (
          <Slide key={slide}>
            <Markdown
              children={slide}
            />
          </Slide>
        ))}
      </Carousel>
      <KeyboardShortcuts />
      <button
        onClick={e => props.update(dec)}
        children='Previous'
      />
      <button
        onClick={e => props.update(inc)}
        children='Next'
      />
      <Index slides={slides} />
      <Debug {...props} />
      <Debug slides={slides} />
    </XRay>
  </ThemeProvider>
))

export default App
