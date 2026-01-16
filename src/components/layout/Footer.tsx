import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--primary-navy)', color: 'white', paddingTop: '5rem', paddingBottom: '2rem' }}>
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
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingRight: '2rem' }}>
                        <h2 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700 }}>eFlybe</h2>
                        <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>
                            Empowering businesses through smart automation and specialized IT solutions.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" style={{ color: '#94a3b8', transition: 'color 0.3s' }} className="hover-link"><Linkedin size={20} /></a>
                            <a href="#" style={{ color: '#94a3b8', transition: 'color 0.3s' }} className="hover-link"><Twitter size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1.75rem', fontSize: '1.1rem', fontWeight: 600 }}>Solutions</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                            <li><Link to="/loandesk" style={{ color: '#94a3b8', transition: 'color 0.3s' }} className="hover-link">LoanDesk (DPR & CMA)</Link></li>
                            <li><a href="#" style={{ color: '#94a3b8' }} className="hover-link">Business Automation</a></li>
                            <li><a href="#" style={{ color: '#94a3b8' }} className="hover-link">Custom Software</a></li>
                            <li><a href="#" style={{ color: '#94a3b8' }} className="hover-link">Analytics</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1.75rem', fontSize: '1.1rem', fontWeight: 600 }}>Company</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                            <li><Link to="/about" style={{ color: '#94a3b8' }} className="hover-link">About Us</Link></li>
                            <li><Link to="/contact" style={{ color: '#94a3b8' }} className="hover-link">Contact</Link></li>
                            <li><Link to="/privacy" style={{ color: '#94a3b8' }} className="hover-link">Privacy Policy</Link></li>
                            <li><Link to="/terms" style={{ color: '#94a3b8' }} className="hover-link">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact" style={{ borderLeft: '1px solid rgba(255,255,255,0.05)', paddingLeft: '3rem' }}>
                        <h4 style={{ color: 'white', marginBottom: '1.75rem', fontSize: '1.1rem', fontWeight: 600 }}>Get in Touch</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
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

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', color: '#64748b', fontSize: '0.875rem' }}>
                    <p>© {new Date().getFullYear()} eFlybe Technologies. All rights reserved.</p>
                    <p style={{ fontWeight: 500 }}>Building Trust with Technology.</p>
                </div>
            </div>

            <style>{`
                @media (max-width: 968px) {
                    .footer-grid { 
                        grid-template-columns: 1fr 1fr !important; 
                        gap: 3rem 2rem !important; 
                    }
                    .footer-contact {
                        border-left: none !important;
                        padding-left: 0 !important;
                    }
                }
                @media (max-width: 640px) {
                    .footer-grid { 
                        grid-template-columns: 1fr !important; 
                    }
                }
                .hover-link {
                    text-decoration: none;
                }
                .hover-link:hover {
                    color: white !important;
                    text-decoration: underline;
                }
            `}</style>
        </footer>
    );
};

export default Footer;
