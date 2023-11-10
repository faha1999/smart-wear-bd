import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { sliderData } from '../../../data/sliderData';

export const Slider = () => {
  return (
    <>
      <section className="homeSlide contentWidth">
        <div className="container">
          <Swiper
            className="mySwiper"
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {sliderData.map((data, index) => (
              <SwiperSlide className="box d_flex top" key={index}>
                <div className="left">
                  <h1>{data.title}</h1>
                  <p>{data.desc}</p>
                  <button className="btn-primary">Visit Collections</button>
                </div>
                <div className="right">
                  <img src={data.cover} alt="{data.title}" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};
