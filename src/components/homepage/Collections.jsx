import React from 'react'

import Image from 'next/image';
import styles from './homepage.module.css'
import Container from '../ui/Container';
import collections from '@/utils/Collections';
import Gridtemplate from '../ui/Gridtemplate';

function Collections() {
  return (
    <Container className={`${styles.collections}`}>
      <h2 className='flex center '>Shop our Collections</h2>
      <Gridtemplate className={` ${styles.collectiongrid}`}>
        {collections.map((collection) => (
          <div key={collection.id} className={styles.collection}>
            <Image src={collection.image} alt={collection.name}/>
            <p>{collection.text}</p>
          </div>
        ))}
      </Gridtemplate>
    </Container>
  )
}

export default Collections