import React from 'react'
import './DashboardCard.css'

const dashboardCard = () => {
  return (
    <div className='dashboard-card'>
      <div className='left-card-wrapper'>
        <div className='top-left-card'>
            <div>

            <img src="" alt="" />
            <h1>Total New Debtors</h1>
            </div>
            <p style={{fontWeight:"300", fontSize:"13px"}}>39 Person</p>
        </div>
        <div className='bottom-left-card'></div>
      </div>
      <div className='right-card-wrapper'></div>
    </div>
  )
}

export default dashboardCard
