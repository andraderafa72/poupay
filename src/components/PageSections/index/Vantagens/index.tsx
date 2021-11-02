import VantagemCard from "./Card";
import { Container } from "./styles";
import vantagens from './assets/vantagens.svg';
import blob from './assets/blob-vantagens.svg';
import { PrimaryButton } from "../../../Button";
import { useRef } from "react";
import left from '../../../../assets/img/left.svg'
import right from '../../../../assets/img/right.svg'

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

export function Vantagens() {
  const ref = useRef<HTMLDivElement>(null)

  function handleSumPosX() {
    if(!ref.current) return 
    ref.current.scrollLeft = ref.current.scrollLeft + 300
  }

  function handleSubPosX() {
    if(!ref.current) return 
    ref.current.scrollLeft = ref.current.scrollLeft - 300
  }

  return (
    <Container>
      <img src={vantagens} alt="" />
      <img src={blob} className="blob" alt="" />

      <div className="content">
        <h2>Lorem ipsum dolor sit amet, consectetur</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <div className="vantagens">
          <div className="buttons">
            <button onClick={handleSubPosX}>
              <img src={left} alt="" />
            </button>
            <button onClick={handleSumPosX}>
              <img src={right} alt="" />
            </button>
          </div>

          <div className="wrapper" ref={ref}>
            <VantagemCard />
            <VantagemCard />
            <VantagemCard />
            <VantagemCard />
            <VantagemCard />
            <VantagemCard />
          </div>

        </div>

        <PrimaryButton>Começar agora</PrimaryButton>
      </div>
    </Container>
  )
}