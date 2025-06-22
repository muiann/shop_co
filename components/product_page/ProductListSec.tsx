import React from "react";
import ProductCard from "../ProductCard";
import { Product } from "@/app/types/product.types";
import Link from "next/link";

type ProductListSecProps = {
  title: string;
  data: Product[];
};

const ProductListSec = ({ title, data }: ProductListSecProps) => {
  return (
    <section className="max-w-frame mx-auto text-center">
        <div className="w-full mb-6 md:mb-9"
        >
          <div className="mx-4 xl:mx-0 space-x-4 sm:space-x-5">
            {data.map((product) => (
                <ProductCard data={product} />
            ))}
          </div>
        </div>
    </section>
  );
};

export default ProductListSec;
