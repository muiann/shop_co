import React from "react";
import {newArrivalsData} from ".././app/data/data";
import ProductCard from "./ProductCard";
import { Product } from "@/app/types/product.types";
import styles from '../app/page.module.css';
async function getData() {
  //const response = await fetch(
  //  "https://api.slingacademy.com/products"
  //);
  //const data = await response.json();
  //return data ?? [];
  return newArrivalsData;
}

export default async function ProductCards() {
  const data = await getData();
  return (
    <>
      <div className={styles.cards}>
        {
        data.slice(0, 9).map((product: Product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </>
  );
};
