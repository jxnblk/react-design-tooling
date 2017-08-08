export const dec = state => state.index > 0 ? ({ index: state.index - 1 }) : null
export const inc = state => ({ index: state.index + 1 })
export const toggleXRay = state => ({ xray: !state.xray })
