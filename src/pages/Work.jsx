import { useState } from 'react';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import CtaBand from '../components/CtaBand';
import MediaArchive from '../components/MediaArchive';
import ImageStoryBand from '../components/ImageStoryBand';
import { PROJECTS, CATEGORIES } from '../data/projects';

export default function Work() {
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? PROJECTS : PROJECTS.filter((project) => project.category === filter);

  return (
    <>
      <Seo
        title="Selected Work | Joki Holdings"
        description="Selected print, web and brand identity work by Joki Holdings in Kampala."
        path="/work"
        image="/images/press.jpeg"
      />
      <PageHero
        eyebrow="Selected work"
        title="Work made for real use."
        copy="A portfolio of print production, identity applications and digital work, shown clearly and without presentation-only mock-ups."
      />
      <Reveal as="section" className="section">
        <div className="wrap">
          <div className="filter-bar" role="group" aria-label="Filter projects by category">
            {CATEGORIES.map(([value, label]) => (
              <button
                type="button"
                key={value}
                className={filter === value ? 'active' : undefined}
                aria-pressed={filter === value}
                onClick={() => setFilter(value)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="work-grid">
            {visible.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </Reveal>
      <ImageStoryBand
        image="/media/joki-holdings-print-portfolio-25.jpeg"
        eyebrow="Made for real use"
        title="Details that hold up beyond the mock-up."
        copy="From personalised pieces to full production runs, every finish is chosen for the place, person and purpose it needs to serve."
        position="center 46%"
      />
      <MediaArchive />
      <CtaBand title="Ready to make your next project?" copy="Share the goal, timing and deliverables. We’ll recommend a clear way forward." />
    </>
  );
}
