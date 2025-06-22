import React from 'react';
import styles from '../app/page.module.css';
import localFont from 'next/font/local';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image';

const integralCFfont = localFont({ src: '../public/fonts/integral_cf/integralCF-Medium.woff2' });

const NewsletterSubscription = () => {
  return (
    <div className={styles.newsletters}>
      <div className={styles.textContainer}>
        <h2 className={`${styles.textblock} ${integralCFfont.className}`} >STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>
      </div>
      <div className={styles.formletter}>
         {/* <i className="fa-regular fa-envelope"></i> */}
        <input type="email"
          placeholder="Enter your email address"
         />
        <button className={styles.button}>Subscribe to Newsletter</button>
      </div>
    </div>
  );
};

export {NewsletterSubscription};