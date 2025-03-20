import Aside from '../Components/AsideBar/Aside'
import React, { useState } from 'react'
import NewUser from '../Components/NewUser/NewUser'
import Sales from '../Components/Sales/Sales'
import DetailCard from '../Components/DetailCard/DetailCard'
import GraphicalView from '../Components/Graphical/GraphicalView'

export default function Dashboard() {
  const [isActive, setIsActive] = useState('Active')
  const handleStatus = (status) => {
    setCheckStatus(status)
  }
  return (
    <div className='main_dashboard_container'>
      <div className="Dashboard_container container">
        <h2>Dashboard</h2>
        <div className="NewUserRow">
          <div className="newUser_container">
            <NewUser isActive={isActive} />
          </div>
          <div className="sales_container">
            <Sales isActive={isActive} />
          </div>
        </div>
        <div className="DetailCard">
          <DetailCard icon='/Adca.svg' name="Active Ads" quantity='330' />
          <DetailCard icon='/userrr.svg' name="Users" quantity='8.23k' />
          <DetailCard icon='/userrr.svg' name="Sellers" quantity='8.23k' />
        </div>
        <div className="Graphical_view">
          <GraphicalView isActive={isActive} />
        </div>
      </div>
    </div>
  )
}
