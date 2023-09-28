'use client';

import React from 'react'
import Container from '../ui/Container'
import Seeallheading from '../ui/Seeallheading'
import Carousel from '../ui/Carousel'
import { powerupdeals } from '@/utils/powerup'
import styles from './homepage.module.css';

function Toppowerups() {
  return (
    <Container className={styles.toppower}>
      <Seeallheading
        heading='Top Power Deals'
        para='See all'/>
        <Carousel
        data={powerupdeals}
        />
    </Container>
  )
}

export default Toppowerups