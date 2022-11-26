import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import useSound from 'use-sound';
import boopSfx from '../sound/sound2.mp3';

const About = () => {
    const [play] = useSound(boopSfx);
    return (
        <>
        
            <section className="ftco-section ftco-intro">
                <div className="container">
                    <div className="row justify-content-end align-items-center">
                        <div className="col-md-5"  data-aos="fade-up">
                          <img src={ process.env.PUBLIC_URL + "images/coding4.gif"} className="w-100 image-about"></img>
                        </div>
                        <div className="col-md-7"  data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="50">
                            <h2>Software <span>Engineer</span>, UI &amp; <span>React</span> Developer</h2>
                            <p className='py-3'>I am a software engineer with a passion for designing and developing user interfaces. 
                            I have 4.5 years of experience using React JS, Javascript and other front-end frameworks. <br>
                            </br>
                            I am passionate about design process and discussion, collaboration, and problem-solving.</p>
                            <p><Link to="/contact" onClick={play} className="btn btn-fill mt-3 py-3 px-5"><span>Contact Me</span></Link></p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services-section py-5 py-md-0">
                <div className="container">
                    <div className="row no-gutters d-flex">
                        <div className="col-md-6 col-lg-4 d-flex align-self-stretch "
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="50">
                            <div className="media block-6 services active d-block">
                                <div className="icon">
                                   <img src={ process.env.PUBLIC_URL + "images/web-design2.gif"} className="w-100 icons-image"></img>
                                </div>
                                <div className="media-body">
                                    <h3 className="heading mb-3">Web Design</h3>
                                    <p>Web design refers to the design of websites that are displayed on the internet. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 d-flex align-self-stretch"
                         data-aos="fade-up"
                         data-aos-duration="1200"
                         data-aos-delay="100">
                            <div className="media block-6 services active d-block">
                                <div className="icon">
                                <img src={ process.env.PUBLIC_URL + "images/development.gif"} className="w-100 icons-image"></img>
                                </div>
                                <div className="media-body">
                                    <h3 className="heading mb-3">UI Development</h3>
                                    <p>UI Development is the development of websites using skills like HTML ,SCSS, CSS , JQUERY, JAVASCRIPT, BOOTSTRAP </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 d-flex align-self-stretch " 
                         data-aos="fade-up"
                         data-aos-duration="1200"
                         data-aos-delay="150">
                            <div className="media block-6 services active d-block">
                                <div className="icon">
                                <img src={ process.env.PUBLIC_URL + "images/react.gif"} className="w-100 icons-image"></img>
                                </div>
                                <div className="media-body">
                                    <h3 className="heading mb-3">REACT</h3>
                                    <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-6 col-lg-3 d-flex align-self-stretch " 
                         data-aos="fade-up"
                         data-aos-duration="1200"
                         data-aos-delay="200">
                            <div className="media block-6 services active-2 d-block">
                                <div className="icon"><span className="flaticon-contract"></span></div>
                                <div className="media-body">
                                    <h3 className="heading mb-3">Writing</h3>
                                    <p>A small river named Duden flows by their place and supplies.</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;