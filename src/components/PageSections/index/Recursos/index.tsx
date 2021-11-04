import { PrimaryButton } from "../../../Button";
import { LeftList } from "./LeftList";
import { RightList } from "./RightList";
import { Container } from "./styles";
import mobile from '../shared/mobile.webp';
import { RecursoCard } from "./Card";
import { useLang } from "../../../../hooks/useLang";

export function Recursos() {
  const { TextContent } = useLang();
  return (
    <Container>
      <header>
        <h2>{TextContent.pages?.Home.Recursos.title}</h2>
        <p>{TextContent.pages?.Home.Recursos.subtitle}</p>
      </header>

      <main>
        <div className="left">
          <LeftList />
        </div>
        <div className="center">
          <img src={mobile} alt="" />
        </div>
        <div className="right">
          <RightList />
        </div>

        <div className="bottom">
          <RecursoCard 
            title={TextContent.pages?.Home.Recursos.left[0].title}
            subtitle={TextContent.pages?.Home.Recursos.left[0].subtitle}
          />
          <RecursoCard 
            title={TextContent.pages?.Home.Recursos.left[1].title}
            subtitle={TextContent.pages?.Home.Recursos.left[1].subtitle}
          />
          <RecursoCard 
            title={TextContent.pages?.Home.Recursos.left[2].title}
            subtitle={TextContent.pages?.Home.Recursos.left[2].subtitle}
          />
          <RecursoCard 
            title={TextContent.pages?.Home.Recursos.left[3].title}
            subtitle={TextContent.pages?.Home.Recursos.left[3].subtitle}
          />
          <RecursoCard 
            title={TextContent.pages?.Home.Recursos.left[4].title}
            subtitle={TextContent.pages?.Home.Recursos.left[4].subtitle}
          />
          <RecursoCard 
            title={TextContent.pages?.Home.Recursos.left[5].title}
            subtitle={TextContent.pages?.Home.Recursos.left[5].subtitle}
          />
        </div>
      </main>

      <PrimaryButton>Começar agora</PrimaryButton>
    </Container>
  );
}