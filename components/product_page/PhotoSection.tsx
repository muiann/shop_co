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
              className="bg-[#F0EEED] rounded-[13px] xl:rounded-[20px] w-full max-w-[111px] xl:max-w-[152px] max-h-[106px] xl:max-h-[167px] xl:min-h-[167px] aspect-square overflow-hidden"
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

      <div className={styles.photoblock_max}>
        <Image
          src={selected}
          width={444}
          height={530}
          className="rounded-2xl w-full h-full object-cover hover:scale-110 transition-all duration-500"
          alt={data.title}
          priority
          unoptimized
        />
      </div>
    </div>
  );
};

export default PhotoSection;
