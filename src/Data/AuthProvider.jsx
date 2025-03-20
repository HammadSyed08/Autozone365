import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogOutPopup from "../Components/PopUp/LogOutPopup";
import Button from '../Components/Button/Button'
import '../Components/PopUp/PopUp.css'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [logoutPopUp, setLogoutPopUp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(auth === "true");
  }, []);

  const login = () => {
    localStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
    navigate("/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    setLogoutPopUp(false)
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, setLogoutPopUp }}>
      {children}
      {logoutPopUp && (
        <div className="Logout_PopUp">
          <div className="Popup_container">
            <h1>Logout!</h1>
            <p>Are you sure you want to logout?</p>
            <div className="Logout_Options">
              <Button name='Yes' onClick={() => logout()} />
              <Button name='No' onClick={() => setLogoutPopUp(false)} isActive='Active'/>
            </div>
          </div>
        </div>
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
