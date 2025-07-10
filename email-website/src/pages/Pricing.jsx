import React from 'react';
import '../style/pricing.css';

const Pricing = () => {
    return (
        <section className="pricing-page">
            <div className="pricing-header">
                <h1>Simple Pricing for Everyone</h1>
                <p>Start free. Upgrade anytime as your business grows.</p>
            </div>

            <div className="pricing-plans">
                <div className="plan-card">
                    <h2>Free</h2>
                    <p className="price">$0<span>/mo</span></p>
                    <ul>
                        <li>Up to 1,000 emails/month</li>
                        <li>Basic Email Builder</li>
                        <li>Limited Support</li>
                        <li>Email Verification (500/month)</li>
                    </ul>
                    <button>Get Started</button>
                </div>

                <div className="plan-card popular">
                    <div className="badge">Popular</div>
                    <h2>Pro</h2>
                    <p className="price">$29<span>/mo</span></p>
                    <ul>
                        <li>Up to 50,000 emails/month</li>
                        <li>Advanced Automation</li>
                        <li>Email & Chat Support</li>
                        <li>Unlimited Verification</li>
                    </ul>
                    <button>Try Pro</button>
                </div>

                <div className="plan-card">
                    <h2>Enterprise</h2>
                    <p className="price">Custom</p>
                    <ul>
                        <li>Unlimited Emails</li>
                        <li>Dedicated Account Manager</li>
                        <li>Custom Integrations</li>
                        <li>Priority Support</li>
                    </ul>
                    <button>Contact Sales</button>
                </div>
            </div>

            <div className="pricing-footer">
                <p>All plans include analytics, campaign scheduling, and list management.</p>
            </div>
        </section>
    );
};

export default Pricing;
