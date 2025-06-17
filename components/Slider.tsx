import Image from 'next/image';
import styles from '../app/page.module.css'; 

const Slider = () => {
    return(
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
    )


}  
export {Slider};     