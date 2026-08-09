import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DropdownArrow from "../assets/images/svg/dropdown-arrow.svg";
import CrossArrow from "../assets/images/svg/cross-arrow.svg";
import servicesData from "../data/servicesData.json";

interface ServiceOption {
    title: string;
}

const REQUEST_TYPES = ["Customer Service Request", "Become a Partner", "Become a Vendor"];

const ContactForm: React.FC = () => {
    const location = useLocation();

    const serviceOptions: string[] = (servicesData as ServiceOption[]).map((s) => s.title);

    const [requestType, setRequestType] = useState<string>(REQUEST_TYPES[0]);
    const [serviceNeeded, setServiceNeeded] = useState<string>(serviceOptions[0]);
    const [openDropdown, setOpenDropdown] = useState<"type" | "service" | null>(null);

    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        message: "",
    });
    const [images, setImages] = useState<File[]>([]);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const dropdownRef1 = useRef<HTMLDivElement | null>(null);
    const dropdownRef2 = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                dropdownRef1.current && !dropdownRef1.current.contains(e.target as Node) &&
                dropdownRef2.current && !dropdownRef2.current.contains(e.target as Node)
            ) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const handleChange = (field: keyof typeof formValues) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues((prev) => ({ ...prev, [field]: e.target.value }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImages(Array.from(e.target.files).slice(0, 5));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!formValues.name || !formValues.phone || !formValues.email) {
            setError("Please fill in your name, phone, and email so we can get back to you.");
            return;
        }

        // NOTE: no backend is wired up yet. This mailto: is a working
        // placeholder so the form is functional today — swap for a real
        // API/CRM submission (e.g. a serverless form endpoint) when ready.
        const subject = encodeURIComponent(`${requestType}: ${serviceNeeded}`);
        const body = encodeURIComponent(
            `Name: ${formValues.name}\nEmail: ${formValues.email}\nPhone: ${formValues.phone}\n` +
            `Location: ${formValues.location}\nRequest type: ${requestType}\nService needed: ${serviceNeeded}\n\n` +
            `Message:\n${formValues.message}\n\n` +
            (images.length > 0
                ? `(${images.length} image${images.length > 1 ? "s" : ""} attached in the form — please re-attach to this email)`
                : "")
        );
        window.location.href = `mailto:info@nyumbadynamics.com?subject=${subject}&body=${body}`;

        setSubmitted(true);
    };

    return (
        <>
            {(
                <section className="contact-form-section">
                    <div className="container">
                        <div className="row form-sec-row">

                            <div className="col-xxl-6 col-xl-6 col-lg-5">
                                <p className="cap-text fade_up">contact nyumba dynamics</p>
                                <h2 className="sec-text get-toch fade_up">Get In Touch With Us</h2>
                                <p className="sec-sub-text fade_up">
                                    Request a service, ask for a quotation, or register as a partner or vendor —
                                    our team responds fast, every day of the week.
                                </p>

                                <p className="call-support-text">Call Us</p>
                                <a href="tel:+256761648679" className="tel-num">+256 7513 53757</a>

                                <div className="adres-main-home fade_up">
                                    <div>
                                        <p className="call-support-text">Our Address</p>
                                        <p className="tel-num addees">Opposite St. Francis Primary School, Ntinda, Kampala, Uganda</p>
                                    </div>
                                    <div>
                                        <p className="call-support-text">Our Mail Address</p>
                                        <a href="mailto:info@nyumbadynamics.com" className="tel-num addees">
                                            info@nyumbadynamics.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-6 col-xl-6 col-lg-7">
                                {submitted ? (
                                    <div className="contac-form-main zoom_in" style={{ textAlign: 'center' }}>
                                        <h3 className="rich">Thanks — we've got your request.</h3>
                                        <p className="clane" style={{ marginTop: 10 }}>
                                            Your email app should have opened with the details filled in. Send it
                                            across and our team will follow up shortly. You can also reach us
                                            directly on WhatsApp for a faster response.
                                        </p>
                                        <a
                                            href="https://wa.me/256761648679"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-quote btn-whatsapp"
                                            style={{ marginTop: 20, display: 'inline-flex', alignItems: 'center', gap: 8 }}
                                        >
                                            Chat On WhatsApp
                                        </a>
                                    </div>
                                ) : (
                                    <form className="contac-form-main zoom_in" onSubmit={handleSubmit}>

                                        <div className="calcult-from-grid contac-form">

                                            <div>
                                                <h3 className="input-label-text">I am a...*</h3>
                                                <div className="input-main" ref={dropdownRef1}>
                                                    <div className="wrapper">
                                                        <div
                                                            className="formDropDown"
                                                            onClick={() => setOpenDropdown(openDropdown === "type" ? null : "type")}
                                                        >
                                                            {requestType}
                                                            <img
                                                                className={`arrow-icon-form ${openDropdown === "type" ? "up" : ""}`}
                                                                src={DropdownArrow}
                                                                alt="arrow"
                                                            />
                                                        </div>
                                                        {openDropdown === "type" && (
                                                            <div className="position-relative">
                                                                <ul className="formDropDown-ul-list">
                                                                    {REQUEST_TYPES.map((item) => (
                                                                        <li
                                                                            key={item}
                                                                            onClick={() => {
                                                                                setRequestType(item);
                                                                                setOpenDropdown(null);
                                                                            }}
                                                                        >
                                                                            <span>{item}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="input-label-text">service required*</h3>
                                                <div className="input-main" ref={dropdownRef2}>
                                                    <div className="wrapper">
                                                        <div
                                                            className="formDropDown"
                                                            onClick={() => setOpenDropdown(openDropdown === "service" ? null : "service")}
                                                        >
                                                            {serviceNeeded}
                                                            <img
                                                                className={`arrow-icon-form ${openDropdown === "service" ? "up" : ""}`}
                                                                src={DropdownArrow}
                                                                alt="arrow"
                                                            />
                                                        </div>
                                                        {openDropdown === "service" && (
                                                            <div className="position-relative">
                                                                <ul className="formDropDown-ul-list" style={{ maxHeight: 240, overflowY: 'auto' }}>
                                                                    {serviceOptions.map((item) => (
                                                                        <li
                                                                            key={item}
                                                                            onClick={() => {
                                                                                setServiceNeeded(item);
                                                                                setOpenDropdown(null);
                                                                            }}
                                                                        >
                                                                            <span>{item}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="input-label-text">Full Name*</h3>
                                                <input
                                                    type="text"
                                                    placeholder="Enter your full name"
                                                    autoComplete="off"
                                                    value={formValues.name}
                                                    onChange={handleChange("name")}
                                                />
                                            </div>

                                            <div>
                                                <h3 className="input-label-text">email address*</h3>
                                                <input
                                                    type="email"
                                                    placeholder="Enter your email"
                                                    autoComplete="off"
                                                    value={formValues.email}
                                                    onChange={handleChange("email")}
                                                />
                                            </div>

                                            <div>
                                                <h3 className="input-label-text">phone number*</h3>
                                                <input
                                                    type="text"
                                                    placeholder="Enter phone number"
                                                    autoComplete="off"
                                                    value={formValues.phone}
                                                    onChange={handleChange("phone")}
                                                />
                                            </div>

                                            <div>
                                                <h3 className="input-label-text">location*</h3>
                                                <input
                                                    type="text"
                                                    placeholder="e.g. Ntinda, Kampala"
                                                    autoComplete="off"
                                                    value={formValues.location}
                                                    onChange={handleChange("location")}
                                                />
                                            </div>
                                        </div>

                                        <div className="your-message-input">
                                            <h3 className="input-label-text">your message</h3>
                                            <input
                                                type="text"
                                                placeholder="Tell us a bit about the job"
                                                autoComplete="off"
                                                value={formValues.message}
                                                onChange={handleChange("message")}
                                            />
                                        </div>

                                        <div className="your-message-input">
                                            <h3 className="input-label-text">upload project images (optional)</h3>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                multiple
                                                onChange={handleImageChange}
                                            />
                                            {images.length > 0 && (
                                                <p className="fessional" style={{ marginTop: 8 }}>
                                                    {images.length} image{images.length > 1 ? "s" : ""} selected
                                                </p>
                                            )}
                                        </div>

                                        {error && (
                                            <p className="fessional" style={{ color: '#c0392b', marginTop: 12 }}>{error}</p>
                                        )}

                                        <div className="get-cost-estimate send-main-btn">
                                            <button className="btn-quote" type="submit">
                                                Send Request
                                                <img src={CrossArrow} alt="cross-arrow" />
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>

                        {location.pathname === "/contact" && (
                            <iframe
                                className="map-iframe"
                                src="https://www.google.com/maps?q=St.+Francis+Primary+School+Ntinda+Kampala+Uganda&output=embed"
                                allowFullScreen
                                loading="lazy"
                                title="Nyumba Dynamics location - Ntinda, Kampala, Uganda"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        )}
                    </div>
                </section>
            )}
        </>
    );
};

export default ContactForm;
