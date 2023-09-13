import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state)

  const activeStyles = {
    opacity: 1, // Default opacity
    ...(isFilterTab && isActiveTab && {
      backgroundColor: snap.color,
      opacity: 0.5
    }),
    ...(!isFilterTab && {
      borderRadius: '4px'
    }),
    ...(isFilterTab && {
      borderRadius: '50%',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
      /* Add other styles you want for isFilterTab here */
    }),
  }

  return (
    <div
      key={tab.name}
      className="tab-btn"
      onClick={handleClick}
      style={activeStyles}
    >
      <img src={tab.icon} alt={tab.name} />
      
    </div>
  )
}

export default Tab;