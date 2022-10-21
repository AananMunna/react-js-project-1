import React from 'react'

import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';

import "./showOffCard.css"

import showOffCard1 from "../../assets/banner-1.jpg"
import showOffCard2 from "../../assets/banner-2_540x (1).webp"
import showOffCard3 from "../../assets/banner-3_559x387.webp"

const ShowOffCard = () => {
  return (
    <div className='container-fluid mt-5 pt-4 mb-5 '>
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
            <Rotate bottom left>
                <div class="card ">
                    <img src={showOffCard1} class="card-img" alt="..."/>
                    <div class="card-img-overlay showOffCardOverText">
                        <div className='showOffCardSubHeading'>SELECTED ITEMS. ONLINE ONLY.</div>
                        <div className='showOffCardHeading'>Hot Summer <br /> Deals</div>
                        <button className='showOffCardButton'>Read More</button>
                    </div>
                </div>
                </Rotate>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
            <Zoom>
                <div class="card ">
                    <img src={showOffCard2} class="card-img" alt="..."/>
                    <div class="card-img-overlay showOffCardOverText">
                        <div className='showOffCardSubHeading'>TREATS & GROOMING</div>
                        <div className='showOffCardHeading'>Spoil your true <br /> love</div>
                        <button className='showOffCardButton'>Read More</button>
                    </div>
                </div>
                </Zoom>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 m-auto mt-3">
            <Rotate bottom right>
                <div class="card ">
                    <img src={showOffCard3} class="card-img" alt="..."/>
                    <div class="card-img-overlay showOffCardOverText">
                        <div className='showOffCardSubHeading'>OUR BRAND YOU WILL LOVE</div>
                        <div className='showOffCardHeading'>New in this <br /> year</div>
                        <button className='showOffCardButton'>Read More</button>
                    </div>
                </div>
                </Rotate>
            </div>
        </div>
    </div>
  )
}

export default ShowOffCard