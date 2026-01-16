import { Mail, Phone, MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="section-padding gradient-bg">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Contact Us</h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Let's discuss how eFlybe can help your business grow.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem' }}>
                    <div>
                        <h2 style={{ marginBottom: '2rem' }}>Get in Touch</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ padding: '1rem', background: 'rgba(37, 99, 235, 0.1)', borderRadius: '12px' }}>
                                    <Mail color="var(--secondary-blue)" />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600 }}>Email</div>
                                    <div style={{ color: 'var(--text-muted)' }}>hello@eflybe.com</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ padding: '1rem', background: 'rgba(20, 184, 166, 0.1)', borderRadius: '12px' }}>
                                    <MessageSquare color="var(--accent-teal)" />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600 }}>WhatsApp</div>
                                    <div style={{ color: 'var(--text-muted)' }}>+91 90000 00000</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ padding: '1rem', background: 'rgba(37, 99, 235, 0.1)', borderRadius: '12px' }}>
                                    <Phone color="var(--secondary-blue)" />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600 }}>Phone</div>
                                    <div style={{ color: 'var(--text-muted)' }}>+91 90000 00000</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h3 style={{ marginBottom: '1.5rem' }}>Send a Message</h3>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Name</label>
                                    <input type="text" placeholder="John Doe" style={{ padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '8px' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Email</label>
                                    <input type="email" placeholder="john@example.com" style={{ padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '8px' }} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Company</label>
                                <input type="text" placeholder="Acme Inc." style={{ padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '8px' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Message</label>
                                <textarea rows={4} placeholder="How can we help?" style={{ padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '8px', resize: 'none' }}></textarea>
                            </div>
                            <button className="btn btn-primary" type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
