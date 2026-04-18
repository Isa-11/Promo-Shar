import React from 'react';
import styles from './StatsAndPartners.module.css';

// Ассеты для партнеров (согласно list_directory)
import partner1 from '../../assets/image1.png';
import partner2 from '../../assets/image2.png';
import partner3 from '../../assets/image3.png';
import partner4 from '../../assets/image4.png';
import partner5 from '../../assets/sunl.png'; // Предположим, это пятый логотип

const StatsAndPartners = () => {
  const stats = [
    { value: '24 часа', label: 'средний срок\nзаказа' },
    { value: '500+', label: 'проектов\nреализовано' },
    { value: '4.9', label: 'средний\nрейтинг', hasStar: true },
    { value: '7', label: 'лет делаем\nпраздники ярче' },
    { value: '30+', label: 'заказов\nежедневно' },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Блок статистики (Белая плашка) */}
        <div className={styles.statsPlate}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <div className={styles.statValue}>
                {stat.value}
                {stat.hasStar && <span className={styles.star}>★</span>}
              </div>
              <div className={styles.statLabel}>
                {stat.label.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}<br />
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Блок партнеров (Логотипы) */}
        <div className={styles.partnersRow}>
          <img src={partner1} alt="Partner 1" className={styles.partnerLogo} />
          <img src={partner2} alt="Partner 2" className={styles.partnerLogo} />
          <img src={partner3} alt="Partner 3" className={styles.partnerLogo} />
          <img src={partner5} alt="Partner 4" className={styles.partnerLogo} />
          <img src={partner4} alt="Partner 5" className={styles.partnerLogo} />
        </div>

      </div>
    </section>
  );
};

export default StatsAndPartners;
