import React from 'react'
import './DetailCard.css'

export default function DetailCard({name, quantity, icon}) {
  return (
    <div className='card_detail'>
      <div className='card_icon'>
        <img src={icon}/>
      </div>
      <div className="card_data">
        <p className="Card_name">{ name }</p>
        <p className="quantity">{ quantity}</p>
      </div>
    </div>
  )
}
