import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import LogoSvg from "../assets/images/svg/logo.svg";
import menu2 from "../assets/images/svg/menu2.svg";
import CloseIcon from "../assets/images/svg/close-icon.svg";
import DropdownArrow from "../assets/images/svg/dropdown-arrow.svg";
import headphoneIcon from "../assets/images/svg/headphone-icon.svg";
import CrossArrow from "../assets/images/svg/cross-arrow.svg";


interface MenuChild {
    label: string;
    link: string;
}


const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);

    const location = useLocation();


    const toggleDropdown = (index:number) => {
        setOpenDropdown(
            openDropdown === index ? null : index
        );
    };


    const isParentActive = (children:MenuChild[]) => {

        return children.some(
            child => child.link === location.pathname
        );

    };



    const menuItems = [

        {
            label:"Services",
            children:[
                {
                    label:"All Services",
                    link:"/services"
                },
                {
                    label:"Construction & Repair",
                    link:"/services"
                },
                {
                    label:"Safety & Maintenance",
                    link:"/services"
                },
                {
                    label:"Smart Home Solutions",
                    link:"/smart-home"
                },
                {
                    label:"Lifestyle Enhancements",
                    link:"/services"
                }
            ]
        },


        {
            label:"Projects",
            children:[
                {
                    label:"Residential Projects",
                    link:"/properties"
                },
                {
                    label:"Commercial Projects",
                    link:"/properties"
                },
                {
                    label:"Smart Home Installations",
                    link:"/properties"
                }
            ]
        },


        {
            label:"Company",
            children:[
                {
                    label:"About Nyumba Dynamics",
                    link:"/about"
                },
                {
                    label:"Our Team",
                    link:"/team"
                },
                {
                    label:"Request a Quote",
                    link:"/consultation"
                }
            ]
        },


        {
            label:"Insights",
            children:[
                {
                    label:"Home Maintenance Tips",
                    link:"/blog"
                },
                {
                    label:"Smart Living Guides",
                    link:"/blog"
                }
            ]
        }

    ];




    return (

        <>


            {
                menuOpen &&

                <div
                    className="overlay active"
                    onClick={() => setMenuOpen(false)}
                />

            }




            <header 
                className="header"
                id="top-navbar"
            >



                <div className="header-container">



                    <Link
                        to="/"
                        className="logo nyumba-logo"
                    >

                        <img
                            src={LogoSvg}
                            alt="Nyumba Dynamics - Home and Enterprise Maintenance Services"
                        />

                    </Link>




                    <div
                        className="hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >


                        {

                            !menuOpen &&

                            <img
                                src={menu2}
                                className="menu-icon"
                                alt="Open menu"
                            />

                        }



                        {

                            menuOpen &&

                            <img
                                src={CloseIcon}
                                className="close-icon"
                                alt="Close menu"
                            />

                        }


                    </div>







                    <nav
                        className={`nav ${menuOpen ? "open" : ""}`}
                    >




                        <div className="for-mobile-menu position-relative">



                            <Link
                                to="/"
                                className="mobile-logo nyumba-mobile-logo"
                            >

                                <img
                                    src={LogoSvg}
                                    alt="Nyumba Dynamics Logo"
                                />


                            </Link>





                            <ul className="menu">


                            <li className="dropdown">
                                <Link
                                    to="/"
                                    className={`dropdown-btn ${location.pathname === "/" ? "active" : ""}`}
                                >
                                    Home
                                </Link>
                            </li>


                            {

                                menuItems.map((item,index)=>(


                                    <li
                                        key={index}
                                        className="dropdown"
                                    >




                                        <button
                                            className={
                                                `dropdown-btn ${
                                                    isParentActive(item.children)
                                                    ? "active"
                                                    :""
                                                }`
                                            }

                                            onClick={() =>
                                                toggleDropdown(index)
                                            }
                                        >


                                            {item.label}



                                            <img
                                                src={DropdownArrow}
                                                alt="Dropdown arrow"
                                            />



                                            <span className="dots-circle"></span>



                                        </button>





                                        <ul
                                            className={
                                                `submenu ${
                                                    openDropdown === index
                                                    ? "open"
                                                    :""
                                                }`
                                            }
                                        >



                                            {

                                                item.children.map(
                                                    (sub,i)=>(


                                                        <li
                                                            key={i}
                                                        >


                                                            <Link

                                                                to={sub.link}

                                                                className={
                                                                    location.pathname === sub.link
                                                                    ?"active"
                                                                    :""
                                                                }


                                                                onClick={() =>
                                                                    setMenuOpen(false)
                                                                }

                                                            >

                                                                {sub.label}

                                                            </Link>


                                                        </li>


                                                    )

                                                )

                                            }



                                        </ul>




                                    </li>


                                ))

                            }



                                <li>

                                    <Link
                                        to="/contact"
                                        onClick={() =>
                                            setMenuOpen(false)
                                        }
                                    >

                                        Contact

                                    </Link>


                                </li>


                            </ul>


                        </div>








                        <div className="nav-actions">





                            <div className="call">


                                <div className="headphone-main">


                                    <img
                                        src={headphoneIcon}
                                        alt="Contact Nyumba Dynamics"
                                    />


                                </div>




                                <div className="need-help-main">


                                    <p>
                                        Talk To An Expert
                                    </p>


                                    <a href="tel:+256761648679">

                                        +256 7616 48679

                                    </a>


                                </div>



                            </div>







                            <Link
                                to="/consultation"
                                className="btn-quote get-quote-btn"
                            >


                                Get Free Quote



                                <img
                                    src={CrossArrow}
                                    alt="Arrow"
                                />


                            </Link>





                        </div>





                    </nav>





                </div>



            </header>




        </>

    );

};


export default Header;