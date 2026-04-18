import React from 'react';
import styles from './ServicesList.module.css';
import ServiceCard from '../ServiceCard/ServiceCard';

import dogBalloon from '../../assets/собака 1.png';
import microBalloons from '../../assets/микро шарики 1.png';
import packagesImg from '../../assets/ChatGPT Image 1 апр. 2026 г., 17_17_35 1.png';
import photozoneImg from '../../assets/ChatGPT Image 1 апр. 2026 г., 20_50_41 1.png';

const ServicesList = () => {
  const services = [
    {
      id: 1,
      image: dogBalloon,
      title: 'Оформление воздушными шарами',
      description: 'Украсим любой зал: гирлянды, арки, фигуры из шаров для вашего праздника.'
    },
    {
      id: 2,
      image: microBalloons,
      title: 'Печать на воздушных шарах',
      description: 'Нанесем ваш логотип или поздравление на шары любых размеров и цветов.'
    },
    {
      id: 3,
      image: packagesImg,
      title: 'Пакеты',
      description: 'Готовые решения для вашего мероприятия по выгодным ценам.'
    },
    {
      id: 4,
      image: photozoneImg,
      title: 'Фотозоны',
      description: 'Стильные и яркие локации для ваших идеальных фотографий.'
    }
  ];

  return (
    <section id="services" className={styles.servicesSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Наши услуги</h2>
        <div className={styles.grid}>
          {services.map(service => (
            <ServiceCard 
              key={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
