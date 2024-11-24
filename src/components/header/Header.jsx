import React, { useState } from 'react'
import './Header.css'
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
const Header = () => {
  const [catDropIsOpen, setCatDropIsOpen] = useState(false)
  const [category, setCategory]= useState(["Daily","Weekly","Monthly","Custom"])
  const [selectedCategory, setSelectedCategory]= useState("")
  return (
    <div className='header'> 
      <div className='left-header-wrapper'>
        <IoSearch style={{width:"15px", height:"15px", fontWeight:"normal"}}/>
        <input type="search"  placeholder='Search' name="" id="" />
      </div>
      <div className='right-header-wrapper'>
      
        <div className='cat-header-wrapper' onClick={()=>{setCatDropIsOpen(!catDropIsOpen)}}>
         

         <div className='cat'>

         
        <p className='cat-header'>{selectedCategory || category[0]}</p>
        { catDropIsOpen ?<RiArrowDropDownLine  style={{fontSize:"25px"}}/> :
        <RiArrowDropUpLine style={{fontSize:"25px"}}/>
        }
         </div>
         <div style={{display:"flex", justifyContent:"center", width:"100%"}}>

                  
            {catDropIsOpen ? <ul className='dropdown-wrapper' >

              {category.map(category=>(
                <li className='cat-item'onClick={()=>setSelectedCategory(category)}>{category}</li>
              ))}
              
            </ul>: ""}
         </div>
      
         </div>
      
        <div className='toggle-mode'>
          <button className='light-btn not-active-mode'>Light</button>
          <button className='dark-btn active-mode'>Dark</button>
        </div>
        <div className='notification-icon-wrapper'>
          <IoMdNotificationsOutline/>
        </div>
        <div className='divider'></div>
        <div className='profile-date-wrapper'>
          <div className='img-wrapper'></div>
          <p className='name-greeting'>Hello Smith</p>
        </div>
      </div>
    </div>
  )
}

export default Header
