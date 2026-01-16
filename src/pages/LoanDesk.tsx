import { Shield, Zap, FileCheck, Lock } from 'lucide-react';
import Slideshow from '../components/common/Slideshow';
import ss1 from '../assets/loandesk/ss1.png';
import ss2 from '../assets/loandesk/ss2.png';
import ss3 from '../assets/loandesk/ss3.png';

const LoanDesk = () => {
    const loandeskImages = [ss1, ss2, ss3];
    const features = [
        { icon: <FileCheck color="#2563EB" />, title: 'Bank Compliance', desc: 'Reports formatted strictly according to Indian banking norms.' },
        { icon: <Zap color="#2563EB" />, title: 'Lightning Fast', desc: 'Generate complex CMA data in minutes with our automated engines.' },
        { icon: <Shield color="#2563EB" />, title: 'Data Integrity', desc: 'Secure storage and reliable calculations you can count on.' },
        { icon: <Lock color="#2563EB" />, title: 'Privacy Focused', desc: 'We do not sell or share your sensitive project data with third parties.' },
    ];

    return (
        <div className="loandesk-page">
            <section className="section-padding gradient-bg">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>eFlybe <span style={{ color: 'var(--secondary-blue)' }}>LoanDesk</span></h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px' }}>
                            The definitive platform for Project Reports, CMA, and Financial Projections. Trusted by CAs and MSMEs across India.
                        </p>
                    </div>
                    <div style={{ height: '400px', width: '100%' }}>
                        <Slideshow images={loandeskImages} />
                    </div>
                </div>
            </section>

            <section className="section-padding" id="features">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                        {features.map((f, i) => (
                            <div key={i} className="card">
                                <div style={{ marginBottom: '1rem' }}>{f.icon}</div>
                                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>{f.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{f.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ marginBottom: '1.5rem' }}>Who is it for?</h2>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-muted)', listStyle: 'none' }}>
                                <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--secondary-blue)' }}>✓</span> Chartered Accountants (CAs)</li>
                                <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--secondary-blue)' }}>✓</span> Business Consultants</li>
                                <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--secondary-blue)' }}>✓</span> MSME Business Owners</li>
                                <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--secondary-blue)' }}>✓</span> Loan Facilitators</li>
                            </ul>
                        </div>
                        <div className="card" style={{ padding: '3rem' }}>
                            <h3 style={{ marginBottom: '1.5rem' }}>Report Types</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid #eee' }}>
                                    <span>Detailed Project Report (DPR)</span>
                                    <span style={{ color: 'var(--accent-teal)', fontWeight: 600 }}>Included</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid #eee' }}>
                                    <span>CMA Data Preparation</span>
                                    <span style={{ color: 'var(--accent-teal)', fontWeight: 600 }}>Included</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid #eee' }}>
                                    <span>Simple Financial Projections</span>
                                    <span style={{ color: 'var(--accent-teal)', fontWeight: 600 }}>Included</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding" style={{ backgroundColor: 'var(--primary-navy)', color: 'white' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ color: 'white', marginBottom: '2rem' }}>Ready to generate your first report?</h2>
                    <button className="btn btn-primary" style={{ backgroundColor: 'var(--accent-teal)' }}>Get Started with LoanDesk</button>
                </div>
            </section>
        </div>
    );
};

export default LoanDesk;
