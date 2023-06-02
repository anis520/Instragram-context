import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const Toastify=(msg,success)=>{


  return toast[success](msg)   


}






export default Toastify