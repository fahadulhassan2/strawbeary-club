import React,{useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import TraitsPg from '../components/TraitsPg'
import Traits from '../components/Traits'
import Footer from '../components/Footer'
import Admin from '../components/Admin/index';
//here bad stuff


const AdminPage = () => {
    const [isOpen,setIsOpen] = useState(false);
  
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    

    
    return (
        <>  
           
           <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar  toggle={toggle} hide={true}/>
            <Admin></Admin>
           {/* <Traits/>
            <TraitsPg/> */}
            <Footer/>
           
        </>
    )
}

export default AdminPage
