import React from 'react'
import { Link } from 'react-router-dom'
import FlipCountdown from '@rumess/react-flip-countdown';
import icon1 from "../../Image/about-icon1.svg"
import icon2 from "../../Image/about-icon2.svg"
import icon3 from "../../Image/about-icon3.svg"
import about from "../../Image/about.png"
import teach1 from "../../Image/team1.png"
import teach2 from "../../Image/team2.png"
import teach3 from "../../Image/team3.png"
import test from "../../Image/testimonial.png"
import founder from "../../Image/founder-img.svg"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export default function About() {
  const Responsive = { responsive: { 0: { items: 1 }, 767: { items: 2 }, 992: { items: 3 }, 1000: { items: 4 } } }
  return (
    <div className="home">
      <div className="landing">
        <div className="container">
          <h1>About Us</h1>
        </div>
      </div>
      <div className="welcome">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-11">
              <div className='header mb-5 pb-3'>
                <h2>Welcome to our <span>Kindergarten</span></h2>
                <p>Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today. Moving in fourth air night bring upon lesser subdue.</p>
              </div>
            </div>
          </div>
          <div className="row my-5 align-items-center">
            <div className="col-lg-5 col-sm-12">
              <div className="info d-flex align-items-center justify-content-lg-between">
                <img src={icon1} alt="image" />
                <div className='txt ms-4'>
                  <h4>Inter School Sports</h4>
                  <p>The words you use in your written communica speak volumes.</p>
                </div>
              </div>
              <div className="info d-flex align-items-center justify-content-lg-between my-4">
                <img src={icon2} alt="image" />
                <div className='txt ms-4'>
                  <h4>Friendly Environment</h4>
                  <p>The words you use in your written communica speak volumes.</p>
                </div>
              </div>
              <div className="info d-flex align-items-center justify-content-lg-between">
                <img src={icon3} alt="image" />
                <div className='txt ms-4'>
                  <h4 style={{ color: "#12D9DF" }}>Multimedia Class</h4>
                  <p>The words you use in your written communica speak volumes.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-sm-12">
              <img src={about} alt="image" className='w-100' />
            </div>
          </div>
        </div>
      </div>
      <div className="event">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-9">
              <div className="clock">
                <h4>18 Jan 2021</h4>
                <div className='header mb-4'>
                  <h2>Drawing Event</h2>
                  <p>Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today moving in fourth.</p>
                </div>
                <Link to='/' className='btn BTN mb-4'>View Event</Link>
                <FlipCountdown
                  hideYear
                  hideMonth
                  dayTitle='Days'
                  hourTitle='Hours'
                  minuteTitle='Minutes'
                  secondTitle='Seconds'
                  endAt={'2030-12-1 01:26:58'} // Date/Time
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="teacher">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-11">
              <div className='header mb-5 pb-3'>
                <h2>Expert Teachers</h2>
                <p>Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today. Moving in fourth air night bring upon lesser subdue.</p>
              </div>
            </div>
          </div>
          <OwlCarousel className='owl-theme mb-5' loop items={3} autoPlay dots {...Responsive} autoplay={true} autoplayTimeout={3000} margin={30} >
            <div className="info position-relative">
              <img src={teach1} alt="chef" className="w-100" />
              <div className="layout d-flex justify-content-center align-items-center">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className="teach text-center mt-3">
                <h3>Mr. Jacson Clay</h3>
                <p>Sports Instructor</p>
              </div>
            </div>
            <div className="info position-relative">
              <img src={teach2} alt="chef" className="w-100" />
              <div className="layout d-flex justify-content-center align-items-center">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className="teach text-center mt-3">
                <h3>Mr. Alex Williams</h3>
                <p>Sports Instructor</p>
              </div>
            </div>
            <div className="info position-relative">
              <img src={teach3} alt="chef" className="w-100" />
              <div className="layout d-flex justify-content-center align-items-center">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className="teach text-center mt-3">
                <h3>Ms. Amilia Kauly</h3>
                <p>Sports Instructor</p>
              </div>
            </div>

          </OwlCarousel>
        </div>
      </div>
      <div className="test">
        <div className="container">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className=" d-flex align-items-center justify-content-center flex-column text-center">
                  <img src={test} alt="test" />
                  <p>"Supercharge your WordPress hosting with detailed website analytics, marketing tools. Our experts are just part of the reason Bluehost is the ideal home for your WordPress website. We're here to help you succeed!"</p>
                  <div className="d-flex">
                    <img src={founder} alt="founder" />
                    <div className='ms-3 text-start'>
                      <h4>Jacson Miller</h4>
                      <span>Parent Customer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className=" d-flex align-items-center justify-content-center flex-column text-center">
                  <img src={test} alt="test" />
                  <p>"Supercharge your WordPress hosting with detailed website analytics, marketing tools. Our experts are just part of the reason Bluehost is the ideal home for your WordPress website. We're here to help you succeed!"</p>
                  <div className="d-flex">
                    <img src={founder} alt="founder" />
                    <div className='ms-3 text-start'>
                      <h4>Jacson Miller</h4>
                      <span>Parent Customer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div >
  )
}
