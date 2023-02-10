import React from 'react';
import '../../pages/App.css';
import icon from "../../pages/graphics/icon.png";
import icond from "../../pages/graphics/whitemouse.png";
import { FaqContainer } from './LandingElement';
import wdb from '../../pages/graphics/landing-ng-63.png'
import ddb from '../../pages/graphics/wht.png'
import one from '../../pages/graphics/4.png';
import styled from "styled-components";

  
const Eldon = styled.h1`
  background: linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.1)), url(${({Dark}) => (Dark ? one : one)});
  font-size: 20em !important; 
  font-weight: bold;
  background-color: ${({Dark}) => (Dark ? 'black' : ' white')};
  background-position: center;
  background-size: cover;
  -webkit-text-fill-color:transparent;
  -webkit-background-clip:text;
  transition: all 0.2s ease-in-out 0.1s;
  
  @media (min-width: 576px) and (max-width: 768px){
    font-size: 10em !important;
  
  }

  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 10rem !important;
  }
  
  @media (max-width: 576px) {
    font-size: 3em !important;
  }

  &:hover{
    transform: translate(-6px, -5px);
  
`

const Landing = ({Dark}) => {
    return (
      <FaqContainer Dark={Dark}>
        <div class="my-5 row" style={{height:"80vh", justifyContent:"center", textAlign:"center", alignContent:"center"}}>
          <Eldon Dark={Dark} class="text-center heading pt-5 text-uppercase ">Our Collection</Eldon>
          <div class="text-center" >
          <img class="img-fluid mt-5 pt-5" src={Dark? icon: icond} alt="not" />
          </div>
        </div>
        </FaqContainer>
    )
}

export default Landing
