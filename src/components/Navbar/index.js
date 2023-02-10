import React,{useState,useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import logo from '../../images/logo.png'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Button } from '../ButtonElement';
import {
    Nav,
    NavbarContainer,
    MobileIcon,
    NavMenu, 
    NavItem, 
    NavLinks,
    NavLinks2,
    NavBtn,
    NavBtnLink
} from './NavbarElement';

const Navbar = ({toggle,hide,toggleDark,Dark}) => {

    const [scrollNav, setScrollNav] =useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80 ){
            setScrollNav(true)
        }else{
            setScrollNav(false);
        }
    }

 

    useEffect(() => {
        window.addEventListener('scroll',changeNav)
       
    }, [])
  

    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
          <Nav Dark={Dark} scrollNav={scrollNav}>
            <NavbarContainer>
            
                <NavLinks2 to="/" onClick={toggleHome}>
                <img style={{height:"150px", width:"150px"}} src={logo}/> 
                </NavLinks2>  
                <MobileIcon onClick={toggle}>
                    <FaBars style={{color: "black"}}/>
                </MobileIcon>  
                    <NavMenu>
                       
                        <NavItem hide={hide}>
                            <NavLinks 
                             Dark={Dark}
                            to="collection"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Collection</NavLinks>
                        </NavItem >
                        <NavItem hide={hide}>
                            <NavLinks 
                             Dark={Dark}
                            to="history"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >History</NavLinks>
                        </NavItem>
                       
                        <NavItem hide={hide}>
                            <NavLinks to="services"
                             smooth={true}
                             Dark={Dark}
                             duration={500}
                             spy={true}
                             exact='true'
                             offset={-80}
                            >Roadmap</NavLinks>
                        </NavItem>
                        <NavItem hide={hide}>
                            <NavLinks to="teams"
                             Dark={Dark}
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact='true'
                             offset={-80}
                            >Team</NavLinks>
                        </NavItem>
                        <NavItem hide={hide}>
                            <NavLinks to="faq"
                             Dark={Dark}
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact='true'
                             offset={-80}
                            >FAQ</NavLinks>
                        </NavItem>
                      
                        {/* <NavItem hide={hide}>
                            <NavLinks2 to="/traits"
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact='true'
                             offset={-80}
                            >Traits</NavLinks2>
                        </NavItem> */}
                            
                   

                    </NavMenu>
                    <NavBtn>
                        <Button
                        onClick={toggleDark} 
                        to="/signin" 
                        Dark={Dark}
                        >
                        {Dark? "Dark": "Light" }
                        </Button>
                        
                    </NavBtn>
                    
                    <NavBtn>
                        <NavBtnLink 
                             Dark={Dark}
                        to="/signin"
                        >
                        Mint
                        </NavBtnLink>
                        
                    </NavBtn>
                    
           
               
            </NavbarContainer>    
          </Nav> 
          </IconContext.Provider> 
        </>
    )
}

export default Navbar;