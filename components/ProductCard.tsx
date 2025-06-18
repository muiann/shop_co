import Image from 'next/image';
import styles from '../app/page.module.css'; 

export default function ProductCard() {
  return (    
      <div>
        
        <div className={styles.productCard}>
              <Image src="/t-shirt.png" alt="image"
                    width={295}
                    height={298}
                   /> 
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