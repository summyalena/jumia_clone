'use client';

import React, {useState, useEffect} from 'react'

import Image from 'next/image';

import herosectionSlider from '@/utils/slider'
import styles from './ui.module.css';


function Slider({data}) {
  const [activeSlide, setActiveSlide] = useState(1);
  const {length} = herosectionSlider;

 useEffect(() => {
  const handleSlide = setInterval(() => {
    if (activeSlide > (length - 1)) {
      setActiveSlide(1);
      return;
    }

    if (activeSlide <= 0) {
      setActiveSlide(length - 1);
      return;
    }

    setActiveSlide((prev) => prev + 1);
  }, 7000);

  return () => clearInterval(handleSlide);
}, [activeSlide]);

  return (
    <div className={`full-width flex center ${styles.slidecontainer}`}>
      <div className={`full-width  ${styles.slider}`}>
     {data.map((el) => 
      el.id === activeSlide && (
      <div key={el.id} className={activeSlide === el.id ? styles.slideactive : ''}>
        <Image className={styles.imgg} src={el.image} alt={el.name}/>
      </div>
      )
     )}
     </div>
    </div>
  )
}

export default Slider