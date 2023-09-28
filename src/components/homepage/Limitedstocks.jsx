'use client';

import React from 'react';
import Image from 'next/image';

import {RiArrowRightSLine} from 'react-icons/ri';

import Carousel from '../ui/Carousel';
import styles from './homepage.module.css';
import Container from '../ui/Container';
import Gridtemplate from '../ui/Gridtemplate';
import subcategories from '@/utils/subcategories';
import limitedstockdeals from '../../utils/limitedstockdeals'

function Limitedstocks() {
  return (
   <Container className={styles.stockcontainer}>
    <div className={`flex align-y ${styles.heading}`}>
      <h2>Limited Stocks </h2>
      <p className='flex center'>See all <RiArrowRightSLine/></p>
    </div>
    <Carousel
    data={limitedstockdeals} />
    
    <div className={`${styles.grid}`}>
        {subcategories.map((category)=> (
          <div key={category.id} className={`flex flex-col center ${styles.subcategory}`}>
            <Image src={category.image} alt={category.text}/>
            <p>{category.text}</p>
          </div>
        ))}
        </div>
   </Container>
  )
}

export default Limitedstocks