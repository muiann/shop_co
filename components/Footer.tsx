import React from "react";
import styles from '../app/page.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Левая часть с логотипом и описанием */}
        <div className={styles.left}>
          <h1 className={styles.logo}>SHOP.CO</h1>
          <p className={styles.description}>
            We have clothes that suit your style and which you're proud to wear. From women to men.
          </p>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.icon}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className={styles.icon}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className={styles.icon}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className={styles.icon}>
              <i className="fab fa-pinterest"></i>
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

        {/* Правая часть с правами и методами оплаты */}
        <div className={styles.right}>
          <p className={styles.copyright}>
            Shop.co © 2000-2023. All Rights Reserved.
          </p>
          <div className={styles.paymentIcons}>
            <img src="/visa.png" alt="Visa" />
            <img src="/mastercard.png" alt="Mastercard" />
            <img src="/paypal.png" alt="Paypal" />
            <img src="/gpay.png" alt="Google Pay" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export {Footer};