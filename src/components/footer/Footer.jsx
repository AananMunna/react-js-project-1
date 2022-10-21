import React from 'react'

import './footer.css' 

import footerLogo from "../../assets/logo-white_170x.avif"
import payment from "../../assets/paymet-1.png"
const Footer = () => {
  return (
    <div className="container-fluid footer">
        <div className="container pt-5 ">

            <div className="row pt-5 mt-5 pb-5 footerFirstRow">
                <div className="col-lg-4 col-md-12 col-sm-12"></div>
                <div className="col-lg-4 col-md-12 col-sm-12 text-white footerHP ">
                    <h2 className='footerH'>Sign up for offers</h2>
                    <p className='footerP'>Sign up for our newsletter to receive <br /> exclusive offers & discounts!</p>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="footerInpDiv form-control d-flex mt-3">
                    <input type="text" className='footerInp' placeholder='Enter your email...'/>
                    <div className="footerInpIconDiv">
                    <i class="bi bi-envelope footerInpIcon"></i>
                    </div>
                    </div>
                </div>
            </div>

            <div className="row text-white ">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <img src={footerLogo} alt="" className='img-fluid mb-2' />
                     <p className='Color868686'>If you have any question, please contact us at <a href="#" className='colorED6436'> support@gmail.com</a></p> 
                     <div className="d-flex mt-3 mb-2">
                     <i class="bi bi-geo-alt colorED6436"></i>
                     <span className='footer-info'>30 Buttonwood St.Pataskala <br /> OH 43062</span>
                     </div>
                     <div className="d-flex">
                     <i class="bi bi-telephone-inbound colorED6436"></i>
                     <span className='footer-info'>(+1)-613-333-0101</span>
                     </div>
                     <div className="footersocialIcon mb-4 mt-2">
                     <a href="#"><i class="bi bi-facebook footer-icon"></i></a>
                     <a href="#"><i class="bi bi-twitter footer-icon"></i></a>
                     <a href="#"><i class="bi bi-linkedin footer-icon"></i></a>
                     <a href="#"><i class="bi bi-instagram footer-icon"></i></a> 
                     </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <div className='footerLinkHeader mb-3 mt-3'>Corporate</div>
                    <ul>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>Careers</a></li>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>About Us</a></li>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>Contact Us</a></li>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>FAQs</a></li>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>Vendors</a></li>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>Affiliate Program</a></li>
                    </ul>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className='footerLinkHeader mb-3 mt-3'>Information</div>
                    <ul>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>Online Store</a></li>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>Privacy Policy</a></li>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>Refund Policy</a></li>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>Shipping Policy</a></li>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>Terms of Service</a></li>
                        <li className='mt-2'><a href="#" className='Color868686 footerLink'>Track Order</a></li>
                    </ul>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className='footerLinkHeader mb-3 mt-3'>Services</div>
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
                <hr className='text-white'/>
            <div className="row pb-3">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <span className='Color868686 mb-3'>© 2021 Petio Pets Store</span>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={payment} alt="" className='img-fluid paymentImg mb-3' />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer