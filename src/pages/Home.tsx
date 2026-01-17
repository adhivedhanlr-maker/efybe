import { useState } from 'react';
import Hero from '../components/home/Hero';
import { Target, Lightbulb, TrendingUp, ShieldCheck, Cpu, BarChart3, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Slideshow from '../components/common/Slideshow';
import Portfolio from '../components/home/Portfolio';
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

    const [activeTab, setActiveTab] = useState('DPR');

    const productDetails = {
        'DPR': {
            title: 'Detailed Project Report',
            desc: 'Comprehensive bank-ready reports for term loans and working capital.',
        },
        'CMA': {
            title: 'CMA Data Preparation',
            desc: 'Accurate Credit Monitoring Arrangement data for effortless banking appraisals.',
        },
        'Reports': {
            title: 'Simple Financials',
            desc: 'Bespoke financial projections and summaries for consultants.',
        }
    };

    return (
        <div className="home-page">
            <Hero />

            {/* Solving Problems - Mobile Slider / Desktop Grid */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 8vw, 4rem)' }}>
                        <h2 style={{ marginBottom: '1rem' }}>Solving Problems with Intent</h2>
                        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                            We don't just build software; we build solutions that move the needle for your business.
                        </p>
                    </div>

                    <div className="swipe-indicator" style={{ marginInline: 'auto' }}>
                        <TrendingUp size={14} /> Swipe to browse
                    </div>

                    {/* Horizontal Slider on Mobile */}
                    <div className="mobile-slider no-scrollbar" style={{ display: 'flex', gap: '1.5rem', overflowX: 'auto', paddingBottom: '1rem', scrollSnapType: 'x mandatory' }}>
                        {whatWeDo.map((item, index) => (
                            <div
                                key={index}
                                className="card slider-card"
                                style={{ flex: '0 0 280px', scrollSnapAlign: 'start' }}
                            >
                                <div style={{ marginBottom: '1.5rem' }}>{item.icon}</div>
                                <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{item.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Grid Hidden on Mobile */}
                    <div className="desktop-problems-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
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

            {/* Featured Product: LoanDesk - Mobile Tabs / Desktop Split */}
            <section className="section-padding product-highlight" style={{ backgroundColor: 'var(--primary-navy)', color: 'var(--white)' }}>
                <div className="container">
                    <div className="product-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div className="product-content">
                            <div style={{ color: 'var(--accent-teal)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2.5px', fontSize: '0.75rem', marginBottom: '1rem' }}>
                                Flagship Product
                            </div>
                            <h2 style={{ color: 'var(--white)', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>eFlybe LoanDesk</h2>

                            {/* Mobile Tabs */}
                            <div className="mobile-product-tabs" style={{ display: 'none', gap: '0.5rem', marginBottom: '2rem' }}>
                                {['DPR', 'CMA', 'Reports'].map(tab => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        style={{
                                            padding: '0.6rem 1.25rem',
                                            borderRadius: '100px',
                                            fontSize: '0.85rem',
                                            fontWeight: 600,
                                            backgroundColor: activeTab === tab ? 'var(--accent-teal)' : 'rgba(255,255,255,0.1)',
                                            color: 'white',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            <div className="product-description">
                                <p className="hide-on-mobile" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
                                    Professional loan and project report platform designed for CAs, Consultants, and MSMEs. Generate bank-compliant reports in minutes, not days.
                                </p>
                                <div className="mobile-tab-content" style={{ display: 'none', marginBottom: '2rem' }}>
                                    <h3 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.25rem' }}>{productDetails[activeTab as keyof typeof productDetails].title}</h3>
                                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>{productDetails[activeTab as keyof typeof productDetails].desc}</p>
                                </div>
                            </div>

                            <div className="desktop-badges" style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
                                {['DPR Preparation', 'CMA Data', 'Financial Projections'].map(badge => (
                                    <span key={badge} style={{ padding: '0.5rem 1.25rem', background: 'rgba(255,255,255,0.06)', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, border: '1px solid rgba(255,255,255,0.1)' }}>
                                        {badge}
                                    </span>
                                ))}
                            </div>

                            <Link to="/loandesk" className="btn btn-primary" style={{ backgroundColor: 'var(--accent-teal)', padding: '1rem 2rem' }}>
                                Explore LoanDesk
                            </Link>
                        </div>

                        <div className="product-visual" style={{ width: '100%', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                            <div className="slideshow-container" style={{ width: '100%', height: '100%' }}>
                                <Slideshow images={loandeskImages} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise - Mobile Grid */}
            <section className="section-padding expertise-section" style={{ backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ marginBottom: '1rem' }}>Our Expertise</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
                            Diverse digital solutions for diverse business needs.
                        </p>
                    </div>
                    <div className="expertise-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="expertise-card"
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
                                <div className="expertise-icon" style={{
                                    width: '48px',
                                    height: '48px',
                                    backgroundColor: 'rgba(20, 184, 166, 0.08)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.5rem'
                                }}>
                                    {service.icon}
                                </div>
                                <h4 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>{service.title}</h4>
                                <p className="expertise-desc" style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Portfolio />

            {/* CTA */}
            <section className="section-padding" style={{ textAlign: 'center' }}>
                <div className="container">
                    <div className="card cta-card" style={{ padding: 'clamp(3rem, 10vw, 5rem) 2rem', background: 'linear-gradient(135deg, var(--primary-navy) 0%, #1e293b 100%)', color: 'var(--white)', border: 'none' }}>
                        <h2 style={{ color: 'var(--white)', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem' }}>Ready to Scale Smarter?</h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(1rem, 2vw, 1.25rem)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto', lineHeight: 1.6 }}>
                            Let’s build smarter solutions for your business. Whether it’s automation, reports, or custom software.
                        </p>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem', width: 'auto' }}>
                            Let's Talk
                        </Link>
                    </div>
                </div>
            </section>

            <style>{`
        .mobile-slider { display: none !important; }
        
        @media (max-width: 768px) {
          .mobile-slider { display: flex !important; }
          .desktop-problems-grid { display: none !important; }
          .product-layout { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .mobile-product-tabs { display: flex !important; margin-inline: auto; justify-content: center; }
          .hide-on-mobile { display: none !important; }
          .mobile-tab-content { display: block !important; text-align: center; }
          .desktop-badges { display: none !important; }
          .product-content { text-align: center; }
          .expertise-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 1rem !important; }
          .expertise-card { padding: 1.5rem !important; text-align: center; }
          .expertise-icon { margin-inline: auto !important; }
          .expertise-desc { display: none !important; }
          .expertise-card h4 { font-size: 0.95rem !important; margin-bottom: 0 !important; }
          .cta-card { padding: 4rem 1.5rem !important; }
          .cta-card h2 { font-size: 1.75rem !important; }
          .cta-card .btn { width: 100% !important; margin-top: 1.5rem; }
          .product-visual { height: 280px !important; order: 2; }
          .product-content { order: 1; }
        }
      `}</style>
        </div>
    );
};

export default Home;
