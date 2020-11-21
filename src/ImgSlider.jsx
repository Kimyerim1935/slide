import React from 'react';
import 'swiper/swiper-bundle.css'
import { Swiper , SwiperSlide } from 'swiper/react';
import './ImgSlider.css';
import Take01 from './SVG/Take01.jpg';
import Take02 from './SVG/Take02.jpg';
import Take03 from './SVG/Take03.jpg';
import Take04 from './SVG/Take04.jpg';
import Take05 from './SVG/Take05.jpg';
import Take06 from './SVG/Take06.jpg';
import Take07 from './SVG/Take07.jpg';
import Take08 from './SVG/Take08.jpg';
import Take09 from './SVG/Take09.jpg';


function ImgSlider() {
    return(
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              <SwiperSlide><img src={Take01} alt="img01"/></SwiperSlide>
              <SwiperSlide><img src={Take02} alt="img02"/></SwiperSlide>
              <SwiperSlide><img src={Take03} alt="img03"/></SwiperSlide>
              <SwiperSlide><img src={Take04} alt="img04"/></SwiperSlide>
              <SwiperSlide><img src={Take05} alt="img05"/></SwiperSlide>
              <SwiperSlide><img src={Take06} alt="img06"/></SwiperSlide>
              <SwiperSlide><img src={Take07} alt="img07"/></SwiperSlide>
              <SwiperSlide><img src={Take08} alt="img08"/></SwiperSlide>
              <SwiperSlide><img src={Take09} alt="img09"/></SwiperSlide>
            </Swiper>
          );
        }

export default ImgSlider;