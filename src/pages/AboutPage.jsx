import { Navigate, NavLink, useParams } from 'react-router-dom';
import { ArrowRight, Award, Building2, Eye, Handshake, HeartHandshake, Leaf, Lightbulb, Quote, ShieldCheck, Sparkles, Users } from 'lucide-react';
import './AboutPage.css';

const pages = {
  'company-overview': { title: 'Company Overview', eyebrow: 'Who we are', icon: Building2, image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85', lead: 'Integrated facilities management, delivered through one trusted partner.', body: ['WAMEST brings management, cleaning, technical, security and support services together under one administration. This integrated approach gives our partners a consistent standard of service, clearer accountability and spaces that work better every day.', 'We serve residences, malls, hotels, business centres, schools, hospitals and industrial facilities with flexible solutions shaped around the needs of every site.'], stat: ['One team', 'Complete accountability'] },
  'ceo-message': { title: 'CEO Message', eyebrow: 'Leadership', icon: Quote, image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1400&q=85', lead: 'Service excellence begins with listening, responsibility and trust.', body: ['At WAMEST, we believe every environment should help people feel safe, comfortable and ready to do their best work. That belief guides our decisions, our investments and the way we serve each client.', 'Our promise is simple: to keep improving. We empower our people, embrace practical innovation and build lasting partnerships grounded in transparency and measurable results.'], stat: ['Our promise', 'Excellence, every day'] },
  vision: { title: 'Vision', eyebrow: 'Where we are going', icon: Eye, image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85', lead: 'To set the regional standard for intelligent, responsible facility management.', body: ['We envision workplaces and public spaces where every detail is managed with care—spaces that are safer, more efficient and more sustainable.', 'By combining capable people, reliable processes and forward-looking technology, WAMEST aims to become the partner clients trust to protect their assets and elevate everyday experiences.'], stat: ['Our direction', 'Smarter spaces. Better lives.'] },
  'core-values': { title: 'Core Values', eyebrow: 'What guides us', icon: HeartHandshake, image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85', lead: 'Values that show up in every action, every site and every relationship.', body: ['Integrity keeps our promises clear. Excellence pushes our standards higher. Respect shapes how we treat people and places. Teamwork turns diverse expertise into dependable results.', 'We pair these values with accountability and innovation, ensuring our clients receive thoughtful solutions and consistent care.'], stat: ['Built on', 'Integrity & accountability'] },
  'our-clients': { title: 'Our Clients', eyebrow: 'Trusted partnerships', icon: Users, image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85', lead: 'Partnerships designed around the realities of each client and site.', body: ['From commercial destinations and hospitality venues to education, healthcare, residential and industrial environments, our clients rely on us to keep essential operations running smoothly.', 'We work as an extension of every client team—listening closely, responding quickly and reporting transparently.'], stat: ['Our approach', 'Your goals, shared'] },
  'quality-policy': { title: 'Quality Policy', eyebrow: 'Our standard', icon: Award, image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85', lead: 'Consistent quality is a system, not a one-time achievement.', body: ['WAMEST is committed to meeting agreed requirements, monitoring performance and continuously improving the way our services are planned and delivered.', 'We train our people, measure meaningful outcomes, act on feedback and maintain clear operating controls so quality remains visible and repeatable across every contract.'], stat: ['Our commitment', 'Measure. Learn. Improve.'] },
  'hse-policy': { title: 'HSE Policy', eyebrow: 'Health, safety & environment', icon: ShieldCheck, image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85', lead: 'Everyone deserves to return home safely—and every environment deserves protection.', body: ['We place health, safety and environmental responsibility at the centre of our operations. Hazards are assessed, controls are documented and every team member is empowered to stop unsafe work.', 'We also seek to reduce waste, conserve resources and choose responsible practices wherever our services can make a positive environmental difference.'], stat: ['Zero compromise', 'Safety comes first'] },
};

const nav = Object.entries(pages);

const aboutDescriptions = {
  'company-overview': 'Who we are, what we deliver and how we create lasting value.',
  'ceo-message': 'A message of purpose, progress and commitment from our leadership.',
  vision: 'The future we are working to build for people and places.',
  'core-values': 'The principles behind every decision, action and partnership.',
  'our-clients': 'Trusted relationships across diverse sectors and environments.',
  'quality-policy': 'A consistent standard driven by measurement and improvement.',
  'hse-policy': 'Protecting health, safety and our shared environment.',
};

const clients = [
  ['IKEA', 'https://logo.clearbit.com/ikea.com'],
  ['TotalEnergies', 'https://logo.clearbit.com/totalenergies.com'],
  ['SASCO', 'https://logo.clearbit.com/sasco.com.sa'],
  ['Bank Albilad', 'https://logo.clearbit.com/bankalbilad.com'],
  ['Saudi Electricity', 'https://logo.clearbit.com/se.com.sa'],
  ['King Saud University', 'https://logo.clearbit.com/ksu.edu.sa'],
  ['Ministry of Health', 'https://logo.clearbit.com/moh.gov.sa'],
  ['Ministry of Education', 'https://logo.clearbit.com/moe.gov.sa'],
  ['TARSHID', 'https://logo.clearbit.com/tarshid.com.sa'],
  ['Diriyah', 'https://logo.clearbit.com/diriyah.sa'],
  ['KAUST', 'https://logo.clearbit.com/kaust.edu.sa'],
  ['Almarai', 'https://logo.clearbit.com/almarai.com'],
];

const values = [
  { title: 'Integrity', text: 'We act honestly, communicate openly and keep every promise we make.', icon: ShieldCheck },
  { title: 'Excellence', text: 'We pursue outstanding standards and improve the details every day.', icon: Sparkles },
  { title: 'Respect', text: 'We value every person, partnership and place entrusted to our care.', icon: HeartHandshake },
  { title: 'Teamwork', text: 'We succeed through collaboration, shared expertise and one clear purpose.', icon: Handshake },
  { title: 'Innovation', text: 'We welcome practical ideas that make our services smarter and stronger.', icon: Lightbulb },
  { title: 'Accountability', text: 'We take ownership of our actions, outcomes and commitments.', icon: Award },
];

const ceoMessage = [
  'At WAMEST, we believe that trust is earned through performance, consistency and integrity. Every project we undertake reflects our commitment to delivering excellence, safeguarding people and creating long-term value for our clients and partners. WAMEST has grown by focusing on what matters most: strong technical expertise, disciplined execution and a team-driven culture.',
  'Our success is the result of the dedication and professionalism of our people, who continuously strive to meet and exceed client expectations while adhering to the highest standards of quality and safety. We remain committed to staying ahead through innovation, investment in technology and the development of our workforce.',
  'In alignment with the ambitions of Saudi Vision 2030, we are expanding our capabilities, improving efficiency and contributing to a more sustainable and resilient future. I am proud of what WAMEST has achieved and confident in the path ahead.',
  'On behalf of our leadership team, I extend my sincere appreciation to our clients, partners and employees for their continued trust and support. Together, we will continue to build responsibly, innovate confidently and grow sustainably.',
];

const overviewStory = [
  'WAMEST is an integrated facilities management company built to simplify complex operations. By bringing management, cleaning, technical, security and support services under one administration, we give clients a single dependable partner and one clear standard of delivery.',
  'Our teams combine practical expertise, disciplined processes and responsive site leadership. Every solution is shaped around the environment it serves, from residences and commercial destinations to hospitality, education, healthcare and industrial facilities.',
  'We believe excellent facilities management should protect assets, support people and create measurable long-term value. That is why we continuously develop our workforce, strengthen our systems and adopt smarter, more responsible ways of working.',
];

const overviewHighlights = [
  { value: '01', title: 'One Partner', text: 'Unified accountability across every service.' },
  { value: '360°', title: 'Integrated Care', text: 'Complete attention to people, places and assets.' },
  { value: '24/7', title: 'Always Ready', text: 'Responsive support whenever operations demand it.' },
];

export default function AboutPage() {
  const { section = 'company-overview' } = useParams();
  const page = pages[section];
  if (!page) return <Navigate to="/about-us/company-overview" replace />;
  const Icon = page.icon;
  return <>
    <main className="about-page">
      <div className="about-page__masthead"><div className="container about-page__masthead-copy"><span>About Wamest</span><h1>{page.title}</h1></div></div>
      <div className="container about-page__layout">
        <aside className="about-sidebar">
          <div className="about-sidebar__title"><span>Explore Wamest</span><strong>About Us</strong></div>
          <nav aria-label="About us pages">
            {nav.map(([slug, item]) => <NavLink key={slug} to={`/about-us/${slug}`} className={slug === section ? 'active' : ''}><span>{item.title}</span><p>{aboutDescriptions[slug]}</p><ArrowRight size={17}/></NavLink>)}
          </nav>
        </aside>
        <article className="about-content" key={section}>
          {section === 'ceo-message' ? <section className="ceo-message">
            <div className="ceo-message__heading"><Quote className="ceo-message__quote" size={48}/><div><span>Leadership / 2026</span><h2>Message From<br/><em>the CEO</em><i /></h2></div><p>A commitment to people, performance and progress.</p></div>
            <div className="ceo-message__body">
              <p className="ceo-message__lead">{ceoMessage[0]}</p>
              <div className="ceo-message__columns">
                <div className="ceo-message__column"><p>{ceoMessage[1]}</p></div>
                <div className="ceo-message__column">{ceoMessage.slice(2).map(text => <p key={text}>{text}</p>)}</div>
              </div>
              <div className="ceo-message__signature"><div className="ceo-message__signature-mark">IQ</div><div><strong>Ismail Al Qawasmeh</strong><span>Chief Executive Officer</span></div></div>
            </div>
          </section> : section === 'company-overview' ? <section className="overview-feature">
            <div className="overview-feature__header">
              <div className="overview-feature__index">01</div>
              <div><span>Built around your world</span><h2>Company<br/><em>Overview</em><i /></h2></div>
              <p>{page.lead}</p>
            </div>
            <div className="overview-feature__story">
              <div className="overview-feature__statement"><Building2 size={30}/><strong>One administration.<br/>Every essential service.</strong></div>
              <div className="overview-feature__columns">{overviewStory.map((text, index) => <div key={text}><span>0{index + 1}</span><p>{text}</p></div>)}</div>
            </div>
            <div className="overview-feature__highlights">{overviewHighlights.map(item => <div key={item.title}><strong>{item.value}</strong><span>{item.title}</span><p>{item.text}</p></div>)}</div>
          </section> : <>
          <div className="about-content__image"><img src={page.image} alt="" loading="lazy" decoding="async"/><div className="about-content__badge"><Icon size={28}/><span>{page.stat[0]}</span><strong>{page.stat[1]}</strong></div></div>
          <div className="about-content__copy"><span className="small-label">{page.eyebrow}</span><h2>{page.lead}</h2>{page.body.map(text => <p key={text}>{text}</p>)}
            {section === 'core-values' && <div className="values-grid">{values.map(({ title, text, icon: ValueIcon }, index) => <div className="value-card" key={title}><span className="value-card__number">0{index + 1}</span><div className="value-card__icon"><ValueIcon size={25}/></div><h3>{title}</h3><p>{text}</p></div>)}</div>}
            {section === 'our-clients' && <div className="clients-grid" aria-label="Selected clients">{clients.map(([name, logo]) => <div className="client-logo" key={name}><span>{name}</span><img src={logo} alt={`${name} logo`} loading="lazy" onError={(event) => { event.currentTarget.style.display = 'none'; }} /></div>)}</div>}
            {section === 'hse-policy' && <div className="policy-note"><Leaf size={22}/><span>Protecting people, places and our shared environment.</span></div>}
          </div></>}
        </article>
      </div>
    </main>
  </>;
}
