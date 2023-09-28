'use client';

import React from 'react'
import Seeallheading from '../ui/Seeallheading'
import Carousel from '../ui/Carousel'
import appliances from '@/utils/appliances'
import Container from '../ui/Container';
import styles from './homepage.module.css'

function Appliances() {
  return (
    <Container className={styles.appliances}>
     <Seeallheading
     className={styles.tvheading}
     para='See all'
     heading='Large Appliances | Pay on Delivery'
     /> 
     <Carousel
     data={appliances}
      />
    </Container>
  )
}

export default Appliances;