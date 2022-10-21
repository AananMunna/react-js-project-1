import React from 'react'

import Fade from 'react-reveal/Fade';

import "./shortCard.css"

import shortCardImg1 from "../../assets/cate-5_330x303.avif"
import shortCardImg2 from "../../assets/cate-6_330x303.avif"
import shortCardImg3 from "../../assets/cate-7_330x303.avif"
import shortCardImg4 from "../../assets/cate-8_330x303.avif"
import shortCardImg5 from "../../assets/cate-9_330x303.jpg" 
import shortCardImg6 from "../../assets/cate-2_330x307.jpg" 

const ShortCard = () => {
  return (
    <div className='container-fluid'>
      <Fade>
          <div className="shortCardHeading">
            <span>Top</span> categories
          </div>
      </Fade>
        <div className="row">
          <Fade left>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div class="card border-0 rounded-0 mt-5">
                <img src={shortCardImg1} class="card-img-top rounded-4" alt="..."/>
                  <div class=" ">
                    <div className='shortCardLink '>Dog Food</div>
                  </div>
              </div>
            </div> 
          </Fade>
          <Fade bottom>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div class="card border-0 rounded-0 mt-5" >
                <img src={shortCardImg2} class="card-img-top rounded-4" alt="..."/>
                  <div class=" ">
                    <div className='shortCardLink '>Dog Toys</div>
                  </div>
              </div>
            </div> 
          </Fade>
          <Fade top>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div class="card border-0 rounded-0 mt-5" >
                <img src={shortCardImg3} class="card-img-top rounded-4" alt="..."/>
                  <div class=" ">
                    <div className='shortCardLink '>Cat Toys</div>
                  </div>
              </div>
            </div> 
          </Fade>
          <Fade top>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div class="card border-0 rounded-0 mt-5" >
                <img src={shortCardImg4} class="card-img-top rounded-4" alt="..."/>
                  <div class=" ">
                    <div className='shortCardLink '>Cat Food</div>
                  </div>
              </div>
            </div> 
          </Fade>
          <Fade bottom>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div class="card border-0 rounded-0 mt-5" >
                <img src={shortCardImg5} class="card-img-top rounded-4" alt="..."/>
                  <div class=" ">
                    <div className='shortCardLink '>Dog Supplements</div>
                  </div>
              </div>
            </div> 
          </Fade>
          <Fade right>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div class="card border-0 rounded-0 mt-5" >
                <img src={shortCardImg6} class="card-img-top rounded-4" alt="..."/>
                  <div class=" ">
                    <div className='shortCardLink '>Shop Cat</div>
                  </div>
              </div>
            </div>
          </Fade>
        </div>
    </div>
  )
}

export default ShortCard