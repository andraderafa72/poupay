import VantagemCard from "./Card";
import { Container } from "./styles";
import vantagens from './assets/vantagens.svg';
import blob from './assets/blob-vantagens.svg';
import { PrimaryButton } from "../../../Button";
// import { useRef } from "react";
// import left from '../../../../assets/img/left.svg'
// import right from '../../../../assets/img/right.svg'

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { useLang } from "../../../../hooks/useLang";

export function Vantagens() {
  const { TextContent } = useLang();

  return (
    <Container>
      <img src={vantagens} alt="" />
      <img src={blob} className="blob" alt="" />

      <div className="content">
        <h2>{TextContent.pages?.Home.Vantagens.title}</h2>
        <p>{TextContent.pages?.Home.Vantagens.subtitle}</p>

        <div className="vantagens">
         {/*  <div className="buttons">
            <button onClick={handleSubPosX}>
              <img src={left} alt="" />
            </button>
            <button onClick={handleSumPosX}>
              <img src={right} alt="" />
            </button>
          </div> */}

          <div className="wrapper">
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