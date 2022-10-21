import React from 'react'
import "./navbar.css"

import Fade from 'react-reveal/Fade';

import Pulse from 'react-reveal/Pulse';

import Bounce from 'react-reveal/Bounce';

import Slide from 'react-reveal/Slide';

import Zoom from 'react-reveal/Zoom';

import navbarLogo from "../../assets/logo-white_170x.avif"

import navbarShoppingAdd from "../../assets/banner-slide1.jpg"


import shortCardImg1 from "../../assets/cate-5_330x303.avif"
import shortCardImg2 from "../../assets/cate-6_330x303.avif"
import shortCardImg3 from "../../assets/cate-7_330x303.avif"
import shortCardImg4 from "../../assets/cate-8_330x303.avif"
import shortCardImg5 from "../../assets/cate-9_330x303.jpg" 
import shortCardImg6 from "../../assets/cate-2_330x307.jpg" 

const Navbar = () => {
  const navbarShoppingShow = ()=>{
    document.getElementById("navbarShoppingShowHide").style.display="block"
  }
  const navbarShoppingHIde = ()=>{
    document.getElementById("navbarShoppingShowHide").style.display="none"
  } 
  
  
  const loginFormShow = ()=>{
    document.getElementById("loginForm").style.display="block"
  } 
  const loginFormHide = ()=>{
    document.getElementById("loginForm").style.display="none"
  } 


  const navbarDivShow = ()=>{
    document.getElementById("navbarSearchDiv").style.display="block"
  } 
  const navbarDivHide = ()=>{
    document.getElementById("navbarSearchDiv").style.display="none"
  } 


  const ShoppingDivShow = ()=>{
    document.getElementById("navbarShoppingDiv").style.display="block"
  } 
  const ShoppingDivHide = ()=>{
    document.getElementById("navbarShoppingDiv").style.display="none"
  } 


  const navbarCollectionsDivShow = ()=>{
    document.getElementById("navbarCollections").style.display="block"
  } 
  const navbarCollectionsDivHIde = ()=>{
    document.getElementById("navbarCollections").style.display="none"
  } 
  return ( 
        <nav class="navbar navbar-expand-lg pt-2 fixed-top position-absolute   bg-">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src={navbarLogo} alt="" srcset="" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <a class="nav-link active text-white ms-4" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white dropdown-toggle" href="#" onMouseEnter={ShoppingDivShow}>Shop</a>
        </li>

    <Pulse>
        <div className="container" id='navbarShoppingDiv' onMouseLeave={ShoppingDivHide}>
           <div className="row">
            <div className="col-lg-8 d-flex">
              <div>
            <div className='footerLinkHeader mb-3 mt-3'>Collections</div>
                    <ul>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>Careers</a></li>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>About Us</a></li>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>Contact Us</a></li>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>FAQs</a></li>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>Vendors</a></li>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>Affiliate Program</a></li>
                    </ul>
                    </div>
              <div>
            <div className='footerLinkHeader mb-3 mt-3'>Shop Page</div>
            <ul>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>Online Store</a></li>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>Privacy Policy</a></li>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>Refund Policy</a></li>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>Shipping Policy</a></li>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>Terms of Service</a></li>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>Track Order</a></li>
                    </ul>
                    </div>
              <div>
            <div className='footerLinkHeader mb-3 mt-3'>Product Page</div>
                    <ul>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>Careers</a></li>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>About Us</a></li>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>Contact Us</a></li>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>FAQs</a></li>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>Vendors</a></li>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>Affiliate Program</a></li>
                    </ul>
                    </div>
              <div>
            <div className='footerLinkHeader mb-3 mt-3'>Page</div>
            <ul>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>Grooming</a></li>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>Positive Dog Training</a></li>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>Veterinary Services</a></li>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>Petco Insurance</a></li>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>Pet Adoption</a></li>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>Resource Center</a></li>
                    </ul>
                    </div>
            </div>
            <div className="col-lg-4">
              <img src={navbarShoppingAdd} className="img-fluid mt-3 me-3" alt="" />
            </div>
           </div>
        </div>
        </Pulse>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" onMouseEnter={navbarCollectionsDivShow}>
            Collections
          </a>
          </li>
          <Fade>
          <div className="navbarCollections container" id='navbarCollections' onMouseLeave={navbarCollectionsDivHIde}>
          <div className="row">
         
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div class="card border-0 rounded-0 mt-5">
                <img src={shortCardImg1} class="card-img-top rounded-4" alt="..."/>
                  <div class=" ">
                    <div className='shortCardLink '>Dog Food</div>
                  </div>
              </div>
            </div>  
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div class="card border-0 rounded-0 mt-5" >
                <img src={shortCardImg2} class="card-img-top rounded-4" alt="..."/>
                  <div class=" ">
                    <div className='shortCardLink '>Dog Toys</div>
                  </div>
              </div>
            </div>  
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div class="card border-0 rounded-0 mt-5" >
                <img src={shortCardImg3} class="card-img-top rounded-4" alt="..."/>
                  <div class=" ">
                    <div className='shortCardLink '>Cat Toys</div>
                  </div>
              </div>
            </div>  
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div class="card border-0 rounded-0 mt-5" >
                <img src={shortCardImg4} class="card-img-top rounded-4" alt="..."/>
                  <div class=" ">
                    <div className='shortCardLink '>Cat Food</div>
                  </div>
              </div>
            </div>  
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div class="card border-0 rounded-0 mt-5" >
                <img src={shortCardImg5} class="card-img-top rounded-4" alt="..."/>
                  <div class=" ">
                    <div className='shortCardLink '>Supplements</div>
                  </div>
              </div>
            </div>  
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div class="card border-0 rounded-0 mt-5" >
                <img src={shortCardImg6} class="card-img-top rounded-4" alt="..."/>
                  <div class=" ">
                    <div className='shortCardLink '>Shop Cat</div>
                  </div>
              </div>
            </div> 
        </div>
          </div>
          </Fade>
        
        <li class="nav-item">
          <a class="nav-link  text-white" href="#">Blogs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  text-white" href="#">Contact</a>
        </li>
      </ul>    
    <div className="icon d-flex">
      <a href="#">
    <i class="bi bi-search nav-icon" onClick={navbarDivShow}></i>
      </a>
      <Slide top>
      <div className="container-fluid navbarSearchDiv pb-4" id='navbarSearchDiv'>
       <div className="d-flex container form-control navbarSearchDivInsideDiv">
        <input type="text" className=' ' placeholder='Search something'/>        
        <i class="bi bi-search displayShowIcon1"></i>      
       </div>
      <i class="bi bi-x displayShowIcon2" onClick={navbarDivHide}></i>
      </div>
      </Slide>
      <a href="#">
    <i class="bi bi-person-fill nav-icon" onClick={loginFormShow}></i>
    </a>
    <div className="">
    <Zoom>
      <div className="loginBox container" id='loginForm'>
      <i class="bi bi-x loginCloseIcn"  onClick={loginFormHide} ></i>

      <form className='ps-5 pe-5 pt-5 pb-5'>
        <h1 className='mb-4'>Login</h1>
 
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control" />
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

 
  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" />
    <label class="form-label" for="form2Example2">Password</label>
  </div>

 
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
    
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
 
      <a href="#!">Forgot password?</a>
    </div>
  </div>

 
  <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>

 
  <div class="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
     
    
  </div>
</form>

      </div>
       </Zoom>
    </div>

      
      <a href="#">
    <i class="bi bi-handbag nav-icon" onMouseEnter={navbarShoppingShow} onMouseLeave={navbarShoppingHIde}></i>
    <Bounce>
    <div className="navbar-hover-item " id='navbarShoppingShowHide' >
        <p>Your cart is empty</p>
      </div> 
      </Bounce>
      </a>
    </div>
    </div>
  </div>
</nav>  
  )
}

export default Navbar