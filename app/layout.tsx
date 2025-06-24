
import './globals.css';
import type { Metadata } from 'next';
import {Header} from '../components/Header';
import { Footer } from '../components/Footer';
import {Slider} from '../components/Slider';
import { NewsletterSubscription } from '../components/NewsletterSubscription';
import "./globals.css";
import localFont from 'next/font/local';

const Satoshi = localFont({ src: '../public/fonts/Satoshi_Complete/Satoshi-Medium.woff2' });
const IntegralCF = localFont({ src: '../public/fonts/integral_cf/IntegralCF-Medium.woff2' });

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
        
      
      
        <Footer />
        </body>
    </html>
  );
}
