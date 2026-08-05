import FadeInSection from './FadeInSection';
import './ProjectsSection.css';

const projects = [
    {
        id: 1,
        title: 'Cleaning',
        subtitle: 'cleaning services', // Displayed in the resting state band
        desc: 'addition to\ncustomer\'s image',
        link: 'en/our-services/cleaning-services',
        image: 'https://images.unsplash.com/photo-1584820927498-cafe4c231137?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 2,
        title: 'Security',
        subtitle: 'security services',
        desc: 'your security is\nin "the right hands"',
        link: 'en/our-services/security-services',
        image: 'https://images.unsplash.com/photo-1629814696209-4ec4d8fed3a3?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 3,
        title: 'Maintenance',
        subtitle: 'maintenance',
        desc: 'high performance\nwith right maintenance',
        link: 'en/our-services/building-maintenance-technical-services',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 4,
        title: 'Support',
        subtitle: 'support services',
        desc: 'Solutions\nthrough your needs',
        link: 'en/our-services/support-services',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80'
    }
];

const ProjectsSection = () => {
    return (
        <section className="projects-section">
            <div className="projects-container">
                {projects.map((project, index) => (
                    <FadeInSection
                        key={project.id}
                        delay={`${index * 0.15}s`}
                        className="project-item"
                    >
                        <div
                            className="project-bg"
                            style={{ backgroundImage: `url(${project.image})` }}
                        />

                        {/* Resting state band (like the image) */}
                        <div className="project-resting-band">
                            <h3 className="project-logo">
                                wamest
                                <span className="checkmark-icon">✓</span>
                            </h3>
                            <span className="project-subtitle">{project.subtitle}</span>
                        </div>

                        {/* Hover State overlay */}
                        <div className="project-hover-state">
                            <div className="project-hover-content">
                                <h3 className="text-white"><strong>Wamest</strong> {project.title}</h3>
                                <p className="text-white">
                                    {project.desc.split('\n').map((line, i) => (
                                        <span key={i}>{line}<br /></span>
                                    ))}
                                </p>
                                <a href={project.link} className="btn btn-outline-white btn-sm">DETAILS »</a>
                            </div>
                        </div>
                    </FadeInSection>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
