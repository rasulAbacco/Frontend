import React, { useEffect, useState } from 'react';
import '../style/home.css';

const generateData = () => {
    const points = 7;
    return Array.from({ length: points }, (_, i) => ({
        day: `Day ${i + 1}`,
        openRate: Math.floor(Math.random() * 60) + 30,
        clickRate: Math.floor(Math.random() * 40) + 10,
    }));
};

const AnalyticsLineChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(generateData());
    }, []);

    const maxY = 100;
    const height = 200;
    const width = 500;
    const padding = 40;
    const stepX = (width - padding * 2) / (data.length - 1);

    const getY = (value) => height - (value / maxY) * (height - padding * 2) + padding;

    const buildPath = (key) =>
        data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${padding + i * stepX},${getY(d[key])}`).join(' ');

    return (
        <section className="analytics-line-section">
            <h2>Email Campaign Performance</h2>
            <svg viewBox={`0 0 ${width} ${height}`} className="line-chart">
                <path d={buildPath('openRate')} className="line open-rate" />
                <path d={buildPath('clickRate')} className="line click-rate" />
                {data.map((d, i) => (
                    <g key={i}>
                        <circle cx={padding + i * stepX} cy={getY(d.openRate)} r="4" className="dot open" />
                        <circle cx={padding + i * stepX} cy={getY(d.clickRate)} r="4" className="dot click" />
                        <text
                            x={padding + i * stepX}
                            y={height - 5}
                            textAnchor="middle"
                            fontSize="10"
                            fill="#777"
                        >
                            {d.day}
                        </text>
                    </g>
                ))}
            </svg>
            <div className="legend">
                <div><span className="legend-color open" /> Open Rate</div>
                <div><span className="legend-color click" /> Click Rate</div>
            </div>
        </section>
    );
};

export default AnalyticsLineChart;
