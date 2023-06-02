 import Styles from './Profile.module.scss'
import { AiOutlineSetting } from 'react-icons/ai'
import {FaUserTag } from 'react-icons/fa'
import { BsBookmark, BsGrid3X3 } from 'react-icons/bs'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useContext, useState } from 'react'
import AuthContext from '../../ContextApi/context/AuthContext.jsx'


const Profile = () => {
 
  const {user}=useContext(AuthContext)

 

  const location = useLocation();

 
  return (
    <div className={Styles.main}>

          <div className={Styles.header}>
          <img src={'https://media.istockphoto.com/id/1303206558/photo/headshot-portrait-of-smiling-businessman-talk-on-video-call.jpg?s=612x612&w=0&k=20&c=hMJhVHKeTIznZgOKhtlPQEdZqb0lJ5Nekz1A9f8sPV8='} alt="" />  
          <div className={Styles.info}>
                   <p className={Styles.name}>{user.username} <span className={Styles.edit}>Edit profile</span><span className={Styles.setting}> <AiOutlineSetting/> </span></p>
                    <p className={Styles.likes}>
                       
                       <span><span>9</span> posts</span>
                       <span><span>9</span> followers</span>
                       <span><span>29</span> following</span>

                    </p>
                    <p className={Styles.username}>Anisul hoque</p>

            </div>  
                    
            </div>
            <div className={Styles.nav}>
                  
                       <ul>
                       <Link to={''}>
                        <li className={ location.pathname=='/profile' && Styles.active}><BsGrid3X3/> POSTS</li>

                       </Link>
                       <Link to={'saves'}>
                        <li className={ location.pathname=='/profile/saves' && Styles.active}><BsBookmark/> SAVED</li>

                       </Link>
                       <Link to={''}>

                        <li><FaUserTag/> TAGGED</li>
                       </Link>

                 
                       </ul>


            </div>

       
         <Outlet/>




                




    </div>
  )
}

export default Profile