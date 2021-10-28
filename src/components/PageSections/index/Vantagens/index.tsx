import VantagemCard from "./Card";
import { Container } from "./styles";
import vantagens from './assets/vantagens.svg';
import blob from './assets/blob-vantagens.svg';
import { PrimaryButton } from "../../../Button";
import { useState } from "react";
import left from '../../../../assets/img/left.svg'
import right from '../../../../assets/img/right.svg'

export function Vantagens() {
  const [posX, setPosX] = useState(0)

  function handleSumPosX() {
    if (posX >= 700) {
      setPosX(0);
    } else {
      setPosX(posX + 250);
    }
  }

  function handleSubPosX() {
    if (posX <= 0) {
      setPosX(700);
    } else {
      setPosX(posX - 250 < 0 ? 0 : posX - 250);
    }
  }

  return (
    <Container>
      <img src={vantagens} alt="" />
      <img src={blob} className="blob" alt="" />

      <div className="content">
        <h2>Lorem ipsum dolor sit amet, <br /> consectetur</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <div className="vantagens">
          <div className="buttons">
            <button onClick={handleSubPosX}>
              <img src={left} alt="" />
            </button>
            <button onClick={handleSumPosX}>
              <img src={right} alt="" />
            </button>
          </div>

          <div className="wrapper" style={{
            transform: `translateX(-${posX}px)`
          }}>
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