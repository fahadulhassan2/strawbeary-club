import React,{useState} from 'react'
import { IoIosArrowDown } from "react-icons/io";

import logo from '../../images/logo.png'
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import styled from "styled-components";
import {Button} from "../ButtonElement"
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownDivider
} from 'styled-dropdown-component';
import { 
    Container, 
   
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text,
    Text2

} from './TraitsPgElements'
import Fade from 'react-reveal/Fade';
import './trait.css';
import cap from './graphics/baseball-cap.png';
import img2 from './graphics/M.jpg';



const TraitsPg = () => {
    const [hidden, setHidden] = useState(true);
    let primaryOptions = {
        type      : 'loop',
        width     : 500,
        height    : 300,
    	autoplay     : true,
        perPage   : 1,
        perMove   : 1,
        gap       : '1rem',
        pagination: false,
    };
    return (
        <Container id="traits">
            {/* here */}
            {/* <Icon to="/">    <img style={{height:"150px", width:"200px"}} src={logo}/> </Icon> */}

        <div className="">
            <div className="row justify-content-center ">
                <div className="col-lg-3 col-md-4 col-sm-1 my-5 pt-5" >
                
                {/* <div className="dropdown rounded-3 mt-5"> */}
                <Fade left>
                <Dropdown>
                <Button primary={true} dark={true} style={{textDecoration:"none"}} dropdownToggle onClick={() => setHidden(!hidden)}>
                    Head &nbsp; <IoIosArrowDown/>
                </Button>
                <DropdownMenu style={{width:"100px"}} hidden={hidden} toggle={() => setHidden(!hidden)}>
                    <DropdownItem>Head</DropdownItem>
                    <DropdownDivider/>                    
                    <DropdownItem>Clothing</DropdownItem>
                    <DropdownDivider/>  
                    <DropdownItem>Mouth</DropdownItem>
                    <DropdownDivider/>  
                    <DropdownItem>Fur/Skin</DropdownItem>
                    <DropdownDivider/>  
                    <DropdownItem>Teeth</DropdownItem>
                    <DropdownDivider/>
                    <DropdownItem>Eyewear</DropdownItem>
                    <DropdownDivider/>
                    <DropdownItem>Background</DropdownItem>
                    <DropdownDivider/>      
                </DropdownMenu>
                </Dropdown>
{/*             
                </div> */}
                </Fade>


                    <div className="mt-5 pt-4 ps-2">
                    <Fade right>
                        <p>
                       
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label text-light" for="flexCheckDefault">
                                All
                            </label>
                        </div>
                        </p>
                        </Fade>
                        <Fade left>
                        <p>
                      
                       
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label text-light" for="flexCheckDefault">
                                Common
                            </label>
                        </div>
                        </p>
                        </Fade>
                        <Fade right>
                        <p>
                      
                       
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label text-light" for="flexCheckDefault">
                                Uncommon
                            </label>
                        </div>
                        </p>
                        </Fade>
                        <Fade left>
                        <p>
                      
                      
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label text-light" for="flexCheckDefault">
                                Rare
                            </label>
                        </div>
                        </p>
                        </Fade>
                        <Fade right>
                        <p>
                      
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label text-light" for="flexCheckDefault">
                                Super Rare
                            </label>
                        </div>
                        </p>
                        </Fade>
                        <Fade left>
                        <p>
                       
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label text-light" for="flexCheckDefault">
                                Mythic
                            </label>
                        </div>
                        </p>
                        </Fade>
                    </div>

                </div>
                <div className=" col-lg-4 col-md-6 col-sm-6 justify-content-center">
                    <div className="row  justify-content-center  mb-3">
                        <div className="col-lg-10 col-md-8 col-sm-8 my-5" style={{borderRadius: "10px 10px"}} >
                            {/* splide */}
                            <Fade right>
                            <Splide className=""  options={ cap } style={{}}>
                                <SplideSlide >
                                    <img className="img-fluid " src={img2}    alt="Image 1"/>
                                </SplideSlide>
                                <SplideSlide>
                                <img className="img-fluid " src={img2}  alt="Image 1"/>
                                </SplideSlide>
                            </Splide>
                            {/* <img className="img-fluid " src={cap} alt=""/> */}
                            </Fade>
                        
                        </div>
                        <Fade left>
                        <div className="col-lg-8 col-md-8 col-sm-9 py-2"
                            style={{borderRadius: "10px 10px" , backgroundColor: "#DA0000"}}>
                            <div className="py-1 d-flex py-2  px-3 " style={{border: "5px solid #000",borderRadius: "10px 10px" }}>
                                <div>
                                    <p className="p-0 m-0 fw-bolder text-uppercase text-light">Sun Hut</p>
                                    <p className="p-0 m-0 fs-8 text-light">4.3 have this trait</p>
                                </div>
                                <div className="ms-4">
                                    <p className="p-0 m-0 fw-bolder fs-7 text-uppercase text-light">Head</p>
                                    <p className="p-0 m-0 text-uppercase fs-8 text-light">Common</p>
                                </div>
                            </div>
                        </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
        {/* here */}
         </Container>
    )
}

export default TraitsPg
