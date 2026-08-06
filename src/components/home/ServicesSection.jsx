import FadeInSection from './FadeInSection';
import './ServicesSection.css';

const services = [
    {
        title: 'Cleaning Services',
        description: 'Our approach to cleaning services is "attention to detail is everything."',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z" />
            </svg>
        )
    },
    {
        title: 'Maintenance & Technical Services',
        description: 'A maintenance is not considered to be completed if not registered.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.7 14.3L21.7 15.3 19.4 13 20.4 12C21 11.4 21 10.5 20.4 9.9L14.7 4.2C14.1 3.6 13.2 3.6 12.6 4.2L11 5.8 4.2 12.6C3.6 13.2 3.6 14.1 4.2 14.7L9.9 20.4C10.5 21 11.4 21 12 20.4L13 19.4 15.3 21.7 14.3 22.7 12 25 5.2 25C2.3 25 0 22.7 0 19.8L0 13 4.2 8.8C6 7 8 8 9.9 9.9L15.6 4.2C17.5 2.3 19.5 3.3 21.3 5.1L22.7 6.5C23.9 7.7 23.9 9.6 22.7 10.8L22.7 14.3zM18.4 11L14.1 6.8 6.3 14.6 10.6 18.9 18.4 11z" />
            </svg>
        )
    },
    {
        title: 'Security Services',
        description: '"Courtesy and determination" is the key to success in security.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
            </svg>
        )
    },
    {
        title: 'Support Services',
        description: 'Support services are integral part of integrated facility management.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.56-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.73 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.49-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
            </svg>
        )
    }
];

const ServicesSection = () => {
    return (
        <section className="services-section">
            <div className="services-layout">

                {/* Left Side: Image */}
                <div className="services-image-container">
                    <FadeInSection className="services-image-inner">
                        <img
                            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
                            alt="Wamest Integrated Services"
                            loading="lazy"
                            decoding="async"
                            className="services-bg-img"
                        />
                        <div className="services-image-overlay">
                            <h1 className="services-logo-text">wamest <span>integrated services</span></h1>
                        </div>
                    </FadeInSection>
                </div>

                {/* Right Side: Content */}
                <div className="services-content-container">
                    <FadeInSection delay="0.2s" className="services-header">
                        <h2>Our Services</h2>
                        <p className="services-intro">
                            Wamest's approach to service is to be organized in such a way; that the best solutions for the customer needs are produced in accordance with the integrated facility management concept with the single or multiple service combinations by meeting the workplace safety and security standards with "innovation" and "continuous development" principles and the most accurate and reportable costs by conforming the most efficient and determined standards.
                        </p>
                    </FadeInSection>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <FadeInSection
                                key={service.title}
                                delay={`${0.3 + (index * 0.15)}s`}
                                className="service-card"
                            >
                                <div className="service-icon">{service.icon}</div>
                                <div className="service-details">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <a href={`#${service.title.toLowerCase().replace(/ /g, '-')}`} className="read-more">Read More »</a>
                                </div>
                            </FadeInSection>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;
