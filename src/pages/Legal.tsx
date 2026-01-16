interface LegalProps {
    type: 'privacy' | 'terms' | 'disclaimer';
}

const Legal = ({ type }: LegalProps) => {
    const content = {
        privacy: {
            title: 'Privacy Policy',
            intro: 'At eFlybe Technologies, your privacy is important to us. This Privacy Policy explains how we collect, use, store, and protect your information when you use our website, platforms, and services.',
            sections: [
                { h: '1. Information We Collect', p: 'We collect only the information necessary to provide our services effectively, which may include: Name, Email address, Company or business details, Login credentials, and information submitted while using our platforms (such as eFlybe LoanDesk). We do not collect unnecessary personal data.' },
                { h: '2. How We Use Your Information', p: 'Your information is used strictly for legitimate business purposes, including: Providing and managing our services, Processing user requests and transactions, Communicating service-related updates, Improving platform functionality, and Customer support. We do not sell, rent, or trade user data to third parties.' },
                { h: '3. Data Security', p: 'We implement industry-standard security practices to protect your data, including secure servers, encrypted connections, access controls, and regular monitoring. While we follow best practices, no method of transmission can be guaranteed as 100% secure.' },
                { h: '4. Data Sharing', p: 'We may share limited data with trusted service providers who assist in operations or to comply with legal obligations. Such parties are bound by confidentiality obligations.' },
                { h: '5. Compliance With Laws', p: 'Our data collection and handling practices comply with the Information Technology Act, 2000 and applicable Indian data protection rules and regulations.' },
                { h: '6. User Responsibility', p: 'Users are responsible for maintaining the confidentiality of their login credentials and ensuring the accuracy of information provided on our platforms.' },
                { h: '7. Updates to This Policy', p: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page, and continued use of our services indicates acceptance of the updated policy.' },
                { h: '8. Contact Us', p: 'If you have any questions or need further clarification regarding this Privacy Policy or our data practices, please contact us at hello@eflybe.com.' }
            ]
        },
        terms: {
            title: 'Terms & Conditions',
            intro: 'Welcome to eFlybe Technologies. By accessing or using our website, platforms, or services, you agree to comply with and be bound by the following Terms & Conditions.',
            sections: [
                { h: '1. Service Scope', p: 'eFlybe Technologies provides Software-as-a-Service (SaaS) solutions and IT consultancy services, including but not limited to platforms such as eFlybe LoanDesk, website development, automation tools, and related digital services. All services are delivered strictly as described in the respective service agreements, proposals, or subscription plans. Any additional requirements or customizations may be subject to separate agreements and charges.' },
                { h: '2. User Responsibility', p: 'Users are solely responsible for the accuracy, completeness, and legality of all data, information, and documents submitted through eFlybe platforms, including but not limited to LoanDesk. eFlybe Technologies does not verify or validate user-provided financial, business, or personal data and shall not be held responsible for consequences arising from incorrect, incomplete, or misleading information.' },
                { h: '3. Service Availability & Limitations', p: 'While we strive to maintain high availability and reliability, eFlybe Technologies does not guarantee uninterrupted or error-free operation of its services. Temporary service interruptions may occur due to: System maintenance, Software updates, Internet or hosting issues, Factors beyond our reasonable control. We will make reasonable efforts to restore services promptly.' },
                { h: '4. Limitation of Liability', p: 'To the maximum extent permitted by law, eFlybe Technologies shall not be liable for any indirect, incidental, special, or consequential damages, including but not limited to loss of profits, business opportunities, data, or goodwill. Our total liability, if any, shall be strictly limited to the fees paid by the user for the specific service that gave rise to the claim.' },
                { h: '5. No Guarantee of Outcomes', p: 'eFlybe Technologies provides technology tools and consultancy support only. We do not guarantee outcomes, including but not limited to: Loan approvals, Bank decisions, Financial performance, Regulatory approvals. All final decisions rest with banks, financial institutions, and authorities.' },
                { h: '6. Intellectual Property', p: 'All software, designs, content, logos, and materials provided by eFlybe Technologies are the intellectual property of eFlybe Technologies, unless stated otherwise. Unauthorized use, copying, or redistribution is strictly prohibited.' },
                { h: '7. Termination of Access', p: 'We reserve the right to suspend or terminate user access to our services in cases of: Violation of these Terms, Misuse of the platform, Unlawful or unethical activities.' },
                { h: '8. Changes to Terms', p: 'eFlybe Technologies reserves the right to update or modify these Terms & Conditions at any time. Continued use of our services after changes constitutes acceptance of the updated terms.' },
                { h: '9. Governing Law', p: 'These Terms & Conditions shall be governed by and construed in accordance with the laws of India, and any disputes shall be subject to the jurisdiction of Indian courts.' },
                { h: '10. Contact Information', p: 'For any questions regarding these Terms & Conditions, please contact: eFlybe Technologies. Email: hello@eflybe.com. Website: www.eflybe.com' }
            ]
        },
        disclaimer: {
            title: 'Disclaimer',
            intro: 'The information provided on this platform is for general informational purposes only.',
            sections: [
                { h: 'Loan Approvals', p: 'eFlybe Technologies provides software tools for report generation. We do not guarantee loan approvals from banks or financial institutions.' },
                { h: 'Financial Advice', p: 'Our platforms provide data-driven reports; they do not constitute professional financial or legal advice.' },
                { h: 'Final Decisions', p: 'All final financial decisions and project viability assessments are subject to evaluation by relevant authorities and banks.' }
            ]
        }
    };

    const active = content[type] as { title: string; intro: string; sections: { h: string; p: string }[] };

    return (
        <div className="legal-page">
            <section className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h1 style={{ marginBottom: '1.5rem' }}>{active.title}</h1>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '3.5rem', lineHeight: '1.6' }}>
                            {active.intro}
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                            {active.sections.map((s, i) => (
                                <div key={i}>
                                    <h3 style={{ marginBottom: '1.25rem', color: 'var(--primary-navy)', fontSize: '1.25rem' }}>{s.h}</h3>
                                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>{s.p}</p>
                                </div>
                            ))}
                        </div>
                        <div style={{ marginTop: '5rem', padding: '2rem', borderLeft: '4px solid var(--secondary-blue)', backgroundColor: '#f1f5f9', borderRadius: '0 12px 12px 0' }}>
                            <p style={{ color: 'var(--primary-navy)', fontWeight: 600, marginBottom: '0.5rem' }}>Need Further Clarification?</p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                For any questions regarding our policies or terms, please reach out to us at <a href="mailto:hello@eflybe.com" style={{ color: 'var(--secondary-blue)', fontWeight: 500 }}>hello@eflybe.com</a>.
                            </p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '1rem' }}>
                                Last Updated: January 2026
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Legal;
