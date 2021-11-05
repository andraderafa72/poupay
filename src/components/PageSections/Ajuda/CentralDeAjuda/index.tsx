import { SectionCard } from "./SectionCard";
import { Container } from "./styles";

import search from './assets/Search.svg';
import sos from './assets/SOS.svg';
import assinatura from './assets/Assinatura.svg';
import conta from './assets/Contas.svg';
import dados from './assets/Dados.svg';
import funcionalidade from './assets/Funcionalidades.svg';
import lgpd from './assets/LGPD.svg';
import outros from './assets/Outros.svg';
import saldos from './assets/Saldos.svg';
import { useState } from "react";
import { HelpCenter } from "./HelpCenter";

export function CentralDeAjuda() {
  const [pagination, setPagination] = useState('home');

  // const { TextContent } = useLang();

  if (pagination === 'home') return (
    <Container>
      <div className="search">
        <div className="wrapper">
          <input type="text" placeholder="Pesquisar" />
          <img src={search} alt="" />
        </div>
      </div>

      <SectionCard
        ilustration={assinatura}
        onClick={() => setPagination('Assinatura')}
      />
      <SectionCard
        ilustration={saldos}
        onClick={() => setPagination('Saldos')}
      />
      <SectionCard
        ilustration={funcionalidade}
        onClick={() => setPagination('Funcionalidades')}

      />
      <SectionCard
        ilustration={dados}
        onClick={() => setPagination('Dados')}

      />
      <SectionCard
        ilustration={conta}
        onClick={() => setPagination('Contas')}

      />
      <SectionCard
        ilustration={lgpd}
        onClick={() => setPagination('LGPD')}
      />
      <SectionCard
        ilustration={outros}
        onClick={() => setPagination('Outros')}

      />
      <SectionCard
        ilustration={sos}
        onClick={() => setPagination('SOS')}

      />
    </Container>
  );

  if (pagination !== 'home') {
    return (
      <HelpCenter page={pagination} returnFunction={() => setPagination('home')} />
    );
  }

  return (
    <h1>HEllo</h1>
  );
}