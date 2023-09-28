import React from 'react'

import {RiArrowRightSLine} from 'react-icons/ri';

import styles from './ui.module.css';

function Seeallheading({heading, para, className}) {
  return (
    <div className={`flex align-y ${styles.seeallheading} ${className}`}>
      <h2>{heading}</h2>
      <p className='flex center'>{para}<RiArrowRightSLine/></p>
    </div>
  )
}

export default Seeallheading;