import React from 'react'
import { Link } from 'react-router-dom'
import HowWorkBg from '../assets/images/about/how-to-work-bg.png';
import HowWorkSvg1 from '../assets/images/svg/how-to-work-svg1.svg';
import HowWorkSvg2 from '../assets/images/svg/how-to-work-svg2.svg';
import HowWorkSvg3 from '../assets/images/svg/how-to-work-svg3.svg';
import HowWorkArrow from '../assets/images/svg/how-to-work-arrow.svg';

const GetQuote: React.FC = () => {
    return (
        <>
            {/* <!-- ====================================== Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">Get Your Quote</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/consultation">Get Your Quote</Link>
                    </div>
                </div>
            </section>
            {/* The service request form itself renders globally via ContactForm.tsx
                on every page except this one is now included too (it no longer
                excludes /consultation) — see App.jsx / ContactForm.tsx. */}
            <section className="contact-form-section">
                <div className="container position-relative">
                    <img className="how-to-work-bg" src={HowWorkBg} alt="" />
                    <p className="cap-text cost-cal position-relative fade_up">How it works</p>
                    <h2 className="sec-text mazing position-relative fade_up">From Request To Job Done In 3 Steps</h2>
                    <p className="sec-sub-text scetur position-relative fade_up">
                        Fill in the form below with what you need — our team reviews it and gets back to you with
                        a clear quote, usually the same day.
                    </p>
                    <div className="how-work-step-box">
                        <div className="how-work-step-box-sub fade_up">
                            <div className="how-to-work-circle">
                                <img src={HowWorkSvg1} alt="" />
                            </div>
                            <h3>Submit Your Request</h3>
                            <p className="fessional send-info">Tell us the service, your location, and any details
                                that help us prepare an accurate quote.
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
                            <h3>We Review & Quote</h3>
                            <p className="fessional send-info">Our team assesses the request and responds with a
                                clear, written quote — no hidden costs.
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
                            <h3>We Get To Work</h3>
                            <p className="fessional send-info">Once you confirm, we schedule a vetted technician
                                and get the job done on time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GetQuote
