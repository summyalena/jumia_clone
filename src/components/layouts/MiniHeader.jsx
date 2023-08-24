import React from 'react'
import {BiShieldPlus} from 'react-icons/bi'
import {PiShootingStarDuotone} from 'react-icons/pi';
import {GiWineBottle} from 'react-icons/gi';
import {LuBaggageClaim} from 'react-icons/lu';
import {MdStars} from 'react-icons/md';

import styles from './layouts.module.css';
import Link from 'next/link';

function MiniHeader() {
  return (
    <div className={`flex align-y ${styles.miniheader}`}>
      <h1><Link href="/"><MdStars/>Sell on Jumia</Link></h1>
      <ul className={`flex gap ${styles.list}`}>
        <li><Link href="/">JUMIA<MdStars/></Link></li>
        <li><Link href="/"><BiShieldPlus/>PAY</Link></li>
        <li><Link href="/"><PiShootingStarDuotone/>FOOD</Link></li>
        <li><Link href="/"><GiWineBottle/>PARTY</Link></li>
        <li><Link href="/"><LuBaggageClaim/>LOGISTICS</Link></li>
      </ul>
    </div>
  )
}

export default MiniHeader