import React from 'react'
import '../../pages/App.css';
import coming from '../../pages/graphics/1.png'

const Last = ({Dark}) => {
    return (
        <div>
            <div className="pt-5">
  
  <div class="py-5">
    <div class="text-center">
      <img
        class="img-fluid " id="carton-img"
        src={coming}
        alt="not"
        style={{width: '70vh'}}
      />
    </div>
    <h1  style={{color: Dark? "black": "white"}} class="text-center mt-2  display-2 heading">
      <span class="text1">LIGHT</span> OR 
       <span class="text1"
        > DARK IT’S <br />
        IDEAL FOR YOUR ART
      </span>
    </h1>
    <div class="d-flex justify-content-center my-4">
      <button
        class="btn btn-primary col-lg-2 col-md-3 col-sm-8 text-uppercase fw-bold py-3"
        type="button"
      >
        Get Eldon
      </button>
    </div>
  </div>
</div>
        </div>
    )
}

export default Last
