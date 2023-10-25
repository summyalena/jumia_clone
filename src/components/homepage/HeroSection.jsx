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
  
  console.log(width);

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
    <Container className={`${styles.herocontainer}`}>
      {width > 948 ?  
      <div className={styles.container}>
      <div className={styles.links}>
        <ul className='flex flex-col gap-sm '>
          {links.map((link) => (
            <li key={link.id}>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
        <Slider 
        data={herosectionSlider}/>
      <div className="flex center flex-col gap-xlg">
        <Image src={image1} alt="gif_of_beta_Products" />
        <Image src={image2} alt="picture_of_Jumia force" />
      </div>
      </div> : 
           <>
          <Slider data={herosectionSlider}/>
          </> 
          }
     
    </Container>
  );
}

export default HeroSection;
