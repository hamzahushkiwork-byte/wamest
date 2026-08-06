import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import './SiteHeader.css';

const aboutLinks = [
  ['Company Overview', 'company-overview'], ['CEO Message', 'ceo-message'],
  ['Vision', 'vision'], ['Core Values', 'core-values'], ['Our Clients', 'our-clients'],
  ['Quality Policy', 'quality-policy'], ['HSE Policy', 'hse-policy'],
];

const serviceLinks = [
  ['Mechanical, Electrical & Plumbing', 'mechanical-electrical-plumbing'],
  ['Civil & Structural', 'civil-structural'], ['Infrastructure', 'infrastructure'],
  ['Operations & Maintenance', 'operations-maintenance'], ['WAMEST Energy Solutions', 'energy-solutions'],
  ['LEED & Sustainability', 'leed-sustainability'],
];

export default function SiteHeader({ overlay = false }) {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let frame = 0;
    const updateHeader = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        frame = 0;
      });
    };
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateHeader);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    setAboutOpen(false);
    setServiceOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header className={`site-header${overlay ? ' site-header--overlay' : ''}${scrolled ? ' site-header--scrolled' : ''}${open ? ' menu-is-open' : ''}`}>
      <div className="container site-header__inner">
        <Link className="site-header__brand" to="/">wamest<span>.</span></Link>
        <button className="site-header__toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open} aria-controls="primary-navigation">
          {open ? <X /> : <Menu />}
        </button>
        <nav id="primary-navigation" className={`site-header__nav${open ? ' is-open' : ''}`} aria-label="Main navigation">
          <Link to="/">Home</Link>
          <div className={`site-header__about${aboutOpen ? ' is-open' : ''}`}>
            <div className="site-header__about-trigger">
              <NavLink to="/about-us/company-overview">About Us</NavLink>
              <button type="button" aria-label="Show About Us pages" aria-expanded={aboutOpen} onClick={() => setAboutOpen(!aboutOpen)}><ChevronDown size={15} /></button>
            </div>
            <div className="site-header__dropdown">
              {aboutLinks.map(([label, slug]) => <NavLink key={slug} to={`/about-us/${slug}`}>{label}</NavLink>)}
            </div>
          </div>
          <div className={`site-header__about${serviceOpen ? ' is-open' : ''}`}>
            <div className="site-header__about-trigger">
              <NavLink to="/services/mechanical-electrical-plumbing">Services</NavLink>
              <button type="button" aria-label="Show service pages" aria-expanded={serviceOpen} onClick={() => setServiceOpen(!serviceOpen)}><ChevronDown size={15}/></button>
            </div>
            <div className="site-header__dropdown site-header__dropdown--services">
              {serviceLinks.map(([label, slug]) => <NavLink key={slug} to={`/services/${slug}`}>{label}</NavLink>)}
            </div>
          </div>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
