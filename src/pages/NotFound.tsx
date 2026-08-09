import React from 'react'
import { Link } from 'react-router-dom'
import OopsErrorGif from '../assets/images/error/OopsError.gif';
import CrossArrow from '../assets/images/svg/cross-arrow.svg';

const NotFound: React.FC = () => {
    return (
        <>
            {/* <!-- ====================================== About Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">404 Page</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <span>404 PAGE</span>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Nine ===================================== --> */}
            <section className="section-eight testimonial-page">
                <div className="container">
                    <p className="cap-text cost-cal fade_up">404 ERROR</p>
                    <h2 className="sec-text mazing  fade_up">Oops ! The Page Not Found.</h2>
                    <p className="sec-sub-text scetur fade_up">We apologize for the inconvenience \u2014 that page
                        doesn't exist or has moved. Head back home, or get in touch and we'll help you find what
                        you're after.</p>
                    <div className="error-img-btn">
                        <img className="error-img" src={OopsErrorGif} alt="" />
                        <Link to="/" className="btn-quote">Back To Home
                            <img src={CrossArrow} alt="cross-arrow" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NotFound