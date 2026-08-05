import HeroSlider from '../components/heroSlider/HeroSlider.jsx';
import AboutSection from '../components/home/AboutSection';
import PerfectionSection from '../components/home/PerfectionSection';
import ServicesSection from '../components/home/ServicesSection';
import ProjectsSection from '../components/home/ProjectsSection';
import './HomePage.css';

function HomePage() {
  return (
    <main id="top">
      <HeroSlider />
      <AboutSection />
      <PerfectionSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}

export default HomePage;
