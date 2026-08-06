import { ArrowLeft, ArrowUpRight, Building2, CalendarDays, MapPin, Maximize2, UserRound } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { projects } from '../data/projects.js';
import FadeInSection from '../components/home/FadeInSection.jsx';
import './ProjectsPage.css';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find(item => item.slug === slug);
  if (!project) return <Navigate to="/projects" replace/>;
  const details = [[UserRound,'Client',project.client],[MapPin,'Location',project.location],[CalendarDays,'Completion Year',project.year],[Maximize2,'Project Size',project.size]];
  return <main className="project-detail">
    <section className="project-detail__hero"><img src={project.photos[0]} alt={project.title}/><div className="project-detail__shade"/><div className="container project-detail__hero-copy"><Link to="/projects"><ArrowLeft size={17}/> All Projects</Link><span>{project.type}</span><h1>{project.title}</h1><p>{project.location} · Completed {project.year}</p></div></section>
    <FadeInSection className="project-reveal project-reveal--overview"><section className="project-detail__overview container">
      <div className="project-detail__story"><span className="small-label">Project overview</span><h2>Designed for dependable performance, every day.</h2>{project.description.map(text=><p key={text}>{text}</p>)}</div>
      <dl className="project-facts">{details.map(([Icon,label,value])=><div key={label}><dt><Icon size={18}/>{label}</dt><dd>{value}</dd></div>)}</dl>
    </section></FadeInSection>
    <FadeInSection className="project-reveal project-reveal--scope"><section className="project-scope"><div className="container project-scope__inner"><div><Building2 size={28}/><span>Scope of Work</span></div><p>{project.scope}</p></div></section></FadeInSection>
    <FadeInSection className="project-reveal project-reveal--gallery"><section className="project-gallery container"><div className="project-gallery__heading"><span>Project gallery</span><h2>A closer look</h2></div><div className="project-gallery__grid">{project.photos.map((photo,index)=><figure key={photo} className={index===0?'is-wide':''} style={{'--gallery-delay':`${index * 100}ms`}}><img src={photo} alt={`${project.title} view ${index+1}`} loading="lazy"/><figcaption>View {String(index+1).padStart(2,'0')}</figcaption></figure>)}</div></section></FadeInSection>
    <FadeInSection className="project-reveal project-reveal--next"><section className="next-project"><div className="container"><span>Continue exploring</span><Link to={`/projects/${projects[(projects.indexOf(project)+1)%projects.length].slug}`}>{projects[(projects.indexOf(project)+1)%projects.length].title}<ArrowUpRight/></Link></div></section></FadeInSection>
  </main>;
}
