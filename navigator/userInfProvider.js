import React, { useState, useContext, createContext } from "react";

const ValueContext = createContext()


const ValueProvider = ({value, children}) => {
  const [user,setUser] = useState(value);
  return (
    <ValueContext.Provider
        value={{user,setUser}} >
      {children}
    </ValueContext.Provider>
   )
}
export default ValueProvider
export const useValue = () => useContext(ValueContext)