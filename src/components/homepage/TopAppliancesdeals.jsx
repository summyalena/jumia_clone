'use client';

import React from 'react'
import Container from '../ui/Container'

import Seeallheading from '../ui/Seeallheading'
import Carousel from '../ui/Carousel';
import { topappliances } from '@/utils/appliances';
import styles from './homepage.module.css';

function TopAppliancesdeals() {
  return (
    <Container className={styles.topappliance}>
      <Seeallheading
      heading='Top Appliances Deal'
      para='See all'
      />
      <Carousel
      data={topappliances}
      />
    </Container>
  )
}

export default TopAppliancesdeals