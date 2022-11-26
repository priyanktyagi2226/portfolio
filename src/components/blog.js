import React, { useState, useEffect } from "react";


const BlogComp = () => {
    const [blogData, setBlogData] = useState([]);
    // console.log("api  ",process.env.REACT_APP_API_KEY)
    useEffect(() => {
        fetch(`https://www.googleapis.com/blogger/v3/blogs/2626756854331194820/posts?fetchImages=true&fetchBodies=true&key=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(res => { setBlogData(res); console.log(res); })
            .catch(err => console.log(err));
    },[])
    
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
                            <h2 className="mb-3 bread">My Blogs</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section ftco-portfolio">
                <div className="container">
                    <div className="row">
                        {blogData && blogData.items && blogData.items.map((item) => {
                            return (
                                <div className="col-md-6 col-sm-12 portfolio-wrap" key={item.id}>
                                    <div data-aos="fade-up"
                                            data-aos-duration="800"
                                           >

                                        <figure className="img" 
                                        >
                                        <img src={item && item.images && item.images[0] && item.images[0].url}></img>
                                        </figure>
                                        <div className="text">
                                            <div className="px-0 pt-5">
                                                <div className="desc">
                                                    <div className="top top-relative">
                                                        <span className="subheading">&#123;{new Date(item && item.published).toDateString()}&#125;</span>
                                                        <h2 className="mb-4"><a target="_blank" href={item && item.url}>{item && item.title}</a></h2>
                                                    </div>
                                                    <div className="absolute relative">
                                                        <p><a target="_blank" href={item && item.url} className="custom-btn">View Full Blog</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>
        </>

    );
};

export default BlogComp;
