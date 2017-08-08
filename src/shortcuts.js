import React from 'react'

const shortcuts = config => Component => {
  class ShortcutsComponent extends React.Component {
    constructor () {
      super()

      this.handleKeydown = ({
        key,
        shiftKey,
        metaKey,
        ctrlKey,
        altKey,
      }) => {
        if (shiftKey || metaKey || ctrlKey || altKey) return

      }
    }

    componentDidMount () {
      document.body.addEventListener('keydown', this.handleKeydown)
    }

    render () {
      return <Component {...this.props} />
    }
  }

  return ShortcutsComponent
}

export default shortcuts
