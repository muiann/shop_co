import Image from 'next/image';
import styles from '../app/page.module.css'; 

const Filter = () => {
 return (
     <main className={styles.main}>
        <div className={styles.filters}>
            <div className={styles.filterstitle}>
                <h2>Filter</h2>
                 <Image src="/filter-icon.png" 
                     alt="" 
                     width={24}
                     height={24}
                    />
                    
            </div>
            
        <div className={styles.typethings}>
            
            <ul>
                <li><a href="">T-shirts</a><Image src="/arrow-icon.png" alt='' width={14} height={14} /></li>
                <li><a href="">Shorts</a> <Image src="/arrow-icon.png" alt='' width={14} height={14}/></li>
                <li><a href="">Shirts</a> <Image src="/arrow-icon.png" alt='' width={14} height={14}/></li>
                <li><a href="">Hoodie</a> <Image src="/arrow-icon.png" alt='' width={14} height={14}/></li>
                <li><a href="">Jeans</a> <Image src="/arrow-icon.png" alt='' width={14} height={14}/></li>
            </ul>
        </div>

        <div className={styles.prise}>
            <h2>Prise</h2>
        </div>
        <div>
            
        </div>
     </div>
    </main>
 )
}
export {Filter};