import axios from 'axios'
import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
const LogOut = () => {
    const navigate = useNavigate()
    const logOut = async() =>{
        const res = await axios.get("http://localhost:8000/user/logout", { withCredentials: true });
        console.log(res.status)
        if (res.status === 200){
            navigate('/')
        }
    }
   useEffect(() => {
       logOut()
   }, [])
   return(
       <>
       <h1>LogOUt..............</h1>
       </>
   );
}

export default LogOut
