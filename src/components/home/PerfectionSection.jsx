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
                        {/* Using a highly relevant abstract 3D cubes placeholder */}
                        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" alt="Abstract 3D Structure" />
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
};

export default PerfectionSection;
