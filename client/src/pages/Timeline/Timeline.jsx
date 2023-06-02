import React, { useContext, useEffect, useState } from 'react'
import Styles from './Timeline.module.scss'
import{BiBookmark, BiDotsHorizontalRounded, BiMessageRounded} from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'
import Cookies from 'js-cookie' 
import AuthContext from '../../ContextApi/context/AuthContext'


export const Timeline = () => {
 
const {user} =useContext(AuthContext)

 
  
 



  return (
    <div className={Styles.main}>
     
               
               <div className={Styles.left}>

                   <div className={Styles.storys}>


                        <div className={Styles.singleStory}>
                        <div className={Styles.img}>
                            <img src={'https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/3_45.jpg?itok=kD1WX8LJ'} alt="" />
                                    
                        </div>
                        <p className={Styles.text}>Raza 520</p>
                        </div>

                        <div className={Styles.singleStory}>
                        <div className={Styles.img}>
                            <img src={'https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/3_45.jpg?itok=kD1WX8LJ'} alt="" />
                                    
                        </div>
                        <p className={Styles.text}>Raza 520</p>
                        </div>

                        <div className={Styles.singleStory}>
                        <div className={Styles.img}>
                            <img src={'https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/3_45.jpg?itok=kD1WX8LJ'} alt="" />
                                    
                        </div>
                        <p className={Styles.text}>Raza 520</p>
                        </div>
                        <div className={Styles.singleStory}>
                        <div className={Styles.img}>
                            <img src={'https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/3_45.jpg?itok=kD1WX8LJ'} alt="" />
                                    
                        </div>
                        <p className={Styles.text}>Raza 520</p>
                        </div>
                        <div className={Styles.singleStory}>
                        <div className={Styles.img}>
                            <img src={'https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/3_45.jpg?itok=kD1WX8LJ'} alt="" />
                                    
                        </div>
                        <p className={Styles.text}>Raza 520</p>
                        </div>
                        <div className={Styles.singleStory}>
                        <div className={Styles.img}>
                            <img src={'https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/3_45.jpg?itok=kD1WX8LJ'} alt="" />
                                    
                        </div>
                        <p className={Styles.text}>Raza 520</p>
                        </div>
                        <div className={Styles.singleStory}>
                        <div className={Styles.img}>
                            <img src={'https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/3_45.jpg?itok=kD1WX8LJ'} alt="" />
                                    
                        </div>
                        <p className={Styles.text}>Raza 520</p>
                        </div>

                   </div>


                    <div className={Styles.posts}>


                         <div className={Styles.singlepost}>
                                 
                                 <div className={Styles.header}>
                                 <img src={'https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/3_45.jpg?itok=kD1WX8LJ'} alt="" />
                                   <p>Sumit 12 . <span>2d</span></p>
                                   <BiDotsHorizontalRounded/>


                                 </div>
                                 <div className={Styles.body}>
                                    <img className={Styles.img} src={'https://media.istockphoto.com/id/1160979342/photo/view-over-old-man-of-storr-isle-of-skye-scotland.jpg?s=612x612&w=0&k=20&c=mGxYB64GSGPKB3H45tdmymzfXhr_XzrKxDgrkNoM5gI='} alt="" />
                                 </div>
                                 <div className={Styles.footer}>
                                         
                                         <div className={Styles.top}>

                                            <AiOutlineHeart/>
                                            <BiMessageRounded/>
                                            <FiSend/>
                                            <BiBookmark/>
                                         </div>
                                         <p>19 likes </p>
                                         <input type="text" placeholder='Add a comment...' name="" id="" />

                                 </div>
                                 
                              

                         </div>
                         <div className={Styles.singlepost}>
                                 
                                 <div className={Styles.header}>
                                 <img src={'https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/3_45.jpg?itok=kD1WX8LJ'} alt="" />
                                   <p>Sumit 12 . 2d</p>
                                   <BiDotsHorizontalRounded/>


                                 </div>
                                 <div className={Styles.body}>
                                    <img className={Styles.img} src={'https://media.istockphoto.com/id/1160979342/photo/view-over-old-man-of-storr-isle-of-skye-scotland.jpg?s=612x612&w=0&k=20&c=mGxYB64GSGPKB3H45tdmymzfXhr_XzrKxDgrkNoM5gI='} alt="" />
                                 </div>
                                 <div className={Styles.footer}>
                                         
                                         <div className={Styles.top}>

                                            <AiOutlineHeart/>
                                            <BiMessageRounded/>
                                            <FiSend/>
                                            <BiBookmark/>
                                         </div>
                                         <p>19 likes </p>
                                         <input type="text" placeholder='Add a comment...' name="" id="" />

                                 </div>
                                 
                              

                         </div>

                    </div>

 




               </div>
               <div className={Styles.right}>

                         
                         <div className={Styles.profile}>
                          <img src={'https://media.istockphoto.com/id/1303206558/photo/headshot-portrait-of-smiling-businessman-talk-on-video-call.jpg?s=612x612&w=0&k=20&c=hMJhVHKeTIznZgOKhtlPQEdZqb0lJ5Nekz1A9f8sPV8='} alt="" />  
                          
                          <div className={Styles.title}>
                              <p>{user.username}</p>
                              <span>Anisul hoque</span>
                          </div>

                          <p>Switch</p>                       
                        
                         </div>
             
                         <div className={Styles.suggest}>
                            <p>Suggested for you</p><span>See All</span>
                         </div>
                         <div className={Styles.friends}>
                         <div className={Styles.profile}>
                          <img src={'https://media.istockphoto.com/id/1303206558/photo/headshot-portrait-of-smiling-businessman-talk-on-video-call.jpg?s=612x612&w=0&k=20&c=hMJhVHKeTIznZgOKhtlPQEdZqb0lJ5Nekz1A9f8sPV8='} alt="" />  
                          
                          <div className={Styles.title}>
                              <p>ani520</p>
                              <span>Suggested for you </span>
                          </div>

                          <p>Follow</p>                       
                        
                         </div>
                         <div className={Styles.profile}>
                          <img src={'https://media.istockphoto.com/id/1303206558/photo/headshot-portrait-of-smiling-businessman-talk-on-video-call.jpg?s=612x612&w=0&k=20&c=hMJhVHKeTIznZgOKhtlPQEdZqb0lJ5Nekz1A9f8sPV8='} alt="" />  
                          
                          <div className={Styles.title}>
                              <p>ani520</p>
                              <span>Suggested for you </span>
                          </div>

                          <p>Follow</p>                       
                        
                         </div>
                         </div>



               </div>




    </div>
  )
}
