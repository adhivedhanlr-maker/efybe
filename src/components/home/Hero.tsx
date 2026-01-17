import { motion } from 'framer-motion';
import { MousePointer2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import heroVector from '../../assets/hero-vector.png';
import logoIcon from '../../assets/logo-icon.png';
import logoText from '../../assets/logo-text.png';

const Hero = () => {
    return (
        <section
            style={{
                position: 'relative',
                padding: 'min(12vh, 8rem) 0 min(15vh, 10rem) 0',
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
                    <h1 className="hero-title" style={{ fontSize: 'clamp(1.875rem, 5vw, 3.5rem)', marginBottom: '1rem', lineHeight: 1.1, fontWeight: 700 }}>
                        eFlybe Technologies —<br />
                        Smart Technology.<br />
                        <span className="text-gradient">Real Business Impact.</span>
                    </h1>
                    <p className="hero-subtext" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.25rem)', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: 1.5 }}>
                        We help businesses solve real-world challenges through intelligent IT solutions and purpose-built software.
                    </p>
                    <div className="hero-actions" style={{ display: 'flex', gap: '1rem' }}>
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
          .hero-pill { font-size: 0.8rem !important; margin-bottom: 1.25rem !important; margin-inline: auto; }
        }
      `}</style>
        </section>
    );
};

export default Hero;
