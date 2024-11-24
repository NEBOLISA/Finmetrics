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

const Sidebar = () => {
  const [catDropIsOpen, setCatDropIsOpen] = useState(false)
  const sideOptions = ["Dashboard","User", "Acquisition","Merchant Insights","Transactions","Reports","Settings"]
  const [activeIndex,setActiveIndex]=useState(0)
  const {setSelectedItem  } = useContext(ContentContext);

  const handleActiveClick=(index)=>{
    setActiveIndex(index)
    setSelectedItem(mainContents[index])
    console.log(mainContents[0])
  }
  const mainContents = [<Dashboard/>,<Reports/>,<Settings/>]
  return (
    <div className='sidebar-wrapper' >
      <div className="header-wrapper">

      {/* <img className='logo-img' src={logo} alt="logo" /> */}
      <p className='logo-title'>FinTrade</p>
      <div className='side-options'>
      <ul className='options-ul'>
        {sideOptions.map((option,index)=>(<li key={index} className={`${activeIndex === index ? "active":""}`} onClick={()=>{handleActiveClick(index)}}>{option}</li>))}
      </ul>

      </div>
      </div>
     
    </div>
  )
}

export default Sidebar
