import React, { useContext, useEffect } from 'react'
import './UsersBarCard.css'
import { useState } from "react";
import { Data } from "../../data/data";
import Chart from "chart.js/auto";
import { CategoryScale,LinearScale,Legend,BarElement,Title,Tooltip } from "chart.js";
import priceUp from '../../imgs/p-up.png'
import { IoArrowUpCircle } from "react-icons/io5";
import { IoArrowDownCircle } from "react-icons/io5";
import { HiUsers } from "react-icons/hi2";
import { Bar } from "react-chartjs-2";
import DashboardCard from './DashboardCard';
import { ContentContext } from '../../contexts/mainContentContext';
Chart.register(CategoryScale,LinearScale,Legend,BarElement,Title,Tooltip);
const UsersBarCard = () => {
  const {selectedCategory,startDate,endDate} = useContext(ContentContext);
  const [filteredDataByDate, setFilteredDataByDate] = useState([])
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });

  const [timeCompare, setTimeCompare]=useState("")
  const [totalUsers, setTotalUsers]=useState("")
  const filterDataByDateRange = (data, startDate, endDate) => {
  
    const start = new Date(startDate.usersStart);
    const end = new Date(endDate.usersEnd);
  
  
    return data.filter(item => {
      const itemDate = new Date(item.id); 
      return itemDate >= start && itemDate <= end;
    });
  };

  useEffect(()=>{
   if(selectedCategory === "monthly") setTimeCompare("month")
   if(selectedCategory === "weekly") setTimeCompare("week")
   if(selectedCategory === "yearly") setTimeCompare("year")
  },[selectedCategory])
  useEffect(()=>{
 
    const filteredData = filterDataByDateRange(Data.daily, startDate, endDate);
    
    setFilteredDataByDate(filteredData)
   
  },[startDate,endDate])
  useEffect(() => {
    const labels = Data[selectedCategory].map((data) => {
      if (selectedCategory === "yearly") return data.year;
      if (selectedCategory === "weekly") return data.week;
      if (selectedCategory === "monthly") return data.month;
      if (selectedCategory === "daily") return data.day;
    });
  
    const data = Data[selectedCategory].map((data) => data.userGain);
    const data2 = Data[selectedCategory].map((data) => data.userGain);
    const filteredData = filteredDataByDate.map((data) => data.userGain);
    const filteredData2 = filteredDataByDate.map((data) => data.userLost);
    console.log(filteredData)
      const sum = data.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      setTotalUsers(sum)
    setChartData({
      labels,
      datasets: [
        {
          label: "Users Gained",
          data:`${filteredDataByDate.length === 0? data: filteredData}`,
          backgroundColor: [
            "rgba(75,192,192,1)",
            "green",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0"
          ]
        },
        {
          label: "Users Lost",
          data:`${filteredDataByDate.length === 0? data2: filteredData2}`,
          backgroundColor: [
            "rgba(75,192,192,1)",
            "red",
            "brown",
            "pink",
            "indigo"
          ]
        }
      ]
    });
    
  }, [selectedCategory]);
const chart =<Bar
data={chartData}
options={{
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend:{
      display:false,
    
    },
    title: {
      display: true,
      text: `Users Onboarded ${selectedCategory}`
    }
  }
}}
/>
  return (
    <div className='users-card'>
  <DashboardCard headerText="Total Users Onboarded" headerIcon={ <HiUsers color='blue'/>} volume={`${totalUsers} (${selectedCategory})`} progressValue={"1.3%"} progressIcon={ <IoArrowUpCircle style={{transform:"rotate(55deg)"}} color='green' fontSize={18}/>}progressCompare={`vs last ${timeCompare}`}chart={chart} identifier="Users"/>

    
     
    </div>
  )
}

export default UsersBarCard
