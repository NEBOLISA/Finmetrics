import React, { useContext } from 'react'
import Header from '../header/Header'
import { ContentContext } from '../../contexts/mainContentContext';
import Dashboard from '../maincontents/Dashboard';
import './Main.css'

const Main = () => {
  const {selectedItem,setSelectedItem } = useContext(ContentContext);
  return (
    <div className='main'>
      <Header/>
      <div className='main-content-wrapper'>
       {selectedItem ? selectedItem: <Dashboard/>}
      </div>
    </div>
  )
}

export default Main
