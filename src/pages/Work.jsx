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
        title="Selected work."
        copy="Browse printed materials, brand identity projects and websites by category."
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
        eyebrow="Print details"
        title="Materials and finishes matter."
        copy="See examples of our paper, apparel, signage and personalised print work."
        position="center 46%"
      />
      <MediaArchive />
      <CtaBand title="Have a project in mind?" copy="Send us the details, deadline and budget to get started." />
    </>
  );
}
