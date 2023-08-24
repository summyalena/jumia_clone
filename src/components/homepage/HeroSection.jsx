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

function HeroSection() {
  const links = [
    { id: 1, name: "supermarket", link: "/supermarket" },
    { id: 1, name: "supermarket", link: "/supermarket" },
    { id: 1, name: "supermarket", link: "/supermarket" },
    { id: 1, name: "supermarket", link: "/supermarket" },
    { id: 1, name: "supermarket", link: "/supermarket" },
    { id: 1, name: "supermarket", link: "/supermarket" },
    { id: 1, name: "supermarket", link: "/supermarket" },
    { id: 1, name: "supermarket", link: "/supermarket" },
    { id: 1, name: "supermarket", link: "/supermarket" },
    { id: 1, name: "supermarket", link: "/supermarket" },
  ];

  return (
    <Container className={`flex center gap-sm ${styles.herocontainer}`}>
      <div className={styles.links}>
        <ul className='flex flex-col gap-sm '>
          {links.map((link) => (
            <li>
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
        <Image src={image1} alt="" />
        <Image src={image2} alt="" />
      </div>
    </Container>
  );
}

export default HeroSection;
