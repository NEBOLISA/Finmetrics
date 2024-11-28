import React, { useContext } from 'react'
import './DashboardCard.css'
import { ContentContext } from '../../contexts/mainContentContext';




const DashboardCard = ({headerText, headerIcon, volume, progressValue, progressIcon,progressCompare,chart,minDate,maxDate,identifier}) => {
  const { setStartDate,setEndDate} = useContext(ContentContext);


  return (
    <div className='dashboard-card'>
      <div>
        <div className='date-wrapper'>
        {/* <label for="custom-range">Custom Range:</label> */}
          <input className="start-date" min={minDate&&minDate} max={maxDate&&maxDate} onChange={(e)=>{
            identifier === "Users" ?
            setStartDate(prevState => ({
            ...prevState,
            usersStart: e.target.value,
            
          })):setStartDate(prevState => ({
            ...prevState,
            txnStart: e.target.value,
            
          }))}} 
type="date" id="start-date"/> - {""}
           <input className='end-date'min={minDate&&minDate} max={maxDate&&maxDate} onChange={(e)=>{
            identifier === "Users" ?
            setEndDate(prevState => ({
            ...prevState,
            usersEnd: e.target.value,
            
          })):setEndDate(prevState => ({
            ...prevState,
            txnEnd: e.target.value,
            
          }))}} type="date" id="end-date"/>
        </div>
      <div className='desc-card-wrapper'>
      
      <div className='left-card-wrapper'>
        <div className='top-left-card'>
            <div className='header-text-wrapper'>

                {headerIcon}
                <p >{headerText}</p>
            </div>
            <p className=' number-text' >{volume}</p>
        </div>
        <div className='bottom-left-card'></div>
      </div>
      <div className='right-card-wrapper'>
        <div className='right-card-top'>
            {progressIcon}
         
          <p>{progressValue}</p>
        </div>
        <div className='right-card-bottom'>
          <p>{progressCompare}</p>
        </div>
      </div>
      </div>
      </div>
     
     <div className='chart-wrapper'>
     {chart}
     </div>
    
    </div>
  )
}

export default DashboardCard
