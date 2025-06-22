
import './globals.css';
import type { Metadata } from 'next';
import { Footer } from '../components/Footer';
import {Slider} from '../components/Slider';
import { NewsletterSubscription } from '../components/NewsletterSubscription';
import "./globals.css";
import localFont from 'next/font/local';

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
      <body className={Satoshi.className}>{children}
      
       <Slider/> 
       <NewsletterSubscription />
        <Footer />
        </body>
    </html>
  );
}
