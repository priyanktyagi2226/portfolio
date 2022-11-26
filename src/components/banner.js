
import React from 'react';
import ReactDOM from "react-dom";
import OwlCarousel from 'react-owl-carousel';
const Banner = () => {
    const options = {
        loop: true,
        margin: 0,
        items: 1,
        singleItem:true,
        autoplay: true,
        responsiveClass: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsive:{
            0:{
                items:1
            }
        }
      };
    return (
        <>
            <section id="home-section" className="hero">
                <div className='container home-section-text'>
                    <h5>Software</h5>
                    <div className='head-top'>
                       <h1 className="vr text-center">Engineer</h1>
                    </div>
                </div>
                <div className='mobile-banner'>
                    <img src={process.env.PUBLIC_URL + "images/bg_3.jpg"}></img>
                    <div className="overlay"></div>
                </div>
               
                <div className="js-fullheight home-wrap d-flex">
                    <div className="half order-md-last"></div>
                    <div className="half">
                        <OwlCarousel className='home-slider owl-carousel owl-theme' {...options}>
                            <div className="item slider-item js-fullheight">
                                <div className="overlay"></div>
                                <div className="container-fluid p-0">
                                    <div className="row d-md-flex no-gutters slider-text js-fullheight align-items-center justify-content-end" data-scrollax-parent="true">
                                        <div className="one-third img js-fullheight" 
                                         style={{
                                            backgroundImage: `url(${
                                              process.env.PUBLIC_URL + "images/bg_3.jpg"
                                            })`,
                                          }}>
                                              <div className="overlay"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item slider-item js-fullheight">
                                <div className="overlay"></div>
                                <div className="container-fluid p-0">
                                    <div className="row d-flex no-gutters slider-text js-fullheight align-items-center justify-content-end" data-scrollax-parent="true">
                                        <div className="one-third img js-fullheight" style={{
                                            backgroundImage: `url(${
                                              process.env.PUBLIC_URL + "images/bg_2.JPG"
                                            })`,
                                          }}>
                                            <div className="overlay"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;