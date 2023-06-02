import { useContext } from 'react'
import AuthContext from '../ContextApi/context/AuthContext'
import { Navigate } from 'react-router-dom'
 
 const AuthRediract = ({children}) => {
   
  const {isUserLoggedIn}=useContext(AuthContext)  
  
  
  return isUserLoggedIn?<Navigate to={'/'}  />:children

 }
 
 export default AuthRediract