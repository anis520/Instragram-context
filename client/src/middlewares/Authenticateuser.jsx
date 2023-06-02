
 import React, { useContext } from 'react'
import AuthContext from '../ContextApi/context/AuthContext'
import { Navigate } from 'react-router-dom'
 
 const Authenticateuser = ({children}) => {
   
  const {isUserLoggedIn}=useContext(AuthContext)  
  
  
  return isUserLoggedIn?children:<Navigate to={'/login'}  />

 }
 
 export default Authenticateuser