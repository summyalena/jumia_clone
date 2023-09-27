'use client';

import React from 'react'
import {appliancestwo} from '@/utils/appliances'
import Container from '../ui/Container';
import styles from './homepage.module.css';
import Gridtemplate from '../ui/Gridtemplate';

import Image from 'next/image';

function Appliancestwo() {
  return (
    <Container className={styles.appliancetwo}>
      <h2 className='flex center'>Appliances</h2>
      <Gridtemplate className={` ${styles.appliancetwogrid}`}>
        {appliancestwo.map((appliance) => (
          <div key={appliance.id} className={styles.appliance}>
            <Image src={appliance.image} alt={appliance.name}/>
            <p>{appliance.text}</p>
          </div>
        ))}
      </Gridtemplate>
    </Container>
  )
}

export default Appliancestwo;