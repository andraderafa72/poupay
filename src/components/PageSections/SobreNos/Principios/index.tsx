import { PrincipiosCard } from "./Card";
import { Container } from "./styles";
import ilustration from './assets/ilustration.svg';
import blob from './assets/blob.svg';
import { useLang } from "../../../../hooks/useLang";

import Chart from './assets/Chart.svg';
import Card from './assets/Card.svg';
import Report from './assets/Report.svg';
import Wallet from './assets/Wallet.svg';
import Analytics from './assets/Analytics.svg';

export function Principios() {
  const { TextContent } = useLang();
  return (
    <Container>
      <div className="wrapper">
        <header>
          <h2>{TextContent.pages?.SobreNos.Principios.title}</h2>
          <p>
            {TextContent.pages?.SobreNos.Principios.content}
          </p>
        </header>

        <main>
          <span>Valores</span>

          <div className="cards">
            <PrincipiosCard
              image={Report}
              title={TextContent.pages?.SobreNos.Valores[0].title}
              content={TextContent.pages?.SobreNos.Valores[0].content}
            />
            <PrincipiosCard
              image={Card}
              title={TextContent.pages?.SobreNos.Valores[1].title}
              content={TextContent.pages?.SobreNos.Valores[1].content}
            />
            <PrincipiosCard
              image={Chart}
              title={TextContent.pages?.SobreNos.Valores[2].title}
              content={TextContent.pages?.SobreNos.Valores[2].content}
            />
            <PrincipiosCard
              image={Wallet}
              title={TextContent.pages?.SobreNos.Valores[3].title}
              content={TextContent.pages?.SobreNos.Valores[3].content}
            />
            <PrincipiosCard
              image={Analytics}
              title={TextContent.pages?.SobreNos.Valores[4].title}
              content={TextContent.pages?.SobreNos.Valores[4].content}
            />
          </div>

          <div className="card-wrapper">
            <div className="missao">
              <p>Missão</p>
              <PrincipiosCard
                image={Report}
                title={TextContent.pages?.SobreNos.Missao.title}
                content={TextContent.pages?.SobreNos.Missao.content}
                />
            </div>
            <div className="visao">
              <p>Visão</p>
              <PrincipiosCard
                image={Card}
                title={TextContent.pages?.SobreNos.Visao.title}
                content={TextContent.pages?.SobreNos.Visao.content}
              />
            </div>

            <div className="space"></div>
            <div className="space"></div>
            <div className="space"></div>
          </div>

        </main>


        <img src={blob} className="blob" alt="" />
        <img src={ilustration} className="image" alt="" />
      </div>
    </Container>
  );
}