import React from 'react';

import Image from 'next/image';

import Gridtemplate from '../ui/Gridtemplate';
import styles from './homepage.module.css';
import Container from '../ui/Container';
import { morecollections } from '@/utils/Collections';

function Morecollections() {
  return (
    <Container className={`${styles.morecollections}`}>
      <h2 className='flex center'> 
       More collections
      </h2>
      <Gridtemplate>
       {morecollections.map((collection)=> (
        <div className={`flex flex-col center gap-sm ${styles.morecollection}`}>
          <Image src={collection.image} alt={collection.name}/>
           <p>{collection.name}</p>
        </div>
       ))}
      </Gridtemplate>
    </Container>
  )
}

export default Morecollections