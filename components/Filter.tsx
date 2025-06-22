'use client'
import { useState, SetStateAction } from 'react';
import Image from 'next/image';
import styles from '../app/page.module.css'; 
import { Slider, TextField, Typography, Box, Grid } from '@mui/material';


const Filter = () => {
  const [priceRange, setPriceRange] = useState([50, 200]);
  
  const [selectedSize, setSelectedSize] = useState("Large");
  
  const handleSliderChange = (event: Event, newValue: SetStateAction<number[]>) => {
    setPriceRange(newValue);
  };
  
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorSelect = (color: SetStateAction<string>) => {
    setSelectedColor(color);
  };

  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];
  const colors = [ 
    { name: "Green", hex: "#00C12B" },
    { name: "Red", hex: "#F50606" },
    { name: "Yellow", hex: "#F5DD06" },
    { name: "Orange", hex: "#F57906" },
    { name: "Blue", hex: "#06CAF5" },
    { name: "Blues", hex: "#063AF5" },
    { name: "Purple", hex: "#7D06F5" },
    { name: "Pink", hex: "#F506A4" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Black", hex: "#000000" },
    
  ];


  return (
    
    <div className={styles.filter}>
      <div className={styles.filter_header}>
        <h4>Filters</h4>
        <span><Image src="/filter-icon.png" 
                      alt="" 
                      width={24}
                    height={24}
                     /> </span>
      </div>

      <div className={styles.typethings}>
            <hr className={styles.hr}/>
            <ul>
                <li><a href="">T-shirts</a><Image src="/arrow-icon.png" alt='' width={14} height={14} /></li>
                <li><a href="">Shorts</a> <Image src="/arrow-icon.png" alt='' width={14} height={14}/></li>
                <li><a href="">Shirts</a> <Image src="/arrow-icon.png" alt='' width={14} height={14}/></li>
                 <li><a href="">Hoodie</a> <Image src="/arrow-icon.png" alt='' width={14} height={14}/></li>
                <li><a href="">Jeans</a> <Image src="/arrow-icon.png" alt='' width={14} height={14}/></li>
             </ul>
            </div>
        <div className={styles.filter_item}>
            <hr className={styles.hr}/>
        <h4 className={styles.h4}>Price</h4>
       <Box sx={{ width: 247, padding: 2 }}>

      <Slider
        value={priceRange}
        onChange={handleSliderChange}
        min={0}
        max={500}
        step={10}
        valueLabelDisplay="auto"
        sx={{
          color: 'black',
        }}
      />
      <Box
        display="flex"
        justifyContent="space-evenly"
        mt={1}>
        <Typography variant="body2">${priceRange[0]}</Typography>
        <Typography variant="body2">${priceRange[1]}</Typography>
      </Box>
    </Box>
      </div>

<hr className={styles.hr}/>

      <div style={{width: "200px" }}>
      <div className={styles.h4}>
        <h4>Colors</h4>
      </div>
      <div className={styles.colors}>
        {colors.map((color) => (
          <div className={styles.color_dot}
            key={color.hex}
            onClick={() => handleColorSelect(color.hex)}
            style={{
              backgroundColor: color.hex,
              borderRadius: "50%",
              border: selectedColor === color.hex ? "1px solid #000000" : "1px solid #00000033",
              cursor: "pointer",
              marginBottom: 7,
            }}
          ></div>
        ))}
      </div>
     
    </div>
 <hr className={styles.hr}/>
      <div className={styles.filter_item}>
        <h4 className={styles.h4}>Size</h4>
        <div className={styles.sizes}>
          {sizes.map((size) => (
            <button
              key={size}
              className={`size ${styles.size} ${
                selectedSize === size ? "selected" : ""
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
       <hr  className={styles.hr}/>
               <div className={styles.typethings}>
           
            <h4 className={styles.h4}>Dress Style</h4>
            <ul>
                <li><a href="">Casual</a><Image src="/arrow-icon.png" alt='' width={14} height={14} /></li>
                <li><a href="">Formal</a> <Image src="/arrow-icon.png" alt='' width={14} height={14}/></li>
                <li><a href="">Party</a> <Image src="/arrow-icon.png" alt='' width={14} height={14}/></li>
                 <li><a href="">Gym</a> <Image src="/arrow-icon.png" alt='' width={14} height={14}/></li>
             </ul>
            </div>
      <div className={styles.filter_buttons}>
        <button className= {styles.apply_btn}>Apply Filter</button>
      </div>
    </div>
  );
};

export {Filter};