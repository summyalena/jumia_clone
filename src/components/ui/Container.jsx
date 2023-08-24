import React from 'react'

import styles from './ui.module.css'

function Container({children, className}) {
  return (
    <section className={`full-width ${styles.sectioncontainer} ${className}`}>
      {children}
    </section>
  )
}

export default Container;