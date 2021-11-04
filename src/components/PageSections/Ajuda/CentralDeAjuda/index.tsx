// import { useState } from "react";
import { useLang } from "../../../../hooks/useLang";
import { SectionCard } from "./SectionCard";
import { Container } from "./styles";

export function CentralDeAjuda(){
  // const [pagination, setPagination] = useState('home');

  const { TextContent } = useLang();

  return (
    <Container>
      <div className="search">
        <input type="text" placeholder="Pesquisar"/>
      </div>

      <SectionCard 
        section="Assinatura"
        title={TextContent.pages?.Ajuda.CentralDeAjuda.Assinatura.title}
      />
      <SectionCard 
        section="Saldos"
        title={TextContent.pages?.Ajuda.CentralDeAjuda.Saldos.title}
      />
      <SectionCard 
        section="Funcionalidades"
        title={TextContent.pages?.Ajuda.CentralDeAjuda.Funcionalidades.title}
      />
      <SectionCard 
        section="Sincronização de dados"
        title={TextContent.pages?.Ajuda.CentralDeAjuda.Dados.title}
      />
      <SectionCard 
        section="Contas e cartões automáticos"
        title={TextContent.pages?.Ajuda.CentralDeAjuda.Contas.title}
      />
      <SectionCard 
        section="Segurança LGPD"
        title={TextContent.pages?.Ajuda.CentralDeAjuda.LGPD.title}
      />
      <SectionCard 
        section="Outros Assuntos"
        title={TextContent.pages?.Ajuda.CentralDeAjuda.Outros.title}
      />
      <SectionCard 
        section="SOS"
        title={TextContent.pages?.Ajuda.CentralDeAjuda.SOS.title}
      />
    </Container>
  );

}