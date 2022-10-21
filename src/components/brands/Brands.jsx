import React from 'react'

import LightSpeed from 'react-reveal/LightSpeed';

import './brands.css'

import brand1 from '../../assets/brand-1_150x150.jpg'
import brand2 from '../../assets/brand-2_150x150.jpg'
import brand3 from '../../assets/brand-3_150x150.jpg'
import brand4 from '../../assets/brand-4_150x150.jpg'
import brand5 from '../../assets/brand-5_150x150.jpg'

const Brands = () => {
  return (
    <div className="container brands mb-5 pb-5">
        <LightSpeed>
        <div className="shortCardHeading">
            <span>Popular</span> Brands
          </div>
            </LightSpeed>
        <div className="row">
            <LightSpeed left>
            <div className="col-lg-2 col-md-4 col-sm-6 p-0 mt-5">
                <div class="card rounded-0 ">
                     <img src={brand1} class="card-img-top" alt="..." />
                </div>
            </div>
                </LightSpeed>
                <LightSpeed left> 
            <div className="col-lg-2 col-md-4 col-sm-6 p-0 mt-5">
                <div class="card rounded-0">
                     <img src={brand2} class="card-img-top" alt="..." />
                </div>
            </div>
            </LightSpeed>
            <LightSpeed left>
            <div className="col-lg-2 col-md-4 col-sm-6 p-0 mt-5">
                <div class="card rounded-0">
                     <img src={brand3} class="card-img-top" alt="..." />
                </div>
            </div>
            </LightSpeed> 
            <LightSpeed right> 
            <div className="col-lg-2 col-md-4 col-sm-6 p-0 mt-5">
                <div class="card rounded-0">
                     <img src={brand4} class="card-img-top" alt="..." />
                </div>
            </div>
            </LightSpeed>
            <LightSpeed right>
            <div className="col-lg-2 col-md-4 col-sm-6 p-0 mt-5">
                <div class="card rounded-0">
                     <img src={brand5} class="card-img-top" alt="..." />
                </div>
            </div>
            </LightSpeed>
            <LightSpeed right> 
            <div className="col-lg-2 col-md-4 col-sm-6 p-0 mt-5">
                <div class="card rounded-0">
                     <img src={brand1} class="card-img-top" alt="..." />
                </div>
            </div>
             </LightSpeed>
        </div>
    </div>
  )
}

export default Brands