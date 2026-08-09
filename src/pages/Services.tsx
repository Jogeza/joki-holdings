import React from 'react'
import { Link } from 'react-router-dom'
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import servicesData from "../data/servicesData.json";
import categoriesData from "../data/serviceCategories.json";
import { serviceImageMap, serviceSvgMap, ServiceItem } from '../component/ServicesFeatured.tsx';
import PageSEO from '../component/PageSEO.tsx';

interface Category {
    slug: string;
    title: string;
    description: string;
    serviceSlugs: string[];
}

const Services: React.FC = () => {

    const services = servicesData as ServiceItem[];
    const categories = categoriesData as Category[];

    return (
        <>
            <PageSEO
                title="Property Services Uganda | Electrical, Plumbing, Smart Home & More"
                description="Fourteen property services in Kampala: electrical, plumbing, masonry, carpentry, welding, painting, CCTV, smart homes, cleaning, landscaping, interior design, pest control and air conditioning."
            />
            {/* <!-- ====================================== About Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">Our Services</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/services">SERVICES</Link>
                    </div>
                </div>
            </section>

            {/* <!-- ====================================== Services By Category ===================================== --> */}
            {categories.map((category, index) => {
                const categoryServices = services.filter((s) =>
                    category.serviceSlugs.includes(s.slug)
                );

                if (categoryServices.length === 0) return null;

                return (
                    <section
                        className={`section-eight ${index % 2 === 1 ? 'testimonial-page' : ''}`}
                        key={category.slug}
                    >
                        <div className="container">
                            <p className="cap-text fade_up">nyumba dynamics services</p>
                            <div className="section-main-text-flex">
                                <h2 className="sec-text pb-0 fade_up">{category.title}</h2>
                                <p className="sec-sub-text ornare fade_up">{category.description}</p>
                            </div>
                            <div className="row services-page-row" style={{ marginTop: 30 }}>
                                {categoryServices.map((item) => (
                                    <div
                                        className="col-xxl-4 col-xl-4 col-lg-4 col-md-6" key={item.id}
                                    >
                                        <div className="cleaning-card">
                                            <div className="cleaning-card-img-main">
                                                <img
                                                    src={serviceImageMap[item.img]}
                                                    alt={item.title}
                                                />
                                            </div>
                                            <div className="services-svg-main">
                                                <img
                                                    src={serviceSvgMap[item.svg]}
                                                    alt={item.title}
                                                />
                                            </div>
                                            <div className="card-containe">
                                                <h3 className="services-name">{item.title}</h3>
                                                <p className="services-card-sub-text">{item.desc}</p>
                                            </div>
                                            <Link to={item.link} className="card-learn-more">
                                                Learn More <img src={CrossArrow} alt="cross-arrow" />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );
            })}
        </>
    )
}

export default Services
