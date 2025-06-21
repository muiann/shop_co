
import Image from 'next/image';
import { Filter } from '../components/Filter';
import { Header } from '../components/Header';
import { Slider } from '../components/Slider';
import  ProductCards  from '../components/ProductCards';
import styles from '../app/page.module.css';
import { Product } from "@/app/types/product.types";
import { Review } from "@/app/types/review.types";


export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
          <div className={styles.filters}>
          <Filter />
          </div> 
            <div className={styles.cards}>
              <h1>Casual</h1>
              <ProductCards />
            </div>
      </main>
    </>
  );
}