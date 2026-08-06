import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects.js';
import './ProjectsPage.css';

export default function ProjectsPage() {
  const [activeType, setActiveType] = useState('All Projects');
  const types = ['All Projects', ...new Set(projects.map(project => project.type))];
  const visibleProjects = activeType === 'All Projects' ? projects : projects.filter(project => project.type === activeType);

  return <main className="portfolio-page">
    <section className="portfolio-hero">
      <div className="container"><span>Selected work</span><h1>Projects built around<br/><em>performance.</em></h1><p>Explore environments where integrated teams, thoughtful planning and reliable service come together.</p></div>
    </section>
    <section className="portfolio-list container">
      <div className="portfolio-list__intro"><span>Our portfolio</span><h2>Places we proudly support</h2><p>Each project reflects a tailored operational strategy and one consistent commitment to excellence.</p></div>
      <div className="project-filters" role="group" aria-label="Filter projects by type">
        {types.map(type => <button key={type} type="button" className={activeType === type ? 'is-active' : ''} aria-pressed={activeType === type} onClick={() => setActiveType(type)}>{type}<span>{type === 'All Projects' ? projects.length : projects.filter(project => project.type === type).length}</span></button>)}
      </div>
      <div className="project-card-grid">
        {visibleProjects.map((project, index) => <Link className="portfolio-card" to={`/projects/${project.slug}`} key={`${activeType}-${project.slug}`} style={{'--delay':`${index * 70}ms`}}>
          <div className="portfolio-card__image"><img src={project.photos[0]} alt={project.title} loading="lazy" decoding="async"/><span>{String(index + 1).padStart(2,'0')}</span><div className="portfolio-card__action"><ArrowUpRight/></div></div>
          <div className="portfolio-card__content"><span>{project.type}</span><h3>{project.title}</h3><p>{project.location} · {project.year}</p></div>
        </Link>)}
      </div>
    </section>
  </main>;
}
