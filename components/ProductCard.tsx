import React from "react";
import Rating from "./ui/Rating";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/app/types/product.types";
import styles from '../app/page.module.css'; 
import localFont from 'next/font/local';

const Satoshi = localFont({ src: '../public/fonts/Satoshi_Complete/Satoshi-Medium.woff2' });

type ProductCardProps = {
  data: Product;
};

const ProductCard = ({ data }: ProductCardProps) => {
  return (
    <div className={styles.cards}> 

    <Link 
      href={`/product/${data.id}/${data.title.split(" ").join("-")}`}
      className={styles.card_name}
    >
      <div >
        <Image 
          src={data.srcUrl}
          width={295}
          height={298}
          alt={data.title}
          className={styles.photoclothing}
          priority
        />
      </div>
      <p className={Satoshi.className}>{data.title}</p>
      <div className={styles.rating}>
        <Rating
          initialValue={data.rating}
          allowFraction
          SVGclassName="inline-block"
          emptyClassName="fill-gray-50"
          size={19}
          readonly
        />
        <span className={`${Satoshi.className}${styles.ratingnumber}`}>
          {data.rating.toFixed(1)}
          <span className="">/5</span>
        </span>
      </div>
      <div className="">
        {data.discount.percentage > 0 ? (
          <span className={styles.page_price_discount_first}>
            {`$${Math.round(
              data.price - (data.price * data.discount.percentage) / 100
            )}`}
          </span>
        ) : data.discount.amount > 0 ? (
          <span className={styles.page_price_discount_first}>
            {`$${data.price - data.discount.amount}`}
          </span>
        ) : (
          <span className={styles.page_price_discount_first}>
            ${data.price}
          </span>
        )}
        {data.discount.percentage > 0 && (
          <span className={styles.page_price_discount_second}>
            ${data.price}
          </span>
        )}
        {data.discount.amount > 0 && (
          <span className={styles.page_price_discount_percentage}>
            ${data.price}
          </span>
        )}
        {data.discount.percentage > 0 ? (
          <span className={styles.page_price_discount_percentage}>
            {`-${data.discount.percentage}%`}
          </span>
        ) : (
          data.discount.amount > 0 && (
            <span className={styles.page_price_discount_percentage}>
              {`-$${data.discount.amount}`}
            </span>
          )
        )}
      </div>
    </Link>
        </div>
  );
};

export default ProductCard;
