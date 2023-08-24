import React from 'react'

import Container from '../ui/Container'
import Slider from '../ui/Slider';
import { slidertwo } from '@/utils/slider';
import styles from './homepage.module.css';

function Slidertwo() {
  return (
    <Container className={styles.slidertwo}>
       <h2 className='flex center'>Official Store</h2>
       <Slider
       data={slidertwo}
       />
    </Container>
  )
}

export default Slidertwo