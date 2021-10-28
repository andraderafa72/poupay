import { useState } from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from "./styles";
import left from '../../../../../assets/img/left.svg'
import right from '../../../../../assets/img/right.svg'

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

export function Comentarios() {
  const [posX, setPosX] = useState(0)

  function handleSumPosX() {
    if (posX === 0) {
      setPosX(575);
    } else if (posX === 575) {
      setPosX(1150);
    } else {
      setPosX(0);
    }
  }

  function handleSubPosX() {
    if (posX === 0) {
      setPosX(1150);
    } else if (posX === 575) {
      setPosX(0);
    } else {
      setPosX(575);
    }
  }

  return (
    <Container>
      <div className={`wrapper`} style={{
        transform: `translateX(-${posX}px)`
      }}>
        <div className="comment">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident exercitationem sequi excepturi? Officiis quae perspiciatis minus, culpa voluptas aliquam sit, dolores necessitatibus sint nihil facilis dolor? Necessitatibus aperiam id tempora?</p>
          <strong>Jhenifer Santos</strong>
        </div>
        <div className="comment">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident exercitationem sequi excepturi? Officiis quae perspiciatis minus, culpa voluptas aliquam sit, dolores necessitatibus sint nihil facilis dolor? Necessitatibus aperiam id tempora?</p>
          <strong>Jhenifer Santos</strong>
        </div>
        <div className="comment">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident exercitationem sequi excepturi? Officiis quae perspiciatis minus, culpa voluptas aliquam sit, dolores necessitatibus sint nihil facilis dolor? Necessitatibus aperiam id tempora?</p>
          <strong>Jhenifer Santos</strong>
        </div>
      </div>

      <button onClick={handleSubPosX}>
        <img src={left} alt="" />
      </button>
      <button onClick={handleSumPosX}>
        <img src={right} alt="" />
      </button>
    </Container>
  );
}