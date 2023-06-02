 import 'bootstrap/dist/css/bootstrap.min.css'
 import 'bootstrap/dist/js/bootstrap.bundle.js'
 import { RouterProvider,useNavigate } from 'react-router-dom'
 import { router } from './routes/CreateRouter.jsx'
 import AuthContextProvider from './ContextApi/providers/AuthContextProviders.jsx'
import Cookies from 'js-cookie'
import { useContext, useEffect } from 'react'
import axios from 'axios'
import AuthContext from './ContextApi/context/AuthContext.jsx'




function App() {
  const {dispatch} =useContext(AuthContext)
   const token=Cookies.get('token')
 
 useEffect(()=>{


 try {
  
    axios.get('http://localhost:6060/api/v1/user/me',{

    headers:{
      "Authorization":`Bearer ${token}`
    }

    }).then(res=>{
      
      if(res.data.user ){
       console.log(res.data);
        
       if(res.data.user.isverfied && token){

         dispatch({type:'USER_LOGIN_SUCCESS',payload:res.data.user})
       }else{
        Cookies.remove('token')
            alert('helo user please verified your account')

       }  


      
      }
    
    }).catch(error=>{

     console.log(error);


    })


 } catch (error) {
  console.log(error);
 }





 },[token])



  return (
  
    <RouterProvider router={router}>

 
      
 
    </RouterProvider>
   
  )
}

export default App
