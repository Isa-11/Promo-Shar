import React from 'react';
import styles from './Header.module.css';

// Ассеты для хедера
import logoImg from '../../assets/Group 1.png';
import phoneIcon from '../../assets/solar_phone-bold.png';
import tgIcon from '../../assets/Group 13.png';
import waIcon from '../../assets/Group 9.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        {/* Слева: Логотип + Название */}
        <div className={styles.logoGroup}>
          <div className={styles.logoIcon}>
            <img src={logoImg} alt="ПРОМО ШАР" />
          </div>
          <span className={styles.logoText}>ПРОМО ШАР</span>
        </div>

        {/* По центру: Навигация */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}><a href="#services">Услуги</a></li>
            <li className={styles.navItem}><a href="#portfolio">Портфолио</a></li>
            <li className={styles.navItem}><a href="#prices">Цены</a></li>
            <li className={styles.navItem}><a href="#reviews">Отзывы</a></li>
            <li className={styles.navItem}><a href="#contacts">Контакты</a></li>
          </ul>
        </nav>

        {/* Справа: Контакты и Соцсети */}
        <div className={styles.contactsGroup}>
          <div className={styles.phoneBlock}>
            <img src={phoneIcon} alt="phone" className={styles.phoneIcon} />
            <a href="tel:+74996475147" className={styles.phoneNumber}>+7 499 647-51-47</a>
          </div>
          <div className={styles.socialIcons}>
            <a href="#whatsapp" className={styles.socialCircle} style={{ backgroundColor: '#B8C63F' }}>
              <img src={waIcon} alt="WhatsApp" />
            </a>
            <a href="#telegram" className={styles.socialCircle} style={{ backgroundColor: '#52B8D2' }}>
              <img src={tgIcon} alt="Telegram" />
            </a>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
