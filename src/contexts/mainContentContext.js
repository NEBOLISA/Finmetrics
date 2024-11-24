import React, { createContext, useState } from "react";

export const ContentContext = createContext();
const ContentProvider = ({ children }) => {
    const [value, setValue] = useState("Hello, World!");
    const [selectedItem, setSelectedItem] = useState("")
  
    return (
      <ContentContext.Provider value={{ value, setValue,selectedItem,setSelectedItem }}>
        {children}
      </ContentContext.Provider>
    );
  };
  
export default ContentProvider;
