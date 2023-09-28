'use client';

import React from 'react'

import styles from './ui.module.css'

function Gridtemplate({children, className}) {
  return (
    <div className={`grid center ${styles.gridtemplate} ${className}`}>
      {children}
    </div>
  )
}

export default Gridtemplate;