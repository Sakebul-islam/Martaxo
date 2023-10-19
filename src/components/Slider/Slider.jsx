// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useState } from 'react';

const Slider = ({ brand }) => {
  const { brandName, sliderImage } = brand;
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img src={sliderImage[0]} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderImage[1]} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderImage[2]} alt='' />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
