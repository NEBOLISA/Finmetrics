import React, { useContext, useEffect } from 'react'
import './TransactionCard.css'
import { useState } from "react";
import { Data, TransactionData2 } from "../../data/data";
import Chart from "chart.js/auto";
import { ArcElement,Legend,Tooltip } from "chart.js";
import priceUp from '../../imgs/p-up.png'
import { IoArrowUpCircle } from "react-icons/io5";
import { IoArrowDownCircle } from "react-icons/io5";
import { HiUsers } from "react-icons/hi2";
import { AiOutlineTransaction } from "react-icons/ai";
import { Doughnut  } from "react-chartjs-2";
import DashboardCard from './DashboardCard';
import { ResponsivePie } from '@nivo/pie'
import { ContentContext } from '../../contexts/mainContentContext';
import { ThemeContext } from '../../contexts/ThemeContext';
Chart.register(ArcElement,Legend,Tooltip);
const TransactionCard = () => {
  const {selectedCategory,startDate,endDate} = useContext(ContentContext);
  const {isDarkMode} = useContext(ThemeContext);
  
 const [timeCompare, setTimeCompare]=useState("")
 const [totalVolume, setTotalVolume]=useState("")
 const [filteredDataByDate, setFilteredDataByDate] = useState("")
 useEffect(()=>{
  if(selectedCategory === "monthly") setTimeCompare("month")
  if(selectedCategory === "weekly") setTimeCompare("week")
  if(selectedCategory === "yearly") setTimeCompare("year")
    const volume =TransactionData2[selectedCategory].map((data)=>(data.value))
   const totalVol = volume.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      setTotalVolume(totalVol)
 },[selectedCategory])
 const [graphData,setGraphData]= useState("")
  

   const filterDataByDateRange = (data, startDate, endDate) => {
  
    const start = new Date(startDate.txnStart);
    const end = new Date(endDate.txnEnd);
  
  
    return data.filter(item => {
      const itemDate = new Date(item.id); 
      return itemDate >= start && itemDate <= end;
    });
  };

  function sortDates(dateArray) {
    return dateArray.sort((a, b) => new Date(a) - new Date(b));
  }
  const datesArray = TransactionData2.daily.map(date=>date.id)
  const minDate = sortDates(datesArray)[0]
  const maxDate = sortDates(datesArray)[datesArray.length-1]
  useEffect(()=>{ 
    setGraphData(TransactionData2[selectedCategory].map((data)=>(data)))
  },[])
useEffect(()=>{
 
  const filteredData = filterDataByDateRange(TransactionData2.daily, startDate, endDate);
  
  setFilteredDataByDate(filteredData)
},[startDate,endDate])

  
  const chart =
  <ResponsivePie
  data={filteredDataByDate.length===0 ?graphData:filteredDataByDate }
  margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
  innerRadius={0.5}
  padAngle={0.7}
  cornerRadius={3}
  activeOuterRadiusOffset={8}
  borderWidth={1}
  borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
  arcLinkLabelsSkipAngle={10}
  arcLinkLabelsTextColor={isDarkMode?"#ffffff":"#333333"}
  arcLinkLabelsThickness={2}
  arcLinkLabelsColor={{ from: "color" }}
  arcLabelsSkipAngle={10}
  arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
/>

  return (
    <div className='transaction-card'>
  <DashboardCard headerText="Transaction Volume" headerIcon={ <AiOutlineTransaction color='blue'/>} volume={`${totalVolume} (${selectedCategory})`} progressValue={"1.6%"} progressIcon={ <IoArrowDownCircle color='red' style={{transform:"rotate(55deg)"}} fontSize={18}/>}progressCompare={`vs last ${timeCompare}`} chart={chart} minDate={minDate} maxDate={maxDate} identifier="Transaction"/>

    
     
    </div>
  )
}

export default TransactionCard
