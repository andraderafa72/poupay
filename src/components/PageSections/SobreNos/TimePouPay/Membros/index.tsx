import { useState } from "react";
import left from '../../../../../assets/img/left.svg'
import right from '../../../../../assets/img/right.svg'
import { Container } from "./styles";

export function Membros() {
  const [posX, setPosX] = useState(0)

  function handleSumPosX() {
    if (posX >= 1200) {
      setPosX(0);
    } else {
      setPosX(posX + 230);
    }
  }

  function handleSubPosX() {
    if (posX <= 0) {
      setPosX(1200);
    } else {
      setPosX(posX - 230 < 0 ? 0 : posX - 230);
    }
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

      <div className="wrapper" style={{
        transform: `translateX(-${posX}px)`
      }}>

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