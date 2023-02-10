import React,{useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import TraitsPg from '../components/TraitsPg'
import Traits from '../components/Traits'
import Footer from '../components/Footer'
import Terms from '../components/Terms'
//here bad stuff


const Term = () => {
    const [isOpen,setIsOpen] = useState(false);
  
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    

    
    return (
        <>  
           <Terms/>
            <Footer/>
           
        </>
    )
}

export default Term
