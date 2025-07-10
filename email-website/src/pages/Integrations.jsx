import React, { useState } from 'react';
import '../style/integrations.css';
import { integrationsData } from '../data/integrationsData';

const categories = ['All', 'CRM', 'E-commerce', 'Marketing', 'Automation'];

const Integrations = () => {
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredIntegrations = integrationsData.filter((integration) =>
        (activeCategory === 'All' || integration.category === activeCategory) &&
        integration.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="integrations-page">
            <div className="header">
                <h1>Connect Your Stack</h1>
                <p>Integrate with 100+ popular tools to automate and enhance your workflow.</p>
            </div>

            <div className="integrations-controls">
                <input
                    type="text"
                    placeholder="Search integrations..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className="categories">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={cat === activeCategory ? 'active' : ''}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="featured">
                <span>⭐ Recommended</span>
                <h3>Shopify + EmailAI</h3>
                <p>Sync customer data and send smart campaigns based on purchase behavior.</p>
            </div>

            <div className="integration-grid">
                {filteredIntegrations.map((integration) => (
                    <div className="integration-card" key={integration.name}>
                        <div className="logo-wrap">
                            <img className="icon" src={integration.logo} alt={integration.name} />
                        </div>
                        <h4>{integration.name}</h4>
                        <p>{integration.description}</p>
                        <button className="connect-btn">Connect</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Integrations;
