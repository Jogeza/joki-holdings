import React from 'react'
import { Link } from 'react-router-dom';
import Video2 from '../assets/video/video2.mp4';
import headphoneIcon from '../assets/images/svg/headphone-icon.svg'
import AboutSvg1 from '../assets/images/svg/about-svg1.svg';
import AboutSvg2 from '../assets/images/svg/about-svg2.svg';
import AboutSvg3 from '../assets/images/svg/about-svg3.svg';
import AboutSvg4 from '../assets/images/svg/about-svg4.svg';
import AboutImg1 from '../assets/images/about/about-img1.jpg';
import AboutImg2 from '../assets/images/about/about-img2.jpg';
import AboutImg3 from '../assets/images/about/about-img3.jpg';
import Subtract from '../assets/images/about/Subtract.png'
import CheckTransparent from '../assets/images/svg/check-transparent.svg';
import HowWorkBg from '../assets/images/about/how-to-work-bg.png';
import HowWorkSvg1 from '../assets/images/svg/how-to-work-svg1.svg';
import HowWorkSvg2 from '../assets/images/svg/how-to-work-svg2.svg';
import HowWorkSvg3 from '../assets/images/svg/how-to-work-svg3.svg';
import HowWorkArrow from '../assets/images/svg/how-to-work-arrow.svg';
import TeamSection from '../component/TeamSection.tsx';
import Testimonials from '../component/Testimonials.tsx';
import PageSEO from '../component/PageSEO.tsx';


