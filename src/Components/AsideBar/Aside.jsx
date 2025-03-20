import React from 'react'
import './Aside.css'
import { NavLink } from "react-router-dom";
import { useAuth } from '../../Data/AuthProvider';

export default function Aside() {
  const { setLogoutPopUp } = useAuth();

  return (
    <aside className="Aside_bar">
      <div className="aside_container">
        <div className="aside_list">
          <NavLink to='/dashboard' className={`dashboard aside_items ${({ isActive }) =>
            isActive ? "active" : ""}`}>
            {({ isActive }) => (
              <>
                <img src={isActive ? "./Dash.svg" : "./DashA.svg"} className="i" alt="Dashboard" />
                <p>Dashboard</p>
              </>
            )}
          </NavLink>
          <NavLink to='/users' className={`users aside_items ${({ isActive }) =>
            isActive ? "active" : ""}`}>
            {({ isActive }) => (
              <>
                <img src={isActive ? "./userA.svg" : "./User.svg"} className="i" alt="Dashboard" width='100%'/>
                <p>Users</p>
              </>
            )}
          </NavLink>
          <NavLink to='/Ads' className={`Ads aside_items ${({ isActive }) =>
            isActive ? "active" : ""}`}>
            {({ isActive }) => (
              <>
                <img src={isActive ? "./AdsA.svg" : "./Ads.svg"} className="i" alt="Dashboard" />
                <p>Ads</p>
              </>
            )}
          </NavLink>
          <NavLink to='/legal' className={`Legal aside_items ${({ isActive }) =>
            isActive ? "active" : ""}`}>
            {({ isActive }) => (
              <>
                <img src={isActive ? "./LegalA.svg" : "./Legal.svg"} className="i" alt="Dashboard" />
                <p>Legal</p>
              </>
            )}
          </NavLink>
        </div>
        <div className="aside_logout">
          <button onClick={() => setLogoutPopUp(true)}>Logout</button>
        </div>
      </div>
    </aside>
  )
}
