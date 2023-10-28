import { createContext, useState } from "react";

export  const LikesContext = createContext();

const LikesContext = ({children}) => {
    
  return (
    <div>LikesContext</div>
  )
}

export default LikesContext
