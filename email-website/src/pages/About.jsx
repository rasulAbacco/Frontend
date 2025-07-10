import React from 'react';
import '../style/about.css';

const About = () => {
    return (
        <section className="about-page">
            <div className="about-hero">
                <h1>Welcome to AbaccoTech</h1>
                <p>Where your vision meets expert-driven execution.</p>
            </div>

            <div className="about-highlights">
                <div className="about-card">
                    <h3>👨‍💼 Expert Professionals</h3>
                    <p>
                        Our team provides tailored solutions to meet your needs. We're always eager to tackle challenging projects and deliver results that exceed expectations.
                    </p>
                </div>
                <div className="about-card">
                    <h3>🤝 Loyalty</h3>
                    <p>
                        Integrity and quality are our cornerstones. We do what's right—every time—to ensure the best outcomes for our clients.
                    </p>
                </div>
                <div className="about-card">
                    <h3>📈 Extensive Experience</h3>
                    <p>
                        With years of industry engagement, we've served thousands of customers and gained insights across multiple domains.
                    </p>
                </div>
                <div className="about-card">
                    <h3>💵 Transparent Pricing</h3>
                    <p>
                        We offer the best services at fair prices without compromising on quality or customer satisfaction.
                    </p>
                </div>
                <div className="about-card">
                    <h3>😊 Customer Satisfaction</h3>
                    <p>
                        “Happy customers, happy business.” We adapt to your needs while maintaining the highest service standards.
                    </p>
                </div>
            </div>

            <div className="services-section">
                <h2>Our Services</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <h3>🔍 Market Research</h3>
                        <p>We analyze industry trends and consumer behavior to help you make data-driven decisions before launching your product.</p>
                    </div>
                    <div className="service-card">
                        <h3>📢 Demand Generation</h3>
                        <p>Fuel your sales pipeline with qualified leads using multi-channel marketing strategies tailored to your brand.</p>
                    </div>
                    <div className="service-card">
                        <h3>💻 Digital Marketing</h3>
                        <p>From SEO to social media and paid campaigns, we boost your visibility and drive traffic that converts.</p>
                    </div>
                    <div className="service-card">
                        <h3>📊 CRM Data Quality</h3>
                        <p>Improve your customer insights by cleansing and enhancing CRM data for accuracy and completeness.</p>
                    </div>
                    <div className="service-card">
                        <h3>🔧 CRM Consulting</h3>
                        <p>Our experts help you select, configure, and optimize CRM systems to match your business processes.</p>
                    </div>
                    <div className="service-card">
                        <h3>🧹 CRM Data Management</h3>
                        <p>We manage, standardize, and segment your CRM data to ensure consistent and efficient communication with your audience.</p>
                    </div>
                    <div className="service-card">
                        <h3>🔗 Salesforce Integration</h3>
                        <p>Connect Salesforce seamlessly with your apps and tools to streamline operations and maximize ROI.</p>
                    </div>
                </div>
            </div>


            <div className="company-info">
                <h2>Get in Touch</h2>
                <p>
                    📍 3rd Floor, 12-4.13, 12A, J.B. Kaval Village,<br />
                    Major Sandeep Unnikrishnan Road, Adityanagar, Vidyaranyapura Post,<br />
                    Bengaluru (Bangalore) Urban, Karnataka, 560097 - 560054
                </p>
                <p>📞 +91 85534 02044</p>
                <p>✉️ info@abaccotech.com</p>
            </div>
        </section>
    );
};

export default About;
