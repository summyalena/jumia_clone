'use client';

import React from 'react'

import Image from 'next/image'

import Container from '../ui/Container'
import Gridtemplate from '../ui/Gridtemplate'
import mainofficialstores from '@/utils/mainofficialstores'
import styles from './homepage.module.css';

function Mainofficialstore() {
  return (
    <Container className={styles.mainofficial}>
      <h2 className='flex center'>Official Stores</h2>
      <Gridtemplate className={styles.mainstore}>
      { mainofficialstores.map((main)=> (
             <Image src={main.image} alt={main.name}/>
        ))
      }
      </Gridtemplate>
   
    </Container>
  )
}

export default Mainofficialstore