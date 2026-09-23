import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Monogram from '../components/Monogram';
import Marquee from '../components/Marquee';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import ProcessSteps from '../components/ProcessSteps';
import Reveal from '../components/Reveal';
import CtaBand from '../components/CtaBand';
import ImageStoryBand from '../components/ImageStoryBand';
import WebShowcase from '../components/WebShowcase';
import TypewriterHeadline from '../components/TypewriterHeadline';
import { SERVICES, HOME_PROCESS, WHY_POINTS } from '../data/services';
import { PROJECTS } from '../data/projects';

export default function Home() {
  return (
    <>
      <Seo
        title="Joki Holdings | Design, Print & Web Studio"
        description="Joki Holdings designs brands, printed materials and websites in Kampala, Uganda."
        path="/"
        image="/images/hero-kampala-studio-v2.png"
      />
      <section className="hero hero-photo">
        <Monogram />
        <img className="hero-backdrop" src="/images/hero-kampala-studio-v2.png" alt="Creative director working in the Joki Holdings studio" fetchpriority="high" />
        <div className="hero-photo-overlay" aria-hidden="true" />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Design · Print · Web</span>
            <TypewriterHeadline />
            <p>Brand identity, printed materials and websites from our studio in Kampala.</p>
            <div className="hero-actions">
              <Link className="btn btn-gold" to="/work">View our work</Link>
              <Link className="btn btn-outline" to="/contact">Request a quote</Link>
            </div>
            <div className="hero-proof" aria-label="Core services">
              <span>Brand systems</span><span>Print production</span><span>Responsive websites</span>
            </div>
          </div>
        </div>
      </section>
      <Marquee />
      <Reveal as="section" className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">What we do</span>
            <div>
              <h2>Design, print and web under one roof.</h2>
              <p>Come to us for one job or a project that needs all three.</p>
            </div>
          </div>
          <div className="cards">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} dark={index === 1} />
            ))}
          </div>
        </div>
      </Reveal>
      <WebShowcase />
      <Reveal as="section" className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Selected work</span>
            <div>
              <h2>Selected projects.</h2>
              <p>See examples of our print, identity and website work.</p>
            </div>
          </div>
          <div className="work-grid">
            {PROJECTS.slice(0, 4).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="section-foot">
            <Link className="btn btn-ink" to="/work">View the full portfolio →</Link>
          </div>
        </div>
      </Reveal>
      <ImageStoryBand
        image="/media/joki-holdings-print-portfolio-09.jpeg"
        eyebrow="Print production"
        title="From artwork to finished print."
        copy="We check artwork, materials and finishes before a print job goes into production."
        position="center 44%"
      />
      <Reveal as="section" className="section why">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Why Joki</span>
            <div>
              <h2>One team from brief to delivery.</h2>
              <p>We plan the work, prepare the files and follow the job through to completion.</p>
            </div>
          </div>
          <div className="outcomes">
            {WHY_POINTS.map(([, title, copy], index) => (
              <article className="outcome" key={title}>
                <div className="outcome-top">
                  <span className="outcome-index">0{index + 1}</span>
                  <span className="outcome-mark" aria-hidden="true">↗</span>
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal as="section" className="section dark-section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">How we work</span>
            <div>
              <h2>From brief to delivery.</h2>
              <p>We agree on the scope, review the work with you and prepare the final deliverables.</p>
            </div>
          </div>
          <ProcessSteps steps={HOME_PROCESS} />
        </div>
      </Reveal>
      <Reveal as="section" className="section kampala">
        <div className="wrap">
          <h2>Based in Kampala.<br />Available beyond Uganda.</h2>
          <p>We handle print work locally and collaborate on design and web projects remotely.</p>
        </div>
      </Reveal>
      <CtaBand title="Tell us about your project." copy="Share what you need, your deadline and any budget you have in mind." />
    </>
  );
}
