import React from 'react'
import { connect } from 'refunk'

const Index = ({
  slides,
  update
}) => (
  <div>
    <ul>
      {slides.map((slide, i) => (
        <li key={i}>
          <button onClick={e => update(state => ({ index: i }))}>
            {i} <code>slide</code>
          </button>
        </li>
      ))}
    </ul>
  </div>
)

const map = state => ({
})

export default connect(map)(Index)
