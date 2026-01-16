import { motion } from 'framer-motion';
import { MousePointer2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import heroVector from '../../assets/hero-vector.png';

const Hero = () => {
    return (
        <section
            style={{
                position: 'relative',
                padding: '1rem 0 8rem 0',
                overflow: 'hidden',
                background: 'radial-gradient(circle at 100% 0%, #e0f2fe 0%, transparent 40%), radial-gradient(circle at 0% 100%, #f0f9ff 0%, transparent 40%)'
            }}
        >
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '4rem', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', backgroundColor: 'rgba(37, 99, 235, 0.1)', color: 'var(--secondary-blue)', borderRadius: '100px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '2rem' }}>
                        <MousePointer2 size={16} /> Smart Automation for Modern Businesses
                    </div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                        Smart Technology.<br />
                        <span className="text-gradient">Real Business Impact.</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '600px' }}>
                        We help businesses solve real-world challenges through intelligent IT solutions and purpose-built software. From banking reports to enterprise automation.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link to="/loandesk" className="btn btn-primary" style={{ gap: '0.5rem' }}>
                            Explore Our Solutions <ArrowRight size={18} />
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
                    style={{ position: 'relative' }}
                    className="hero-image"
                >
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <img
                            src={heroVector}
                            alt="eFlybe Illustration"
                            style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'contain',
                                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.08))',
                                borderRadius: '24px'
                            }}
                        />
                    </div>
                </motion.div>
            </div>

            <style>{`
        @media (max-width: 968px) {
          .container { grid-template-columns: 1fr !important; gap: 3rem !important; text-align: center; }
          .container p { margin-inline: auto; }
          .container div { justify-content: center; }
          .hero-image { max-width: 500px; margin: 0 auto; }
        }
      `}</style>
        </section>
    );
};

export default Hero;
