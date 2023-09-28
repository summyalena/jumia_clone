"use client";

import React from "react";

import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";

import Image from "next/image";

import phonerows from "@/utils/phonerows";
import styles from "./homepage.module.css";
import Card from "../ui/Card";
import Container from "../ui/Container";

function PhoneRows() {
  return (
    <Container>
      <div className={`full-width ${styles.phone1container}`}>
        <Swiper
          modules={[Navigation, A11y]}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
            hideOnClick: true,
            clickable: true,
          }}
          onMouseMove={styles.activeHover}
          slidesPerView={5}
          breakpoints={{
            300: {
              slidesPerView: 3,
            },
            500: {
              slidesPerView: 3.5,
            },
            800: {
               slidesPerView: 4
            },
            1024: {
              slidesPerView: 5.5,
            },
          }}
          spaceBetween={20}
          className="mySwiper"
        >
          {phonerows.map((phones) => (
            <SwiperSlide>
              <Card key={phones.id} className={styles.slidecard}>
                <Image src={phones.image} alt={phones.text} />
                <span>{phones.text}</span>
                <span>{phones.price}</span>
                <span>{phones.slashed}</span>
              </Card>
            </SwiperSlide>
          ))}
          <div aria-label='next-control' className="next flex center">
            <RiArrowRightSLine />
          </div>
          <div aria-label='prev-control' className="prev flex center">
            <RiArrowLeftSLine />
          </div>
        </Swiper>
      </div>
    </Container>
  );
}

export default PhoneRows;
