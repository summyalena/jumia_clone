'use client';

import React from 'react'
import Container from '../ui/Container'
import Seeallheading from '../ui/Seeallheading';

import styles from './homepage.module.css';
import bigsavingsgrocery from '@/utils/bigsavingsgrocery';
import Carousel from '../ui/Carousel';

function Bigsavinggroceries() {
  return (
    <Container className={styles.biggroceries}>
       <Seeallheading
        heading='Big Savings Grocery Deals'
        para='See all'/>
        <Carousel
        data={bigsavingsgrocery}/> 
    </Container>
  )
}

export default Bigsavinggroceries