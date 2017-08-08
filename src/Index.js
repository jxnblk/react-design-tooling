import React from 'react'
import { connect } from 'refunk'

const Index = ({
  slides,
  update
}) => (
  <div>
    {slides.map((slide, i) => (
      <a
        key={i}
        href={'#' + i}
        onClick={e => {
          update(state => ({ index: i }))
          window.scrollTo(0, 0)
        }}>
        {i}{' '}
      </a>
    ))}
  </div>
)

const map = state => ({
})

export default connect(map)(Index)
