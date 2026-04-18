import React from 'react';
import styles from './Header.module.css';
import whatsap from '../../assets/Group13.png';
import telegram from '../../assets/Group9.png';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/* Логотип */}
        <div className={styles.logoBlock}>
          <div className={styles.logoIcon}>
            <div className={styles.logoBalloon}></div>
          </div>
          <span className={styles.logoText}>ПРОМО ШАР</span>
        </div>

        {/* Меню навигации */}
        <nav className={styles.nav}>
          <a href="#services">Услуги</a>
          <a href="#portfolio">Портфолио</a>
          <a href="#prices">Цены</a>
          <a href="#reviews">Отзывы</a>
          <a href="#contacts">Контакты</a>
        </nav>

        {/* Контакты */}
        <div className={styles.contacts}>
          <a href="tel:+74996475147" className={styles.phone}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={styles.phoneIcon}>
              <path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z" fill="#DD50A1" />
            </svg>
            +7 499 647-51-47
          </a>

          <div className={styles.socials}>
            <a href="https://wa.me/..." className={styles.waBtn}>
              <img src={whatsap} alt="WhatsApp" />
            </a>
            <a href="https://t.me/..." className={styles.tgBtn}>
              <img src={telegram} alt="Telegram" />
            </a>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;