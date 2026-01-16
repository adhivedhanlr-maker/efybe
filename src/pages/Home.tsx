import Hero from '../components/home/Hero';
import { Target, Lightbulb, TrendingUp, ShieldCheck, Cpu, BarChart3, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Slideshow from '../components/common/Slideshow';
import ss1 from '../assets/loandesk/ss1.png';
import ss2 from '../assets/loandesk/ss2.png';
import ss3 from '../assets/loandesk/ss3.png';

const Home = () => {
    const loandeskImages = [ss1, ss2, ss3];
    const whatWeDo = [
        {
            title: 'Business Challenges',
            description: 'We identify systemic inefficiencies and bottlenecks in your current business processes.',
            icon: <Target className="text-secondary-blue" size={32} color="#2563EB" />,
        },
        {
            title: 'Smart Technology',
            description: 'We deploy targeted SaaS and IT solutions designed to solve specific operational problems.',
            icon: <Lightbulb size={32} color="#2563EB" />,
        },
        {
            title: 'Measurable Results',
            description: 'Our solutions focus on ROI, efficiency gains, and long-term business scalability.',
            icon: <TrendingUp size={32} color="#2563EB" />,
        },
    ];

    const services = [
        {
            title: 'Custom Software',
            description: 'Bespoke applications tailored to your unique business logic and workflow requirements.',
            icon: <Cpu size={24} color="#14B8A6" />,
        },
        {
            title: 'Business Automation',
            description: 'Streamline repetitive tasks and reduce human error with intelligent automated systems.',
            icon: <ShieldCheck size={24} color="#14B8A6" />,
        },
        {
            title: 'Analytics & Dashboards',
            description: 'Transform raw data into actionable insights with real-time business intelligence.',
            icon: <BarChart3 size={24} color="#14B8A6" />,
        },
        {
            title: 'Digital Enablement',
            description: 'Modernizing legacy systems to thrive in a digital-first economy and market.',
            icon: <Globe size={24} color="#14B8A6" />,
        },
    ];

    return (
        <div className="home-page">
            <Hero />

            {/* What We Do */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Solving Problems with Intent</h2>
                        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                            We don't just build software; we build solutions that move the needle for your business.
                        </p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {whatWeDo.map((item, index) => (
                            <motion.div
                                key={index}
                                className="card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div style={{ marginBottom: '1.5rem' }}>{item.icon}</div>
                                <h3 style={{ marginBottom: '1rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-muted)' }}>{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Product: LoanDesk */}
            <section className="section-padding" style={{ backgroundColor: 'var(--primary-navy)', color: 'var(--white)' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <div style={{ color: 'var(--accent-teal)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', marginBottom: '1rem' }}>
                            Flagship Product
                        </div>
                        <h2 style={{ color: 'var(--white)', fontSize: '3rem', marginBottom: '1.5rem' }}>eFlybe LoanDesk</h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                            Professional loan and project report platform designed for CAs, Consultants, and MSMEs. Generate bank-compliant reports in minutes, not days.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
                            {['DPR', 'CMA', 'Simple Reports'].map(badge => (
                                <span key={badge} style={{ padding: '0.4rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600 }}>
                                    {badge}
                                </span>
                            ))}
                        </div>
                        <Link to="/loandesk" className="btn btn-primary" style={{ backgroundColor: 'var(--accent-teal)' }}>
                            View Product Details
                        </Link>
                    </div>
                    <div style={{ width: '100%', height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                        <Slideshow images={loandeskImages} />
                    </div>
                </div>
            </section>

            {/* Expertise */}
            <section className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Expertise</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
                            Diverse digital solutions for diverse business needs. We bridge the gap between complex technology and practical business usage.
                        </p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {services.map((service, index) => (
                            <div
                                key={index}
                                style={{
                                    padding: '2.5rem 2rem',
                                    backgroundColor: 'white',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '16px',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--secondary-blue)';
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#e2e8f0';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    backgroundColor: 'rgba(20, 184, 166, 0.1)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.5rem'
                                }}>
                                    {service.icon}
                                </div>
                                <h4 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>{service.title}</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding" style={{ textAlign: 'center' }}>
                <div className="container">
                    <div className="card" style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, var(--primary-navy) 0%, #1e293b 100%)', color: 'var(--white)' }}>
                        <h2 style={{ color: 'var(--white)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to Scale Smarter?</h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
                            Let’s build smarter solutions for your business. Whether it’s automation, reports, or custom software.
                        </p>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
                            Let's Talk
                        </Link>
                    </div>
                </div>
            </section>

            <style>{`
        @media (max-width: 968px) {
          .section-padding div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </div>
    );
};

export default Home;
