const About = () => {
    return (
        <div className="about-page">
            <section className="section-padding gradient-bg">
                <div className="container">
                    <div style={{ maxWidth: '800px' }}>
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>About eFlybe</h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>
                            A business-first technology company dedicated to solving real-world challenges for the Indian market.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                    <div>
                        <h2 style={{ marginBottom: '1.5rem' }}>Who We Are</h2>
                        <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
                            eFlybe Technologies is an Indian IT & SaaS company focused on business automation and smart financial reporting. We bridge the gap between complex software engineering and practical business needs.
                        </p>
                        <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
                            We understand that technology is a means to an end. Our goal is to provide tools that help small and medium businesses (MSMEs), Chartered Accountants, and consultants thrive in a competitive landscape.
                        </p>
                    </div>
                    <div>
                        <h2 style={{ marginBottom: '1.5rem' }}>What We Believe</h2>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[
                                { title: 'Trust First', desc: 'We build long-term relationships through reliable and secure technology.' },
                                { title: 'Efficiency Matters', desc: 'Every line of code should contribute to saving time or increasing output.' },
                                { title: 'Accessibility', desc: 'Powerful software should be easy to use for non-technical decision makers.' }
                            ].map((item, i) => (
                                <li key={i}>
                                    <h4 style={{ color: 'var(--secondary-blue)', marginBottom: '0.25rem' }}>{item.title}</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="section-padding" style={{ backgroundColor: '#f1f5f9' }}>
                <div className="container">
                    <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ marginBottom: '1.5rem' }}>Founder Vision</h2>
                        <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
                            "We started eFlybe with a simple premise: Indian businesses deserve technology that speaks their language—the language of growth, compliance, and ROI. We're not just another tech startup; we're a partner in your business journey."
                        </p>
                        <div style={{ fontWeight: 700 }}>Management Team</div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>eFlybe Technologies</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
