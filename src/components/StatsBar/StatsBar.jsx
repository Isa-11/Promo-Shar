import React from 'react';
import styles from './StatsBar.module.css';

const StatsBar = () => {
  const stats = [
    { value: '10+', label: 'Лет на рынке' },
    { value: '5000+', label: 'Клиентов' },
    { value: '150000+', label: 'Надутых шаров' },
    { value: '24/7', label: 'Прием заявок' }
  ];

  return (
    <div className={styles.statsBar}>
      <div className={`container ${styles.statsContainer}`}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <div className={styles.value}>{stat.value}</div>
            <div className={styles.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
