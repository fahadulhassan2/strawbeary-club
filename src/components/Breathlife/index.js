import React from 'react';
import {Link} from 'react-router-dom';
import landing1 from "../../pages/graphics/25.png";
import landing2 from "../../pages//graphics/20.png";
import dlanding1 from "../../pages/graphics/1.png";
import dlanding2 from "../../pages//graphics/5.png";
import '../../pages/App.css';
import { FaqContainer } from './BreathlifeElement';
const Breathlife = ({Dark}) => {
    return (
      <FaqContainer Dark={Dark}>
        <div className="container-fluid my-5 row justify-content-evenly">
        <div class="row">
       
          <p style={{color: Dark? "black": "white"}} class="col-lg-8 col-sm-6 fs-1 ">
            <span  class="text1"> MEET OUR <span class="fw-lighter"> STRAWBEARIES </span> <br />
           IN OUR CAVE </span>
          </p>
          <div class=" offset-md-2 d-sm-block col-lg-2 col-sm-12 my-4 text-lg-end text-sm-center">
            <button
              class="btn btn-primary text-uppercase fw-bold py-2"
              type="button"
            >
              JOIN CLUB
            </button>
          </div>
          <div className="col-xl-6 col-lg-5 col-md-10 mx-sm-auto col-sm-12">
            <img
              className="img-fluid border border-1"
              src={Dark? landing1 : landing1}
              alt="not"
            />
            <p   style={{color: Dark? "black": "white"}}  class="fs-4 mt-3">
              <span class="light">01 </span><span class="text">Main Home</span>
            </p>
          </div>
          <div className="col-xl-6 col-lg-5 col-md-10 mx-sm-auto col-sm-12">
            <img
              className="img-fluid border border-1"
              src={Dark? landing2 : landing2 }
              alt="not"
            />
            <p  style={{color: Dark? "black": "white"}}  class="fs-4 mt-3">
              <span class="light">01 </span><span class="text">Landing portfolio</span>
            </p>
          </div>
          <div className="col-xl-6 col-lg-5 col-md-10 mx-sm-auto col-sm-12">
            <img
              className="img-fluid border border-1"
              src={Dark? dlanding1 : dlanding1 }
              alt="not"
            />
            <p  style={{color: Dark? "black": "white"}}  class="fs-4 mt-3">
              <span class="light">01 </span><span class="text">Landing portfolio</span>
            </p>
          </div>
          <div className="col-xl-6 col-lg-5 col-md-10 mx-sm-auto col-sm-12">
            <img
              className="img-fluid border border-1"
              src={Dark? dlanding2 : dlanding2}
              alt="not"
            />
            <p  style={{color: Dark? "black": "white"}}  class="fs-4 mt-3">
              <span class="light">01 </span><span class="text">Landing portfolio</span>
            </p>
         
          </div>
          
        </div>
        <div className="row mx-auto" style={{textAlign:"center",padding:'30px'}}>
        <Link to="/">
        {Dark? 
         <img style={{height:"40%", width:"35%",color:"black"}} src="https://storage.googleapis.com/opensea-static/Logomark/OpenSea-Full-Logo%20(dark).svg"/>
         
        :
        <img style={{height:"40%", width:"35%",color:"black"}} src="https://storage.googleapis.com/opensea-static/Logomark/OpenSea-Full-Logo%20(light).svg"/>
        }
                   
                     
        </Link>
        </div>
  
      </div>

      </FaqContainer>
    )
}

export default Breathlife
