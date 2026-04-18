import React from 'react';
import styles from './Footer.module.css';

// Импорты для темного подвала
import logoImg from '../../assets/Group 1.png'; 
import phoneIcon from '../../assets/solar_phone-bold.png'; 
import waIcon from '../../assets/Group 9.png'; 
import tgIcon from '../../assets/Group 13.png'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.darkFooter}>
        <div className={styles.footerContainer}>
          
          <div className={styles.logoSection}>
            <div className={styles.logoImgPlaceholder}>
               <img src={logoImg} alt="Логотип" />
            </div>
            <span className={styles.logoText}>ПРОМО ШАР</span>
          </div>

          <nav className={styles.navMenu}>
            <a href="#services">Услуги</a>
            <a href="#portfolio">Портфолио</a>
            <a href="#prices">Цены</a>
            <a href="#reviews">Отзывы</a>
            <a href="#contacts">Контакты</a>
          </nav>

          <div className={styles.contactSection}>
            <a href="tel:+74996475147" className={styles.phoneLink}>
              <img src={phoneIcon} alt="Телефон" className={styles.phoneIcon} />
              +7 499 647-51-47
            </a>
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
        <div className={styles.copyright}>
          © 2026. Все права защищены
        </div>
      </div>
    </footer>
  );
};

export default Footer;
