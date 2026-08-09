import { Link } from "react-router-dom";

import CrossArrowSvg from "../assets/images/svg/cross-arrow.svg";

import FooterImg1 from "../assets/images/footer/footer-img1.jpg";
import FooterImg2 from "../assets/images/footer/footer-img2.jpg";
import FooterImg3 from "../assets/images/footer/footer-img3.jpg";

import InstaSvg from "../assets/images/svg/insta.svg";
import WhiteLogoSvg from "../assets/images/svg/white-logo.svg";
import CallWhite from "../assets/images/svg/callWhite.svg";

import facebook from "../assets/images/svg/facebook.svg";
import twitter from "../assets/images/svg/twitter.svg";
import insta from "../assets/images/svg/insta.svg";
import whatsapp from "../assets/images/svg/whatsapp.svg";


const Footer = () => {

    return (

        <footer>

            <div className="container">


                {/* Newsletter */}

                <div className="subscribe-section">

                    <div>
                        <h2 className="sec-text updat pb-0">
                            Stay Updated With Nyumba Dynamics
                        </h2>
                        <p className="brand-statement">
                            Hire The Right Professionals — construction, safety, smart home, and lifestyle
                            services under one roof, built on trust and craftsmanship.
                        </p>
                    </div>


                    <div className="subscribe-input-main">

                        <input
                            type="text"
                            placeholder="Enter your email or phone number"
                        />


                        <button className="btn-quote">

                            Subscribe Now

                            <img
                                src={CrossArrowSvg}
                                alt="arrow"
                            />

                        </button>


                    </div>


                </div>





                <div className="row footer-row-quick">



                    {/* Office Hours */}

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">

                        <h2 className="working-hours">
                            Office Hours
                        </h2>


                        <div className="timing-hrw pt-0">

                            <p>
                                Monday - Friday
                            </p>

                            <p>
                                8:00 AM - 5:00 PM
                            </p>

                        </div>



                        <div className="timing-hrw">

                            <p>
                                Saturday
                            </p>

                            <p>
                                9:00 AM - 2:00 PM
                            </p>

                        </div>



                        <div className="timing-hrw border-0 pb-0">

                            <p>
                                Sunday
                            </p>

                            <p>
                                Closed
                            </p>

                        </div>


                    </div>







                    {/* Links */}

                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 quicklinks-main">


                        <div>

                            <h2 className="working-hours">
                                Our Services
                            </h2>


                            <ul>

                                <li>
                                    <Link to="/services/electrical-services">
                                        Electrical Services
                                    </Link>
                                </li>


                                <li>
                                    <Link to="/services/plumbing-services">
                                        Plumbing Services
                                    </Link>
                                </li>


                                <li>
                                    <Link to="/smart-home">
                                        Smart Home Solutions
                                    </Link>
                                </li>


                                <li>
                                    <Link to="/services/cleaning">
                                        Cleaning Services
                                    </Link>
                                </li>


                                <li>
                                    <Link to="/services">
                                        View All Services
                                    </Link>
                                </li>


                            </ul>


                        </div>




                        <div>


                            <h2 className="working-hours">
                                Quick Links
                            </h2>


                            <ul>

                                <li>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>


                                <li>
                                    <Link to="/about">
                                        About Us
                                    </Link>
                                </li>


                                <li>
                                    <Link to="/team">
                                        Our Team
                                    </Link>
                                </li>


                                <li>
                                    <Link to="/blog">
                                        Insights
                                    </Link>
                                </li>


                                <li>
                                    <Link to="/consultation">
                                        Consultation
                                    </Link>
                                </li>


                                <li>
                                    <Link to="/contact">
                                        Contact
                                    </Link>
                                </li>


                            </ul>


                        </div>


                    </div>

                    {/* Gallery */}

                    <div className="col-xxl-4 col-xl-4 col-lg-4">


                        <h2 className="working-hours">
                            Featured Projects
                        </h2>


                        <div className="footer-img-group">


                            <Link to="/properties" className="img-container">

                                <img
                                    className="footer-imgs"
                                    src={FooterImg1}
                                    alt="Nyumba Dynamics project"
                                />

                                <div className="footer-img-overlay">

                                    <img
                                        src={InstaSvg}
                                        alt="instagram"
                                    />

                                </div>

                            </Link>



                            <Link to="/properties" className="img-container">

                                <img
                                    className="footer-imgs"
                                    src={FooterImg2}
                                    alt="Nyumba Dynamics project"
                                />

                                <div className="footer-img-overlay">

                                    <img
                                        src={InstaSvg}
                                        alt="instagram"
                                    />

                                </div>

                            </Link>





                            <Link to="/properties" className="img-container">

                                <img
                                    className="footer-imgs"
                                    src={FooterImg3}
                                    alt="Nyumba Dynamics project"
                                />


                                <div className="footer-img-overlay">

                                    <img
                                        src={InstaSvg}
                                        alt="instagram"
                                    />

                                </div>


                            </Link>



                        </div>


                    </div>


                </div>







                {/* Bottom Footer */}

                <div className="media-logo-call-footer fade_up show">


                    <Link to="/" className="footer-logo-link">

                        <img
                            src={WhiteLogoSvg}
                            alt="Nyumba Dynamics"
                        />

                    </Link>




                    <div className="call-detl">


                        <div className="img-main-call">

                            <img
                                src={CallWhite}
                                alt="call"
                            />

                        </div>



                        <div>

                            <p>
                                CALL US NOW!
                            </p>


                            <a href="tel:+256761648679">
                                +256 7616 48679
                            </a>


                        </div>


                    </div>





                    <div className="footer-med-icons-main">


                        <a href="https://www.facebook.com/nyumbadynamics" target="_blank" rel="noopener noreferrer" className="footer-med-icons">

                            <img
                                src={facebook}
                                alt="facebook"
                            />

                        </a>



                        <a href="https://x.com/nyumbadynamics" target="_blank" rel="noopener noreferrer" className="footer-med-icons">

                            <img
                                src={twitter}
                                alt="twitter"
                            />

                        </a>




                        <a href="https://www.instagram.com/nyumbadynamics" target="_blank" rel="noopener noreferrer" className="footer-med-icons">

                            <img
                                src={insta}
                                alt="instagram"
                            />

                        </a>



                        <a href="https://wa.me/256761648679" target="_blank" rel="noopener noreferrer" className="footer-med-icons">

                            <img
                                src={whatsapp}
                                alt="whatsapp"
                            />

                        </a>


                    </div>


                </div>







                <div className="copyrights-main">


                    <p>

                        Copyright © {new Date().getFullYear()} 
                        Nyumba Dynamics. All Rights Reserved.

                    </p>



                    <p>
                        Privacy Policy | Terms & Conditions
                    </p>


                </div>



            </div>


        </footer>

    );

};


export default Footer;