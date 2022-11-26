import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import useSound from 'use-sound';
import boopSfx from '../sound/sound2.mp3';

const AboutPage = () => {
    const [play] = useSound(boopSfx);
    const options = {
        loop: true,
        margin: 0,
        items: 1,
        autoplay: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'
    };
    return (
        <>
            <section className="hero-wrap hero-wrap-2 js-fullheight"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + "images/contact2.jpg"
                        })`,
                    backgroundPosition: "fixed"
                }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-end">
                        <div className="col-md-9 pb-2" data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="200">
                            <h2 className="mb-3 bread">About Me</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section ftco-intro">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-md-4 d-flex">
                            <div className="img" style={{
                                backgroundImage: `url(${process.env.PUBLIC_URL + "images/bg_3.jpg"
                                    })`,
                                backgroundPosition: "fixed"
                            }} data-aos="fade-up"
                                data-aos-duration="500"
                                data-aos-delay="100"></div>
                        </div>
                        <div className="col-md-8 py-md-5 pt-4 p-md-5" data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="200">
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
            <section className='skills-section'>
                <div className='ftco-intro'>
                    <div className="container">
                        <h2 className="">My Skills</h2>
                    </div>
                </div>
                <div className="container">
                    <div>
                        <div className='row'>
                            <div className='col-sm-12 col-md-6 col-lg-4'>
                                <div className='skills-box' data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="50">
                                    <div className='text-center'>
                                        <img src={process.env.PUBLIC_URL + "images/html.svg"
                                        } alt="html"></img>
                                        <h3>HTML / HTML5</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-4'>
                                <div className='skills-box' data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="50">
                                    <div className='text-center'>
                                        <img src={process.env.PUBLIC_URL + "images/css.svg"
                                        } alt="html"></img>
                                        <h3>CSS / CSS3</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-4'>
                                <div className='skills-box' data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="50">
                                    <div className='text-center'>
                                        <img src={process.env.PUBLIC_URL + "images/scss.svg"
                                        } alt="html"></img>
                                        <h3>SASS/SCSS</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-4'>
                                <div className='skills-box' data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="50">
                                    <div className='text-center'>
                                        <img src={process.env.PUBLIC_URL + "images/bootstrap.png"
                                        } alt="html"></img>
                                        <h3>BOOTSTRAP</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-4'>
                                <div className='skills-box' data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="50">
                                    <div className='text-center'>
                                        <img src={process.env.PUBLIC_URL + "images/js.svg"
                                        } alt="html"></img>
                                        <h3>JAVASCRIPT</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-4'>
                                <div className='skills-box' data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="50">
                                    <div className='text-center'>
                                        <img src={process.env.PUBLIC_URL + "images/jquery.svg"
                                        } alt="html"></img>
                                        <h3>JQUERY</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-4'>
                                <div className='skills-box' data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="50">
                                    <div className='text-center'>
                                        <img src={process.env.PUBLIC_URL + "images/react.svg"
                                        } alt="html"></img>
                                        <h3>REACT</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-4'>
                                <div className='skills-box'>
                                    <div className='text-center' data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="50">
                                        <img src={process.env.PUBLIC_URL + "images/node.svg"
                                        } alt="html"></img>
                                        <h3>NODE</h3>
                                    </div>
                                </div>
                            </div>
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
                                    <img src={process.env.PUBLIC_URL + "images/web-design2.gif"} className="w-100 icons-image"></img>
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
                                    <img src={process.env.PUBLIC_URL + "images/development.gif"} className="w-100 icons-image"></img>
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
                                    <img src={process.env.PUBLIC_URL + "images/react.gif"} className="w-100 icons-image"></img>
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

            <section className="testimony-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-5 d-flex">
                            <div className="testimony-img" style={{
                                backgroundImage: `url(${process.env.PUBLIC_URL + "images/reviews.jpg"
                                    })`,
                                backgroundPosition: "fixed"
                            }}></div>
                        </div>
                        <div className="col-md-7 py-5 pl-md-5">
                            <div className="heading-section heading-section-white pt-4" data-aos="fade-up">
                                <h2 className="mb-0">Customer Says</h2>
                            </div>
                            <OwlCarousel className='carousel-testimony owl-carousel owl-theme ftco-owl' {...options}>

                                <div className="item">
                                    <div className="testimony-wrap pb-4">
                                        <div className="text">
                                            <p className="mb-4"> The project went extremely smoothly considering our accelerated time frame. Skilled developer empowered us to use their designs to communicate and maintain our brand and identity. His work has improved our online image and helped us give a better impression to visitors.</p>
                                        </div>
                                        <div className="d-flex">
                                            <div className="user-img" style={{
                                                backgroundImage: `url(${process.env.PUBLIC_URL + "images/about/amit.jpg"
                                                    })`,
                                            }}>
                                            </div>
                                            <div className="pos ml-3">
                                                <p className="name">Amit Singh Nayal</p>
                                                <span className="position">Professor</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap pb-4">
                                        <div className="text">
                                            <p className="mb-4">  We were looking for a logo with a touch of modernism. He grasped
                                                our needs and produced a stunning design. Awesome to work with
                                                Priyank. Incredibly organized, easy to communicate with, responsive
                                                with next iterations.</p>
                                        </div>
                                        <div className="d-flex">
                                            <div className="user-img" style={{
                                                backgroundImage: `url(${process.env.PUBLIC_URL + "images/about/shashank.jpg"
                                                    })`,
                                            }}>
                                            </div>
                                            <div className="pos ml-3">
                                                <p className="name">Shashank Tyagi</p>
                                                <span className="position">Mechanical Engineer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="testimony-wrap pb-4">
                                        <div className="text">
                                            <p className="mb-4">   He developed website a few weeks ago. I had some issues with the
                                                work, I asked customer support to help me with and he is very
                                                helpful and kind to help me with all my problems. I definitely
                                                recommend his work to everyone.</p>
                                        </div>
                                        <div className="d-flex">
                                            <div className="user-img" style={{
                                                backgroundImage: `url(${process.env.PUBLIC_URL + "images/about/deepak.jpg"
                                                    })`,
                                            }}>
                                            </div>
                                            <div className="pos ml-3">
                                                <p className="name">Deepak Mishra</p>
                                                <span className="position">Software Engineer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap pb-4">
                                        <div className="text">
                                            <p className="mb-4"> Really the Code, Support, and design are awesome and its good
                                                support they are giving. They give an instant solution to our
                                                needs. Really awesome. I will strongly recommend to my friends.
                                                Great Work, even better service!</p>
                                        </div>
                                        <div className="d-flex">
                                            <div className="user-img" style={{
                                                backgroundImage: `url(${process.env.PUBLIC_URL + "images/about/piyush.jpg"
                                                    })`,
                                            }}>
                                            </div>
                                            <div className="pos ml-3">
                                                <p className="name">Piyush Mishra</p>
                                                <span className="position">Civil Engineer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap pb-4">
                                        <div className="text">
                                            <p className="mb-4"> His attentiveness is the main reason that i work with him. He is on top of it. I appreciate his speed and responsiveness.</p>
                                        </div>
                                        <div className="d-flex">
                                            <div className="user-img" style={{
                                                backgroundImage: `url(${process.env.PUBLIC_URL + "images/about/harshit.jpg"
                                                    })`,
                                            }}>
                                            </div>
                                            <div className="pos ml-3">
                                                <p className="name">Harshit Singh</p>
                                                <span className="position"> Banker</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap pb-4">
                                        <div className="text">
                                            <p className="mb-4"> Working with Priyak is incredible - very fast, communicative, and high quality. Couldn't ask for a better person to work with on my web design and build!</p>
                                        </div>
                                        <div className="d-flex">
                                            <div className="user-img" style={{
                                                backgroundImage: `url(${process.env.PUBLIC_URL + "images/about/vinank.jpg"
                                                    })`,
                                            }}>
                                            </div>
                                            <div className="pos ml-3">
                                                <p className="name">Vinak Sharma</p>
                                                <span className="position">Librarian & Business</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section ftco-intro bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 text-center">
                            <h2 className="mb-0 font-primary">We've done work of <span class="number" data-number="300">300</span> Portfolio</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutPage;