import React from 'react';
import '../style/features.css';
import { TbBolt, TbChartBar, TbShieldCheck, TbSend, TbSettingsAutomation } from 'react-icons/tb';

const Features = () => {
    return (
        <div className="features-page">
            {/* Hero Section */}
            <section className="hero">
                <h1>Powerful Features Built for Performance</h1>
                <p>Explore everything EmailAI Pro offers to streamline your email marketing.</p>
            </section>

            {/* Feature Highlights */}
            <section className="highlight-grid">
                <div className="highlight-card">
                    <TbBolt className="icon" />
                    <h3>AI Campaign Builder</h3>
                    <p>Instantly generate email campaigns with high conversion rates using AI.</p>
                </div>
                <div className="highlight-card">
                    <TbChartBar className="icon" />
                    <h3>Advanced Analytics</h3>
                    <p>Real-time reporting on opens, clicks, revenue, and audience behavior.</p>
                </div>
                <div className="highlight-card">
                    <TbShieldCheck className="icon" />
                    <h3>Email Verification</h3>
                    <p>Keep your list clean and boost deliverability with built-in validation tools.</p>
                </div>
                <div className="highlight-card">
                    <TbSend className="icon" />
                    <h3>Smart Scheduling</h3>
                    <p>Send emails at optimal times based on engagement history.</p>
                </div>
                <div className="highlight-card">
                    <TbSettingsAutomation className="icon" />
                    <h3>Automation Workflows</h3>
                    <p>Create behavior-based automations with triggers, conditions, and actions.</p>
                </div>
            </section>

            {/* Visual Demo */}
            <section className="visual-demo">
                <div className="text">
                    <h2>See the Power of the Dashboard</h2>
                    <p>Track performance, manage contacts, and fine-tune campaigns all in one place.</p>
                </div>
                <img src="/images/dashboard.png" alt="Dashboard Demo" />
            </section>

            {/* Benefit Cards */}
            <section className="benefit-section">
                <div className="benefit-card">
                    <h3>No Code Required</h3>
                    <p>Everything is built to be user-friendly — no tech experience needed.</p>
                </div>
                <div className="benefit-card">
                    <h3>Scalable Infrastructure</h3>
                    <p>Handle large campaigns and subscriber volumes with zero slowdown.</p>
                </div>
                <div className="benefit-card">
                    <h3>24/7 Smart Support</h3>
                    <p>Built-in AI and human support so you’re never left behind.</p>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials">
                <h2>Loved by Marketers & Founders</h2>
                <div className="testimonial-cards">
                    <blockquote>
                        "EmailAI Pro transformed our outreach. We've seen 3x more engagement."
                        <footer>- Jordan, SaaS Founder</footer>
                    </blockquote>
                    <blockquote>
                        "Scheduling and automation are now effortless. Game changer!"
                        <footer>- Priya, Marketing Lead</footer>
                    </blockquote>
                </div>
            </section>

            {/* Integrations */}
            <section className="integrations">
                <h2>Connect with Your Favorite Tools</h2>
                <p>Seamlessly integrate with Shopify, HubSpot, Zapier, and more.</p>
                <div className="logos">
                    <img src="../logos/shopify.png" alt="Shopify" />
                    <img src="/logos/zapier.png" alt="Zapier" />
                    <img src="/logos/hubspot.png" alt="HubSpot" />
                </div>
            </section>

            {/* CTA */}
            <section className="cta">
                <h2>Start Growing with EmailAI Pro Today</h2>
                <p>No credit card needed. Get started in under 2 minutes.</p>
                <button className="primary">Get Started Free</button>
            </section>
        </div>
    );
};

export default Features;
