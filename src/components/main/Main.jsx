import React, { useContext } from 'react'
import Header from '../header/Header'
import { ContentContext } from '../../contexts/mainContentContext';
import Dashboard from '../maincontents/Dashboard';

const Main = () => {
  const {selectedItem,setSelectedItem } = useContext(ContentContext);
  return (
    <div>
      <Header/>
      <div className=''>
       {selectedItem ? selectedItem: <Dashboard/>}
      </div>
    </div>
  )
}

export default Main
