import React from 'react'

import { MdStars, MdOutlineHelpOutline } from 'react-icons/md';
import {RiArrowDropDownLine} from 'react-icons/ri';
import { RxAvatar} from 'react-icons/rx';
import { BsCart3} from 'react-icons/bs';

import styles from './layouts.module.css'
import MiniHeader from './MiniHeader';
import Container from '../ui/Container';
import TextField from './TextField';


function Headers() {
  return (
    <>
    <Container>
    <MiniHeader/>
    <nav className={`full-width flex align-y padding-sm-all ${styles.navbar}`}>
      <button type="button" className={`flex flex-col center ${styles.hamburger}`}>
        <span/>
        <span/>
        <span/>
      </button>
      <h2 className='flex center'>Jumia<MdStars className={styles.stars}/></h2>
      <TextField/>
       <ul className={`${styles.navicons}`}>
        <li><RxAvatar/>Hi Alena <RiArrowDropDownLine/></li>
        <li><MdOutlineHelpOutline/>Help <RiArrowDropDownLine/> </li>
        <li><BsCart3/>Cart</li>
       </ul>
    </nav>
    </Container>
    </>
  )
}

export default Headers;