import Image from 'next/image';
import styles from '../app/page.module.css'; 

const Slider = () => {
  
    return(
      <>
      
       <div >
            <hr className={styles.hrbottom}/>
          </div>
        <div className={styles.slider}>
        
           
           <div>
              <button className={styles.previous}>←  Previous</button>
           </div>
          <div className={styles.numberpages}>
            <a href="">1</a>
            <a href="">2</a>
            <a href="">3</a>
            <a href="">...</a>
            <a href="">8</a>
            <a href="">9</a>
            <a href="">10</a>
          </div>
           
              <div>
                <button className={styles.next}>Next  →</button> 
              </div>
           
        </div>
        </>
    )


}  
export {Slider};     