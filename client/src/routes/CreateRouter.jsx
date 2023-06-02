import {
    createBrowserRouter,
 
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Regester from "../pages/Regester/Regester";
import Profile from "../pages/Profile/Profile";
import TempUser from "../pages/TempUser/TempUser";
import { Timeline } from "../pages/Timeline/Timeline";
import Posts from "../components/Posts/Posts";
import Saves from "../components/Saves/Saves";
import LoginRe from "../middlewares/Authenticateuser";
import Authenticateuser from "../middlewares/Authenticateuser";
import AuthRediract from "../middlewares/AuthRediract";
import Verify from "../pages/Verify/Verify";




  export const router =createBrowserRouter([


   {
    path:'/',
    element:<Authenticateuser>
    
    <Home/>
    </Authenticateuser>
    ,children:[
       
      {
        path:'',
        element:<Timeline/>
      },
      {
        path:'/profile',
        element:<Profile/>

        ,children:[
          {
            path:'',
            element:<Posts/>
          },
          {
            path:'saves',
            element:<Saves/>
          },
        ]
      },



    ]
   },
   {
    path:'/login',
    element:
    <AuthRediract>  
    <Login/>
  </AuthRediract>
   
  },
   {
    path:'/regester',
    element:
    <AuthRediract>  
      <Regester/>
  </AuthRediract>
  
   },
 
   {
    path:'/tempuser',
    element:<TempUser/>
   },
   {
    path:'/user/:id/verify/:token',
    element:<Verify/>
   },



  ])