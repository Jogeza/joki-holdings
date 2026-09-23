import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import CtaBand from '../components/CtaBand';
import { CURATED_MEDIA } from '../data/media';
import ImageStoryBand from '../components/ImageStoryBand';

const VALUES = [
  ['Keep it clear', 'People should be able to read and use what we make.'],
  ['Plan for production', 'Paper, finishes, installation and screen sizes matter from the start.'],
  ['Stay involved', 'The people planning the job follow it through to delivery.'],
];

const TEAM = [
  ['Creative direction', 'Identity and graphic design', 'We develop the design and prepare it for the places it will be used.'],
  ['Production network', 'Print, fabrication and websites', 'We bring in specialist support when a project needs it.'],
];

export default function About() {
  return (
    <>
      <Seo
        title="About the Studio | Joki Holdings"
        description="Learn about Joki Holdings, a design, print and web studio based in Kampala, Uganda."
        path="/about"
        image="/media/IMG-20260409-WA0010.jpeg"
      />
      <PageHero
        eyebrow="About Joki"
        title="A design and production studio in Kampala."
        copy="We make brand identities, printed materials and websites for businesses in Uganda and beyond."
      />
      <Reveal as="section" className="section">
        <div className="wrap">
          <div className="story">
            <div>
              <span className="eyebrow">Our story</span>
              <h2>From graphics and print to web.</h2>
            </div>
            <div className="story-copy">
              <p>Joki Holdings began with graphics and print production. Today we also design brand identities and websites.</p>
              <p>We think about how each piece will be used: whether a menu can take daily handling, a sign fits its space, or a website works on a phone.</p>
              <p>Our studio is in Kampala. We manage print work locally and collaborate on design and web projects remotely.</p>
            </div>
          </div>
          <div className="values">
            {VALUES.map(([title, copy]) => (
              <article className="value" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal as="section" className="section about-gallery">
        <div className="wrap proof-grid">
          {CURATED_MEDIA.about.map((item, index) => (
            <figure className={index === 0 ? 'proof-feature' : undefined} key={item.src}>
              <img src={item.src} alt={item.label} loading="lazy" />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
      <ImageStoryBand
        image="/media/joki-holdings-print-portfolio-23.jpeg"
        eyebrow="Inside Joki"
        title="Made in the studio."
        copy="We test materials, check proofs and review the finished work before delivery."
        position="center"
      />
      <Reveal as="section" className="section dark-section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">The studio</span>
            <div>
              <h2>A small team with specialist support.</h2>
              <p>Depending on the job, we work with developers, photographers, fabricators and print specialists.</p>
            </div>
          </div>
          <div className="team">
            {TEAM.map(([eyebrow, title, copy]) => (
              <article className="team-note" key={title}>
                <span className="eyebrow">{eyebrow}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
      <CtaBand title="Work with Joki." copy="Tell us what you need and when you need it." label="Contact the studio →" />
    </>
  );
}
