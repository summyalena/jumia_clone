import React from 'react'

import { RiArrowRightSLine } from 'react-icons/ri';
import Image from 'next/image';

import styles from './ui.module.css';
import flashsales from '@/utils/flashsales';
import Container from './Container';


function Flashsales() {
  return (
    <Container>
     <div className={`flex align-y ${styles.flashheading}`}>
      <h3>Flash sales</h3>
      <p>Time left: 08h : 43m : 05s</p>
      <p className='flex center '>See all <RiArrowRightSLine/> </p>
     </div>
     <div className={`grid ${styles.flashgrid}`}>
      {flashsales.map((flash)=> (
        <div key={flash.id}>
          <Image className={styles.flashimage} src={flash.images} alt={flash.name}/>
          <div>
            <h3>{flash.name}</h3>
            <p>{flash.price}</p>
            <p>{flash.slashedPrice}</p>
            <p>{flash.quantityleft}</p>
          </div>
        </div>
      ))}
     </div>
    </Container>
  )
}

export default Flashsales