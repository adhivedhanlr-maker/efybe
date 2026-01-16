import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import logoText from '../../assets/logo-text.png';
import logoIcon from '../../assets/logo-icon.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'LoanDesk', path: '/loandesk' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 50,
                backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid #e2e8f0' : 'none',
                transition: 'all 0.3s ease',
                padding: '0.5rem 0'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }} className="header-logo">
                    <span className="sr-only" style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: '0' }}>eFlybe</span>
                    <img
                        src={logoIcon}
                        alt="eFlybe Icon"
                        style={{ height: '28px', objectFit: 'contain' }}
                        className="logo-icon"
                    />
                    <img
                        src={logoText}
                        alt="eFlybe"
                        style={{ height: '24px', objectFit: 'contain' }}
                        className="logo-text"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            style={{
                                fontWeight: 500,
                                color: location.pathname === link.path ? 'var(--secondary-blue)' : 'var(--text-main)',
                                fontSize: '0.95rem'
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem' }}>
                        Get Started
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        padding: '0.5rem',
                        cursor: 'pointer'
                    }}
                    className="mobile-toggle"
                >
                    {isOpen ? <X size={28} color="var(--primary-navy)" /> : <Menu size={28} color="var(--primary-navy)" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: '100%',
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        backgroundColor: 'var(--white)',
                        padding: '2.5rem 1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        zIndex: 100,
                        borderTop: '1px solid #f1f5f9'
                    }}
                    className="mobile-nav-panel"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            style={{
                                fontSize: '1.25rem',
                                fontWeight: 600,
                                padding: '1rem 0',
                                borderBottom: '1px solid #f8fafc',
                                color: location.pathname === link.path ? 'var(--secondary-blue)' : 'var(--text-main)'
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="btn btn-primary" style={{ marginTop: '2rem', padding: '1.25rem' }}>
                        Get Started
                    </Link>
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
          .logo-text { display: none !important; }
          .logo-icon { height: 32px !important; }
          header { padding: 0.75rem 0 !important; }
        }
        @media (min-width: 480px) and (max-width: 768px) {
           .logo-text { display: block !important; }
        }
      `}</style>
        </header>
    );
};

export default Header;
