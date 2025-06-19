'use client'
import Image from 'next/image';
import {useState, useEffect} from 'react';
import styles from '../app/page.module.css'; 

interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}


async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=1');

  return response.json();
}

export default async function ProductCard() {
  const photos = await getData();
  return (    
      <div>
        
        <div className={styles.productCard}>
          {photos.map((photo: any) => (
              <div key={photo.id} >
                        
                        <Image src={photo.thumbnailUrl} alt={photo.title} width={100} height={100} />
                    </div>
          ))}
           <p>Gradient Graphic T-shirt</p>
           <Image src="/stars.png"
           width={126}
           height={19}
           alt="Product evaluation"
           />
        </div>
        
      </div>
  )
}

