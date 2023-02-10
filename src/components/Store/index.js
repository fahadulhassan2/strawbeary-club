import React from 'react'
import land1 from '../../pages/graphics/eldon-white-land-1.jpg'
import land2 from '../../pages/graphics/eldon-white-land-2.jpg'
import dland2 from '../../pages/graphics/dstore.jpg'
import dar from '../../pages/graphics/dark.png'
import lig from '../../pages/graphics/light.png'

import styled from 'styled-components'



const Store = ({Dark}) => {
    return (
        <div>
            


    <div class="row my-5">
      
        <div class="col-xl-5 offset-lg-2 col-md-10 mx-md-auto col-sm-10 pt-5 mt-5">
            <p style={{color: Dark? "black": "white"}}  class=" fs-1 fw-bolder text-lg-end text-sm-center">
                STRAWBEARY CLUB <br/> MARKET PLACE
              </p>
              <p style={{color: Dark? "black": "white"}}  class=" text-lg-end text-sm-center">
                Eldon is a fully-fledged shop too! It’s compatible with <br/> WooCommerce & features a great set of shop pages.
              </p>
              <div class=" my-4 text-lg-end text-sm-center">
                <button
                  class="btn btn-primary text-uppercase fw-bold py-2 px-3"
                  type="button"
                >
                  COMING SOON
                </button>
              </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-10 mx-md-auto col-sm-10  border border-1">
            <img class="img-fluid border border-1" style={{position: 'relative' , top: '4rem', right: '4rem'}} src={Dark? lig: dar} alt="not"/>
        </div>
    </div>
        </div>
    )
}

export default Store
