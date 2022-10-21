import React from 'react'

import RubberBand from 'react-reveal/RubberBand';

import './lastBanner.css'

const LastBanner = () => {
  return (
    <div className="container-fluid lastBanner mt-5 pt-5  pb-5 text-center text-white">
      <RubberBand>
        <h1 className='lastBannerHeading mt-4'>New Puppy or Kitten?</h1>
        <p className='lastBannerP mt-3'>Discover everything you need to make <br /> them feel at home</p>
        <div className=" lastBannerBtnDiv mb-4 mt-3">
            <button className='btn lastBannerBtn '>Shop Kitten</button>
            <button className='btn lastBannerBtn '>Shop Puppy</button>
        </div>
    </RubberBand>
    </div>
  )
}

export default LastBanner