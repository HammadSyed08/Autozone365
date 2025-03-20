import './App.css'
import './index.css'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import User from './Pages/User.jsx'
import Ads from './Pages/Ads.jsx'
import Legal from './Pages/Legal'
import LoginPage from './Pages/LoginPage.jsx'
import { AuthProvider } from './Data/AuthProvider';
import ViewDetail from './Pages/ViewDetail';

function App() {

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/' element={<Home />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='users' element={<User />} />
            <Route path='Ads' element={<Ads />} />
            <Route path='detail' element={<ViewDetail />} />
            <Route path='legal' element={<Legal />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
