import React from 'react'

import Image from 'next/image';

import categories from '@/utils/categories';
import styles from './homepage.module.css';
import Container from '../ui/Container';

function Categories() {
  return (
    <Container>
      <div className={`full-width grid gap-sm ${styles.catgoriescontainer}`}>
        {categories.map((category) => (
          <div className={`flex center flex-col ${styles.category}`}>
            <Image src={category.image} alt={category.name}/>
            <h2>{category.name}</h2>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Categories