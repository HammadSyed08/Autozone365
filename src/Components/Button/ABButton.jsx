import React from 'react'
import './Button.css'

export default function ABButton({ name, onClick, isActive }) {
  return (
    <div className={`InActive_btn ${isActive ? (name === 'Blocked' ? 'Blocked_btn' : 'Active_btn') : ''}`}>
      <button onClick={onClick}>{name}</button>
    </div>
  )
}
