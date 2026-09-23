import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import ProcessSteps from '../components/ProcessSteps';
import Reveal from '../components/Reveal';
import CtaBand from '../components/CtaBand';
import { CURATED_MEDIA } from '../data/media';
import WebStudio from '../components/WebStudio';
import DesignShowcase from '../components/DesignShowcase';
import PrintPromise from '../components/PrintPromise';

export default function DisciplinePage({ service }) {
  return (
    <>
      <Seo title={service.seoTitle} description={service.seoDescription} path={service.path} image={service.image} />
      <PageHero eyebrow={service.label} title={service.heroTitle} copy={service.heroCopy} />
      {service.slug === 'web' ? <WebStudio deliverables={service.deliverables} /> : (
        <>
          <Reveal as="section" className="section">
            <div className="wrap discipline-hero">
              <img src={service.image} alt={service.imageAlt} decoding="async" />
              <div>
                <span className="eyebrow">What we make</span>
                <div className="deliverables">
                  {service.deliverables.map(([title, copy]) => (
                    <article className="deliverable" key={title}>
                      <h3>{title}</h3>
                      <p>{copy}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal as="section" className="section visual-proof">
            <div className="wrap">
              <div className="section-head">
                <span className="eyebrow">In the studio</span>
                <div><h2>From the studio.</h2><p>See the materials and production work behind our projects.</p></div>
              </div>
              <div className="proof-grid">
                {CURATED_MEDIA[service.slug].map((item, index) => (
                  <figure className={index === 0 ? 'proof-feature' : undefined} key={item.src}>
                    {item.type === 'video' ? <video src={item.src} controls muted playsInline preload="metadata" aria-label={item.label} /> : <img src={item.src} alt={item.label} loading="lazy" />}
                    <figcaption>{item.label}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </Reveal>
        </>
      )}
      {service.slug === 'design' && <DesignShowcase />}
      {service.slug === 'print' && <PrintPromise />}
      <Reveal as="section" className="section dark-section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Our approach</span>
            <div>
              <h2>How the work gets done.</h2>
              <p>We agree on the scope, review points and delivery before production begins.</p>
            </div>
          </div>
          <ProcessSteps steps={service.process} />
        </div>
      </Reveal>
      <CtaBand title={service.ctaTitle} copy="Tell us what it needs to achieve." />
    </>
  );
}
