import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Link } from 'react-router-dom';

import CrossArrow from '../assets/images/svg/cross-arrow.svg';

import HomeImg1 from '../assets/images/home/hero-construction.png';
import HomeImg2 from '../assets/images/home/hero-smart-home.png';
import HomeImg3 from '../assets/images/home/hero-maintenance.png';

import Video1 from '../assets/video/video1.mp4';



const HomeHeroSlider: React.FC = () => {


    const heroSlider = {
        modules: [Autoplay, EffectFade],
        speed: 1000,
        loop: true,
        effect: "fade",
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
    }



    return (

        <section className="hero-wrapper">


            {/* BACKGROUND VIDEO */}

            <video
                className="hero-background-video"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src={Video1} type="video/mp4" />
            </video>


            {/* VIDEO OVERLAY */}

            <div className="hero-video-overlay"></div>




            <Swiper 
                {...heroSlider}
                className="swiper hero-slider"
            >



                {/* SLIDE 1 */}

                <SwiperSlide className="swiper-slide main-swiper-slide">


                    <div className="slide-content">

                        <div className="container">

                            <div className="row main-swiper-row">


                                <div className="col-xxl-6 col-xl-6 col-lg-10 clearfix-space animate-slide">


                                    <p className="needs-text">
                                        Hire The Right Professionals
                                    </p>


                                    <h1 className="lets-us-do">
                                        Smart Living. Reliable Solutions.
                                    </h1>


                                    <h2 className="residents">
                                        Construction, maintenance, smart home and security solutions designed for modern homes and businesses.
                                    </h2>



                                    <div className="hero-cta-group">


                                        <Link
                                            to="/consultation"
                                            className="btn-quote our-services-btn"
                                        >
                                            Request A Service
                                            <img src={CrossArrow} alt="arrow" />
                                        </Link>



                                        <Link
                                            to="/contact"
                                            className="btn-quote-outline"
                                        >
                                            Get Free Quote
                                        </Link>



                                    </div>


                                </div>





                                <div className="col-xxl-6 col-xl-6 col-lg-10 position-relative">


                                    <img
                                        className="home-img-clening"
                                        src={HomeImg1}
                                        alt="construction"
                                    />


                                </div>



                            </div>


                        </div>


                    </div>



                </SwiperSlide>








                {/* SLIDE 2 */}


                <SwiperSlide className="swiper-slide main-swiper-slide">


                    <div className="slide-content">


                        <div className="container">


                            <div className="row main-swiper-row">



                                <div className="col-xxl-6 col-xl-6 col-lg-10 clearfix-space animate-slide">


                                    <p className="needs-text">
                                        Smart Homes & Security
                                    </p>



                                    <h1 className="lets-us-do">
                                        Live Smarter. Feel Safer.
                                    </h1>



                                    <h2 className="residents">
                                        CCTV, automation, smart lighting and security systems professionally installed by Nyumba Dynamics.
                                    </h2>




                                    <Link
                                        to="/services"
                                        className="btn-quote our-services-btn"
                                    >
                                        Our Services
                                        <img src={CrossArrow} alt="arrow" />
                                    </Link>



                                </div>






                                <div className="col-xxl-6 col-xl-6 col-lg-10 position-relative">


                                    <img
                                        className="home-img-clening"
                                        src={HomeImg2}
                                        alt="smart home"
                                    />



                                </div>



                            </div>


                        </div>


                    </div>


                </SwiperSlide>










                {/* SLIDE 3 */}


                <SwiperSlide className="swiper-slide main-swiper-slide">


                    <div className="slide-content">


                        <div className="container">


                            <div className="row main-swiper-row">



                                <div className="col-xxl-6 col-xl-6 col-lg-10 clearfix-space animate-slide">


                                    <p className="needs-text">
                                        Construction & Maintenance
                                    </p>




                                    <h1 className="lets-us-do">
                                        Building Better Spaces.
                                    </h1>




                                    <h2 className="residents">
                                        Electrical, plumbing, masonry, carpentry, welding and renovation services delivered by trusted professionals.
                                    </h2>




                                    <Link
                                        to="/services"
                                        className="btn-quote our-services-btn"
                                    >
                                        Explore Services
                                        <img src={CrossArrow} alt="arrow" />
                                    </Link>



                                </div>






                                <div className="col-xxl-6 col-xl-6 col-lg-10 position-relative">


                                    <img
                                        className="home-img-clening"
                                        src={HomeImg3}
                                        alt="maintenance"
                                    />



                                </div>




                            </div>


                        </div>


                    </div>


                </SwiperSlide>





            </Swiper>



        </section>

    )
}



export default HomeHeroSlider;