import { Link, json, useNavigate } from "react-router-dom";
import logoimage from "../../assets/Images/Instagram_logo.svg.png";
import styles from "./Login.module.scss";
import { AiFillFacebook } from "react-icons/ai";
import { useContext, useState } from "react";
import playstore from "../../assets/Images/play.png";
import microsoft from "../../assets/Images/microsoft.png";
import Toastify from "../../components/Toastify/Toastify";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import cookie from 'js-cookie'
import AuthContext from "../../ContextApi/context/AuthContext";
import LoadingBar from 'react-top-loading-bar'




const Login = () => {
  const [input, setinput] = useState(null);
  const [login, setlogin] = useState({username:'',password:''});
  const navigate =useNavigate()
   
  const {dispatch}=useContext(AuthContext)



  
const handleinput=(e)=>{
// 
 
  if(login.username.length>0){
  setinput(true)
 }else{setinput(false)} 

 setlogin((prevstate)=>({
  ...prevstate,[e.target.name]:e.target.value
}))
 
 
}



const handlesubmit=async(e)=>{
   e.preventDefault()  



   try {
  
    if(!login.username||!login.password){
     Toastify('All feilds are require','warning')
   }else{
      
     await axios.post('http://localhost:6060/api/v1/user/login/user',login).then(res=>{
      
     
     if(res.data.user.isverfied){
           Toastify(  `${res.data.user.username} login`,'success')
     cookie.set('token',res.data.token)
      
     
     dispatch({type:'USER_LOGIN_SUCCESS',payload:res.data.user})


      navigate('/')
    
     }else{

      Toastify(  `${res.data.user.username} please verified you account`,'error')


     }



    
    
    }).catch((error)=>{Toastify(error.message,'error')})
     
    }
    
 
 } catch (error) {
   console.log(error)
   
 }


}



  return (
    <div className={styles.container}>
      <ToastContainer/>
      <LoadingBar color='red' progress={100} />
      <div className={styles.login_wraper}>
        <Link className={styles.logo} to={"/"}>
          <img src={logoimage} />
        </Link>
        <form onSubmit={handlesubmit} action="" className={styles.form}>
          <input
            onChange={handleinput}
            type="text"
            name={'username'}
            value={login.username}
            placeholder="Phone Number or email"
          />
          <input  onChange={handleinput}  name="password" value={login.password}   type="password" placeholder="Password" />
          <button className={!input && styles.dam}>Log In</button>
        </form>
        <div className={styles.divider}>or</div>
        <a className={styles.login_fb} href="">
          <AiFillFacebook /> Log in with Facebook
        </a>
        <a className={styles.forgot_pass} href="">
          Forgot password ?
        </a>
      </div>
      <div className={styles.sign_up}>
        <span>
          Don't have an account ? <Link to="/regester">Sign up</Link>
        </span>
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
  );
};

export default Login;
