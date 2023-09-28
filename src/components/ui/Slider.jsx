"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";

import herosectionSlider from "@/utils/slider";
import Card from '../ui/Card';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";
import styles from "./ui.module.css";
import useGetWindowSize from "../hooks/useGetWindowSize";

function Slider({ data }) {
  const { width } = useGetWindowSize();

  const [activeSlide, setActiveSlide] = useState(1);
  const { length } = herosectionSlider;

  useEffect(() => {
    const handleSlide = setInterval(() => {
      if (activeSlide > length - 1) {
        setActiveSlide(1);
        return;
      }

      if (activeSlide <= 0) {
        setActiveSlide(length - 1);
        return;
      }

      setActiveSlide((prev) => prev + 1);
    }, 7000);

    return () => clearInterval(handleSlide);
  }, [activeSlide]);

  return ( 
    <>
    { width < 768 ? ( 
    <>
      <Swiper 
          modules={[Navigation, A11y]}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
            hideOnClick: true,
            clickable: true,
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 2,
            },
            800: {
               slidesPerView: 3
            }
          }}
          spaceBetween={20}
          className="mySwiper">
            {herosectionSlider.map((el)=> (
              <SwiperSlide className='swiper-slide' >
                <Card key={el.id}>
                <Image  src={el.image} alt={el.name}/>
                </Card>
              </SwiperSlide>
            ))}
           </Swiper>
           </> 
           ):
           (
            <>
              <div className={`full-width flex center ${styles.slidecontainer}`}>
          <div className={`full-width  ${styles.slider}`}>
            {data.map(
              (el) =>
                el.id === activeSlide && (
                  <div
                    key={el.id}
                    className={activeSlide === el.id ? styles.slideactive : ""}
                  >
                    <Image
                      className={styles.imgg}
                      src={el.image}
                      alt={el.name}
                    />
                  </div>
                )
            )}
          </div>
    </div>
            </>
           ) }
    </>
  );
}

export default Slider;
