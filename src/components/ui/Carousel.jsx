import React from 'react';
import Image from 'next/image';

import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";

import styles from "./ui.module.css";
import Card from "./Card";

function Carousel({data}) {
  return (
    <div className={styles.carousel}>
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
          {data.map((el) => (
            <SwiperSlide key={el.id}>
              <Card className={styles.slidecard}>
                <Image src={el.image} alt={el.text} />
                <p>{el.text}</p>
                <span>{el.price}</span>
                <span>{el.slashed}</span>
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
    </div>
  )
}

export default Carousel