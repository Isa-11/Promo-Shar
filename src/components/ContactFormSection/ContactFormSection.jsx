import React from 'react';
import styles from './ContactFormSection.module.css';

// Используем реально существующие файлы из папки assets
import phoneImg from '../../assets/phone.png';
import envelopeImg from '../../assets/pochta.png';

const ContactFormSection = () => {
   return (
      <section className={styles.section}>
         <div className={styles.container}>

            {/* Левая часть: Белая плашка с формой */}
            <div className={styles.formCard}>
               <h2 className={styles.title}>
                  ХОТИТЕ СДЕЛАТЬ ВАШ ПРАЗДНИК <span className={styles.highlight}>ЯРЧЕ?</span>
               </h2>
               <p className={styles.subtitle}>
                  Оставьте заявку, и мы свяжемся с вами, чтобы уточнить детали и подготовить композицию к вашему празднику.
               </p>

               <form className={styles.form}>
                  <input
                     type="text"
                     placeholder="Как к вам обращаться"
                     className={styles.input}
                  />
                  <input
                     type="tel"
                     placeholder="+7 (000) 000 00 00"
                     className={styles.input}
                  />
                  <textarea
                     placeholder="Ваши пожелания к заказу"
                     className={styles.textarea}
                  ></textarea>

                  <button type="button" className={styles.submitBtn}>
                     Заказать звонок
                  </button>
               </form>
            </div>

            {/* Правая часть: Наложенные 3D-картинки */}
            <div className={styles.imageCol}>
               <img src={envelopeImg} alt="Конверт-шар" className={styles.envelopeImg} />
               <img src={phoneImg} alt="Телефон-шар" className={styles.phoneImg} />
            </div>

         </div>
      </section>
   );
};

export default ContactFormSection;