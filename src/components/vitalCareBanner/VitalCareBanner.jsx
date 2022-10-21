import React from 'react'

import LightSpeed from 'react-reveal/LightSpeed';

import './vitalCareBanner.css'

import VitalCareBannerLogo from "../../assets/logo-banner.png"
import VitalCareBannerImg from "../../assets/banner-4_720x.jpg"

const VitalCareBanner = () => {
  return (
    <div className="container-fluid mt-5 pt-4 mb-5">
        <div className="row">
        <LightSpeed left>
            <div className="col-lg-6 col-md-6 col-sm-12 vitalCareLeftSide text-center p-0">
                <div className="vitalCareTextCenter p-3">
                <img src={VitalCareBannerLogo} alt="" className='img-fluid pt-4 pb-4' />
                <h1 className='text-white vitalText'>Save big annually with our veterinarian recommended wellness plan.</h1>
                <button className='btn vitalBtn'>enroll now</button>
                </div>
            </div>
            </LightSpeed>
            <LightSpeed right>
            <div className="col-lg-6 col-md-6 col-sm-12 p-0">
                <img src={VitalCareBannerImg} alt="" className='img-fluid vitalCardImg ' />
            </div>
            </LightSpeed>
        </div>
    </div>
  )
}

export default VitalCareBanner