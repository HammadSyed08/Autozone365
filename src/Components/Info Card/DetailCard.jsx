import React from 'react'
import './DetailCard.css'

export default function DetailCard() {
  return (
    <div className='DetailCard'>
      <div className="info_card">
        <img src={'./Year.svg'} alt="Year" />
        <h5>2020</h5>
        <p>Year</p>
      </div>
      <div className="info_card">
        <img src={'./KM.svg'} alt="KiloMeter" />
        <h5>1200 <span>Km</span></h5>
        <p>Kilometers</p>
      </div>
      <div className="info_card">
        <img src={'./Petrol.svg'} alt="Petrol" />
        <h5>Petrol</h5>
        <p>Engine</p>
      </div>
      <div className="info_card">
        <img src={'./seats.svg'} alt="Seats" />
        <h5>4 seats</h5>
        <p>Seats</p>
      </div>
    </div>
  )
}
