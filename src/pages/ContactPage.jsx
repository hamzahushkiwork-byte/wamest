import { ArrowUpRight, BriefcaseBusiness, Clock3, Mail, MapPin, Phone, Send } from 'lucide-react';
import FadeInSection from '../components/home/FadeInSection.jsx';
import './ContactPage.css';

const contactDetails = [
  { icon:MapPin, label:'Visit our office', value:'Business District, Amman, Jordan', action:'Open in Maps', href:'https://www.google.com/maps/search/?api=1&query=Amman%2C%20Jordan' },
  { icon:Phone, label:'Call our team', value:'+962 6 000 0000', action:'Call now', href:'tel:+96260000000' },
  { icon:Mail, label:'Send an email', value:'info@wamest.com', action:'Write to us', href:'mailto:info@wamest.com' },
  { icon:Clock3, label:'Working hours', value:'Sunday–Thursday · 8:00–17:00', action:'Jordan time', href:null },
];

const openings = [
  { title:'MEP Engineer', team:'Technical Operations', location:'Amman', type:'Full time' },
  { title:'Facility Supervisor', team:'Operations', location:'Riyadh', type:'Full time' },
  { title:'HSE Officer', team:'Health & Safety', location:'Amman', type:'Full time' },
];

export default function ContactPage(){
  return <main className="contact-page">
    <section className="contact-hero"><div className="container contact-hero__inner"><div><span>Let’s work together</span><h1>Contact<br/><em>Wamest.</em></h1></div><p>Whether you need an integrated service partner, specialist expertise or a new career opportunity, our team is ready to listen.</p></div></section>

    <section className="contact-details container">
      <FadeInSection className="contact-section-heading"><span>Contact details</span><h2>Start a conversation</h2><p>Connect with the right team through the channel that works best for you.</p></FadeInSection>
      <div className="contact-detail-grid">{contactDetails.map(({icon:Icon,label,value,action,href},index)=><FadeInSection key={label} delay={`${index*.08}s`} className="contact-detail-card"><div className="contact-detail-card__icon"><Icon size={24}/></div><span>{label}</span><h3>{value}</h3>{href?<a href={href} target={href.startsWith('http')?'_blank':undefined} rel={href.startsWith('http')?'noreferrer':undefined}>{action}<ArrowUpRight size={16}/></a>:<p>{action}</p>}</FadeInSection>)}</div>
    </section>

    <section className="contact-map-section"><div className="container contact-map-layout"><FadeInSection className="contact-map-copy"><span>Find us</span><h2>Right where business happens.</h2><p>Visit our team to discuss your facilities, technical operations or sustainability goals in person.</p><a href="https://www.google.com/maps/search/?api=1&query=Amman%2C%20Jordan" target="_blank" rel="noreferrer" className="btn btn-blue">Get directions <ArrowUpRight size={17}/></a></FadeInSection><FadeInSection delay=".12s" className="contact-map"><iframe title="Wamest office location" src="https://www.google.com/maps?q=Amman%2C%20Jordan&z=13&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></FadeInSection></div></section>

    <section className="careers-section container">
      <FadeInSection className="careers-intro"><div><span>Careers at Wamest</span><h2>Build spaces.<br/>Build your future.</h2></div><div><p>Join a team where technical excellence, responsibility and continuous improvement shape meaningful work every day.</p><a href="mailto:careers@wamest.com?subject=Career%20Application" className="careers-email"><Send size={17}/> careers@wamest.com</a></div></FadeInSection>
      <div className="career-list">{openings.map((job,index)=><FadeInSection key={job.title} delay={`${index*.08}s`} className="career-row"><span>0{index+1}</span><div><small>{job.team}</small><h3>{job.title}</h3></div><div className="career-row__meta"><span><MapPin size={15}/>{job.location}</span><span><BriefcaseBusiness size={15}/>{job.type}</span></div><a href={`mailto:careers@wamest.com?subject=Application%20for%20${encodeURIComponent(job.title)}`} aria-label={`Apply for ${job.title}`}><ArrowUpRight/></a></FadeInSection>)}</div>
      <FadeInSection className="careers-note"><p>Don’t see the right position? We are always interested in meeting capable people.</p><a href="mailto:careers@wamest.com?subject=General%20Career%20Application">Send an open application <ArrowUpRight size={17}/></a></FadeInSection>
    </section>
  </main>;
}
