import React from 'react'
import { Link } from 'react-router-dom';
import TeamSection from '../component/TeamSection.tsx';
import Testimonials from '../component/Testimonials.tsx';

const Team: React.FC = () => {
    return (
        <>
            {/* <!-- ====================================== About Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">Our Team</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/team"> Team</Link>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Team Section Two ===================================== --> */}
            <section className="section-eight">
                <div className="container">
                    <p className="cap-text cost-cal fade_up">our team</p>
                    <h2 className="sec-text mazing pb-0 fade_up">The Team Behind Every Job</h2>
                    <TeamSection />
                </div>
            </section>
            {/* <!-- ====================================== Section Nine ===================================== --> */}
            <section className="section-nine pt-0">
                <Testimonials />
            </section>
        </>
    )
}

export default Team