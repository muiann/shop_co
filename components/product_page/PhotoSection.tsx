"use client";

import { Product } from "@/app/types/product.types";
import Image from "next/image";
import React, { useState } from "react";
import styles from '../../app/page.module.css';

const PhotoSection = ({ data }: { data: Product }) => {
  const [selected, setSelected] = useState<string>(data.srcUrl);

  return (
    <div className={styles.photoblock}>
      {data?.gallery && data.gallery.length > 0 && (
        <div className={styles.photoblock_mini}>
          {data.gallery.map((photo, index) => (
            <button
              key={index}
              type="button"
              className=""
              onClick={() => setSelected(photo)}
            >
              <Image
                src={photo}
                width={152}
                height={167}
                className={styles.photoblock_mini}
                alt={data.title}
                priority
              />
            </button>
          ))}
        </div>
      )}

      <div >
        <Image
          src={selected}
          width={444}
          height={530}
          className={styles.photoblock_max}
          alt={data.title}
          priority
         
        />
      </div>
    </div>
  );
};

export default PhotoSection;
