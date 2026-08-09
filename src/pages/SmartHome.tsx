import React from 'react';
import { Link } from 'react-router-dom';
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import img1 from '../assets/images/services/slider-img1.jpg';
import img3 from '../assets/images/services/slider-img3.jpg';
import svg1 from '../assets/images/svg/services-svg1.svg';
import svg2 from '../assets/images/svg/services-svg2.svg';
import svg3 from '../assets/images/svg/services-svg3.svg';
import svg4 from '../assets/images/svg/services-svg4.svg';
import svg5 from '../assets/images/svg/services-svg5.svg';
import svg6 from '../assets/images/svg/services-svg6.svg';
import HowWorkBg from '../assets/images/about/how-to-work-bg.png';
import PageSEO from '../component/PageSEO.tsx';

const smartHomeFeatures = [
    { title: 'Smart Locks', desc: 'Keyless entry, remote locking, and guest access codes — no more lost keys.', icon: svg1 },
    { title: 'CCTV Cameras', desc: 'HD coverage with night vision and footage you can review from your phone.', icon: svg2 },
    { title: 'Motion Sensors', desc: 'Instant alerts the moment something moves where it shouldn\'t.', icon: svg3 },
    { title: 'Smart Lighting', desc: 'Schedule, dim, and control every light from one app or your voice.', icon: svg4 },
    { title: 'Video Doorbells', desc: 'See and speak to visitors at your gate before you ever open it.', icon: svg5 },
    { title: 'Remote Monitoring', desc: 'Check in on your property from anywhere, any time, in real time.', icon: svg6 },
];

const SmartHome: React.FC = () => {
    return (
        <>
            <PageSEO
                title="Smart Home Solutions Uganda | Smart Living Uganda"
                description="Smart locks, CCTV, lighting, home automation and remote monitoring installed and connected by Nyumba Dynamics \u2014 smart living for Kampala homes and businesses."
            />
            <section
                className="heroSection"
                style={{ backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.88) 27.86%, rgba(0,0,0,0.00) 100%), url(${img1})` }}
            >
                <div className="container">
                    <h1 className="img-header-text fade_down">Smart Home Solutions</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/smart-home">SMART HOME</Link>
                    </div>
                </div>
            </section>

            <section className="section-two">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <p className="cap-text fade_up">smart living, uganda</p>
                            <h2 className="sec-text fade_up">Your Home, Connected And Under Control</h2>
                            <p className="sec-sub-text fade_up">
                                Nyumba Dynamics designs and installs complete smart home systems — locks, cameras,
                                lighting, and monitoring that work together from a single app. Whether you're
                                securing a family home or a commercial property, we build a system around how you
                                actually live and work, not a one-size-fits-all package.
                            </p>
                            <div className="hero-cta-group" style={{ marginTop: 30 }}>
                                <Link to="/consultation" className="btn-quote">
                                    Get A Smart Home Quote
                                    <img src={CrossArrow} alt="cross-arrow" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <img src={img3} alt="Smart home installation" style={{ width: '100%', borderRadius: 20 }} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-three">
                <div className="container">
                    <p className="cap-text fade_up">the technology</p>
                    <div className="section-main-text-flex">
                        <h2 className="sec-text pb-0 fade_up">Everything Your Smart Home Needs</h2>
                        <p className="sec-sub-text ornare fade_up">Installed, configured, and connected by our team —
                            with training so you're comfortable running it day one.</p>
                    </div>
                    <div className="row services-page-row" style={{ marginTop: 30 }}>
                        {smartHomeFeatures.map((feature) => (
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6" key={feature.title}>
                                <div className="cleaning-card">
                                    <div className="services-svg-main" style={{ marginTop: 30 }}>
                                        <img src={feature.icon} alt={feature.title} />
                                    </div>
                                    <div className="card-containe">
                                        <h3 className="services-name">{feature.title}</h3>
                                        <p className="services-card-sub-text">{feature.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-six" style={{ position: 'relative' }}>
                <div className="container position-relative">
                    <img className="how-to-work-bg" src={HowWorkBg} alt="" />
                    <p className="cap-text cost-cal position-relative fade_up">Get Started</p>
                    <h2 className="sec-text mazing position-relative fade_up">Ready For A Smarter Home?</h2>
                    <p className="sec-sub-text scetur position-relative fade_up">
                        Tell us about your property and what you'd like automated or secured — we'll recommend
                        a system and a straightforward quote.
                    </p>
                    <div className="hero-cta-group position-relative" style={{ justifyContent: 'center', marginTop: 30 }}>
                        <Link to="/consultation" className="btn-quote">
                            Request a Consultation
                            <img src={CrossArrow} alt="cross-arrow" />
                        </Link>
                        <a
                            href="https://wa.me/256761648679?text=Hi%20Nyumba%20Dynamics%2C%20I%27d%20like%20to%20ask%20about%20smart%20home%20solutions."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-quote btn-whatsapp"
                        >
                            Chat On WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SmartHome;
