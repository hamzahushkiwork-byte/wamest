import FadeInSection from './FadeInSection';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <section id="details" className="about-section">
            <FadeInSection className="about-section__content">
                <h2>WAMEST</h2>
                <p>
                    WAMEST is a service provider that can deliver Integrated Facility Management by gathering its own affiliates under a single administration and provide different combinations of management, cleaning, technical, security, and other single services to various business segments such as residences, malls, hotels, business centers, schools, hospitals and factories.
                </p>
                <a href="#about-us" className="btn btn-outline-blue">ABOUT US</a>
            </FadeInSection>
        </section>
    );
};

export default AboutSection;
