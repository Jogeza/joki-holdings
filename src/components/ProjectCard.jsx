import { categoryLabel } from '../data/projects';

export default function ProjectCard({ project }) {
  const label = categoryLabel(project.category);
  return (
    <article className="project">
      <a className="project-media" href={project.image} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} image`}>
        <img src={project.image} alt={project.alt} loading="lazy" decoding="async" />
        <div className="project-overlay">
          <span>View image</span>
          <b aria-hidden="true">↗</b>
        </div>
      </a>
      <div className="project-meta">
        <div>
          <small>{label}</small>
          <h3>{project.title}</h3>
        </div>
        <p>{project.outcome}</p>
      </div>
    </article>
  );
}
