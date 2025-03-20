import React from 'react'
import Button from '../Button/Button'
import './PopUp.css'
import { AuthContext } from '../../Data/AuthProvider'

export default function LogOutPopup({ isAuthenticated, login, logout, logoutPopUp, setLogoutPopUp }) {
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, setLogoutPopUp }}>
      {children}
      {logoutPopUp && (<div className="Logout_PopUp">
        <div className="Popup_container">
          <h1>Logout!</h1>
          <p>Are you sure you want to logout?</p>
          <div className="Logout_Options">
            <Button name='Yes' onClick={logout} />
            <Button name='No' onClick={() => setLogoutPopUp(false)} />
          </div>
        </div>
      </div>)}
    </AuthContext.Provider>
  )
}
