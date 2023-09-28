'use client';

import React from 'react';
import Image from 'next/image';

import Container from '../ui/Container'
import styles from './homepage.module.css';
import Gridtemplate from '../ui/Gridtemplate';
import health from '@/utils/health';
 

function Health() {
  return (
    <Container className={styles.healthcontainer}>
      <h2 className='flex center'>Health & Beauty</h2>
      <Gridtemplate className={styles.healthgrid}>
         {health.map((el)=> (
          <div key={el.id} className={styles.health}>
            <Image src={el.image} alt={el.name}/>
          </div>
         ))}
      </Gridtemplate>
    </Container>
  )
}

export default Health