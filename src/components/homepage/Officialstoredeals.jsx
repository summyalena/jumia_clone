'use client';

import React from 'react';

import { officialstoredeals } from '@/utils/limitedstockdeals'
import Seeallheading from '../ui/Seeallheading';
import styles from './homepage.module.css';
import Carousel from '../ui/Carousel';

import Container from '../ui/Container';

function OfficialStoredeals() {
  return (
    <Container className={styles.storedeals}>
      <Seeallheading
      heading='Official Store Deals | Authenticity Guaranteed'
       para='See all'
       className={styles.seeheading}/>
     <Carousel
     data={officialstoredeals}
     />
    </Container>
  )
}

export default OfficialStoredeals