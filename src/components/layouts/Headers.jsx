"use client";

import React, { useState } from "react";
import Link from 'next/link';

import { MdStars, MdOutlineHelpOutline } from "react-icons/md";
import { AiOutlineClose } from 'react-icons/ai'
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";

import styles from "./layouts.module.css";
import MiniHeader from "./MiniHeader";
import Container from "../ui/Container";
import TextField from "./TextField";
import useGetWindowSize from "../hooks/useGetWindowSize";
import navlist, { categorylist, serviceslist } from '@/utils/navlist';

function Headers() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  }
  const { width } = useGetWindowSize();

  return (
    <>
      <Container>
        {width > 898 ? (
          <>
            <MiniHeader />
            <nav
              className={`full-width flex align-y padding-sm-all ${styles.navbar}`}
            >
              <h2 className="flex center">
                Jumia
                <MdStars className={styles.stars} />
              </h2>
              <TextField />
              <ul className={`${styles.navicons}`}>
                <li>
                  <RxAvatar />
                  Hi Alena <RiArrowDropDownLine />
                </li>
                <li>
                  <MdOutlineHelpOutline />
                  Help <RiArrowDropDownLine />{" "}
                </li>
                <li>
                  <BsCart3 />
                  Cart
                </li>
              </ul>
         
             
            </nav>
          </>
        ) : (
          <div className="flex flex-col gap-sm center">
            <nav
              className={`full-width flex align-y padding-sm-all ${styles.navbar}`}
            >
              <div className="flex center">
                <button
                onClick={handleOpenMenu}
                  type="button"
                  className={`flex flex-col center ${styles.hamburger}`}
                >
                  <span />
                  <span />
                  <span />
                </button>
                <h2 className="flex center">
                  Jumia
                  <MdStars className={styles.stars} />
                </h2>
              </div>
              <ul className={`${styles.navicons}`}>
                <li>
                  <RxAvatar />
                </li>
                <li>
                  <BsCart3 />
                </li>
              </ul>
              <div className={`flex flex-col ${styles.navlists} ${openMenu && styles.mobile}`}>
                <button onClick={handleCloseMenu}>
                  <AiOutlineClose/>
                </button>
                <ul>
                {navlist.map((nav)=> (
                  <li key={nav.id}><Link href={nav.link}>{nav.name}</Link></li>
                ))}
                </ul>
                <ul>
                  {categorylist.map((list)=> (
                    <li key={list.id}><Link href={list.link}>{list.name}</Link></li>
                  ))}
                </ul>
                <ul>
                  {serviceslist.map((el)=> (
                    <li key={el.id}><Link href={el.link}>{el.name}</Link></li>
                  ))}
                </ul>
                <ul>
                  <li><Link href="">Sell on Jumia</Link></li>
                   <li><Link href="">Contact us</Link></li>
                </ul>
              </div>
             
            </nav>
            <TextField />
          </div>
        )}
      </Container>
    </>
  );
}

export default Headers;
