import React, { useContext, useState } from 'react'
import logo from '../../imgs/logo.png'
import './Sidebar.css'
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import Dashboard from '../maincontents/Dashboard';
import Reports from '../maincontents/Reports';
import Settings from '../maincontents/Settings';
import { ContentContext } from '../../contexts/mainContentContext';
import { IoArrowRedoCircleSharp,IoCloseSharp } from "react-icons/io5";
import Profile from '../profileItem/Profile';

const Sidebar = () => {
  const [catDropIsOpen, setCatDropIsOpen] = useState(false)
  const sideOptions = ["Dashboard","User", "Acquisition","Merchant Insights","Transactions","Reports","Settings"]
  const [activeIndex,setActiveIndex]=useState(0)
  const {setSelectedItem,openMenu,setOpenMenu  } = useContext(ContentContext);
  
  const handleActiveClick=(index)=>{
    setActiveIndex(index)
    setSelectedItem(mainContents[index])
   
  }
  const mainContents = [<Dashboard/>,<Reports/>,<Settings/>]
  const handleClose = ()=>{
  setOpenMenu(false)
  }
  return (
    <div className>

    <div className={`sidebar-wrapper`} >
      <div className="header-wrapper">

      {/* <img className='logo-img' src={logo} alt="logo" /> */}
      <div className='logo-wrapper'>
      <IoArrowRedoCircleSharp className='side-logo' fontSize={23}/>
      <p className='logo-title'>FinTrade</p>
      <IoCloseSharp className='close-btn' onClick={handleClose}/>
      </div>
      <Profile side/>
      <div className='side-options'>
      <ul className='options-ul'>
        {sideOptions.map((option,index)=>(<li key={index} className={`${activeIndex === index ? "active":""}`} onClick={()=>{handleActiveClick(index)}}>{option}</li>))}
      </ul>

      </div>
      </div>
     
    </div>
    </div>
  )
}

export default Sidebar
