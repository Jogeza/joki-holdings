import React from 'react'
import { Link } from 'react-router-dom';
import WhatsappSvg from '../assets/images/svg/whatsapp.svg';
import FacebookSvg from '../assets/images/svg/facebook.svg';
import TwitterSvg from '../assets/images/svg/twitter.svg';
import InstaSvg from '../assets/images/svg/insta.svg';
import PageSEO from '../component/PageSEO.tsx';

const Contact: React.FC = () => {
    return (
        <>
            <PageSEO
                title="Contact Us | Property Services Uganda"
                description="Reach Nyumba Dynamics in Ntinda, Kampala \u2014 call, WhatsApp, or send a service request for handyman, construction and smart home services across Uganda."
            />
            {/* <!-- ====================================== About Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">Contact Us</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/contact">Contact Us</Link>
                    </div>
                </div>
            </section>

            {/* Quick-contact strip: WhatsApp + socials. The full address/phone/
                email/form/map block renders globally via ContactForm.tsx. */}
            <section className="section-two pb-0">
                <div className="container">
                    <div className="media-logo-call-footer" style={{ marginTop: 0 }}>
                        <a
                            href="https://wa.me/256761648679"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="call-detl"
                        >
                            <div className="img-main-call">
                                <img src={WhatsappSvg} alt="whatsapp" style={{ width: 32 }} />
                            </div>
                            <div>
                                <p>Chat With Us Now</p>
                                <span className="call-detl-text" style={{ fontSize: 22 }}>WhatsApp Us</span>
                            </div>
                        </a>

                        <div className="footer-med-icons-main">
                            <a href="https://www.facebook.com/nyumbadynamics" target="_blank" rel="noopener noreferrer" className="footer-med-icons">
                                <img src={FacebookSvg} alt="facebook" />
                            </a>
                            <a href="https://twitter.com/nyumbadynamics" target="_blank" rel="noopener noreferrer" className="footer-med-icons">
                                <img src={TwitterSvg} alt="twitter" />
                            </a>
                            <a href="https://www.instagram.com/nyumbadynamics" target="_blank" rel="noopener noreferrer" className="footer-med-icons">
                                <img src={InstaSvg} alt="insta" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
