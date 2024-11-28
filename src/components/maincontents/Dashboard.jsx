import React from 'react'
import './Dashboard.css'
import UsersBarCard from '../cards/UsersBarCard'
import DashboardCard from '../cards/DashboardCard'
import TransactionCard from '../cards/TransactionCard'
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='top-dashboard'>
      <UsersBarCard/>
      <TransactionCard/>
      </div>
    </div>
  )
}

export default Dashboard
