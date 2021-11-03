import { useRef } from "react";
import left from '../../../../../assets/img/left.svg'
import right from '../../../../../assets/img/right.svg'
import { Container } from "./styles";

import prof1 from './assets/profissionais/prof-1.png';
import prof2 from './assets/profissionais/prof-2.png';
import prof3 from './assets/profissionais/prof-3.png';
import prof4 from './assets/profissionais/prof-4.png';
import prof5 from './assets/profissionais/prof-5.png';
import prof6 from './assets/profissionais/prof-6.png';
import prof7 from './assets/profissionais/prof-7.png';
import prof8 from './assets/profissionais/prof-8.png';
import prof9 from './assets/profissionais/prof-9.png';
import prof10 from './assets/profissionais/prof-10.png';
import prof11 from './assets/profissionais/prof-11.png';
import prof12 from './assets/profissionais/prof-12.png';
import prof13 from './assets/profissionais/prof-13.png';
import prof14 from './assets/profissionais/prof-14.png';

interface MembersProps{
  list: 'TI' | 'ADM';
}

export function Membros({ list }: MembersProps) {
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

        <Membro image={ list === 'ADM' ? prof1 : prof8}/>
        <Membro image={ list === 'ADM' ? prof2 : prof9}/>
        <Membro image={ list === 'ADM' ? prof3 : prof10}/>
        <Membro image={ list === 'ADM' ? prof4 : prof11}/>
        <Membro image={ list === 'ADM' ? prof5 : prof12}/>
        <Membro image={ list === 'ADM' ? prof6 : prof13}/>
        <Membro image={ list === 'ADM' ? prof7 : prof14}/>
      </div>

      <div className="background"></div>
    </Container>
  );
}

function Membro ({ image }: any) {
  return (
    <div className="membro">
      <img src={image} alt="" />
      <strong>Lorem ipsum dolor</strong>
      <span>Analista Administrativo-Financeiro</span>
    </div>
  );
}