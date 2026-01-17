import { useState, useEffect } from 'react';
import { Languages, ChevronDown } from 'lucide-react';

const languages = [
    { code: 'en', name: 'English', label: 'English' },
    { code: 'ml', name: 'Malayalam', label: 'മലയാളം' },
    { code: 'ta', name: 'Tamil', label: 'தமிழ்' },
    { code: 'kn', name: 'Kannada', label: 'ಕನ್ನಡ' },
    { code: 'hi', name: 'Hindi', label: 'हिन्दी' },
    { code: 'te', name: 'Telugu', label: 'తెలుగు' }
];

const LanguageSwitcher = () => {
    const [currentLang, setCurrentLang] = useState('en');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Handle Auto-Translation on First Visit
        const hasSetLanguage = localStorage.getItem('user-language-set');
        if (!hasSetLanguage) {
            const browserLang = navigator.language.split('-')[0];
            const supported = languages.find(l => l.code === browserLang);
            if (supported && supported.code !== 'en') {
                changeLanguage(supported.code);
            }
            localStorage.setItem('user-language-set', 'true');
        }

        // Check if language is already set in cookies
        const googtrans = document.cookie.split('; ').find(row => row.startsWith('googtrans='));
        if (googtrans) {
            const langCode = googtrans.split('/').pop();
            const found = languages.find(l => l.code === langCode);
            if (found) setCurrentLang(found.code);
        }
    }, []);

    const changeLanguage = (langCode: string) => {
        // Google Translate uses this cookie format: /en/[langCode]
        const domain = window.location.hostname === 'localhost' ? '' : `domain=.${window.location.hostname.split('.').slice(-2).join('.')};`;
        document.cookie = `googtrans=/en/${langCode}; path=/; ${domain}`;

        // Update local state and reload to apply translation
        setCurrentLang(langCode);
        setIsOpen(false);
        window.location.reload();
    };

    const currentLangData = languages.find(l => l.code === currentLang) || languages[0];

    return (
        <div className="language-switcher-container" style={{ position: 'relative' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.4rem 0.8rem',
                    backgroundColor: 'rgba(37, 99, 235, 0.05)',
                    border: '1px solid #e2e8f0',
                    borderRadius: '100px',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--primary-navy)',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap'
                }}
                className="lang-toggle-btn"
            >
                <Languages size={16} color="var(--secondary-blue)" />
                <span>{currentLangData.label}</span>
                <ChevronDown size={14} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>

            {isOpen && (
                <>
                    <div
                        onClick={() => setIsOpen(false)}
                        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 998 }}
                    />
                    <div style={{
                        position: 'absolute',
                        top: 'calc(100% + 8px)',
                        right: 0,
                        backgroundColor: 'white',
                        borderRadius: '16px',
                        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
                        border: '1px solid #f1f5f9',
                        padding: '0.5rem',
                        minWidth: '160px',
                        zIndex: 999,
                        overflow: 'hidden',
                        animation: 'slideIn 0.2s ease-out'
                    }}>
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => changeLanguage(lang.code)}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '100%',
                                    padding: '0.6rem 1rem',
                                    border: 'none',
                                    background: currentLang === lang.code ? 'rgba(37, 99, 235, 0.05)' : 'none',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    transition: 'all 0.2s ease',
                                    color: currentLang === lang.code ? 'var(--secondary-blue)' : 'var(--text-main)'
                                }}
                                className="lang-option"
                            >
                                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{lang.label}</span>
                                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{lang.name}</span>
                            </button>
                        ))}
                    </div>
                </>
            )}

            <style>{`
                @keyframes slideIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .lang-toggle-btn:hover {
                    background-color: rgba(37, 99, 235, 0.1);
                    border-color: var(--secondary-blue);
                }
                .lang-option:hover {
                    background-color: #f8fafc;
                }
            `}</style>

            {/* Hidden Google element to trigger loading */}
            <div id="google_translate_element" style={{ display: 'none' }}></div>
        </div>
    );
};

export default LanguageSwitcher;
