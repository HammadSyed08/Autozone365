import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.css';


export default function Slider() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div style={{position: 'Relative'}}>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={10}
        pagination={{
          type: 'fraction',
        }}
        className="mySwiper"
      >
        <SwiperSlide><img src={"/CarAd.svg"} alt="Car Add" /></SwiperSlide>
        <SwiperSlide><img src={"/CarAd.svg"} alt="Car Add" /></SwiperSlide>
        <SwiperSlide><img src={"/CarAd.svg"} alt="Car Add" /></SwiperSlide>
        <SwiperSlide><img src={"/CarAd.svg"} alt="Car Add" /></SwiperSlide>
        <SwiperSlide><img src={"/CarAd.svg"} alt="Car Add" /></SwiperSlide>
      </Swiper>
    </div>
  )
}
