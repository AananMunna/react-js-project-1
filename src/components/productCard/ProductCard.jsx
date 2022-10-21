import React from 'react'

import Slide from 'react-reveal/Slide';

import "./productCard.css"

import productCardImg1 from "../../assets/product-8_360x360.jpg"
import productCardImg2 from "../../assets/product-9_85b3789a-41cf-43b4-bca2-5b4dd73e5fb5_360x360.jpg"
import productCardImg3 from "../../assets/product-10_b98a5ca2-321c-412b-af32-a2a4c48679d3_360x360.webp"
import productCardImg4 from "../../assets/product-11_360x360.webp"
import productCardImg5 from "../../assets/product-14_360x360.jpg"
import productCardImg6 from "../../assets/product-16_360x360.jpg"
import productCardImg7 from "../../assets/product-17_360x360.jpg"
import productCardImg8 from "../../assets/product-26_360x360.jpg"

const ProductCard = () => {

 const productCardShow1 = ()=>{
  document.getElementById("productCardSearchIcon1").style.display='block'
 }
 const productCardHide1 = ()=>{
  document.getElementById("productCardSearchIcon1").style.display='none'
 }

 const productCardShow2 = ()=>{
  document.getElementById("productCardSearchIcon2").style.display='block'
 }
 const productCardHide2 = ()=>{
  document.getElementById("productCardSearchIcon2").style.display='none'
 }

 const productCardShow3 = ()=>{
  document.getElementById("productCardSearchIcon3").style.display='block'
 }
 const productCardHide3 = ()=>{
  document.getElementById("productCardSearchIcon3").style.display='none'
 }

 const productCardShow4 = ()=>{
  document.getElementById("productCardSearchIcon4").style.display='block'
 }
 const productCardHide4 = ()=>{
  document.getElementById("productCardSearchIcon4").style.display='none'
 }

 const productCardShow5 = ()=>{
  document.getElementById("productCardSearchIcon5").style.display='block'
 }
 const productCardHide5 = ()=>{
  document.getElementById("productCardSearchIcon5").style.display='none'
 }

 const productCardShow6 = ()=>{
  document.getElementById("productCardSearchIcon6").style.display='block'
 }
 const productCardHide6 = ()=>{
  document.getElementById("productCardSearchIcon6").style.display='none'
 }

 const productCardShow7 = ()=>{
  document.getElementById("productCardSearchIcon7").style.display='block'
 }
 const productCardHide7 = ()=>{
  document.getElementById("productCardSearchIcon7").style.display='none'
 }

 const productCardShow8 = ()=>{
  document.getElementById("productCardSearchIcon8").style.display='block'
 }
 const productCardHide8 = ()=>{
  document.getElementById("productCardSearchIcon8").style.display='none'
 }

  return (
    <div className='container-fluid'>
        <div className="shortCardHeading">
            <span>Best</span> Seller
          </div>
            <div className="row">
            <Slide bottom>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                  <a href="#">
                    <div class="card" onMouseEnter={productCardShow1} onMouseLeave={productCardHide1}>
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
                        </div>
                </div>
                </Slide>
                <Slide top>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                  <a href="#">
                    <div class="card" onMouseEnter={productCardShow2} onMouseLeave={productCardHide2}>
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
                        </div>
                </div> 
                </Slide> 
                <Slide bottom> 
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                  <a href="#">
                    <div class="card" onMouseEnter={productCardShow3} onMouseLeave={productCardHide3}>
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
                        </div>
                </div>
                </Slide>
                <Slide top> 
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                  <a href="#">
                    <div class="card" onMouseEnter={productCardShow4} onMouseLeave={productCardHide4}>
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
                        </div>
                </div>
                </Slide>
                <Slide left> 
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                  <a href="#">
                    <div class="card" onMouseEnter={productCardShow5} onMouseLeave={productCardHide5}>
                      <div className='productCardSearchIcon ' id='productCardSearchIcon5'>
                        <a href="#">
                          <i class="bi bi-handbag productCardIcon"></i> 
                        </a>
                        <a href="#">
                          <i class="bi bi-search productCardIcon"></i>
                        </a>
                      </div>
                        <img src={productCardImg5} class="card-img-top productImg" alt="..." />
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
                            <a href='#' class="productCardHeading">Morbi vel arcu scelerisque</a>
                            <p class="productCardPrice">$15.00 </p>                            
                        </div>
                </div> 
                </Slide>
                <Slide top>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                  <a href="#">
                    <div class="card" onMouseEnter={productCardShow6} onMouseLeave={productCardHide6}>
                      <div className='productCardSearchIcon ' id='productCardSearchIcon6'>
                        <a href="#">
                          <i class="bi bi-handbag productCardIcon"></i> 
                        </a>
                        <a href="#">
                          <i class="bi bi-search productCardIcon"></i>
                        </a>
                      </div>
                        <img src={productCardImg6} class="card-img-top productImg" alt="..." />
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
                            <p class="productCardPrice">$85.00</p>                            
                        </div>
                </div>
                </Slide>
                <Slide bottom> 
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                  <a href="#">
                    <div class="card" onMouseEnter={productCardShow7} onMouseLeave={productCardHide7}>
                      <div className='productCardSearchIcon ' id='productCardSearchIcon7'>
                        <a href="#">
                          <i class="bi bi-handbag productCardIcon"></i> 
                        </a>
                        <a href="#">
                          <i class="bi bi-search productCardIcon"></i>
                        </a>
                      </div>
                        <img src={productCardImg7} class="card-img-top productImg" alt="..." />
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
                            <a href='#' class="productCardHeading">Nam justo libero porta ege</a>
                            <p class="productCardPrice">$85.00</p>                            
                        </div>
                </div>
                </Slide>
                <Slide right> 
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                  <a href="#">
                    <div class="card" onMouseEnter={productCardShow8} onMouseLeave={productCardHide8}>
                      <div className='productCardSearchIcon ' id='productCardSearchIcon8'>
                        <a href="#">
                          <i class="bi bi-handbag productCardIcon"></i> 
                        </a>
                        <a href="#">
                          <i class="bi bi-search productCardIcon"></i>
                        </a>
                      </div>
                        <img src={productCardImg8} class="card-img-top productImg" alt="..." />
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
                            <p class="productCardPrice">$55.00 - $62.00</p>                            
                        </div>
                </div>
                </Slide> 
            </div>
    </div>
  )
}

export default ProductCard