import { Card } from "../shared/Card";
import { Container } from "./styles";
import blob from './assets/blob.svg';
import blobB from './assets/blob-2.svg';
import { useRef } from "react";
import left from '../shared/left.svg';
import right from '../shared/right.svg';

import pegn from './assets/pegn.webp'
import terra from './assets/terra.webp'
import moneytimes from './assets/moneytimes.webp'
import bloomberg from './assets/bloomberg.webp'
import uol from './assets/uol.webp'
import forbes from './assets/forbes.svg'


export function Midia() {
  const ref = useRef<HTMLDivElement>(null)

  function handleSumPosX() {
    if (!ref.current) return
    ref.current.scrollLeft = ref.current.scrollLeft + 450
  }

  function handleSubPosX() {
    if (!ref.current) return
    ref.current.scrollLeft = ref.current.scrollLeft - 450
  }

  return (
    <Container>
      <header>
        <h2>PouPay+ na mídia</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </header>

      <main>
        <div className="buttons">
          <button onClick={handleSubPosX}>
            <img src={left} alt="" />
          </button>
          <button onClick={handleSumPosX}>
            <img src={right} alt="" />
          </button>
        </div>
        <div className="wrapper" ref={ref}>
          <Card image={pegn}/>
          <Card image={forbes}/>
          <Card image={terra}/>
          <Card image={uol}/>
          <Card image={moneytimes}/>
          <Card image={bloomberg}/>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>

      <img src={blob} alt="" className="blob" />
      <img src={blobB} alt="" className="blob-b" />
    </Container>
  );
}