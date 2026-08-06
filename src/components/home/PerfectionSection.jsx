import FadeInSection from './FadeInSection';
import './PerfectionSection.css';

const PerfectionSection = () => {
    return (
        <section className="perfection-section">
            <div className="container">
                <FadeInSection className="perfection-grid">
                    <div className="perfection-content">
                        <h2>We always search for perfection to do the right thing.</h2>
                        <p>
                            In order to be the most reliable company in our industry, we always work to reach more consistent and higher standards and follow the determined standards at all times and all places.
                        </p>
                        <a href="#values" className="btn btn-outline-blue">OUR VALUES</a>
                    </div>
                    <div className="perfection-image">
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=82"
                            alt="Professionally managed modern workplace"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
};

export default PerfectionSection;
