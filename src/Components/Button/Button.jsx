import React, { useState } from 'react'
import './Button.css'

export default function Button({ name, isBlocked , isActive , onClick }) {
  const [ActiveBtn, setActiveBtn] = useState(false)
  const handleClick = () => {
    setActiveBtn(!ActiveBtn)
  }
  return (
    <div className={`InActive_btn ${isActive ? 'Active_btn' : ''} ${isBlocked ? 'Blocked_btn' : ''}`}>
      <button onClick={onClick}>{name}</button>
    </div>
  )
}
