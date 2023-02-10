import React,{useState} from 'react'
import portfolio from '../../pages/graphics/portfolio-black-img-2.jpg'
import { FaqContainer } from './PortfolioElement'

import dportfolio from '../../pages/graphics/portimgd.jpg'
import land2 from '../../pages/graphics/eldon-white-land-2.jpg'
import dland2 from '../../pages/graphics/dstore.jpg'

const Portfolio = ({Dark}) => {
  const [imgtoshow, setimgtoshow] = useState(Dark? portfolio: dportfolio);
  const switchimage = (e) =>{
    e.preventDefault();
    setimgtoshow(Dark? land2: dland2);
  }
    return (
      <FaqContainer Dark={Dark}>
        <div>
               <div class="py-5">
        <div class="row justify-content-evenly py-5">
          <div class="col-lg-5 col-md-10 mx-sm-auto col-sm-12">
            <div class="py-5">
              <h1   style={{color: Dark? "black": "white"}}  class="fw-bolder heading">DIVERSE & TRULY UNIQUE PORTFOLIOS</h1>
              <p  style={{color: Dark? "black": "white"}} >
                Not only do all templates come in both light & dark variants,
                Eldon also packs a versatile set of portfolio layouts.
              </p>
            </div>
            <div class="row justify-content-evenly g-3">
              <div class="col-4">
                <svg  onClick={switchimage}  style={{color:Dark? "black":"white"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 112"><polygon points="185.5 0.5 0.5 0.5 0.5 111.5 185.5 111.5 185.5 0.5 185.5 0.5" fill="none" stroke="currentColor" stroke-miterlimit="10"></polygon><rect x="42.8" y="14.8" width="68.5" height="28.6" fill="none" stroke="currentColor" stroke-miterlimit="10"></rect><rect x="75.8" y="48.1" width="68.5" height="28.6" fill="none" stroke="currentColor" stroke-miterlimit="10"></rect><polygon points="144.3 14.8 115.7 14.8 115.7 43.4 144.3 43.4 144.3 14.8 144.3 14.8" fill="none" stroke="currentColor" stroke-miterlimit="10"></polygon><path d="M94.94,95.15H43.3" fill="none" stroke="currentColor" stroke-miterlimit="10"></path><path d="M94.94,100H43.3" fill="none" stroke="currentColor" stroke-miterlimit="10"></path><rect x="42.4" y="48.1" width="28.6" height="28.6" fill="none" stroke="currentColor" stroke-miterlimit="10"></rect><rect x="42.8" y="84.3" width="36.8" height="4.6" fill="none" stroke="currentColor" stroke-miterlimit="10"></rect></svg>
              </div>
              <div  class="col-4">
                <svg   onClick={switchimage} style={{color:Dark? "black":"white"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 112">
                  <rect
                    x="0.5"
                    y="0.5"
                    width="185"
                    height="111"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                  ></rect>
                  <polygon
                    points="103.1 14.3 24.7 14.3 24.7 62 103.1 62 103.1 14.3"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                  ></polygon>
                  <polyline
                    points="102.6 111.5 102.6 67.8 25.4 67.8 25.4 111.5"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                  ></polyline>
                  <rect
                    x="110.9"
                    y="14.3"
                    width="36.8"
                    height="4.6"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                  ></rect>
                  <path
                    d="M111.4,25.4"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M163.2,25.5H111.6"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M163.2,30.4H111.6"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                  ></path>
                </svg>
              </div>
              <div class="col-4">
                <svg  onClick={switchimage}  style={{color:Dark? "black":"white"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 112">
                  <rect
                    x="0.5"
                    y="0.5"
                    width="185"
                    height="111"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                  ></rect>
                  <polygon
                    points="91.3 13.7 44.3 13.7 44.3 42.3 91.3 42.3 91.3 13.7"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                  ></polygon>
                  <polygon
                    points="142.3 13.7 95.3 13.7 95.3 42.3 142.3 42.3 142.3 13.7"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                  ></polygon>
                  <rect
                    x="95.3"
                    y="47"
                    width="47"
                    height="28.6"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                  ></rect>
                  <rect
                    x="44.3"
                    y="47"
                    width="47"
                    height="28.6"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                  ></rect>
                  <rect
                    x="43.7"
                    y="83.2"
                    width="36.8"
                    height="4.6"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                  ></rect>
                  <path
                    d="M95.5,94.1H43.9"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M95.5,99H43.9"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                  ></path>
                </svg>
              </div>
              <div class="col-4">
                <svg  onClick={switchimage}  style={{color:Dark? "black":"white"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 112">
                    <rect
                      x="0.5"
                      y="0.5"
                      width="185"
                      height="111"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                    ></rect>
                    <polygon
                      points="91.3 13.7 44.3 13.7 44.3 42.3 91.3 42.3 91.3 13.7"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                    ></polygon>
                    <polygon
                      points="142.3 13.7 95.3 13.7 95.3 42.3 142.3 42.3 142.3 13.7"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                    ></polygon>
                    <rect
                      x="95.3"
                      y="47"
                      width="47"
                      height="28.6"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                    ></rect>
                    <rect
                      x="44.3"
                      y="47"
                      width="47"
                      height="28.6"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                    ></rect>
                    <rect
                      x="43.7"
                      y="83.2"
                      width="36.8"
                      height="4.6"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                    ></rect>
                    <path
                      d="M95.5,94.1H43.9"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                    ></path>
                    <path
                      d="M95.5,99H43.9"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                    ></path>
                  </svg>
              </div>
              <div class="col-4">
                <svg  onClick={switchimage}  style={{color:Dark? "black":"white"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184 110"><polyline points="183.5 0.5 183.5 109.5 0.5 109.5 0.5 0.5 183.5 0.5" fill="none" stroke="currentColor" stroke-miterlimit="10"></polyline><rect x="107.1" y="31.7" width="36.8" height="4.6" fill="none" stroke="currentColor" stroke-miterlimit="10"></rect><rect x="22.6" y="31.7" width="78.4" height="47.7" fill="none" stroke="currentColor" stroke-miterlimit="10"></rect><path d="M158.1,42.24H106.5" fill="none" stroke="currentColor" stroke-miterlimit="10"></path><path d="M158.1,47.14H106.5" fill="none" stroke="currentColor" stroke-miterlimit="10"></path></svg>
              </div>
              <div class="col-4">
                <svg  onClick={switchimage}  style={{color:Dark? "black":"white"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 112"><polygon points="185.5 0.5 0.5 0.5 0.5 111.5 185.5 111.5 185.5 0.5 185.5 0.5" fill="none" stroke="currentColor" stroke-miterlimit="10"></polygon><polygon points="68.7 77.5 31.9 77.5 31.9 82.1 68.7 82.1 68.7 77.5 68.7 77.5" fill="none" stroke="currentColor" stroke-miterlimit="10"></polygon><rect x="31.9" y="19.3" width="122.1" height="52.2" fill="none" stroke="currentColor" stroke-miterlimit="10"></rect><path d="M83.85,88.05H32.25" fill="none" stroke="currentColor" stroke-miterlimit="10"></path><path d="M83.85,93H32.25" fill="none" stroke="currentColor" stroke-miterlimit="10"></path></svg>  </div>
              <div class="col-4">
                <svg  onClick={switchimage}  style={{color:Dark? "black":"white"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 112">
                  <polygon
                    points="185.5 0.5 0.5 0.5 0.5 111.5 185.5 111.5 185.5 0.5 185.5 0.5"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                  ></polygon>
                  <rect
                    x="120.5"
                    y="63.7"
                    width="14.6"
                    height="4.6"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                  ></rect>
                  <rect
                    x="33.9"
                    y="30.1"
                    width="74.6"
                    height="52.2"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                  ></rect>
                  <rect
                    x="120.5"
                    y="30.1"
                    width="26.2"
                    height="29.7"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                  ></rect>
                  <path
                    d="M142.18,72.5H120.55"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                  ></path>
                </svg>
              </div>
              <div class="col-4">
                <svg  onClick={switchimage}  style={{color:Dark? "black":"white"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 112"><rect x="10.6" y="24.1" width="37.3" height="52.2" fill="none" stroke="currentColor" stroke-miterlimit="10"></rect><rect x="52.5" y="24.1" width="37.3" height="52.2" fill="none" stroke="currentColor" stroke-miterlimit="10"></rect><rect x="95" y="24.1" width="37.3" height="52.2" fill="none" stroke="currentColor" stroke-miterlimit="10"></rect><rect x="136.9" y="24.1" width="37.3" height="52.2" fill="none" stroke="currentColor" stroke-miterlimit="10"></rect><path d="M186,1H1V112H186V1Z" fill="none" stroke="currentColor" stroke-miterlimit="10"></path><rect x="10.6" y="81.65" width="21.4" height="4.6" fill="none" stroke="currentColor" stroke-miterlimit="10"></rect><rect x="52.5" y="81.65" width="21.4" height="4.6" fill="none" stroke="currentColor" stroke-miterlimit="10"></rect><rect x="95" y="81.65" width="21.4" height="4.6" fill="none" stroke="currentColor" stroke-miterlimit="10"></rect><rect x="136.9" y="81.65" width="21.4" height="4.6" fill="none" stroke="currentColor" stroke-miterlimit="10"></rect><path d="M18.94,90.81H11.09" fill="none" stroke="currentColor" stroke-miterlimit="10"></path><path d="M60.64,90.81H52.8" fill="none" stroke="currentColor" stroke-miterlimit="10"></path><path d="M103.34,90.81H95.5" fill="none" stroke="currentColor" stroke-miterlimit="10"></path><path d="M145,90.81H137.2" fill="none" stroke="currentColor" stroke-miterlimit="10"></path></svg>
              </div>
              <div class="col-4">
                <svg  onClick={switchimage}  style={{color:Dark? "black":"white"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 112"><rect x="0.5" y="0.5" width="185" height="111" fill="none" stroke="currentColor" stroke-miterlimit="10"></rect><rect x="95" y="63.7" width="21.4" height="4.6" fill="none" stroke="currentColor" stroke-miterlimit="10"></rect><rect x="25.4" y="63.9" width="21.4" height="4.6" fill="none" stroke="currentColor" stroke-miterlimit="10"></rect><rect x="25.4" y="22.4" width="65.3" height="37.2" fill="none" stroke="currentColor" stroke-miterlimit="10"></rect><polygon points="160.6 22.4 95.2 22.4 95.2 59.6 160.5 59.6 160.5 22.4 160.6 22.4" fill="none" stroke="currentColor" stroke-miterlimit="10"></polygon><polyline points="95.2 110.6 95.2 82.2 159.6 82.2 159.6 110.6" fill="none" stroke="currentColor" stroke-miterlimit="10"></polyline><polyline points="25.4 110.6 25.4 82.2 90 82.2 90 110.6" fill="none" stroke="currentColor" stroke-miterlimit="10"></polyline><path d="M102.94,72.79H95.1" fill="none" stroke="currentColor" stroke-miterlimit="10"></path><path d="M32.94,72.79H25.1" fill="none" stroke="currentColor" stroke-miterlimit="10"></path></svg>
              </div>
            </div>
          </div>
          <div class="col-xl-5 col-md-12 mx-sm-auto col-sm-10">
            <img
              class="img-fluid"
              src={imgtoshow}
              alt="not"
            />
          </div>
        </div>
      </div>
        </div>
         </FaqContainer>
    )
}

export default Portfolio
