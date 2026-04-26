import React from 'react';
import { motion } from 'framer-motion';
import './Stats.css';
import { fadeInUp, staggerContainer, viewportSettings } from './animations';

function Stats() {
  const stats = [
    { number: '2+', label: 'Years of Experience' },
    { number: '2+', label: 'Projects Completed' },
    { number: '1+', label: 'Happy Clients' },
    { number: '65%', label: 'Success Rate' }
  ];

  return (
    <section className="stats">
      <motion.div 
        className="stats-container"
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        variants={staggerContainer}
      >
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            className="stat-card"
            variants={fadeInUp}
          >
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Stats;