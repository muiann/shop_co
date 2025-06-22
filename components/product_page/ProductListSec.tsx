import React from "react";
import ProductCard from "../ProductCard";
import { Product } from "@/app/types/product.types";
import Link from "next/link";
import styles from '../../app/page.module.css';
import localFont from 'next/font/local';

const Satoshi = localFont({ src: '../../public/fonts/Satoshi_Complete/Satoshi-Medium.woff2' });
const IntegralCF = localFont({ src: '../../public/fonts/integral_cf/IntegralCF-Medium.woff2' });


type ProductListSecProps = {
  title: string;
  data: Product[];
};

const ProductListSec = ({ title, data }: ProductListSecProps) => {
  return (
    <section >
      <h2 className={`${styles.h2productlist} ${IntegralCF.className}`}>You might also like</h2>
        <div className={styles.alsolike}
        >
          <div className={styles.alsolike_dress}>
            {data.map((product) => (
              
                <ProductCard key={product.id} data={product} />
            ))}
          </div>
        </div>
    </section>
  );
};

export default ProductListSec;
