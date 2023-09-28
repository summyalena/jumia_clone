import React from 'react'

import styles from './ui.module.css';
import Container from './Container';

function TabHeading() {
  return (
    <Container>
    <div className={` flex center ${styles.tabheading}`}>
      <h2>Phones & Tablets</h2>
    </div>
    </Container>
  )
}

export default TabHeading