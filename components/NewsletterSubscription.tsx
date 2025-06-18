import React from 'react';
import styles from '../app/page.module.css';
import localFont from 'next/font/local';
import Image from 'next/image';

const integralCFfont = localFont({ src: '../public/fonts/integral-cf/integralCF-Medium.woff2' });

const NewsletterSubscription = () => {
  return (
    <div className={styles.newsletters}>
      <div className={styles.textContainer}>
        <h2 className={`${styles.textblock} ${integralCFfont.className}`} >STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>
      </div>
      <div className={styles.formletter}>
         
        <input
       
          type="email"
          placeholder="Enter your email address"
           src="/letter-icon.png"
          alt=''
          width={25}
          height={25}
         />
        <button className={styles.button}>Subscribe to Newsletter</button>
      </div>
    </div>
  );
};

export {NewsletterSubscription};