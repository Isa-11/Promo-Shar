import React from 'react';
import styles from './FeaturesSection.module.css';

// Ассеты 3D-иконок
import designIcon from '../../assets/4.png'; 
import truckIcon from '../../assets/3.png';  
import caseIcon from '../../assets/2.png';   
import balloonsIcon from '../../assets/1.png'; 

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: 'Любой дизайн',
      desc: 'Дизайн макет любой сложности',
      icon: designIcon,
    },
    {
      id: 2,
      title: 'Быстрая доставка',
      desc: 'Доставка по всей России!',
      icon: truckIcon,
    },
    {
      id: 3,
      title: 'Для бизнеса и частных',
      desc: 'Сделаем ваше событие лучше!',
      icon: caseIcon,
    },
    {
      id: 4,
      title: 'Композиции',
      desc: 'Подберем идеальный вариант',
      icon: balloonsIcon,
    },
  ];

  // SVG Галочка
  const CheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.checkIcon}>
      <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="#A7CA44"/>
    </svg>
  );

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Заголовок секции */}
        <h2 className={styles.sectionTitle}>Почему выбирают нас</h2>

        {/* Сетка карточек */}
        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                <img src={feature.icon} alt={feature.title} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <div className={styles.cardDesc}>
                  <CheckIcon />
                  <span>{feature.desc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка внизу по центру */}
        <div className={styles.buttonWrapper}>
          <button className={styles.primaryBtn}>Рассчитать стоимость</button>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
