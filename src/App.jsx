import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import DisciplinePage from './pages/DisciplinePage';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { getService } from './data/services';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<DisciplinePage service={getService('design')} />} />
          <Route path="/print" element={<DisciplinePage service={getService('print')} />} />
          <Route path="/web" element={<DisciplinePage service={getService('web')} />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
