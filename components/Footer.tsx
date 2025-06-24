import React from 'react';
import styles from '../app/page.module.css';
import localFont from 'next/font/local';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image';
import { NewsletterSubscription } from './NewsletterSubscription';

const IntegralCFfont = localFont({ src: "../public/fonts/integral_cf/IntegralCF-Medium.woff2" });

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <NewsletterSubscription />
      <div className={styles.container}>
        {/* Левая часть с логотипом и описанием */}
        <div className={styles.left}>
          <h2 className={`${styles.logo} ${IntegralCFfont.className}`}>SHOP.CO</h2>
          <p className={styles.description}>
            We have clothes that suit your style and which you're proud to wear. From women to men.
          </p>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.icon}>
              <i className="fab fa-twitter" ></i>
            </a>
            <a href="#" className={`${styles.icon} ${styles.facebook}`}>
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className={styles.icon}>
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className={styles.icon}>
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>

        {/* Центральная часть с категориями ссылок */}
        <div className={styles.linksContainer}>
          <div>
            <h3 className={styles.columnTitle}>Company</h3>
            <ul className={styles.linkList}>
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>

          <div>
            <h3 className={styles.columnTitle}>Help</h3>
            <ul className={styles.linkList}>
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h3 className={styles.columnTitle}>FAQ</h3>
            <ul className={styles.linkList}>
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>

          <div>
            <h3 className={styles.columnTitle}>Resources</h3>
            <ul className={styles.linkList}>
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How-to Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>
        
        
      
      </div>
        <hr className={styles.hrfooter}/>
      {/* Нижняя часть с правами и способами оплаты */}

        <div className={styles.rightspays}>
          <p className={styles.copyright}>
            Shop.co © 2000-2023. All Rights Reserved.
          </p>
          <div className={styles.paymentIcons}>
            <Image src="/visa.png" alt="Visa" width={47} height={30} />
            <Image src="/mastercard.png" alt="Mastercard" width={46} height={30}/>
            <Image src="/paypal.png" alt="Paypal" width={46} height={30}/>
            <Image src="/googlepay.png" alt="Google Pay" width={46} height={30}/>
          </div>
        </div>
    </footer>
  );
};

export {Footer};