import { Link } from "react-router-dom";
import logoimage from "../../assets/Images/Instagram_logo.svg.png";
import styles from "./TempUser.module.scss";
import { AiFillFacebook } from "react-icons/ai";
 import playstore from "../../assets/Images/play.png";
import microsoft from "../../assets/Images/microsoft.png";
import coverimg from "../../assets/Images/Temp/home-phones.png";
import img1 from "../../assets/Images/Temp/screenshot1.png";
import img2 from "../../assets/Images/Temp/screenshot2.png";
import img3 from "../../assets/Images/Temp/screenshot3.png";
import img4 from "../../assets/Images/Temp/screenshot4.png";
 


const TempUser = () => {
  return (
    <div className={styles.container}>
     

    <div className={styles.coverimg}>
        <img className={styles.imgs} src={coverimg} alt="" />
        <div className={styles.images}>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img  className={styles.imgss}  src={img1} className="d-block  w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img  className={styles.imgss}  src={img2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img  className={styles.imgss}  src={img3} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img  className={styles.imgss}  src={img4} className="d-block w-100" alt="..." />
    </div>
  </div>
</div>
        </div>
    </div>

    <div className={styles.main_wraper}>
 
      <div className={styles.login_wraper}>
        <Link className={styles.logo} to={"/"}>
          <img src={logoimage} />
        </Link>
        <form action="" className={styles.form}>
          <input
            
            type="text"
            placeholder="Phone Number or email"
          />
          <input type="password" placeholder="Password" />
          <button  >Log In</button>
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
    </div>
  )
}

export default TempUser