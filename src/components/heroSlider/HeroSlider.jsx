import { useCallback, useEffect, useState } from 'react';
import './HeroSlider.css';

const slides = [
  {
    title: 'We polish the floor to polish the image of our customer.',
    label: 'Professional facilities',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=85',
    alt: 'Bright modern corporate office interior',
  },
  {
    title: 'Exceptional spaces built around the people who use them.',
    label: 'Workplace solutions',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=85',
    alt: 'Contemporary open-plan corporate office',
  },
  {
    title: 'A cleaner environment creates a stronger first impression.',
    label: 'Service excellence',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2000&q=85',
    alt: 'Modern professional workspace with large windows',
  },
];

const links = ['Home', 'About Us', 'Services', 'Projects', 'Contact'];

function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const goTo = useCallback((index) => setActive((index + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section
      className="hero-slider"
      aria-label="Featured services"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => !event.currentTarget.contains(event.relatedTarget) && setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') goTo(active - 1);
        if (event.key === 'ArrowRight') goTo(active + 1);
      }}
    >
      <div className="hero-slider__slides" aria-live="polite">
        {slides.map((slide, index) => (
          <div key={slide.image} className={`hero-slide${active === index ? ' is-active' : ''}`} aria-hidden={active !== index}>
            <img src={slide.image} alt={slide.alt} />
            <span className="hero-slide__overlay" />
          </div>
        ))}
      </div>

      <header className="hero-header container">
        <a className="hero-brand" href="#top" aria-label="Wamest home">wamest</a>
        <nav className="hero-nav" aria-label="Main navigation">
          {links.map((link) => <a key={link} href={`#${link.toLowerCase().replaceAll(' ', '-')}`}>{link}</a>)}
        </nav>
      </header>

      <div className="hero-slider__content container">
        <div key={active} className="hero-slider__copy">
          <span className="hero-slider__label">{slides[active].label}</span>
          <h1>{slides[active].title}</h1>
          <a className="btn btn-outline-white" href="#details">Details</a>
        </div>
      </div>

      <button className="hero-slider__arrow is-previous" type="button" aria-label="Previous slide" onClick={() => goTo(active - 1)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
      </button>
      <button className="hero-slider__arrow is-next" type="button" aria-label="Next slide" onClick={() => goTo(active + 1)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
      </button>

      <div className="hero-slider__dots" role="group" aria-label="Choose a slide">
        {slides.map((slide, index) => (
          <button key={slide.image} className={active === index ? 'is-active' : ''} type="button" aria-label={`Show slide ${index + 1}`} aria-current={active === index ? 'true' : undefined} onClick={() => goTo(index)} />
        ))}
      </div>
    </section>
  );
}

export default HeroSlider;
