
import './globals.css';
import type { Metadata } from 'next';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Filter } from '../components/Filter';
import { NewsletterSubscription } from '../components/NewsletterSubscription';
import { Slider } from '../components/Slider';
import  ProductCard  from '../components/ProductCard';
import "./globals.css";
import localFont from 'next/font/local';
import styles from '../app/page.module.css';
 


const Satoshi = localFont({ src: '../public/fonts/Satoshi_Complete/Satoshi-Medium.woff2' });
const integralCF = localFont({ src: '../public/fonts/integral-cf/integralCF-Medium.woff2' });

export const metadata: Metadata = {
  title: 'Catalog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Satoshi.className}>
        <Header />
        
        <section className={styles.main}> 
          <div className={styles.filters}>
          <Filter />
          </div> 
        
           <div className={styles.cards}>
            <div><h2 >Casual</h2> </div>
              
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
           </div>
        </section>
       <NewsletterSubscription />
        <Footer />
        </body>
    </html>
  );
}
