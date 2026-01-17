import { motion } from 'framer-motion';
import { MousePointer2, ArrowRight, Target, Cpu, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

import heroVector from '../../assets/hero-vector.png';
import logoIcon from '../../assets/logo-icon.png';
import logoText from '../../assets/logo-text.png';

const Hero = () => {
    return (
        <section
            style={{
                position: 'relative',
                padding: 'min(4vh, 2rem) 0 min(8vh, 5rem) 0',
                minHeight: 'auto',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                background: 'radial-gradient(circle at 100% 0%, #e0f2fe 0%, transparent 40%), radial-gradient(circle at 0% 100%, #f0f9ff 0%, transparent 40%)'
            }}
            className="hero-section"
        >
            <div className="container hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 0.9fr)', gap: '5rem', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="hero-content"
                >
                    {/* Mobile Only Branding */}
                    <div className="hero-mobile-branding" style={{ display: 'none', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', marginBottom: '2rem' }}>
                        <img src={logoIcon} alt="eFlybe Icon" style={{ height: '44px', objectFit: 'contain' }} />
                        <img src={logoText} alt="eFlybe" style={{ height: '38px', objectFit: 'contain' }} />
                    </div>

                    <div className="hero-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', backgroundColor: 'rgba(37, 99, 235, 0.08)', color: 'var(--secondary-blue)', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '0.02em' }}>
                        <MousePointer2 size={14} /> Smart Automation for Modern Businesses
                    </div>
                    <div className="hero-pills" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1rem', width: '100%' }}>
                        <Link
                            to="/loandesk"
                            className="hero-cta-pill"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.25rem',
                                padding: '1.25rem 2rem',
                                background: 'white',
                                borderRadius: '16px',
                                boxShadow: 'var(--shadow-soft)',
                                border: '1px solid #e2e8f0',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                textDecoration: 'none'
                            }}
                        >
                            <div style={{ padding: '0.75rem', background: 'rgba(37, 99, 235, 0.08)', borderRadius: '12px' }}>
                                <Target size={24} color="var(--secondary-blue)" />
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-navy)' }}>Project report for loans</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Bank-ready DPR & CMA reports in minutes</div>
                            </div>
                        </Link>

                        <Link
                            to="/enquiry/ai-software"
                            className="hero-cta-pill"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.25rem',
                                padding: '1.25rem 2rem',
                                background: 'white',
                                borderRadius: '16px',
                                boxShadow: 'var(--shadow-soft)',
                                border: '1px solid #e2e8f0',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                textDecoration: 'none'
                            }}
                        >
                            <div style={{ padding: '0.75rem', background: 'rgba(20, 184, 166, 0.08)', borderRadius: '12px' }}>
                                <Cpu size={24} color="var(--accent-teal)" />
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-navy)' }}>AI based software for business</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Custom intelligent automation and SaaS</div>
                            </div>
                        </Link>

                        <Link
                            to="/enquiry/web-dev"
                            className="hero-cta-pill"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.25rem',
                                padding: '1.25rem 2rem',
                                background: 'white',
                                borderRadius: '16px',
                                boxShadow: 'var(--shadow-soft)',
                                border: '1px solid #e2e8f0',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                textDecoration: 'none'
                            }}
                        >
                            <div style={{ padding: '0.75rem', background: 'rgba(37, 99, 235, 0.08)', borderRadius: '12px' }}>
                                <Globe size={24} color="#2563EB" />
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-navy)' }}>Website development</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Premium, high-performance web solutions</div>
                            </div>
                        </Link>
                    </div>

                    <div className="hero-actions desktop-actions" style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem' }}>
                        <Link to="/loandesk" className="btn btn-primary" style={{ gap: '0.5rem' }}>
                            Get Started <ArrowRight size={18} />
                        </Link>
                        <Link to="/contact" className="btn btn-outline" style={{ borderRadius: '100px' }}>
                            Contact Us
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-media"
                >
                    <img
                        src={heroVector}
                        alt="eFlybe Illustration"
                        style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.06))',
                        }}
                    />
                </motion.div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .hero-section { 
            padding: 6rem 0 5rem 0 !important; 
            min-height: 80vh !important;
            display: flex;
            align-items: center;
          }
          .hero-grid { 
            grid-template-columns: 1fr !important; 
            text-align: center !important; 
          }
          .hero-mobile-branding { display: flex !important; }
          .hero-title { font-size: 2.25rem !important; margin-bottom: 1.25rem !important; }
          .hero-subtext { font-size: 1.05rem !important; margin-bottom: 2.5rem !important; }
          .hero-actions { flex-direction: column; gap: 1rem !important; width: 100%; max-width: 320px; margin: 0 auto; }
          .hero-actions .btn { width: 100% !important; padding: 1.125rem !important; }
          .hero-media { display: none !important; }
          .hero-content { width: 100% !important; }
          .hero-pills { gap: 1rem !important; }
          .hero-cta-pill { padding: 1rem 1.25rem !important; gap: 1rem !important; }
          .hero-cta-pill div:first-child { padding: 0.5rem !important; }
          .hero-cta-pill div:last-child div:first-child { font-size: 1rem !important; }
          .desktop-actions { display: none !important; }
          .hero-mobile-branding { margin-bottom: 1.5rem !important; }
        }
        
        .hero-cta-pill:hover {
            transform: translateY(-4px);
            border-color: var(--secondary-blue) !important;
            box-shadow: var(--shadow-md) !important;
            background: #fdfdfd !important;
        }
      `}</style>
        </section>
    );
};

export default Hero;
