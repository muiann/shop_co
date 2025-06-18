'use client'
import { useState } from 'react';
import Image from 'next/image';
import styles from '../app/page.module.css'; 
import { Slider, TextField, Typography, Box, Grid } from '@mui/material';

// const Filter = () => {
//  return (
//      <main className={styles.main}>
//         <div className={styles.filters}>
//             <div className={styles.filterstitle}>
//                 <h2>Filter</h2>
//                  <Image src="/filter-icon.png" 
//                      alt="" 
//                      width={24}
//                      height={24}
//                     />
                    
//             </div>
            
//         <div className={styles.typethings}>
//             <hr />
//             <ul>
//                 <li><a href="">T-shirts</a><Image src="/arrow-icon.png" alt='' width={14} height={14} /></li>
//                 <li><a href="">Shorts</a> <Image src="/arrow-icon.png" alt='' width={14} height={14}/></li>
//                 <li><a href="">Shirts</a> <Image src="/arrow-icon.png" alt='' width={14} height={14}/></li>
//                 <li><a href="">Hoodie</a> <Image src="/arrow-icon.png" alt='' width={14} height={14}/></li>
//                 <li><a href="">Jeans</a> <Image src="/arrow-icon.png" alt='' width={14} height={14}/></li>
//             </ul>
             
//         </div>

//         <div className={styles.prise}>
//            <hr />
//             <h2>Prise</h2>
//         </div>
//         <div>
           
//         </div>
//      </div>
//     </main>
//  )
// };
// export {Filter};

// import React, { useState } from "react";
// import "./Filter.css";

const Filter = () => {
  const [priceRange, setPriceRange] = useState([50, 200]);
  
  const [selectedSize, setSelectedSize] = useState("Large");
  
  const handleSliderChange = (event, newValue) => {
    setPriceRange(newValue);
  };
  const handleMinInputChange = (event) => {
    const value = Math.min(Number(event.target.value), priceRange[1]);
    setPriceRange([value, priceRange[1]]);
  };

  const handleMaxInputChange = (event) => {
    const value = Math.max(Number(event.target.value), priceRange[0]);
    setPriceRange([priceRange[0], value]);
  };
  
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorSelect = (color) => {
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

  const handlePriceChange = (e) => {
    setPriceRange([e.target.value, priceRange[1]]);
  };

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
            <hr />
            <ul>
                <li><a href="">T-shirts</a><Image src="/arrow-icon.png" alt='' width={14} height={14} /></li>
                <li><a href="">Shorts</a> <Image src="/arrow-icon.png" alt='' width={14} height={14}/></li>
                <li><a href="">Shirts</a> <Image src="/arrow-icon.png" alt='' width={14} height={14}/></li>
                 <li><a href="">Hoodie</a> <Image src="/arrow-icon.png" alt='' width={14} height={14}/></li>
                <li><a href="">Jeans</a> <Image src="/arrow-icon.png" alt='' width={14} height={14}/></li>
             </ul>
            </div>
        <div className={styles.filter_item}>
            <hr />
        <h4>Price</h4>
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

      <div style={{width: "200px" }}>
      <div>
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
              border: selectedColor === color.hex ? "1px solid #000000" : "1px #00000099",
              cursor: "pointer",
              marginBottom: 20,
            }}
          ></div>
        ))}
      </div>
     
    </div>
 <hr />
      <div className={styles.filter_item}>
        <h4>Size</h4>
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
       <hr  />
               <div className={styles.typethings}>
           
            <h4>Dress Style</h4>
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