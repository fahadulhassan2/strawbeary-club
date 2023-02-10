import React,{useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import Footer from '../components/Footer'

import { Splide, SplideSlide } from '@splidejs/react-splide';

import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


import Fade from 'react-reveal/Fade';
import Jello from 'react-reveal/Jello';
import Pulse from 'react-reveal/Pulse';
import RubberBand from 'react-reveal/RubberBand';
import Jump from 'react-reveal/Jump';




import "./App.css";

//here bad stuff
import Landing from '../components/LandingPage'
import Breathlife from '../components/Breathlife';
import Slider from '../components/Slider'
import Portfolio from '../components/Portfolio';
import Store from '../components/Store'
import Last from '../components/Last'
const Home = () => {
    const [Dark, setDark] = useState("false");
    const [isOpen,setIsOpen] = useState(false);
    let primaryOptions = {
        type      : 'loop',
  
    	autoplay  : true,
        perPage   : 4,
        perMove   : 1,
        gap       : '2rem',
        pagination: true,
    };
  
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const toggleDark = () =>{
        setDark(!Dark);
        console.log(Dark);
    }
    const Backg = styled.div`
  
    background: ${({Dark}) => (Dark ? 'white' : 'black')};
  
`
    

    
    return (
        <>  
       
         <Sidebar  Dark={Dark} isOpen={isOpen} toggle={toggle} />
            <Navbar Dark={Dark} toggleDark={toggleDark} toggle={toggle}/>
      <Backg Dark={Dark}
      className ="container-fluid">
      
      {/* landing page */}
      <Landing Dark={Dark} />

      {/*  BREATHE LIFE  */}
      <Breathlife  Dark={Dark}/>
      {/* slider */}
     <Slider  Dark={Dark}/>
  {/* DIVERSE & TRULY UNIQUE PORTFOLIOS  */}
      <Portfolio  Dark={Dark}/>
      {/* YOUR ONLINE ART STORE */}
      <Store  Dark={Dark}/>
{/* last */}
      <Last  Dark={Dark}/>
    </Backg>
     
            <Footer/>
    
         
        </>
    )
}

export default Home
