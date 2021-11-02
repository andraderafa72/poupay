import { useRef } from "react";
import left from '../../../../../assets/img/left.svg'
import right from '../../../../../assets/img/right.svg'
import { Container } from "./styles";

export function Membros() {
  const ref = useRef<HTMLDivElement>(null);

  function handleSumPosX() {
    if(!ref.current) return;
    ref.current.scrollLeft = ref.current.scrollLeft + 200
  }

  function handleSubPosX() {
    if(!ref.current) return;
    ref.current.scrollLeft = ref.current.scrollLeft - 200
  }


  return (
    <Container>
      <div className="buttons">
        <button onClick={handleSubPosX}>
          <img src={left} alt="" />
        </button>
        <button onClick={handleSumPosX}>
          <img src={right} alt="" />
        </button>
      </div>

      <div className="wrapper" ref={ref}>

        <Membro />
        <Membro />
        <Membro />
        <Membro />
        <Membro />
        <Membro />
        <Membro />
        <Membro />
        <Membro />
        <Membro />
        <Membro />
      </div>

      <div className="background"></div>
    </Container>
  );
}

function Membro () {
  return (
    <div className="membro">
      <img src="" alt="" />
      <strong>Lorem ipsum dolor</strong>
      <span>Analista Administrativo-Financeiro</span>
    </div>
  );
}