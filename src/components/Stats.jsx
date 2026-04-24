import React from 'react';
import './Stats.css';

function Stats() {
  const stats = [
    { number: '2+', label: 'Years of Experience' },
    { number: '4+', label: 'Projects Completed' },
    { number: '5+', label: 'Happy Clients' },
    { number: '100%', label: 'Success Rate' }
  ];

  return (
    <section className="stats">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;