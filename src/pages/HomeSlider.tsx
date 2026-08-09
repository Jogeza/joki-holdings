import React from 'react'
import { Link } from 'react-router-dom';
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import headphoneIcon from '../assets/images/svg/headphone-icon.svg'
import AboutImg1 from '../assets/images/about/about-img1.jpg';
import AboutImg2 from '../assets/images/about/about-img2.jpg';
import AboutImg3 from '../assets/images/about/about-img3.jpg';
import Subtract from '../assets/images/about/Subtract.png'
import SmartHomeImg from '../assets/images/services/slider-img3.jpg';
import HomeHeroSlider from '../component/HomeHeroSlider.tsx';
import ServiceCategories from '../component/ServiceCategories.tsx';
import PageSEO from '../component/PageSEO.tsx';
import ProjectSlider from '../component/ProjectSlider.tsx';
import Testimonials from '../component/Testimonials.tsx';
import ImageZoomScroll from '../component/ImageZoomScroll.tsx';

const trustStats = [
    { stat: '14+', label: 'Services, One Team' },
    { stat: '100%', label: 'Vetted & Trained Technicians' },
    { stat: 'Kampala', label: 'Wide Coverage' },
    { stat: 'Free', label: 'No-Obligation Quotes' },
];

const HomeSlider: React.FC = () => {
    return (
        <>
            <PageSEO
                title="Handyman & Smart Home Services Uganda"
                description="Home Maintenance Services (HEMS) in Kampala, Uganda — electrical, plumbing, CCTV installation, smart home automation, cleaning and more. Hire the right professionals."
            />

            {/* 1. Hero */}
            <section className="hero-slider-section">
                <HomeHeroSlider />
            </section>

            {/* Premium image reveal */}
            <ImageZoomScroll />

            {/* 2. Service Categories */}
            <section className="section-two">
                <div className="container">
                    <p className="cap-text fade_up">what we do</p>
                    <div className="section-main-text-flex">
                        <h2 className="sec-text pb-0 fade_up">Four Ways We Take Care Of Your Property</h2>
                        <p className="sec-sub-text ornare fade_up">Request the one you need, or let us assess the
                            full picture.</p>
                    </div>
                    <ServiceCategories />
                </div>
            </section>

            {/* 3. Why Choose Nyumba Dynamics — short, number-led, no icon grid */}
            <section className="section-four why-choose-stats">
                <div className="container">
                    <p className="cap-text fade_up">why choose us</p>
                    <h2 className="sec-text pb-0 fade_up">One Team You Can Actually Rely On</h2>
                    <div className="trust-stats-row">
                        {trustStats.map((item) => (
                            <div className="trust-stat-item fade_up" key={item.label}>
                                <span className="trust-stat-number">{item.stat}</span>
                                <span className="trust-stat-label">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Featured Projects */}
            <section className="section-seven">
                <div className="container">
                    <p className="cap-text fade_up">our work</p>
                    <div className="section-main-text-flex">
                        <h2 className="sec-text pb-0 fade_up">Recent Projects Across Kampala</h2>
                        <p className="sec-sub-text ornare fade_up">A look at completed construction, security, and
                            smart home work for homes and businesses across the city.</p>
                    </div>
                </div>
                <ProjectSlider />
                <div className="container" style={{ textAlign: 'center', marginTop: 20 }}>
                    <Link to="/properties" className="btn-quote-outline-dark">
                        View All Projects
                    </Link>
                </div>
            </section>

            {/* 5. Smart Home Solutions teaser */}
            <section className="section-two smart-home-teaser">
                <div className="container">
                    <div className="row" style={{ alignItems: 'center' }}>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <img src={SmartHomeImg} alt="Smart home installation in Kampala" style={{ width: '100%', borderRadius: 20 }} />
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <p className="cap-text fade_up">smart living, uganda</p>
                            <h2 className="sec-text fade_up">Your Home, Connected And Under Control</h2>
                            <p className="sec-sub-text fade_up">Smart locks, CCTV, lighting, and remote monitoring —
                                installed, connected, and running from a single app.</p>
                            <Link to="/smart-home" className="btn-quote">
                                Explore Smart Home Solutions
                                <img src={CrossArrow} alt="cross-arrow" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. About Nyumba Dynamics — brief */}
            <section className="section-two">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <p className="cap-text fade_in">about nyumba dynamics</p>
                            <h2 className="sec-text fade_up">Home and Enterprise Maintenance Services, Under One Roof</h2>
                            <p className="sec-sub-text fade_up">HEMS Nyumba Dynamics Company Limited delivers professional
                                handyman, construction and maintenance services across Kampala. We bridge the gap between
                                unreliable informal technicians and expensive specialized contractors.</p>
                            <div className="about-sec-main">
                                <Link to="/about" className="btn-quote our-services-btn">About Us
                                    <img src={CrossArrow} alt="cross-arrow" />
                                </Link>
                                <div className="call">
                                    <div className="headphone-main">
                                        <img src={headphoneIcon} alt="headphone-icon" />
                                    </div>
                                    <div className="need-help-main">
                                        <p>Need Help Now?</p>
                                        <a href="tel:+2567761648679">+256 7616 48679</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 position-relative">
                            <div className="sub-img-main">
                                <img className="about-img1" src={AboutImg1} alt="Nyumba Dynamics team at work" />
                                <img className="subtract-img" src={Subtract} alt="" />
                                <img className="about-img2" src={AboutImg2} alt="Completed Nyumba Dynamics project" />
                                <img className="about-img3" src={AboutImg3} alt="Nyumba Dynamics craftsmanship detail" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Testimonials */}
            <section className="section-nine pt-0">
                <Testimonials />
            </section>

            {/* 8. Contact CTA */}
            <section className="section-five">
                <div className="container" style={{ textAlign: 'center' }}>
                    <p className="cap-text cost-cal fade_up">get started</p>
                    <h2 className="sec-text fami-cal pb-0 fade_up">Ready To Get Started?</h2>
                    <p className="fami-cal" style={{ color: '#FFF', opacity: 0.85, marginTop: 10 }}>
                        Tell us what you need and we'll come back with a clear, no-surprises quote.
                    </p>
                    <div className="hero-cta-group" style={{ justifyContent: 'center', marginTop: 30 }}>
                        <Link to="/consultation" className="btn-quote">
                            Request a Free Quote
                            <img src={CrossArrow} alt="cross-arrow" />
                        </Link>
                        <a
                            href="https://wa.me/2567761648679"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-quote-outline"
                        >
                            Chat On WhatsApp
                        </a>
                    </div>
                </div>
            </section>
            {/* 9. Footer renders globally via App.jsx */}
        </>
    )
}

export default HomeSlider
