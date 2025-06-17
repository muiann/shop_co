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
        <div className='slider'>
          <button className='Previous'>
            <a href="">1</a>
            <a href="">2</a>
            <a href="">3</a>
            <a href="">...</a>
            <a href="">8</a>
            <a href="">9</a>
            <a href="">10</a>

          </button>
        </div>
      </div>
  )
}