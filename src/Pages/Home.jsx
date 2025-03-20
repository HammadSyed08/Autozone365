import Aside from '../Components/AsideBar/Aside'
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className='HomePage'>
      <div className="home_container">
        <div className="Aside">
          <Aside />
        </div>
        <div className="dash_or_user">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}
