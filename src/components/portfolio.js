import React from 'react';

const Portfolio = () => {
    return (
        <>
            <section className="ftco-section ftco-portfolio">
                <div className="container-fluid">
                    <div className="row justify-content-center pb-3">
                        <div className="col-md-12 mb-5 heading-section text-center ">
                            <h2 className="mb-5">Latest &amp; <span>Greatest</span></h2>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row no-gutters">
                        <div className="col-md-12 portfolio-wrap">
                            <div className="row no-gutters align-items-center">
                                <div className="col-md-5 img"
                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                    data-aos-delay="100"
                                >
                                    <img src={process.env.PUBLIC_URL + "images/nft.gif"} className='desktop-image'></img>
                                    {/* <img src={ process.env.PUBLIC_URL + "images/nft2.jpg"} className='mobile-image'></img> */}
                                </div>
                                <div className="col-md-7">
                                    <div className="text pt-0 pl-0 pl-lg-5 pl-md-4 ">
                                        <div className="px-4 px-lg-4" data-aos="fade-up"
                                            data-aos-duration="800"
                                            data-aos-delay="200">
                                            <div className="desc">
                                                <div className="top">
                                                    <span className="subheading">Blockchain &#123;1 / 08 / 2022&#125;</span>
                                                    <h2 className="mb-4"><a>NFT</a></h2>
                                                </div>
                                                <div className="absolute">
                                                    <p>This project is the world's first and largest web3 marketplace for NFTs and crypto collectibles. Browse, create, buy, sell, and auction NFTs today.</p>
                                                    {/* <p><a href="#" className="custom-btn">View Portfolio</a></p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row no-gutters">
                        <div className="col-md-12 portfolio-wrap">
                            <div className="row no-gutters align-items-center flex-row-reverse">
                                <div className="col-md-5 img "

                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                    data-aos-delay="100">
                                    <img src={process.env.PUBLIC_URL + "images/stata.gif"} className='desktop-image'></img>
                                </div>
                                <div className="col-md-7">
                                    <div className="text pt-0 pl-0 pl-lg-5 pl-md-4 ">
                                        <div className="px-4 px-lg-4" data-aos="fade-up"
                                            data-aos-duration="800"
                                            data-aos-delay="200">
                                            <div className="desc">
                                                <div className="top">
                                                    <span className="subheading">Statisticians &#123;15 / 07 / 2022&#125;</span>
                                                    <h2 className="mb-4"><a>Statalysis</a></h2>
                                                </div>
                                                <div className="absolute">
                                                    <p>Statistical consultation and data analysis services for medical and social science students at an affordable price. We specialise in statistical analysis ..</p>
                                                    {/* <p><a href="https://statalysis.com/" className="custom-btn">View Portfolio</a></p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row no-gutters">
                        <div className="col-md-12 portfolio-wrap">
                            <div className="row no-gutters align-items-center">
                                <div className="col-md-5 img"
                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                    data-aos-delay="100"
                                >
                                    <img src={process.env.PUBLIC_URL + "images/ecommerce.gif"} className='desktop-image'></img>
                                </div>
                                <div className="col-md-7">
                                    <div className="text pt-0 pl-0 pl-lg-5 pl-md-4 ">
                                        <div className="px-4 px-lg-4" data-aos="fade-up"
                                            data-aos-duration="800"
                                            data-aos-delay="200">
                                            <div className="desc">
                                                <div className="top">
                                                    <span className="subheading">Shop &#123;22 / 02 / 2021&#125;</span>
                                                    <h2 className="mb-4"><a>Ecommerce</a></h2>
                                                </div>
                                                <div className="absolute">
                                                    <p>E-commerce (electronic commerce) is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet.</p>
                                                    {/* <p><a className="custom-btn">View Portfolio</a></p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row no-gutters">
                        <div className="col-md-12 portfolio-wrap">
                            <div className="row no-gutters align-items-center">
                                <div className="col-md-5 order-md-last"
                                
                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                    data-aos-delay="100">
                                    <img src={process.env.PUBLIC_URL + "images/wine.gif"} className='desktop-image'></img>
                                </div>
                                <div className="col-md-7">
                                    <div className="text pt-0 pr-md-5 ">
                                        <div className="px-4 px-lg-4" data-aos="fade-up"
                                            data-aos-duration="800"
                                            data-aos-delay="200">
                                            <div className="desc">
                                                <div className="top">
                                                    <span className="subheading">Wine &#123;15 / 05 / 2020&#125;</span>
                                                    <h2 className="mb-4"><a >Distributor</a></h2>
                                                </div>
                                                <div className="absolute">
                                                    <p>This project is an impartial broadline wholesale wine distributor. That method we assist and distribute countrywide brands.</p>
                                                    {/* <p><a className="custom-btn">View Portfolio</a></p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row no-gutters">
                        <div className="col-md-12 portfolio-wrap">
                            <div className="row no-gutters align-items-center">
                                <div className="col-md-5 img"
                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                    data-aos-delay="100"
                                >
                                   <img src={process.env.PUBLIC_URL + "images/furniture.gif"} className='desktop-image'></img>
                                </div>
                                <div className="col-md-7">
                                    <div className="text pt-0 pl-0 pl-lg-5 pl-md-4 ">
                                        <div className="px-4 px-lg-4" data-aos="fade-up"
                                            data-aos-duration="800"
                                            data-aos-delay="200">
                                            <div className="desc">
                                            <div className="top">
                                        <span className="subheading">Furniture &#123;12 / 06 / 2020&#125;</span>
                                        <h2 className="mb-4"><a>Carpentry</a></h2>
                                    </div>
                                    <div className="absolute">
                                        <p>Full service finish carpentry and installation contractors, designing, constructing and fully handling your door and molding installation at low cost.</p>
                                        {/* <p><a className="custom-btn">View Portfolio</a></p> */}
                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row no-gutters">
                        <div className="col-md-12 portfolio-wrap">
                            <div className="row no-gutters align-items-center">
                                <div className="col-md-5 order-md-last"
                                
                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                    data-aos-delay="100">
                                     <img src={process.env.PUBLIC_URL + "images/mushroom.gif"} className='desktop-image'></img>
                                </div>
                                <div className="col-md-7">
                                    <div className="text pt-0 pr-md-5 ">
                                        <div className="px-4 px-lg-4" data-aos="fade-up"
                                            data-aos-duration="800"
                                            data-aos-delay="200">
                                            <div className="desc">
                                            <div className="top">
                                                    <span className="subheading">Ecommerce &#123;22 / 10 / 2018&#125;</span>
                                                    <h2 className="mb-4"><a>Mushroom</a></h2>
                                                </div>
                                                <div className="absolute">
                                                    <p>A mushroom or toadstool is the fleshy, spore-bearing fruiting body of a fungus, typically produced above ground, on soil, or on its food source.</p>
                                                    {/* <p><a className="custom-btn">View Portfolio</a></p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
               
            </section>
        </>
    )
}

export default Portfolio;