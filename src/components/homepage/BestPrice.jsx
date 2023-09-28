'use client';

import React from 'react'
import Seeallheading from '../ui/Seeallheading'
import Carousel from '../ui/Carousel';
import bestprice from '@/utils/bestprice';
import Container from '../ui/Container';

import styles from './homepage.module.css';

function BestPrice() {
  return (
    <Container className={styles.bestpricecontainer}>
      <Seeallheading
      heading='Best Price'
      para='See all'
      />
      <Carousel
      data={bestprice}
      />
    </Container>
  )
}

export default BestPrice