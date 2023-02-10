import React,{useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer'
import Loginpage from '../components/Loginpage'

//here bad stuff


const Login = () => {
    const [isOpen,setIsOpen] = useState(false);
  
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    

    
    return (
        <>  
           

            <Loginpage/>
            
        </>
    )
}

export default Login
