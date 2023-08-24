"use client";

import React from 'react';

import Image from 'next/image';

import Container from '../ui/Container'
import Gridtemplate from '../ui/Gridtemplate'
import { phonesuper, phonesuperdeals } from '@/utils/phonerows'
import Seeallheading from '../ui/Seeallheading'
import Carousel from '../ui/Carousel'
import styles from './homepage.module.css';

function Phonecollection() {
  return (
    <Container className={`${styles.phonecollection}`}>
      <h2 className='flex center'>Phones Super Sale</h2>
      <Gridtemplate className={styles.phone}>
        {phonesuper.map((phone)=> (
          <div className={`${styles.phone}`}>
            <Image src={phone.image} alt={phone.name}/>
            {/* <p>{phone.name}</p> */}
          </div>
        ))}
      </Gridtemplate>
      <div className={`${styles.phonedeals}`}>
        <Seeallheading
         heading='Phones Super Deals'
         para='See all'
         className={styles.phonedealsheading}
        />
        <Carousel
        data={phonesuperdeals}/>
      </div>
    </Container>
  )
}

export default Phonecollection