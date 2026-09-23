import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import CtaBand from '../components/CtaBand';
import { CURATED_MEDIA } from '../data/media';
import ImageStoryBand from '../components/ImageStoryBand';

const VALUES = [
  ['Clarity before decoration', 'Every design decision should help the audience understand, trust or act.'],
  ['Making is part of design', 'Materials, production and technical constraints shape the solution from the start.'],
  ['Small by intention', 'A focused studio keeps communication direct and accountability visible.'],
];

const TEAM = [
  ['Creative direction', 'Strategy, identity and visual systems', 'The same thinking carries from concept through final application.'],
  ['Production network', 'Print, fabrication and digital delivery', 'Specialist capability is brought in around a clear creative direction.'],
];

export default function About() {
  return (
    <>
      <Seo
        title="About the Studio | Joki Holdings"
        description="Meet Joki Holdings, a Kampala-rooted design, print and web studio working with businesses locally and worldwide."
        path="/about"
        image="/media/IMG-20260409-WA0010.jpeg"
      />
      <PageHero
        eyebrow="About Joki"
        title="Rooted in Kampala. Built to travel."
        copy="We are a focused creative studio bringing brand identity, print production and web design under one roof."
      />
      <Reveal as="section" className="section">
        <div className="wrap">
          <div className="story">
            <div>
              <span className="eyebrow">Our story</span>
              <h2>Close to the idea. Close to the making.</h2>
            </div>
            <div className="story-copy">
              <p>Joki Holdings grew from hands-on graphics and production work into a broader studio practice. The principle stayed the same: strong design only matters when it survives contact with the real world.</p>
              <p>That is why we think beyond the presentation. We consider how a menu will be handled, how signage will be installed, how a website will respond on a small screen and how a visual identity will remain recognisable as it grows.</p>
              <p>Kampala is home. Digital collaboration lets us work comfortably across borders, while print production remains closely managed from Uganda.</p>
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
        title="Close to the work."
        copy="Ideas are tested where they will live — on paper, fabric, walls and screens — before they leave the studio."
        position="center"
      />
      <Reveal as="section" className="section dark-section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">The studio</span>
            <div>
              <h2>A compact core, expanded when the work needs it.</h2>
              <p>Projects stay closely directed while trusted specialists join for development, photography, fabrication or production.</p>
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
      <CtaBand title="Working from Kampala, worldwide." copy="Start with a clear brief and we can take it from there." label="Talk to the studio →" />
    </>
  );
}
