
import Image from 'next/image';
import localFont from 'next/font/local';
import styles from '../app/page.module.css'; 

<i className="fa fa-search"></i>;
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"></link>;


const IntegralCF = localFont({ src: '../public/fonts/integral-cf/integralCF-Medium.woff2' });

const Header = () => {
    return (
      
      <header >
        <div className={styles.header}>
       
         <div className={styles.logo}>  
          <Image 
              src="/logo.png"
                    width={160}
                    height={22}
                    alt="logo"
           /></div>
        
          <ul>
            <li><a href="/Shop">Shop</a></li>
            <li><a href="/On_Sale">On Sale</a></li>
            <li><a href="/New_Arrivals">New Arrivals</a></li>
            <li><a href="/Brands">Brands</a></li>
          </ul>

              <div >
                <form className={styles.search_block}>
                  <input type="submit" name="submit" className={styles.submit} value=""/>
                  <input className={styles.search} placeholder="Search for products..."/>
                </form>
                </div>
                <div className={styles.buttons}>
                              <Image className={styles.buttons} 
                              src="/profile-icon.png"
                                      width={24}
                                      height={24}
                                      alt="Picture of the author"
                              />
                            <Image className={styles.buttons}
                            src="/basket-icon.png"
                                    width={24}
                                    height={24}
                                    alt="basket"
                            /> 
                 </div>   
                           
        </div>
 
    </header>
  );  
};

export {Header};