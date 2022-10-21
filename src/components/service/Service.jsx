import React from 'react'

import Zoom from 'react-reveal/Zoom';
import Jump from 'react-reveal/Jump';
import HeadShake from 'react-reveal/HeadShake';

import "./service.css"

import serviceIcon from "../../assets/icon-1.avif"
import serviceImg1 from "../../assets/service-1_70x70.png"
import serviceImg2 from "../../assets/service-2_70x70.png"
import serviceImg3 from "../../assets/service-3_70x70.png"
import serviceImg4 from "../../assets/service-4_70x70.png"

const Service = () => {
  return (
    <div className="container-fluid text-center mt-5 pt-4">
        <Zoom>
        <div className="serviceHeader">
            <img src={serviceIcon} alt="" className='img-fluid mb-3' />
            <h1><span className='serviceHeading'>What your pet needs, </span>when they need it.</h1>
        </div>
        </Zoom>
            <Jump>
            <div className="row">
                
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                    <img src={serviceImg1} alt="" className='img-fluid' />
                    <h2 className='serviceItemHeading mt-1'>Free Same-Day Delivery</h2>
                    <p className='serviceItemP'>Order by 2pm local time to get free delivery on orders $35+ today. </p>
                </div>
              
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                    <img src={serviceImg2} alt="" className='img-fluid' />
                    <h2 className='serviceItemHeading mt-1'>30 Day Return</h2>
                    <p className='serviceItemP'>35% off your first order plus 5% off all future orders. </p>
                </div>
            
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                    <img src={serviceImg3} alt="" className='img-fluid' />
                    <h2 className='serviceItemHeading mt-1'>Security payment</h2>
                    <p className='serviceItemP'>25% off your online order of $50+. Available at most locations. </p>
                </div>
              
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                    <img src={serviceImg4} alt="" className='img-fluid' />
                    <h2 className='serviceItemHeading mt-1'>24/7 Support</h2>
                    <p className='serviceItemP'>Shop online to get orders over $35 shipped fast and free. </p>
                </div>
                
            </div>
            </Jump>

    </div>
  )
}

export default Service