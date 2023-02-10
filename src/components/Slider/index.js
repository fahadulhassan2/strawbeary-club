import React from 'react';
import landing8 from '../../pages/graphics/inner-land-img-8.webp';
import landing9 from '../../pages/graphics/inner-land-img-9.webp';
import landing10 from '../../pages/graphics/inner-land-img-10.webp';
import dlanding10 from '../../pages/graphics/slidimgd.jpg';
import dlanding8 from '../../pages/graphics/inner-land-img-7.jpg';
import dlanding9 from '../../pages/graphics/inner-land-img-6.jpg';
import one from '../../pages/graphics/1.png';
import two from '../../pages/graphics/2.png';
import three from '../../pages/graphics/5.png';
import { FaqContainer } from './SlideElement';
import {Carousel} from 'react-bootstrap';
import '../../pages/App.css';
const Slider = ({Dark}) => {
    return (
      <FaqContainer Dark={Dark}>
      <h1  style={{color: Dark? "black": "white"}}  class="text-center text1 display-3 mb-3 heading ">MULTIUSE INNER PAGES</h1>
  <div class="carousel-item1 active mx-auto text-center">
    
  <Carousel variant={Dark? "dark": "light"}  className="mx-auto mt-5" style={{width:"70%"}}>


  <Carousel.Item>
    <img
      className="d-block w-50 mx-auto"
      src={Dark? one : one}
      
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50 mx-auto"
      src={Dark? three : three}
      alt="Second slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50 mx-auto"
      src={Dark? two : two}
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
  {/* <div className=" w-50 mx-auto  mt-5 border border-2" style={{backgroundColor: "white" , height: "60vh"}}>

  </div> */}
          </div>

      </FaqContainer>
    )
}

export default Slider