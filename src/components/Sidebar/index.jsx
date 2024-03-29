import {FaUtensils, FaHouseUser, FaHamburger} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
      
      <Link to='/'><SideBarIcon icon={<FaHouseUser size="28"/>}/></Link>
      <Link to='page1'><SideBarIcon icon={<FaUtensils size="25"/>}/></Link>
      <Link to='page2'><SideBarIcon icon={<FaHamburger size="28"/>}/></Link>
    </div>
  )
}

const SideBarIcon = ({icon}) => {
  return (
    <div className="sidebar-icon">
      {icon}
    </div>
  )
}

export default SideBar

