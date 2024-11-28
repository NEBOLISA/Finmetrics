import React, { useContext, useState } from 'react'
import './Header.css'
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { ContentContext } from '../../contexts/mainContentContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { GiHamburgerMenu } from "react-icons/gi";
import Profile from '../profileItem/Profile';
const Header = () => {
  const [catDropIsOpen, setCatDropIsOpen] = useState(false)
  const [category, setCategory]= useState(["weekly","monthly","yearly"])
  const {selectedCategory, setSelectedCategory} = useContext(ContentContext);
  const [mode,setMode] = useState("light")
  const {setIsDarkMode} = useContext(ThemeContext);
 const {openMenu,setOpenMenu} = useContext(ContentContext);
  const handleOpen = ()=>{
    setOpenMenu(true)
   
  }
  return (
    <div className='header'> 
      <GiHamburgerMenu className='hamburger' onClick={handleOpen} />
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

              {category.map((category,index)=>(
                <li key={index} className='cat-item'onClick={()=>setSelectedCategory(category)}>{category}</li>
              ))}
              
            </ul>: ""}
         </div>
      
         </div>
      
        <div className='toggle-mode'>
          <button className={`${mode==="light" ? "active-mode" : "not-active-mode"} light-btn `} onClick={()=>{setMode("light");setIsDarkMode(false)}}>Light</button>
          <button className={`${mode==="dark" ? "active-mode" : "not-active-mode"} dark-btn`} onClick={()=>{setMode("dark");setIsDarkMode(true)}}>Dark</button>
        </div>
        <div className='notification-icon-wrapper'>
          <IoMdNotificationsOutline className='ntn-btn'/>
        </div>
        <div className='divider'></div>
       <Profile header/>
      </div>
    </div>
  )
}

export default Header
