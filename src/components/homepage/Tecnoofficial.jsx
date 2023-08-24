'use client';

import React from 'react';

import Carousel from '../ui/Carousel';
import tecnoofficial from '@/utils/tecnoofficial';
import styles from './homepage.module.css';
import Seeallheading from '../ui/Seeallheading'
import Container from '../ui/Container';


function Tecnoofficial() {
  return (
    <Container className={styles.tecnoofficial}>
    <Seeallheading
     heading='TECNO OFFICIAL STORE'
     para='See all'/>
      <Carousel
       data={tecnoofficial}/>
    </Container>
  )
}

export default Tecnoofficial