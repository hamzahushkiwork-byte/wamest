import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import Footer from './components/layout/Footer.jsx';
import SiteHeader from './components/layout/SiteHeader.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ProjectDetailPage from './pages/ProjectDetailPage.jsx';
import ServicePage from './pages/ServicePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useScrollToTop } from './hooks/useScrollToTop.js';

function AppContent() {
  useScrollToTop();
  return <>
    <SiteHeader overlay />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/about-us/:section" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      <Route path="/services" element={<ServicePage />} />
      <Route path="/services/:service" element={<ServicePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
    <Footer />
  </>;
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
