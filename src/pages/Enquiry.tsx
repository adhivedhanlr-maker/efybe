import { useParams } from 'react-router-dom';
import { Mail, MessageSquare, Cpu, Globe, CheckCircle2 } from 'lucide-react';

const Enquiry = () => {
    const { serviceId } = useParams();

    const services = {
        'ai-software': {
            title: 'AI Based Software for Business',
            tagline: 'Intelligent automation tailored to your operational needs.',
            icon: <Cpu size={24} color="var(--secondary-blue)" />,
            features: ['Custom AI Models', 'Process Automation', 'Predictive Analytics', 'Smart Integration']
        },
        'web-dev': {
            title: 'Modern Website Development',
            tagline: 'High-performance, premium websites that convert.',
            icon: <Globe size={24} color="var(--accent-teal)" />,
            features: ['Responsive Design', 'SaaS Platforms', 'E-commerce Solutions', 'SEO Optimized']
        }
    };

    const currentService = services[serviceId as keyof typeof services] || services['ai-software'];

    return (
        <div className="enquiry-page">
            <section className="section-padding gradient-bg">
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ display: 'inline-flex', padding: '0.75rem', background: 'white', borderRadius: '12px', marginBottom: '1.5rem', boxShadow: 'var(--shadow-soft)' }}>
                        {currentService.icon}
                    </div>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>{currentService.title}</h1>
                    <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        {currentService.tagline}
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container enquiry-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '4rem' }}>
                    <div className="enquiry-info">
                        <h2 style={{ marginBottom: '2rem', fontSize: '1.75rem' }}>Solution Benefits</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
                            {currentService.features.map((feature, i) => (
                                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <CheckCircle2 size={20} color="var(--accent-teal)" />
                                    <span style={{ fontWeight: 500, color: 'var(--text-main)' }}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div style={{ padding: '2rem', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                            <h4 style={{ marginBottom: '1rem' }}>Need immediate help?</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                    <Mail size={18} color="var(--secondary-blue)" />
                                    <span style={{ fontSize: '0.9rem' }}>hello@eflybe.com</span>
                                </div>
                                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                    <MessageSquare size={18} color="var(--accent-teal)" />
                                    <span style={{ fontSize: '0.9rem' }}>WhatsApp available 24/7</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card enquiry-form-card" style={{ padding: 'clamp(1.5rem, 5vw, 2.5rem)', boxShadow: 'var(--shadow-md)' }}>
                        <h3 style={{ marginBottom: '1.5rem' }}>Start Your Project</h3>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} onSubmit={(e) => e.preventDefault()}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Name</label>
                                <input type="text" placeholder="Your name" style={{ padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '0.95rem' }} required />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Email</label>
                                <input type="email" placeholder="email@company.com" style={{ padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '0.95rem' }} required />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Message</label>
                                <textarea rows={4} placeholder={`Tell us about your ${serviceId === 'ai-software' ? 'AI automation' : 'website'} goals...`} style={{ padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '8px', resize: 'none', fontSize: '0.95rem' }} required></textarea>
                            </div>
                            <button className="btn btn-primary" type="submit" style={{ padding: '1rem', marginTop: '0.5rem' }}>Request Quote</button>
                        </form>
                    </div>
                </div>
            </section>

            <style>{`
                @media (max-width: 768px) {
                    .enquiry-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
                    .enquiry-info { text-align: left; }
                }
            `}</style>
        </div>
    );
};

export default Enquiry;
