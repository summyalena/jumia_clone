"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";

import styles from "./homepage.module.css";

import Slider from "../ui/Slider";
import Container from "../ui/Container";
import image1 from "../../../public/assets/images/herosectionofficalstores.jpg";
import image2 from "../../../public/assets/images/herosectionshopandearn.png";
import herosectionSlider from '@/utils/slider';
import useGetWindowSize from '../hooks/useGetWindowSize';

function HeroSection() {
  const {width} = useGetWindowSize();

  const links = [
    { id: 1, name: "supermarket", link: "/supermarket" },
    { id: 2, name: "supermarket", link: "/supermarket" },
    { id: 3, name: "supermarket", link: "/supermarket" },
    { id: 4, name: "supermarket", link: "/supermarket" },
    { id: 5, name: "supermarket", link: "/supermarket" },
    { id: 6, name: "supermarket", link: "/supermarket" },
    { id: 7, name: "supermarket", link: "/supermarket" },
    { id: 8, name: "supermarket", link: "/supermarket" },
    { id: 9, name: "supermarket", link: "/supermarket" },
    { id: 10, name: "supermarket", link: "/supermarket" },
  ];

  return (
    <Container className={`flex center gap-sm ${styles.herocontainer}`}>
      {width > 768 ?  
      <>
      <div className={styles.links}>
        <ul className='flex flex-col gap-sm '>
          {links.map((link) => (
            <li key={link.id}>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={`${styles.slider}`}>
        <Slider 
        data={herosectionSlider}/>
      </div>
      <div className="flex flex-col gap-sm">
        <Image src={image1} alt="gif_of_beta_Products" />
        <Image src={image2} alt="picture_of_Jumia force" />
      </div>
      </> : 
           <div>
          <Slider data={herosectionSlider}/>
          </div> }
     
    </Container>
  );
}

export default HeroSection;
