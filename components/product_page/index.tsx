import React from "react";
import PhotoSection from "./PhotoSection";
import { Header } from "@/components/Header";
import { Product } from "@/app/types/product.types";
import Rating from "@/components/ui/Rating";
import styles from '../../app/page.module.css';
import localFont from 'next/font/local';

const Satoshi = localFont({ src: '../../public/fonts/Satoshi_Complete/Satoshi-Medium.woff2' });
const IntegralCF = localFont({ src: '../../public/fonts/integral_cf/IntegralCF-Medium.woff2' });
 
const PageProduct = ({ data }: { data: Product }) => {
  return (
    <>
    <Header />
      <div className={styles.infoproduct}>
        <div>
          <PhotoSection data={data} />
        </div>
        <div className={styles.aboutproduct}>
          <h1 className={`${styles.nameproduct} ${IntegralCF.className}`}
          >
            {data.title}
          </h1>
          <div className={styles.rating}>
            <Rating
              initialValue={data.rating}
              allowFraction
              SVGclassName="inline-block"
              emptyClassName="fill-gray-50"
              size={25}
              readonly
            />
            <span className={`${styles.rating_span} ${Satoshi.className}`}>
              {data.rating.toFixed(1)}
              <span>/5</span>
            </span>
          </div>
          <div className={styles.price_discount}>
            {data.discount.percentage > 0 ? (
              <span className={styles.price_discount_first}>
                {`$${Math.round(
                  data.price - (data.price * data.discount.percentage) / 100
                )}`}
              </span>
            ) : data.discount.amount > 0 ? (
              <span>
                {`$${data.price - data.discount.amount}`}
              </span>
            ) : (
              <span >
                ${data.price}
              </span>
            )}
            {data.discount.percentage > 0 && (
              <span className={styles.price_discount_second}>
                ${data.price}
              </span>
            )}
            {data.discount.amount > 0 && (
              <span >
                ${data.price}
              </span>
            )}
            {data.discount.percentage > 0 ? (
              <span className={styles.price_discount_percentage}>
                {`-${data.discount.percentage}%`}
              </span>
            ) : (
              data.discount.amount > 0 && (
                <span >
                  {`-$${data.discount.amount}`}
                </span>
              )
            )}
          </div>
          <p className={styles.aboutclothing}>
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <hr className="h-[1px] border-t-black/10 mb-5" />
        
        </div>

       
      </div>
    </>
  );
};

export default PageProduct;
