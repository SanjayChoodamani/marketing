import '../styles/Carousel.css'

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCreative } from 'swiper/modules';

import aero from '../assets/images/carousel/aeroNautica.jpg'
import enigma from '../assets/images/carousel/enigma23.jpg'
import extreme from '../assets/images/carousel/extremeMachines.jpg'
import roboK from '../assets/images/carousel/roboKombat.jpg'
import roboS from '../assets/images/carousel/roboSoccer.jpg'
import play from '../assets/images/carousel/playbytes.jpg'
import loco from '../assets/images/carousel/locomoter.jpg'
import spud from '../assets/images/carousel/spudzooka.jpg'
import npp from '../assets/images/carousel/npp.jpg'
import techS from '../assets/images/carousel/techsandhya.jpg'
import mega from '../assets/images/carousel/megastructures.jpg'
import ing from '../assets/images/carousel/ingenium.jpg'
import inq from '../assets/images/carousel/inquizitive.jpg'
import pulse from '../assets/images/carousel/pulse.png'
import marketing from '../assets/images/carousel/marketing.jpg'


export default function Carousel() {
  return (
    <>
    <div className='carousel-design' id="gallery">
        <div className='carousel-heading'>
            <h1>GALLERY</h1>
            <i class="fa-solid fa-arrow-down"></i>
        </div>
        <div className='carousel-card'>
        <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-120%', 0, -500],
          },
          next: {
            shadow: true,
            translate: ['120%', 0, -500],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper2"
      >
        <SwiperSlide><img src={enigma} alt='carouse-images' /></SwiperSlide>
        <SwiperSlide><img src={pulse} alt='carouse-images' /></SwiperSlide>
        <SwiperSlide><img src={marketing} alt='carouse-images' /></SwiperSlide>
        <SwiperSlide><img src={aero} alt='carouse-images' /></SwiperSlide>
        <SwiperSlide><img src={roboK} alt='carouse-images' /></SwiperSlide>
        <SwiperSlide><img src={roboS} alt='carouse-images' /></SwiperSlide>
        <SwiperSlide><img src={extreme} alt='carouse-images' /></SwiperSlide>
        <SwiperSlide><img src={play} alt='carouse-images' /></SwiperSlide>
        <SwiperSlide><img src={loco} alt='carouse-images' /></SwiperSlide>
        <SwiperSlide><img src={spud} alt='carouse-images' /></SwiperSlide>
        <SwiperSlide><img src={npp} alt='carouse-images' /></SwiperSlide>
        <SwiperSlide><img src={techS} alt='carouse-images' /></SwiperSlide>
        <SwiperSlide><img src={mega} alt='carouse-images' /></SwiperSlide>
        <SwiperSlide><img src={ing} alt='carouse-images' /></SwiperSlide>
        <SwiperSlide><img src={inq} alt='carouse-images' /></SwiperSlide>
      </Swiper>
        </div>
    </div>
      
    </>
  );
}