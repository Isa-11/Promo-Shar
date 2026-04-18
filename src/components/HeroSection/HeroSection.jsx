import React from 'react';
import styles from './HeroSection.module.css';

// Импорты картинок
import heroImg from '../../assets/шарики331.jpg';
import packageImg from '../../assets/first.png';
import microBalloons from '../../assets/микро шарики 1.png';
import photozoneImg from '../../assets/second.png';
import dogBalloon from '../../assets/собака1.png';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>

        {/* Левая часть (Текст, карточки, кнопки) */}
        <div className={styles.leftCol}>
          <h1 className={styles.title}>
            Идеальный акцент<br />для любого события
          </h1>
          <h2 className={styles.subtitle}>
            Доставка по всей России!
          </h2>

          <div className={styles.servicesGrid}>
            {/* Карточка 1 */}
            <div className={styles.serviceCard}>
              <div className={styles.cardImgWrapper}>
                <img src={packageImg} alt="печать на пакетах" />
              </div>
              <p className={styles.cardText}>печать на<br />пакетах</p>
            </div>
            {/* Карточка 2 */}
            <div className={styles.serviceCard}>
              <div className={styles.cardImgWrapper}>
                <img src={microBalloons} alt="печать на воздушных шарах" />
              </div>
              <p className={styles.cardText}>печать на<br />воздушных шарах</p>
            </div>
            {/* Карточка 3 */}
            <div className={styles.serviceCard}>
              <div className={styles.cardImgWrapper}>
                <img src={photozoneImg} alt="фотозоны и декор мероприятий" />
              </div>
              <p className={styles.cardText}>фотозоны и декор<br />мероприятий</p>
            </div>
            {/* Карточка 4 */}
            <div className={styles.serviceCard}>
              <div className={styles.cardImgWrapper}>
                <img src={dogBalloon} alt="оформление воздушными шарами" />
              </div>
              <p className={styles.cardText}>оформление<br />воздушными шарами</p>
            </div>
          </div>

          <div className={styles.buttonsGroup}>
            <button className={styles.primaryBtn}>Рассчитать стоимость</button>
            <button className={styles.secondaryBtn}>Посмотреть примеры</button>
          </div>
        </div>

        {/* Правая часть (Большая картинка шаров) */}
        <div className={styles.rightCol}>
          <img src={heroImg} alt="Воздушные шары" className={styles.heroImage} />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
