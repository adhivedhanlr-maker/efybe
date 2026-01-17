import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import adhivedhaImg from '../../assets/portfolio/adhivedha.png';
import familyzoneImg from '../../assets/portfolio/familyzone.png';
import springdaleImg from '../../assets/portfolio/springdale.png';

const Portfolio = () => {
    const projects = [
        {
            title: 'Adhi Vedha Associates',
            category: 'Financial Consultancy',
            image: adhivedhaImg,
            link: 'https://www.adhivedha.in/',
            color: '#c2410c'
        },
        {
            title: 'Family Zone B Mart',
            category: 'E-commerce Supermarket',
            image: familyzoneImg,
            link: 'https://www.familyzonebmart.com/',
            color: '#15803d'
        },
        {
            title: 'Springdales Kindergarten',
            category: 'Educational Portal',
            image: springdaleImg,
            link: 'https://www.springdale.school/',
            color: '#2563eb'
        }
    ];

    return (
        <section className="section-padding portfolio-section" style={{ backgroundColor: '#ffffff' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div style={{ color: 'var(--secondary-blue)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2.5px', fontSize: '0.75rem', marginBottom: '1rem' }}>
                        Selected Work
                    </div>
                    <h2 style={{ marginBottom: '1rem' }}>Our Client Success Stories</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        Premium digital solutions delivered across diverse industries.
                    </p>
                </div>

                <div className="portfolio-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {projects.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="portfolio-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                display: 'block',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                backgroundColor: '#f8fafc',
                                border: '1px solid #e2e8f0',
                                textDecoration: 'none',
                                position: 'relative',
                                group: 'true'
                            }}
                        >
                            <div className="portfolio-image-wrapper" style={{
                                position: 'relative',
                                pt: '56.25%', // 16:9 aspect ratio
                                overflow: 'hidden',
                                height: '240px'
                            }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                                    }}
                                    className="project-preview-img"
                                />
                                <div className="portfolio-overlay" style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'rgba(15, 23, 42, 0.4)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                    backdropFilter: 'blur(4px)'
                                }}>
                                    <div style={{
                                        padding: '1rem',
                                        background: 'white',
                                        borderRadius: '50%',
                                        transform: 'scale(0.8)',
                                        transition: 'transform 0.3s ease'
                                    }} className="visit-icon">
                                        <ExternalLink size={24} color="var(--primary-navy)" />
                                    </div>
                                </div>
                            </div>

                            <div style={{ padding: '1.5rem 2rem' }}>
                                <div style={{
                                    display: 'inline-block',
                                    padding: '0.25rem 0.75rem',
                                    background: `${project.color}10`,
                                    color: project.color,
                                    borderRadius: '100px',
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    marginBottom: '0.75rem'
                                }}>
                                    {project.category}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--primary-navy)' }}>{project.title}</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary-blue)', fontSize: '0.9rem', fontWeight: 600 }}>
                                    Visit Website <ExternalLink size={14} />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>

            <style>{`
                .portfolio-card:hover .project-preview-img {
                    transform: scale(1.05);
                }
                .portfolio-card:hover .portfolio-overlay {
                    opacity: 1 !important;
                }
                .portfolio-card:hover .visit-icon {
                    transform: scale(1) !important;
                }
                .portfolio-card:hover {
                    border-color: var(--secondary-blue) !important;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
                }
                @media (max-width: 768px) {
                    .portfolio-grid { grid-template-columns: 1fr !important; }
                    .portfolio-image-wrapper { height: 200px !important; }
                }
            `}</style>
        </section>
    );
};

export default Portfolio;
