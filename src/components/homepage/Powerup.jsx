'use client';

import React from 'react';
import Image from 'next/image';

import Container from '../ui/Container';
import powerup from '@/utils/powerup';
import Card from '../ui/Card';
import Gridtemplate from '../ui/Gridtemplate';
import styles from './homepage.module.css';


function Powerup() {
  return (
    <Container className={styles.powerup}>
      <h2 className='flex center'>Power Up</h2>
      <Gridtemplate className={styles.powergrid}>
      {
        powerup.map((power)=> (
          <div className={styles.power} key={power.id}>
            <Image src={power.image} alt={power.name}/>
          </div>
        ))
      }
      </Gridtemplate>
    </Container>
  )
}

export default Powerup;