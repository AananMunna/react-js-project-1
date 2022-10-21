import React from 'react'

import Zoom from 'react-reveal/Zoom';

import './recommendedProduct.css'

import productCardImg1 from "../../assets/product-8_360x360.jpg"
import productCardImg2 from "../../assets/product-9_85b3789a-41cf-43b4-bca2-5b4dd73e5fb5_360x360.jpg"
import productCardImg3 from "../../assets/product-10_b98a5ca2-321c-412b-af32-a2a4c48679d3_360x360.webp"
import productCardImg4 from "../../assets/product-11_360x360.webp"

const RecommendedProduct = () => {
  return (
    <div className='container-fluid mb-5 pb-5'>
          <Zoom>
        <div className="shortCardHeading">
            <span>Recommended</span> For You
          </div>
          </Zoom>
            <div className="row">
          <Zoom left>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                  <a href="#">
                    <div class="card">
                      <div className='productCardSearchIcon ' id='productCardSearchIcon1'>
                        <a href="#">
                          <i class="bi bi-handbag productCardIcon"></i> 
                        </a>
                        <a href="#">
                          <i class="bi bi-search productCardIcon"></i>
                        </a>
                      </div>
                        <img src={productCardImg1} class="card-img-top productImg" alt="..." />
                    </div>
                  </a>
                        <div class="card-body text-center">
                            <div className="cardReviewIcon ">
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            </div>
                            <a href='#' class="productCardHeading">Commodo leo sed porta</a>
                            <p class="productCardPrice">$15.00 - $22.00</p>  
                            <button className='btn recommended-page-btn'>Add to Cart</button>                          
                        </div>
                </div>
                </Zoom>
                <Zoom top> 
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                  <a href="#">
                    <div class="card">
                      <div className='productCardSearchIcon ' id='productCardSearchIcon2'>
                        <a href="#">
                          <i class="bi bi-handbag productCardIcon"></i> 
                        </a>
                        <a href="#">
                          <i class="bi bi-search productCardIcon"></i>
                        </a>
                      </div>
                        <img src={productCardImg2} class="card-img-top productImg" alt="..." />
                    </div>
                  </a>
                        <div class="card-body text-center">
                            <div className="cardReviewIcon ">
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            </div>
                            <a href='#' class="productCardHeading">Etiam commodo leo sed</a>
                            <p class="productCardPrice">$115.00 </p>  
                            <button className='btn recommended-page-btn'>Add to Cart</button>                           
                        </div>
                </div>
                </Zoom>
                <Zoom bottom>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                  <a href="#">
                    <div class="card">
                      <div className='productCardSearchIcon ' id='productCardSearchIcon3'>
                        <a href="#">
                          <i class="bi bi-handbag productCardIcon"></i> 
                        </a>
                        <a href="#">
                          <i class="bi bi-search productCardIcon"></i>
                        </a>
                      </div>
                        <img src={productCardImg3} class="card-img-top productImg" alt="..." />
                    </div>
                  </a>
                        <div class="card-body text-center">
                            <div className="cardReviewIcon ">
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            </div>
                            <a href='#' class="productCardHeading"> sed porta</a>
                            <p class="productCardPrice"> $2432.00</p>    
                            <button className='btn recommended-page-btn'>Add to Cart</button>                         
                        </div>
                </div>
                </Zoom> 
                <Zoom right>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                  <a href="#">
                    <div class="card">
                      <div className='productCardSearchIcon ' id='productCardSearchIcon4'>
                        <a href="#">
                          <i class="bi bi-handbag productCardIcon"></i> 
                        </a>
                        <a href="#">
                          <i class="bi bi-search productCardIcon"></i>
                        </a>
                      </div>
                        <img src={productCardImg4} class="card-img-top productImg" alt="..." />
                    </div>
                  </a>
                        <div class="card-body text-center">
                            <div className="cardReviewIcon ">
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            </div>
                            <a href='#' class="productCardHeading"> leo sed porta</a>
                            <p class="productCardPrice">$22.00</p>  
                            <button className='btn recommended-page-btn'>Add to Cart</button>                           
                        </div>
                </div> 
                </Zoom> 
                 
                </div>
            </div>
  )
}

export default RecommendedProduct