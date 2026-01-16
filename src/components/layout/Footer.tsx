import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, ChevronDown, ChevronUp } from 'lucide-react';

const Footer = () => {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (name: string) => {
        if (window.innerWidth <= 768) {
            setOpenSection(openSection === name ? null : name);
        }
    };

    const isSectionOpen = (name: string) => {
        if (window.innerWidth > 768) return true;
        return openSection === name;
    };

    return (
        <footer style={{ backgroundColor: 'var(--primary-navy)', color: 'white', paddingTop: 'clamp(3rem, 10vw, 5rem)', paddingBottom: '2rem' }}>
            <div className="container">
                <div
                    className="footer-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(0, 1.5fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1.2fr)',
                        gap: '4rem',
                        marginBottom: '4rem'
                    }}
                >
                    <div className="footer-brand" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <h2 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700 }}>eFlybe</h2>
                        <p style={{ color: '#94a3b8', lineHeight: 1.6, maxWidth: '300px' }}>
                            Empowering businesses through smart automation and specialized IT solutions.
                        </p>
                        <div style={{ display: 'flex', gap: '1.25rem' }}>
                            <a href="#" style={{ color: '#94a3b8', transition: 'color 0.3s' }} className="social-icon"><Linkedin size={20} /></a>
                            <a href="#" style={{ color: '#94a3b8', transition: 'color 0.3s' }} className="social-icon"><Twitter size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4
                            onClick={() => toggleSection('solutions')}
                            style={{ color: 'white', marginBottom: '1.75rem', fontSize: '1.1rem', fontWeight: 600, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                        >
                            Solutions
                            <span className="mobile-only">{openSection === 'solutions' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</span>
                        </h4>
                        <ul className={`footer-list ${isSectionOpen('solutions') ? 'open' : ''}`} style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                            <li><Link to="/loandesk" style={{ color: '#94a3b8' }} className="hover-link">LoanDesk (DPR & CMA)</Link></li>
                            <li><a href="#" style={{ color: '#94a3b8' }} className="hover-link">Business Automation</a></li>
                            <li><a href="#" style={{ color: '#94a3b8' }} className="hover-link">Custom Software</a></li>
                            <li><a href="#" style={{ color: '#94a3b8' }} className="hover-link">Analytics</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4
                            onClick={() => toggleSection('company')}
                            style={{ color: 'white', marginBottom: '1.75rem', fontSize: '1.1rem', fontWeight: 600, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                        >
                            Company
                            <span className="mobile-only">{openSection === 'company' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</span>
                        </h4>
                        <ul className={`footer-list ${isSectionOpen('company') ? 'open' : ''}`} style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                            <li><Link to="/about" style={{ color: '#94a3b8' }} className="hover-link">About Us</Link></li>
                            <li><Link to="/contact" style={{ color: '#94a3b8' }} className="hover-link">Contact</Link></li>
                            <li><Link to="/privacy" style={{ color: '#94a3b8' }} className="hover-link">Privacy Policy</Link></li>
                            <li><Link to="/terms" style={{ color: '#94a3b8' }} className="hover-link">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact footer-section" style={{ borderLeft: '1px solid rgba(255,255,255,0.05)', paddingLeft: '3rem' }}>
                        <h4
                            onClick={() => toggleSection('contact')}
                            style={{ color: 'white', marginBottom: '1.75rem', fontSize: '1.1rem', fontWeight: 600, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                        >
                            Get in Touch
                            <span className="mobile-only">{openSection === 'contact' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</span>
                        </h4>
                        <ul className={`footer-list ${isSectionOpen('contact') ? 'open' : ''}`} style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <li style={{ display: 'flex', gap: '0.875rem', color: '#94a3b8', alignItems: 'center' }}>
                                <Mail size={18} style={{ color: 'var(--secondary-blue)' }} /> hello@eflybe.com
                            </li>
                            <li style={{ display: 'flex', gap: '0.875rem', color: '#94a3b8', alignItems: 'center' }}>
                                <Phone size={18} style={{ color: 'var(--secondary-blue)' }} /> +91 90000 00000
                            </li>
                            <li style={{ display: 'flex', gap: '0.875rem', color: '#94a3b8', alignItems: 'flex-start' }}>
                                <MapPin size={18} style={{ color: 'var(--secondary-blue)', marginTop: '0.2rem' }} /> Kerala, India
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', color: '#64748b', fontSize: '0.8125rem' }}>
                    <p>© {new Date().getFullYear()} eFlybe Technologies. All rights reserved.</p>
                    <p style={{ fontWeight: 500 }} className="hide-on-mobile">Building Trust with Technology.</p>
                </div>
            </div>

            <style>{`
                .mobile-only { display: none; }
                
                @media (max-width: 768px) {
                    .footer-grid { 
                        grid-template-columns: 1fr !important; 
                        gap: 0 !important; 
                        margin-bottom: 2rem !important;
                    }
                    .footer-section {
                        border-bottom: 1px solid rgba(255,255,255,0.05);
                        padding: 1.25rem 0 !important;
                    }
                    .footer-section h4 {
                        margin-bottom: 0 !important;
                        font-size: 1rem !important;
                    }
                    .footer-list {
                        max-height: 0;
                        overflow: hidden;
                        transition: max-height 0.3s ease-out, margin-top 0.3s ease;
                        margin-top: 0;
                    }
                    .footer-list.open {
                        max-height: 300px;
                        margin-top: 1.5rem;
                    }
                    .mobile-only { display: inline-flex; }
                    .footer-brand { margin-bottom: 2.5rem; }
                    .footer-bottom { justify-content: center; text-align: center; }
                    .footer-contact { border-left: none !important; padding-left: 0 !important; }
                }
                
                .hover-link { text-decoration: none; transition: color 0.3s; }
                .hover-link:hover { color: white !important; }
                .social-icon:hover { color: white !important; }
            `}</style>
        </footer>
    );
};

export default Footer;
