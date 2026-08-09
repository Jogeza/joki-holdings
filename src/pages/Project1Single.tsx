import React from 'react'
import { Link, useParams, Navigate } from 'react-router-dom';
import projectData from '../data/projectData.json';
import { projectImages, ProjectItem } from '../component/ProjectSlider.tsx';
import ArrowLeft from '../assets/images/svg/arrow-left.svg';
import ArrowRight from '../assets/images/svg/arrow-right.svg';
import FacebookSvg from '../assets/images/svg/facebook.svg';
import TwitterSvg from '../assets/images/svg/twitter.svg';
import InstaSvg from '../assets/images/svg/insta.svg';
import WhatsappSvg from '../assets/images/svg/whatsapp.svg';
import CrossArrow from '../assets/images/svg/cross-arrow.svg';

const Project1Single: React.FC = () => {

    const { id } = useParams<{ id: string }>();
    const projects = projectData as ProjectItem[];
    const currentIndex = projects.findIndex((p) => String(p.id) === id);

    if (currentIndex === -1) {
        return <Navigate to="/properties" replace />;
    }

    const project = projects[currentIndex];
    const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
    const nextProject = projects[(currentIndex + 1) % projects.length];

    return (
        <>
            {/* <!-- ====================================== Project Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">{project.title}</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/properties">PROJECTS / </Link>
                        <Link to={project.link}> {project.category.toUpperCase()}</Link>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Project Detail ===================================== --> */}
            <section className="section-two">
                <div className="container">
                    <div className="row all-services-row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                            <img className="layers-img1 zoom_in" src={projectImages[project.image]} alt={project.title} />
                            <p className="cap-text fade_up" style={{ marginTop: 30 }}>{project.category}</p>
                            <p className="fusce pb-2">{project.description}</p>
                            <p className="fusce mt-0">
                                This {project.category.toLowerCase()} project was completed by our team, coordinated
                                from initial site assessment through to final handover. As with every job, the client
                                received a written quote up front, a clear timeline, and a walkthrough before sign-off.
                            </p>

                            <div className="diamond-nextbtn-head">
                                <div className="diamond-next-btn">
                                    <Link to={prevProject.link} className="diamond-btn next">
                                        <img src={ArrowLeft} alt="left-arrow" />
                                    </Link>
                                    <h3>{prevProject.title}</h3>
                                </div>
                                <div className="diamond-next-btn">
                                    <h3>{nextProject.title}</h3>
                                    <Link to={nextProject.link} className="diamond-btn next">
                                        <img src={ArrowRight} alt="right-arrow" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-8 all-service-col">
                            <div className="send-inquiry-form">
                                <h2 className="project-info-text">Project Info</h2>
                                <div className="project-info-main pt-0">
                                    <p>Category :</p>
                                    <p>{project.category}</p>
                                </div>
                                <div className="project-info-main">
                                    <p>Location :</p>
                                    <p>Kampala, Uganda</p>
                                </div>
                                <div className="project-info-main">
                                    <p>Delivered By :</p>
                                    <p>Nyumba Dynamics</p>
                                </div>
                                <Link to="/consultation" className="btn-quote" style={{ marginTop: 20, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                                    Start A Similar Project
                                    <img src={CrossArrow} alt="cross-arrow" />
                                </Link>
                                <div className="footer-med-icons-main project-details-icon">
                                    <a href="https://www.facebook.com/nyumbadynamics" target="_blank" rel="noopener noreferrer" className="footer-med-icons">
                                        <img src={FacebookSvg} alt="facebook" />
                                    </a>
                                    <a href="https://twitter.com/nyumbadynamics" target="_blank" rel="noopener noreferrer" className="footer-med-icons">
                                        <img src={TwitterSvg} alt="twitter" />
                                    </a>
                                    <a href="https://www.instagram.com/nyumbadynamics" target="_blank" rel="noopener noreferrer" className="footer-med-icons">
                                        <img src={InstaSvg} alt="insta" />
                                    </a>
                                    <a href="https://wa.me/256761648679" target="_blank" rel="noopener noreferrer" className="footer-med-icons">
                                        <img src={WhatsappSvg} alt="whatsapp" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project1Single
