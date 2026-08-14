import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./assets/css/swap.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/swiper.min.css";
import "./assets/css/style.css";
import "./assets/css/media_query.css";


// Pages
import HomeSlider from "./pages/HomeSlider.tsx";
import About from "./pages/About.tsx";
import Team from "./pages/Team.tsx";
import Services from "./pages/Services.tsx";
import ServiceDetail from "./pages/ServiceDetail.tsx";
import SmartHome from "./pages/SmartHome.tsx";
import Project1 from "./pages/Project1.tsx";
import Project1Single from "./pages/Project1Single.tsx";
import OurBlog from "./pages/OurBlog.tsx";
import Contact from "./pages/Contact.tsx";
import GetQuote from "./pages/GetQuote.tsx";
import NotFound from "./pages/NotFound.tsx";


// Components
import Footer from "./component/Footer.tsx";
import Header from "./component/Header.tsx";
import ScrollTopPage from "./component/ScrollTopPage.tsx";
import ScrollRevealController from "./component/ScrollRevealController.tsx";
import Preloader from "./component/Preloader.tsx";
import ScrollToTopButton from "./component/ScrollToTopButton.tsx";
import MobileBottomNav from "./component/MobileBottomNav.tsx";
import SmoothScroll from "./hooks/SmoothScroll.ts";
import ContactForm from "./component/ContactForm.tsx";
import WhatsAppFloat from "./component/WhatsAppFloat";


function App() {
  return (
    <BrowserRouter>

      <SmoothScroll />

      <ScrollTopPage />

      <ScrollRevealController />

      <Header />

      <Preloader />


      <Routes>

        {/* Home */}
        <Route 
          path="/" 
          element={<HomeSlider />} 
        />


        {/* Company */}
        <Route 
          path="/about" 
          element={<About />} 
        />

        <Route 
          path="/team" 
          element={<Team />} 
        />


        {/* Services */}
        <Route 
          path="/services" 
          element={<Services />} 
        />

        <Route 
          path="/services/:slug" 
          element={<ServiceDetail />} 
        />

        <Route 
          path="/smart-home" 
          element={<SmartHome />} 
        />


        {/* Properties / Projects */}
        <Route 
          path="/properties" 
          element={<Project1 />} 
        />

        <Route 
          path="/property/:id" 
          element={<Project1Single />} 
        />


        {/* Blog */}
        <Route 
          path="/blog" 
          element={<OurBlog />} 
        />


        {/* Contact */}
        <Route 
          path="/contact" 
          element={<Contact />} 
        />

        <Route 
          path="/consultation" 
          element={<GetQuote />} 
        />


        {/* 404 */}
        <Route 
          path="*" 
          element={<NotFound />} 
        />

      </Routes>

    <WhatsAppFloat />
    
      <ContactForm />

      <Footer />

      <MobileBottomNav />

      <ScrollToTopButton />

      

    </BrowserRouter>
    
  );
}


export default App;
