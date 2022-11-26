import React from "react";
import { useForm } from "react-hook-form";
import { send } from 'emailjs-com';
import useSound from 'use-sound';
import boopSfx from '../sound/sound2.mp3';

const ContactComp = () => {
    const [play] = useSound(boopSfx);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [toSend, setToSend] = React.useState({
        name: '',
        toName: 'Priyank Tyagi',
        email: '',
        subject: '',
    });

    const [showThankyou, setShowThankyou] = React.useState(false);
    const onSubmit = (data, e) => {
        e.target.reset();
        console.log("Message submited: " + JSON.stringify(data));
        send(
            'service_goxexgn',
            'template_m2elpzk',
            toSend,
            'user_5Cy3sU3R5q0OhgX9aDUuK'
        )
            .then((response) => {
                // console.log('SUCCESS!', response.status, response.text);
                setShowThankyou(true);
                setTimeout(function () {
                    window.location.replace('/');
                }, 5000);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <>
            {showThankyou &&
                <div className="thankyou-message">
                    <div>
                        <p>Thankyou for your message , <b>Priyank Tyagi</b> will contact you soon...</p>
                    </div>

                </div>
            }

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
                            <h2 className="mb-3 bread">Contact Me</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-section ">
                <div className="container">
                    <div className="row no-gutters d-flex contact-info">
                        <div className="col-md-3 d-flex">
                            <div className="align-self-stretch box p-4 py-md-5 text-center"  data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="100">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="icon-map-signs"></span>
                                </div>
                                <h3 className="mb-4">Address</h3>
                                <p>Meerut , Uttar Pradesh</p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="align-self-stretch box p-4 py-md-5 text-center"  data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="100">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="icon-phone2"></span>
                                </div>
                                <h3 className="mb-4">Contact Number</h3>
                                <p><a href="tel:8791582734">8791582734</a></p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="align-self-stretch box p-4 py-md-5 text-center"  data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="100">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="icon-paper-plane"></span>
                                </div>
                                <h3 className="mb-4">Email Address</h3>
                                <p><a href="mailto:priyank.tyagi9045@gmail.com"><span className="__cf_email__">[email&#160;protected]</span></a></p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="align-self-stretch box p-4 py-md-5 text-center"  data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="100">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="icon-globe"></span>
                                </div>
                                <h3 className="mb-4">Website</h3>
                                <p><a href="#">priyanktyagi.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section ftco-no-pt ftco-no-pb contact-section">
                <div className="container-fluid px-0">
                    <div className="row no-gutters block-9">
                        <div className="col-md-6 order-md-last d-flex"  data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="100">

                            <form onSubmit={handleSubmit(onSubmit)} className="bg-light p-5 contact-form">
                                <div className="form-group">
                                    <input
                                        {...register("name", { required: true })}
                                        type="text"
                                        placeholder="Your Name"
                                        className="form-control"
                                        value={toSend.name}
                                        onChange={handleChange}
                                    />
                                    {errors.name && errors.name.type === "required" && (
                                        <span>Name is required</span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input
                                        {...register(
                                            "email",
                                            {
                                                required: "Email is Required",
                                                pattern: {
                                                    value: /\S+@\S+\.\S+/,
                                                    message: "Entered value does not match email format",
                                                },
                                            },
                                            { required: true }
                                        )}
                                        type="email"
                                        placeholder="Email"
                                        className="form-control"
                                        value={toSend.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <span role="alert">{errors.email.message}</span>}
                                </div>

                                <div className="form-group">
                                    <textarea
                                        {...register("subject", { required: true })}
                                        placeholder="Message"
                                        value={toSend.subject}
                                        cols="30" rows="7" className="form-control"
                                        onChange={handleChange}
                                    ></textarea>
                                    {errors.subject && <span>Message is required.</span>}

                                </div>
                                <div className="form-group">
                                    <button type="submit" onClick={play} className="btn btn-fill py-3 px-5">
                                        <span>Send Message</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-6 d-flex"  data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="100">
                             <img src={process.env.PUBLIC_URL + "images/contact.jpg"} className="img-box-img"></img>
                        </div>

                    </div>
                </div>
            </section>
            {/* End contact */}


        </>

    );
};

export default ContactComp;
