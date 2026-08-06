import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Navigate, NavLink, useParams } from 'react-router-dom';
import FadeInSection from '../components/home/FadeInSection.jsx';
import { services } from '../data/services.js';
import './ServicePage.css';

export default function ServicePage(){
  const { service = 'mechanical-electrical-plumbing' } = useParams();
  const current = services.find(item=>item.slug===service);
  if(!current) return <Navigate to="/services/mechanical-electrical-plumbing" replace/>;
  const Icon=current.icon;
  return <main className="service-page">
    <section className="service-page__hero"><div className="container"><span>Wamest expertise</span><h1>Our Services</h1><p>Integrated expertise. One accountable partner.</p></div></section>
    <div className="container service-page__layout">
      <aside className="service-index"><div className="service-index__intro"><span>Service portfolio</span><h2>What we do</h2></div><nav aria-label="Service pages">{services.map(item=><NavLink key={item.slug} to={`/services/${item.slug}`} className={item.slug===service?'active':''}><span>{item.title}</span><p>{item.description}</p><ArrowRight size={17}/></NavLink>)}</nav></aside>
      <article className="service-content" key={service}>
        <FadeInSection className="service-content__intro"><span>{current.short}</span><h2>{current.tagline}</h2><p>{current.description}</p></FadeInSection>
        <FadeInSection className="service-content__image"><img src={current.image} alt={current.title} loading="lazy" decoding="async"/><div><Icon size={30}/><span>{current.title}</span></div></FadeInSection>
        <div className="service-capabilities">{current.features.map(([title,text],index)=><FadeInSection key={title} delay={`${index*.1}s`} className={`service-capability${index%2?' is-reversed':''}`}><div className="service-capability__number">0{index+1}</div><div><span>Capability</span><h3>{title}</h3><p>{text}</p><div className="service-capability__promise"><CheckCircle2 size={18}/> Tailored to your operational requirements</div></div></FadeInSection>)}</div>
      </article>
    </div>
  </main>;
}
