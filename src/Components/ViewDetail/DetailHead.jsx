import React, { useState } from 'react'
import './DetailHead.css'
import Button from '../Button/Button'
import { NavLink } from 'react-router-dom'

export default function DetailHead() {
  const [isActive, setIsActive] = useState('Active')
  const handleActive = () => setIsActive(!isActive)
  const handleBlock = () => setIsActive('Active')

  return (
    <div className='detail_head'>
      <h2>Advertisement</h2>
      <div className="head_contain">
        <NavLink to='/Ads' className="back_arrow">
          <img src="./BackArrow.svg" alt="Back Arrow" />
        </NavLink>
        <div className="button_or_Search">
          <div className={`btns ${isActive ? 'Active' : 'Blocked'}`}>
            <Button name={`${isActive ? 'Active' : 'Blocked'}`} isActive={isActive} />
            <div className="tick_or_cross_img">
              <span>
                <img src={isActive ? './Tick.svg' : './tickG.svg'} alt="Tick disable" onClick={handleBlock} />
              </span>
              <span>
                <img src={isActive ? './Cross.svg' : './crossD.svg'} alt="Cross Active" onClick={handleActive} />
              </span>
            </div>
          </div>
          <div className="Search_detail">
            <span>Mark</span>
            <span>Location House no 32 pakistan</span>
          </div>
        </div>
      </div>
    </div>
  )
}
