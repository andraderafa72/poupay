// import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from "./styles";


import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

export function Comentarios() {


  return (
    <>
      <Container>
        <Swiper
          spaceBetween={32}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          loop
        >
          <SwiperSlide>
            <div className="comment">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident exercitationem sequi excepturi? Officiis quae perspiciatis minus, culpa voluptas aliquam sit, dolores necessitatibus sint nihil facilis dolor? Necessitatibus aperiam id tempora?</p>
              <strong>Jhenifer Santos</strong>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="comment">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident exercitationem sequi excepturi? Officiis quae perspiciatis minus, culpa voluptas aliquam sit, dolores necessitatibus sint nihil facilis dolor? Necessitatibus aperiam id tempora?</p>
              <strong>Jhenifer Santos</strong>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="comment">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident exercitationem sequi excepturi? Officiis quae perspiciatis minus, culpa voluptas aliquam sit, dolores necessitatibus sint nihil facilis dolor? Necessitatibus aperiam id tempora?</p>
              <strong>Jhenifer Santos</strong>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  )
}