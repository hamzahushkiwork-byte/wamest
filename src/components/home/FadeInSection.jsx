import { useEffect, useRef, useState } from 'react';

const FadeInSection = ({ children, className = '', delay = '0s' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef(null);

    useEffect(() => {
        const currentRef = domRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        if (currentRef) observer.unobserve(currentRef);
                    }
                });
            },
            { threshold: 0.15 }
        );

        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <div
            ref={domRef}
            className={`animate-on-scroll ${isVisible ? 'is-visible' : ''} ${className}`}
            style={{ transitionDelay: delay }}
        >
            {children}
        </div>
    );
};

export default FadeInSection;
