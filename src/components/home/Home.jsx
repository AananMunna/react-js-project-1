import React from 'react'
import "./home.css"
import Navbar from '../navbar/Navbar'

import Bounce from 'react-reveal/Bounce';

const Home = () => {
   return (
    <div className="container-fluid p-0 m-0" >
      <Navbar />
    <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="false">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner ">
            <div className="carousel-item active firstSlide ">
                <div className="container text-white ">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 text-center home-line-height">
                        <Bounce left> 
                            <h2 className='home-sub-heading'>HIGH QUALITY</h2>
                        </Bounce>
                        <Bounce top>
                            <h1 className='home-main-heading'>PET FOOD</h1></Bounce>
                            <Bounce bottom>                           
                            <p className='home-p'>Sale up to 40% off today</p>
                            </Bounce>
                            <Bounce right>                        
                            <button className='  home-page-btn'>SHOP NOW</button>
                            </Bounce>  
                             
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item secondSlide">
            <div className="container text-white ">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 text-center home-line-height">
                        <Bounce left> 
                            <h2 className='home-sub-heading'>HIGH QUALITY</h2>
                        </Bounce>
                        <Bounce top>
                            <h1 className='home-main-heading'>PET FOOD</h1></Bounce>
                            <Bounce bottom>                           
                            <p className='home-p'>Sale up to 40% off today</p>
                            </Bounce>
                            <Bounce right>                        
                            <button className='  home-page-btn'>SHOP NOW</button>
                            </Bounce>  
                             
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item lastSlide">
            <div className="container text-white ">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 text-center home-line-height">
                        <Bounce left> 
                            <h2 className='home-sub-heading'>HIGH QUALITY</h2>
                        </Bounce>
                        <Bounce top>
                            <h1 className='home-main-heading'>PET FOOD</h1></Bounce>
                            <Bounce bottom>                           
                            <p className='home-p'>Sale up to 40% off today</p>
                            </Bounce>
                            <Bounce right>                        
                            <button className='  home-page-btn'>SHOP NOW</button>
                            </Bounce>  
                             
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <div className="home-slider-next-icon">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </div>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
                <div className="home-slider-next-icon">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </div>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
</div>
  )
}

export default Home