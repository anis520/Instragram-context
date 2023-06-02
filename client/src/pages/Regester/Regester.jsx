import { Link, useNavigate } from "react-router-dom";
import logoimage from "../../assets/Images/Instagram_logo.svg.png";
import styles from "../Login/Login.module.scss";
import styles2 from "./Regester.module.scss";
import { AiFillFacebook } from "react-icons/ai";
 import playstore from '../../assets/Images/play.png'
import microsoft from '../../assets/Images/microsoft.png'
import { useState } from "react";
 import Toastify from "../../components/Toastify/Toastify";
import { ToastContainer } from "react-toastify";

import axios from 'axios'


const Regester = () => {
const navtigte = useNavigate()

const [input ,setinput]=useState({
  email:'',
  fullname:'',
  username:'',
  password:''

})


const handleinput=(e)=>{

    setinput((prevstate)=>({
      ...prevstate,[e.target.name]:e.target.value
    }))


}
const handlesubmit=async(e)=>{

  e.preventDefault()



try {
  
   if(!input.email|| !input.fullname || !input.username ||!input.password){
    Toastify('All feilds are require','warning')
  }else{
     Toastify('Regester user done','success')
     axios.post('http://localhost:6060/api/v1/user/',input).then(res=>{
      console.log(res.data)
       navtigte('/login')
    }).catch((error)=>{console.log(error);})
    
   }
   

} catch (error) {
  console.log(error);
}




}



  return (
    <div className={`${styles.container} ${styles2.container}`}>
      <ToastContainer  pauseOnHover={true} position="bottom-left"/>
     <div className={  `${styles.login_wraper} ${styles2.regester_wraper}`}>
      <Link className={styles.logo} to={"/"}>
        <img src={logoimage} />
      </Link>
      <span className={styles2.fb_text} to={"/"}>
      Sign up to see photos and videos<br/> from your friends.
      </span>
       <a  className={styles2.login_fb } href="">
        <AiFillFacebook className={styles2.icon} /> Log in with Facebook
      </a> 
      <div className={styles2.divider}>or</div>
      <form  onSubmit={handlesubmit} className={styles.form}>
        <input onChange={handleinput} value={input.email}  type="text" name="email" placeholder="Mobile number or email address" />
        <input onChange={handleinput} value={input.fullname} type="text" name="fullname" placeholder="Full Name" />
        <input onChange={handleinput} value={input.username} type="text" name="username" placeholder="username" />
        <input onChange={handleinput} value={input.password} type="password" name="password" placeholder="Password" />
        <button  >Sign Up</button>
      </form>
     
       <p className={styles2.text}>
        People who use our service may have uploaded your contact information to Instagram.<span>Learn more</span> 
        </p>
       <p className={styles2.text}>
       By signing up, you agree to our<span> Terms, Privacy Policy</span> and <span> Cookies Policy.</span> 
        </p>
      
    </div>
    <div className={styles.sign_up}>
            <span>Have an account ? <Link to="/login">Sign in</Link></span>
    </div>
    <div className={styles.app}>
         <span>Get the app</span>
         <div className={styles.img}>
                 <img src={playstore} alt="" />
                 <img src={microsoft} alt="" />
         </div>
    </div>
    <div className={styles.footer}>
        <p className={styles.text1}>
          Meta About Blog Jobs Help API Privacy Terms Top accounts Locations
          Instagram Lite Contact uploading and non-users Meta Verified
        </p>
        <p className={styles.text2}>
          
© 2023 Instagram from Meta
        </p>
      </div>
  </div>
  )
}

export default Regester