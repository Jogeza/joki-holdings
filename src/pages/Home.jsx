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
        description="Joki Holdings is a Kampala studio creating design, print and web experiences for ambitious businesses."
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
            <p>Brand identity, commercial print and websites—designed and delivered by one Kampala studio.</p>
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
              <h2>Everything your brand needs to show up well.</h2>
              <p>Choose one service or bring the whole project to one team.</p>
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
              <h2>Work you can inspect.</h2>
              <p>Open any project image for a closer look, or visit the full archive.</p>
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
        eyebrow="Designed through production"
        title="From screen to finished piece."
        copy="Design, proofing and production stay connected under one studio, so the final work feels as considered as the first idea."
        position="center 44%"
      />
      <Reveal as="section" className="section why">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Why Joki</span>
            <div>
              <h2>Fewer handoffs. Better finished work.</h2>
              <p>Strategy, design and production stay connected, so decisions carry through to the final result.</p>
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
              <p>A visible, disciplined process keeps decisions clear and avoids expensive surprises late in the project.</p>
            </div>
          </div>
          <ProcessSteps steps={HOME_PROCESS} />
        </div>
      </Reveal>
      <Reveal as="section" className="section kampala">
        <div className="wrap">
          <h2>Built in Kampala.<br />Working worldwide.</h2>
          <p>Local roots, global standard — we work with clients across time zones as easily as across town.</p>
        </div>
      </Reveal>
      <CtaBand title="Have something worth making?" copy="Tell us what the project needs to achieve." />
    </>
  );
}
