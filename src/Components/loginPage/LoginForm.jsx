import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function LoginForm() {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const Navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();

    if (Email === 'admin@gmail.com' && Password === 'admin') {
      localStorage.setItem("isAuthenticated", "true");
      Navigate('dashboard')
    } else alert('invalid Email or password')
  }
  return (
    <div className="form_container">
      <div className="login_img">
        <img src={'/Login.png'} alt="Login Img" width="100%" />
      </div>
      <form action="/" onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
        <input type="Password" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">LOGIN</button>
      </form>
    </div>
  )
}
