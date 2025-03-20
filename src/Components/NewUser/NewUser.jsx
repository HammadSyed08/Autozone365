import React from 'react'
import Button from '../Button/Button'
import './NewUser.css'

export default function NewUser({ isActive }) {
  return (
    <div className='NewUser Sales'>
      <div className="row_one">
        <p>New users</p>
        <Button name='Month' isActive={isActive} />
      </div>
      <div className="row_Two">
        <div className="loading">
          <div className="loading_bar">214</div>
        </div>
      </div>
    </div>
  )
}
