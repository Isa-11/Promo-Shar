import React from 'react';
import styles from './MapSection.module.css';

const MapSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.mapWrapper}>
        {/* Интерактивная карта Яндекс */}
        <iframe 
          src="https://yandex.ru/map-widget/v1/?ll=37.643322%2C55.589139&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCZpMS003MTExNjAzNCIsIk1vc2NvdywgVm9zdHJ5YWtvdnNreSBwcm95ZXpkLCAxMEIgYnVpbGRpbmcgNyIsIDU1LjU4OTEzOSwgMzcuNjQzMzIy&z=16" 
          width="100%" 
          height="800" 
          frameBorder="0" 
          allowFullScreen={true}
          className={styles.yandexMap}
          title="Yandex Map"
        ></iframe>

        {/* Плавающая карточка контактов */}
        <div className={styles.contactCard}>
          <h3 className={styles.cardTitle}>ПРОМО ШАР</h3>
          
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <div className={styles.iconPink}>📞</div>
              <span className={styles.phoneText}>+7 499 647-51-47</span>
            </li>
            <li className={styles.contactItem}>
              <div className={styles.iconPink}>✉️</div>
              <span>promo-shar@mail.ru</span>
            </li>
            <li className={styles.contactItem}>
              <div className={styles.iconPink}>🕒</div>
              <span>пн-пт, с 09-00 до 18-00</span>
            </li>
            <li className={styles.contactItem}>
              <div className={styles.iconPink}>📍</div>
              <span>г. Москва, Востряковский<br/>проезд 10Б стр7</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
