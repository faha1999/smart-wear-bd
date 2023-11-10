import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { DiscountData } from '../../data/DiscountData';

export const DiscountCard = () => {
  return (
    <>
      <Swiper
        //slidesPerView={5}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {DiscountData.map((data, index) => (
          <SwiperSlide className="box product" key={index}>
            <div className="img">
              <img src={data.cover} alt="{data.name}" width="100%" />
            </div>
            <h4>{data.name}</h4>
            <span>{data.price}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
