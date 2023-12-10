import '../styles/Carousel.css'

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

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
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img src={aero} alt='carouse-images' /></SwiperSlide>
        <SwiperSlide><img src={roboK} alt='carouse-images' /></SwiperSlide>
        <SwiperSlide><img src={roboS} alt='carouse-images' /></SwiperSlide>
        <SwiperSlide><img src={extreme} alt='carouse-images' /></SwiperSlide>
        <SwiperSlide><img src={enigma} alt='carouse-images' /></SwiperSlide>
        <SwiperSlide><img src={play} alt='carouse-images' /></SwiperSlide>
        <SwiperSlide><img src={loco} alt='carouse-images' /></SwiperSlide>
        <SwiperSlide><img src={spud} alt='carouse-images' /></SwiperSlide>
        <SwiperSlide><img src={npp} alt='carouse-images' /></SwiperSlide>
      </Swiper>
        </div>
    </div>
      
    </>
  );
}