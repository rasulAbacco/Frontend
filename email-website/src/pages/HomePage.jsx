import '../style/home.css'; // Assuming you have a CSS file for styles
import { TbBrandOpenai } from "react-icons/tb";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaStopwatch20 } from "react-icons/fa";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaChartLine, FaRobot, FaRegSmile } from "react-icons/fa";

const HomePage = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in ms
        });
    }, []);

    return (
        <main>
            {/* Hero Section */}
            <section className="hero" >
                <div className="hero-text">
                    <h1 className="hero-title wave-text">
                        Email <span>M</span><span>a</span><span>r</span><span>k</span><span>e</span><span>t</span><span>i</span><span>n</span><span>g</span> <h1 className='color-text'>Reimagined</h1>
                    </h1>
                    <p>Create, verify, and send campaigns with AI. Increase engagement by 340%.</p>
                    <div className="hero-buttons">
                        <button className="primary">Start Free Trial</button>
                        <button className="secondary">Watch Demo</button>
                    </div>
                </div>
                {/* <img src="../images/hero.jpg" alt="Hero" className="hero-img" /> */}

                <div className="hero-cards">
                    <div className="div pulse">
                        <h2>100,000+</h2>
                        <p>Users Worldwide</p>
                    </div>
                    <div className="div pulse">
                        <h2>99.9%</h2>
                        <p>Deliverability Rate</p>
                    </div>
                    <div className="div pulse">
                        <h2>24/7</h2>
                        <p>Support Available</p>
                    </div>
                    <div className="div pulse">
                        <h2>100+</h2>
                        <p>Integrations</p>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="features">
                <h2>Smart Features</h2>
                <div className="features-cards">

                    <div className="feature-card">
                        <div className="card-logo">
                            <TbBrandOpenai />
                        </div>
                        <h3>AI Campaign Builder</h3>
                        <p>Generate high-converting campaigns in seconds using GPT-powered AI.</p>
                    </div>

                    <div className="feature-card" >
                        <div className="card-logo">
                            <MdOutlineAttachEmail />
                        </div>
                        <h3>Email Verification</h3>
                        <p>Clean your list with built-in validation to reduce bounce rate.</p>
                    </div>

                    <div className="feature-card">
                        <div className="card-logo">
                            <FaStopwatch20 />
                        </div>
                        <h3>Smart Scheduling</h3>
                        <p>Send emails at the best times automatically using engagement data.</p>
                    </div>

                    <div className="feature-card">
                        <div className="card-logo">
                            <FaChartLine />
                        </div>
                        <h3>Advanced Analytics</h3>
                        <p>Visualize detailed metrics on performance, revenue, and audience engagement in real-time.</p>
                    </div>

                    <div className="feature-card">
                        <div className="card-logo">
                            <FaRobot />
                        </div>
                        <h3>Automation Flows</h3>
                        <p>Create custom automation journeys that respond to user behavior and increase conversions.</p>
                    </div>

                    <div className="feature-card">
                        <div className="card-logo">
                            <FaRegSmile />
                        </div>
                        <h3>Personalized Content</h3>
                        <p>Use dynamic fields and user segments to deliver highly targeted and relevant content.</p>
                    </div>
                </div>

            </section>

            {/* Visual Section */}
            <section className="visual-split-section">
                <div className="visual-overlay horizontal">
                    <h2 className="analytics-heading">Beautiful Analytics</h2>
                    <div className="analytics-cards-horizontal">
                        <div className="analytics-card" data-aos="fade-up">
                            <div className="icons">📊</div>
                            <h3>Real-time Engagement</h3>
                            <p>
                                Track open rates, click-throughs, and engagement patterns as they happen. Get instant feedback on campaign performance without waiting for reports to generate.
                            </p>
                        </div>

                        <div className="analytics-card" data-aos="fade-up">
                            <div className="icons">📈</div>
                            <h3>Revenue Tracking</h3>
                            <p>
                                See exactly how much revenue each campaign generates, including attributed sales and conversion rates. Connect your store or CRM for deeper insights.
                            </p>
                        </div>

                        <div className="analytics-card" data-aos="fade-up">
                            <div className="icons">📥</div>
                            <h3>Bounce & Deliverability</h3>
                            <p>
                                Analyze which emails bounce and why. Improve your sender score and inbox placement with proactive deliverability monitoring and smart cleaning suggestions.
                            </p>
                        </div>

                        <div className="analytics-card" data-aos="fade-up">
                            <div className="icons">🎯</div>
                            <h3>Audience Segments</h3>
                            <p>
                                Break down performance by user segments, including demographics, behavior, region, and device. Tailor your campaigns to boost relevance and engagement.
                            </p>
                        </div>

                        <div className="analytics-card" data-aos="fade-up">
                            <div className="icons">🕒</div>
                            <h3>Smart Send Times</h3>
                            <p>
                                Use AI to determine the best time to send each email based on historical engagement. Increase opens and clicks with intelligent, time-optimized delivery.
                            </p>
                        </div>

                        <div className="analytics-card" data-aos="fade-up">
                            <div className="icons">📬</div>
                            <h3>Inbox Placement</h3>
                            <p>
                                Understand how often your emails land in primary inboxes versus spam folders. Get tips to improve placement and ensure your messages reach your audience.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* Analytics Chart */}

            {/* Testimonials */}
            <section className="testimonials">
                <h2>What Users Say</h2>
                <div className="testimonial-slider">
                    <div className="testimonial-track">
                        {[...Array(2)].flatMap((_, i) => [
                            {
                                quote:
                                    "EmailAI Pro completely changed our workflow. The campaigns are smarter, faster, and we’ve seen a 30% boost in engagement.",
                                name: '— Sarah J.',
                                photo: 'https://i.pravatar.cc/40?img=1',
                            },
                            {
                                quote:
                                    "We were wasting money on invalid emails. Now with built-in verification, we save on cost and reach the right people every time.",
                                name: '— Mike T.',
                                photo: 'https://i.pravatar.cc/40?img=2',
                            },
                            {
                                quote:
                                    "The reports are not only beautiful but super insightful. I love how everything is automated and optimized for results.",
                                name: '— Priya K.',
                                photo: 'https://i.pravatar.cc/40?img=3',
                            },
                            {
                                quote:
                                    "EmailAI Pro completely changed our workflow. The campaigns are smarter, faster, and we’ve seen a 30% boost in engagement.",
                                name: '— Sarah J.',
                                photo: 'https://i.pravatar.cc/40?img=1',
                            },
                            {
                                quote:
                                    "We were wasting money on invalid emails. Now with built-in verification, we save on cost and reach the right people every time.",
                                name: '— Mike T.',
                                photo: 'https://i.pravatar.cc/40?img=2',
                            },
                            {
                                quote:
                                    "The reports are not only beautiful but super insightful. I love how everything is automated and optimized for results.",
                                name: '— Priya K.',
                                photo: 'https://i.pravatar.cc/40?img=3',
                            },
                            {
                                quote:
                                    "EmailAI Pro completely changed our workflow. The campaigns are smarter, faster, and we’ve seen a 30% boost in engagement.",
                                name: '— Sarah J.',
                                photo: 'https://i.pravatar.cc/40?img=1',
                            },
                            {
                                quote:
                                    "We were wasting money on invalid emails. Now with built-in verification, we save on cost and reach the right people every time.",
                                name: '— Mike T.',
                                photo: 'https://i.pravatar.cc/40?img=2',
                            },
                            {
                                quote:
                                    "The reports are not only beautiful but super insightful. I love how everything is automated and optimized for results.",
                                name: '— Priya K.',
                                photo: 'https://i.pravatar.cc/40?img=3',
                            },
                        ]).map((t, i) => (
                            <div className="testimonial-card" key={i}>
                                <div className="testimonial-header">
                                    <img src={t.photo} alt={t.name} className="testimonial-photo" />
                                    <div className="stars">★★★★★</div>
                                </div>
                                <blockquote>{t.quote}</blockquote>
                                <div className="name">{t.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Integrations */}
            <section className="integrations">
                <h2>Connect Your Stack</h2>
                <p>Works seamlessly with over 100+ tools including Shopify, HubSpot, Zapier, and more.</p>

                <div className="integration-grid" data-aos="fade-up">
                    <div className="integration-card">
                        <img src="../logos/shopify.png" alt="Shopify" />
                        <span>Shopify</span>
                    </div>
                    <div className="integration-card">
                        <img src="../logos/hubspot.png" alt="HubSpot" />
                        <span>HubSpot</span>
                    </div>
                    <div className="integration-card">
                        <img src="../logos/zapier.png" alt="Zapier" />
                        <span>Zapier</span>
                    </div>
                    <div className="integration-card">
                        <img src="../logos/slack.png" alt="Slack" />
                        <span>Slack</span>
                    </div>
                    <div className="integration-card">
                        <img src="../logos/mailchimp.png" alt="Mailchimp" />
                        <span>Mailchimp</span>
                    </div>
                    <div className="integration-card">
                        <img src="../logos/google.png" alt="Google Analytics" />
                        <span>Analytics</span>
                    </div>
                </div>
            </section>


            {/* Call to Action */}
            <section className="cta">
                <div className="cta-overlay" data-aos="zoom-in">
                    <h2>Ready to Supercharge Your Email Game?</h2>
                    <p>Automate smarter, reach the right audience, and turn emails into revenue with EmailAI Pro.</p>

                    <ul className="cta-benefits">
                        <li>✅ AI-powered campaign builder</li>
                        <li>✅ Smart email scheduling & optimization</li>
                        <li>✅ Real-time performance analytics</li>
                        <li>✅ Built-in email verification</li>
                    </ul>

                    <button className="primary large">Get Started Free</button>

                    <p className="cta-subtext">No credit card required. Get instant access.</p>
                </div>
            </section>


            {/* Footer */}
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-brand">
                        <h3>EmailAI Pro</h3>
                        <p>Smarter email marketing with AI-powered tools and real-time analytics.</p>
                    </div>

                    <div className="footer-links">
                        <div>
                            <h4>Product</h4>
                            <ul>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Integrations</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Support</h4>
                            <ul>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Terms & Privacy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2025 EmailAI Pro. All rights reserved.</p>
                </div>
            </footer>


        </main >


    );
};

export default HomePage;
