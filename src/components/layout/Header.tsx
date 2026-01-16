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
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img
                        src={logoIcon}
                        alt="eFlybe Icon"
                        style={{ height: '32px', objectFit: 'contain' }}
                    />
                    <img
                        src={logoText}
                        alt="eFlybe Technologies"
                        style={{ height: '32px', objectFit: 'contain' }}
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
                    <Link to="/contact" className="btn btn-primary">
                        Get Started
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ display: 'none', background: 'none' }}
                    className="mobile-toggle"
                >
                    {isOpen ? <X color="var(--primary-navy)" /> : <Menu color="var(--primary-navy)" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        width: '100%',
                        backgroundColor: 'var(--white)',
                        padding: '1.5rem',
                        boxShadow: 'var(--shadow-md)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            style={{ fontWeight: 500, padding: '0.5rem 0' }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="btn btn-primary">
                        Get Started
                    </Link>
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </header>
    );
};

export default Header;
