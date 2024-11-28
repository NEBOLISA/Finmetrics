import React, { createContext, useState } from "react";

export const ContentContext = createContext();
const ContentProvider = ({ children }) => {
    const [value, setValue] = useState("Hello, World!");
    const [selectedItem, setSelectedItem] = useState("")
    const [selectedCategory, setSelectedCategory]= useState("weekly")
    const [startDate, setStartDate] = useState({
      usersStart:"",
      txnStart:""
    });
  const [endDate, setEndDate] = useState({
    usersEnd:"",
    txnEnd:""
  });
  const [openMenu,setOpenMenu] = useState(false);
    return (
      <ContentContext.Provider value={{ value, setValue,selectedItem,setSelectedItem,selectedCategory, setSelectedCategory,startDate, setStartDate,endDate, setEndDate,openMenu,setOpenMenu }}>
        {children}
      </ContentContext.Provider>
    );
  };
  
export default ContentProvider;
