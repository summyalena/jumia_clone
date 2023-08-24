'use client';

import React from 'react'
import Image from 'next/image';

import Container from '../ui/Container'
import Gridtemplate from '../ui/Gridtemplate'
import biggroceries from '@/utils/biggroceries';

import styles from './homepage.module.css'

function BigGroceries() {
  return (
    <Container className={styles.biggroceries}>
      <h2 className='flex center'>Big Groceries</h2>
      <Gridtemplate className={styles.groceries}>
        {
          biggroceries.map((grocery)=> (
            <div className={styles.grocery}>
              <Image src={grocery.image} alt={grocery.text}/>
            </div>
          ))
        }
      </Gridtemplate>
    </Container>
  )
}

export default BigGroceries