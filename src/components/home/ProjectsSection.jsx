import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { projects } from '../../data/projects.js';
import FadeInSection from './FadeInSection';
import './ProjectsSection.css';

const ProjectsSection = () => (
    <section id="projects" className="home-projects">
        <div className="container">
            <FadeInSection className="home-projects__heading">
                <div><span>Selected portfolio</span><h2>Projects that perform<br/>beautifully.</h2></div>
                <div><p>Explore environments where expert teams, dependable systems and thoughtful service create lasting value.</p><div className="home-projects__actions"><Link to="/projects">View all projects <ArrowRight size={17}/></Link><div className="home-projects__controls"><button className="home-projects-prev" type="button" aria-label="Previous project"><ArrowLeft size={19}/></button><button className="home-projects-next" type="button" aria-label="Next project"><ArrowRight size={19}/></button></div></div></div>
            </FadeInSection>
            <FadeInSection className="home-projects__slider">
              <Swiper modules={[Navigation,Pagination,A11y]} navigation={{prevEl:'.home-projects-prev',nextEl:'.home-projects-next'}} pagination={{clickable:true}} spaceBetween={20} slidesPerView={1.08} speed={700} grabCursor watchOverflow breakpoints={{640:{slidesPerView:2,spaceBetween:22},1024:{slidesPerView:3,spaceBetween:28}}}>
                {projects.map((project,index)=><SwiperSlide key={project.slug}><article className="home-project-card">
                    <Link to={`/projects/${project.slug}`}>
                        <div className="home-project-card__image">
                            <img src={project.photos[0]} alt={project.title} loading="lazy" decoding="async"/>
                            <span className="home-project-card__number">0{index+1}</span>
                            <span className="home-project-card__arrow"><ArrowUpRight/></span>
                        </div>
                        <div className="home-project-card__body"><span>{project.type}</span><h3>{project.title}</h3><p>{project.location} · {project.year}</p></div>
                    </Link>
                </article></SwiperSlide>)}
              </Swiper>
            </FadeInSection>
        </div>
    </section>
);

export default ProjectsSection;
