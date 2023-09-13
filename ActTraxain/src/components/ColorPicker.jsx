import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store'

const ColorPicker = () => {
  const snap = useSnapshot(state)
  const styles = {
    position: 'absolute',
    left: '100%',
    marginLeft: '0.75rem',
  };

  return (
    <div  style={styles}>
      <SketchPicker
      color={snap.color}
      disableAlpha
      onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker
