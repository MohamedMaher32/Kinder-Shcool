import React from 'react'
import footer from '../../Image/logo.png'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='footer'>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6 col-sm-12">
            <div>
              <img src={footer} alt="logo" />
              <p className='mt-4 mb-5'>Users and submit their own items. You can create different packages and by connecting with your PayPal or Stripe account charge users for registration.</p>
              <div className="social">
                <div className="icon"><i className="fa-brands fa-facebook-f"></i></div>
                <div className="icon"><i className="fa-brands fa-twitter"></i></div>
                <div className="icon"><i className="fa-brands fa-instagram"></i></div>
                <div className="icon"><i className="fa-brands fa-github"></i></div>
              </div>
            </div>
          </div>
         <div className="col-lg-6 col-sm-12">
          <div className="row">
          <div className="col-6">
            <ul>
              <li className='headerList mb-4'>Quick Links</li>
              <li><Link to="/class">Classes</Link></li>
              <li><Link to="/contact">Join with us</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/">Events</Link></li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li className='headerList mb-4'>About Us</li>
              <li><Link to="/">Privacy Policy</Link></li>
              <li><Link to="/">Our Team</Link></li>
              <li><Link to="/">Testimonial</Link></li>
              <li><Link to="/">Programing</Link></li>
              <li><Link to="/">User Stories</Link></li>
            </ul>
          </div>
          </div>
         </div>
        </div>
        <div className='copy text-center mb-4 mt-5'>Copyright ©2023 All rights reserved | This template is made with <i className="fa-solid fa-heart"></i>  by <strong>Mohamed Maher</strong></div>
      </div>
    </div>
  )
}
