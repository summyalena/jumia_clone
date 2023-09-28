import React from 'react';
import Link from 'next/link';

import styles from './layouts.module.css';
import { MdEmail, MdStars } from 'react-icons/md';

import Container from '../ui/Container'

function Footer() {
  return (
    <Container className={styles.footer}>
      <div className={`grid gap-md ${styles.footermain}`}>
        <div>
        <h2>JUMIA<MdStars className={styles.stars}/></h2>
        </div>
        <div className='flex flex-col gap-sm'>
          <h3>NEW TO JUMIA?</h3>
          <p>Subscribe to our newsletter to get latest updates on our latest offers</p>
          <form className={`flex gap-sm ${styles.footerform}`}>
             <div className={styles.newsletter}>
            <div className={styles.email}>
            <MdEmail/>
            </div>
            <input
             placeholder='Enter E-mail Address'/>
             </div>
             <div className='flex gap-sm'>
            <button type='button'>
              MALE
            </button>
            <button type='button'>
                FEMALE
            </button>
            </div>
          </form>
        </div>
        <div className={`${styles.freeapp}`}>
          <div className='flex gap-sm'>
            <div>
              <div className='flex center gap-xs'>
          <div className={`flex center ${styles.appstar}`}>
          <MdStars/>
          </div>
          <div className={`${styles.jumiafree}`}>
          <h4>DOWNLOAD JUMIA FREE APP</h4>
          <p>Get access to exclusive offers!</p>
          </div>
          </div>
          <div className={`flex gap-sm ${styles.appstore}`}>
         <div className={styles.playstore}>
           <h6 className={styles.smallfont}>Download on the </h6>
           <span>App Store</span>
         </div>
         <div className={styles.playstore}>
           <h6 className={styles.smallfont}>GET IT ON</h6>
           <span>Google Play</span>
         </div>
         </div>
         </div>
         </div>
         </div>
      </div>
      <div className={`grid ${styles.footerlinks}`}>
        <div className={styles.firstlinks}>
        <ul className={styles.needhelp}>
          <h5>NEED HELP?</h5>
          <li>Chat with Us</li>
          <li>Help Center</li>
          <li>Contact Center</li>
        </ul>
        <ul>
          <h5>USEFUL LINKS</h5>
          <li>How to shop on Jumia</li>
          <li>Delivery Options and timeline</li>
          <li>How to return a product on Jumia</li>
        </ul>
        </div>
        <div className={styles.secondlinks}>
            <h5>ABOUT JUMIA</h5>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/about">Jumia Careers</Link></li>
            <li><Link href="/about">Jumia Express</Link></li>
            <li><Link href="/about">Terms & Conditions</Link></li>
            <li><Link href="/about">Privacy Notice</Link></li>
            <li><Link href="/about">Official Stores</Link></li>
          </ul>
        </div>
        <div className={styles.thirdlinks}>
            <h5>MAKE MONEY IN JUMIA</h5>
          <ul>
            <li>Sell on Jumia</li>
            <li>Become a sale consultant</li>
            <li>Become a Logistics Service Partner</li>
            <li>Join the Jumia DA Academy</li>
          </ul>
        </div>
        <div className={styles.fourthlinks}>
          <h5>JUMIA INTERNATIONAL</h5>
          <ul>
            <li>Algeria</li>
            <li>Egypt</li>
            <li>Ghana</li>
          </ul>
          <ul>
            <li>Senegal</li>
            <li>Tunisia</li>
            <li>Morocco</li>
          </ul>
        </div>
      </div>
      <div className={`flex flex-col ${styles.socialpayments}`}>
        <div className={`flex ${styles.socialpaymentscon}`}>
        <div className={styles.socialmedia}>
        <h6>JOIN US ON</h6>
        <ul className='flex gap-xs'>
          <li>Facebook</li>
          <li>Youtube</li>
        </ul>
        </div>
        <div className={styles.payments}>
          <h6>PAYMENT METHODS & DELIVERY PARTNERS</h6>

          <ul className='flex gap-xs'>
            <li>Visa</li>
            <li>Interswitch</li>
          </ul>
        </div>
        </div>
        <ul className={`flex center gap-xs ${styles.logistics}`}>
          <li>PAY</li>
          <li>FOOD</li>
          <li>LOGISTICS</li>
        </ul>
      </div>
    </Container>
  )
}

export default Footer