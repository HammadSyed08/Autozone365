import React from 'react'
import UserHead from '../User/UserHead'
import { NavLink } from 'react-router-dom'
import './AdCard.css'

export default function AdCard({ id, image, name, detail, CheckStatus }) {
  return (
    <div className="card">
      <div className="card_img">
        <img src={image} alt="Car Ad" width='100%' />
        <div className="Ad_cross_or_tick">
          <span>
            <img src={CheckStatus === 'Active' ? './tickG.svg' : './Tick.svg'} alt="Green Tick" />
          </span>
          <span>
            <img src={CheckStatus === 'Active' ? './crossD.svg' : './Cross.svg'} alt="Cross" />
          </span>
        </div>
      </div>
      <h4>{name}</h4>
      <p>{detail}</p>
      <NavLink className='button' to='/detail'>View Detail</NavLink>
    </div>
  )
}
