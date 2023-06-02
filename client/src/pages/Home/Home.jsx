 import { Navbar } from '../../components/Navbar/Navbar'
import {Outlet} from 'react-router-dom'
import Styles from './Home.module.scss'
import { ToastContainer } from 'react-toastify'
const Home = () => {
  return (
    <div className={Styles.main}>

<ToastContainer/>

            <Navbar/>
            

           <Outlet/>

    </div>
  )
}

export default Home