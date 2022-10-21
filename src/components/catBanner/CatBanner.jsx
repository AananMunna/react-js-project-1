import React from 'react'

import Slide from 'react-reveal/Slide';

import './catBanner.css'

import catBannerCatImg from '../../assets/cat-1_900x660.webp'
import catBannerIcon from '../../assets/icon-2.png'

const CatBanner = () => {
  return (
    <div className="container-fluid catBanner mt-5 pt-5 mb-5">
        <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12 ">
                <Slide left>
                <img src={catBannerCatImg} alt="" className='img-fluid catBannerImgCat' />
                </Slide>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 ">
            <Slide right>
                <img src={catBannerIcon} alt="" className='img-fluid mt-5 pt-5 mb-5' />
                <h1 className='catBannerHeading mb-5'>Taste it, love it or we’ll <br /> replace it… Guaranteed!</h1>
                <p>At Petio, we believe your dog and cat will love their food so much that if they don’t … we’ll help you find a replacement. That’s our taste guarantee.</p>
                <button className=' btn catBannerBtn mt-5 mb-4'>Find out more</button>
                </Slide>
            </div>
        </div>
    </div>
  )
}

export default CatBanner