'use client';

import React from 'react'
import Container from '../ui/Container'
import Seeallheading from '../ui/Seeallheading'
import Carousel from '../ui/Carousel';
import unilever from '@/utils/unilever';

import styles from './homepage.module.css';

function Unilever() {
  return (
    <Container className={styles.unilever}>
     <Seeallheading
     heading='UNILEVER OFFICIAL STORE'
     para='See all'/>
     <Carousel
      data={unilever}
     />
    </Container>
  )
}

export default Unilever;