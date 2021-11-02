import {Card} from "../shared/Card";
import { Container } from "./styles";
import left from '../shared/left.svg';
import right from '../shared/right.svg';
import { useRef } from "react";

export function Parceiros() {
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
      <div className="wrapper">
        <header>
          <h2>Nossos parceiros</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
          <div className="parceiros" ref={ref}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </main>
      </div>

    </Container>
  );
}