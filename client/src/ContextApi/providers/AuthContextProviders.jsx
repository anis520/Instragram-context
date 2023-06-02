



// create porvider

 
import Cookies from "js-cookie"
import AuthContext from "../context/AuthContext.jsx"
import { useReducer } from "react"
import AuthReucer from "../reducers/AuthReducer.jsx"

// initial state

export const INITIAL_STATE ={

    isUserLoggedIn:false,
    user: {} 

  }




const AuthContextProvider=({children})=>{


const [state,dispatch]=useReducer(AuthReucer,INITIAL_STATE)



 

 
return(

  <AuthContext.Provider 
  
  value={{
    isUserLoggedIn:state.isUserLoggedIn,
    user:state.user,dispatch
  }}
  
  
  >


 {children}



  </AuthContext.Provider>


)


}


// exoprt default

export default AuthContextProvider