const About: React.FC = () => {
    return (
        <>
            <PageSEO
                title="About Us | Handyman Services Uganda"
                description="HEMS Nyumba Dynamics Company Limited \u2014 a Kampala-based team providing professional Home and Enterprise Maintenance Services across Uganda. Our mission, vision and values."
            />

            {/* <!-- ====================================== About Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">About Us</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/about"> ABOUT US</Link>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Mission, Vision & Core Values ===================================== --> */}
            <section className="section-two pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <p className="cap-text fade_up">our mission</p>
                            <h2 className="sec-text fade_up" style={{ fontSize: 32, lineHeight: '40px' }}>Our Mission</h2>
                            <p className="sec-sub-text fade_up">
                                To provide exceptional, professional, and trustworthy handyman services that ensure
                                homes and businesses remain functional, efficient, and stress-free.
                            </p>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <p className="cap-text fade_up">our vision</p>
                            <h2 className="sec-text fade_up" style={{ fontSize: 32, lineHeight: '40px' }}>Our Vision</h2>
                            <p className="sec-sub-text fade_up">
                                To become Uganda's most trusted and sought-after maintenance services provider.
                            </p>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: 50 }}>
                        <p className="cap-text fade_up">what we stand for</p>
                        <h2 className="sec-text pb-0 fade_up" style={{ fontSize: 32, lineHeight: '40px' }}>Our Core Values</h2>
                        <div className="service-categories-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginTop: 30 }}>
                            {[
                                { title: 'Professionalism', desc: 'We show up on time, dressed for the job, and treat every property with respect.' },
                                { title: 'Integrity', desc: 'Honest quotes, honest work, no surprises on the invoice.' },
                                { title: 'Quality Workmanship', desc: 'Work that holds up \u2014 done right the first time.' },
                                { title: 'Timeliness', desc: 'We respect your schedule and deliver on the timeline we agree to.' },
                                { title: 'Customer Satisfaction', desc: 'Your peace of mind is the actual measure of a job well done.' },
                                { title: 'Safety', desc: 'Every technician follows safety practice, on every job, every time.' },
                            ].map((value) => (
                                <div className="service-category-card" key={value.title} style={{ padding: 24 }}>
                                    <h3 className="service-category-title" style={{ fontSize: 18 }}>{value.title}</h3>
                                    <p className="service-category-desc" style={{ paddingBottom: 0 }}>{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== About Section Two ===================================== --> */}
            <section className="section-two">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <p className="cap-text fade_in">about nyumba dynamics</p>
                            <h2 className="sec-text fade_up">Our Mission Is Your Peace of Mind</h2>
                            <p className="sec-sub-text fade_up">HEMS Nyumba Dynamics Company Limited (NYD) is a handyman services
                                company based in Kampala, Uganda, founded in 2025. We specialise in Home and Enterprise
                                Maintenance Services (HEMS) — from basic construction and repair, such as electrical, plumbing
                                and masonry, to advanced solutions like smart home integration and security systems. Our mission
                                is to provide exceptional, professional and trustworthy service that keeps homes and businesses
                                functional, efficient and stress-free.</p>
                            <div className="about-grid-box-main">
                                <div className="about-box-main zoom_in">
                                    <div className="about-svg-main">
                                        <img src={AboutSvg1} alt="" />
                                    </div>
                                    <div>
                                        <h3 className="expeStaff">Experience Staff</h3>
                                        <p className="fessional">Professional and Experienced staff ready to help you anytime.</p>
                                    </div>
                                </div>
                                <div className="about-box-main zoom_in">
                                    <div className="about-svg-main">
                                        <img src={AboutSvg2} alt="" />
                                    </div>
                                    <div>
                                        <h3 className="expeStaff">Vetted & Trained</h3>
                                        <p className="fessional">Every technician is vetted and trained before setting foot on your property.</p>
                                    </div>
                                </div>
                                <div className="about-box-main zoom_in">
                                    <div className="about-svg-main">
                                        <img src={AboutSvg3} alt="" />
                                    </div>
                                    <div>
                                        <h3 className="expeStaff">Fast Response</h3>
                                        <p className="fessional">Book a service and get a technician assigned quickly, every day of the week.
                                        </p>
                                    </div>
                                </div>
                                <div className="about-box-main zoom_in">
                                    <div className="about-svg-main">
                                        <img src={AboutSvg4} alt="" />
                                    </div>
                                    <div>
                                        <h3 className="expeStaff">Quality Equipment</h3>
                                        <p className="fessional">We use quality tools and materials on every job, from small repairs to full builds.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="about-sec-main">
                                <div className="call">
                                    <div className="headphone-main">
                                        <img src={headphoneIcon} alt="headphone-icon" />
                                    </div>
                                    <div className="need-help-main">
                                        <p>Need Help Now?</p>
                                        <a href="tel:+256761648679">+256 7616 48679</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 position-relative">
                            <div className="sub-img-main">
                                <img className="about-img1" src={AboutImg1} alt="Nyumba Dynamics team on site" />
                                <img className="subtract-img" src={Subtract} alt="" />
                                <img className="about-img2" src={AboutImg2} alt="Completed Nyumba Dynamics project" />
                                <img className="about-img3" src={AboutImg3} alt="Nyumba Dynamics craftsmanship detail" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Six ===================================== --> */}
            <section className="section-six about-section-three">
                <div className="container position-relative">
                    <img className="how-to-work-bg" src={HowWorkBg} alt="" />
                    <p className="cap-text cost-cal position-relative fade_up">How it works</p>
                    <h2 className="sec-text mazing position-relative fade_up">Hire The Right Professional In 3 Simple Steps</h2>
                    <p className="sec-sub-text scetur position-relative fade_up">No jargon, no guessing games — just a
                        straightforward path from "I need help with this" to a job done right.</p>
                    <div className="how-work-step-box">
                        <div className="how-work-step-box-sub fade_up">
                            <div className="how-to-work-circle">
                                <img src={HowWorkSvg1} alt="" />
                            </div>
                            <h3>Tell Us What You Need</h3>
                            <p className="fessional send-info">Request a service or a free quote through the site,
                                phone, or WhatsApp — whichever is easiest for you.
                            </p>
                        </div>
                        <div className="how-work-step-box-sub how-to-work-arrow">
                            <div>
                                <img src={HowWorkArrow} alt="" />
                            </div>
                        </div>
                        <div className="how-work-step-box-sub fade_up">
                            <div className="how-to-work-circle">
                                <img src={HowWorkSvg2} alt="" />
                            </div>
                            <h3>Get A Clear Quote</h3>
                            <p className="fessional send-info">We assess the job and send a straightforward quote —
                                no hidden costs once work begins.
                            </p>
                        </div>
                        <div className="how-work-step-box-sub how-to-work-arrow">
                            <div>
                                <img src={HowWorkArrow} alt="" />
                            </div>
                        </div>
                        <div className="how-work-step-box-sub fade_up">
                            <div className="how-to-work-circle">
                                <img src={HowWorkSvg3} alt="" />
                            </div>
                            <h3>We Get It Done</h3>
                            <p className="fessional send-info">A vetted technician completes the job on schedule,
                                and we follow up to make sure you're satisfied.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Four ===================================== --> */}
            <section className="section-four">
                <div className="container">
                    <div className="row why-choose-row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <p className="cap-text fade_up">why choose us</p>
                            <h2 className="sec-text fade_up">All Services Under One Roof, Done Right The First Time.</h2>
                            <p className="sec-sub-text fade_up">Construction, safety, smart home, and lifestyle
                                services from a single, accountable team — so you're not juggling five different
                                contractors for one property.</p>
                            <div className="check-box-main">
                                <div className="check-box-main-sub fade_up">
                                    <img src={CheckTransparent} alt="check-transparent" />
                                    <div>
                                        <h2>Transparent Pricing</h2>
                                        <p>Every job starts with a clear, written quote — no surprise charges once
                                            the work is done.</p>
                                    </div>
                                </div>
                                <div className="check-box-main-sub fade_up">
                                    <img src={CheckTransparent} alt="check-transparent" />
                                    <div>
                                        <h2>We Are Committed</h2>
                                        <p>From a single repair to a full smart home install, we follow through
                                            until the job is genuinely finished.</p>
                                    </div>
                                </div>
                                <div className="check-box-main-sub fade_up">
                                    <img src={CheckTransparent} alt="check-transparent" />
                                    <div>
                                        <h2>Ongoing Maintenance Plans</h2>
                                        <p>Regular upkeep scheduled around your property, so small issues get
                                            caught before they become expensive ones.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 sec-video2">
                            <video autoPlay muted loop playsInline className="video2">
                                <source src={Video2} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="sadas"></div>
                            <img className="why-choose-img3" src={AboutImg3} alt="Nyumba Dynamics craftsmanship detail" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Eight ===================================== --> */}
            <section className="section-eight pt-0">
                <div className="container">
                    <p className="cap-text cost-cal fade_up">our team</p>
                    <h2 className="sec-text mazing pb-0 fade_up">The Team Behind Every Job</h2>
                    <TeamSection limit={4} />
                </div>
            </section>
            {/* <!-- ====================================== Section Nine ===================================== --> */}
            <section className="section-nine pt-0">
                <Testimonials />
            </section>
        </>
    )
}

export default About