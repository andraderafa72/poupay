import VantagemCard from "./Card";
import { Container } from "./styles";
import vantagens from './assets/vantagens.svg';
import blob from './assets/blob-vantagens.svg';

import cofre from './assets/cofre.svg';
import rocket from './assets/rocket.svg';
import chart from './assets/chart.svg';

import { PrimaryButton } from "../../../Button";

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { useEffect } from "react";

export function Vantagens({TextContent}: any) {
  // const { TextContent } = useLang();
  
  useEffect(() => {
    
    console.log(TextContent);
  }, [TextContent])

  return (
    <Container>
      <img src={vantagens} alt="" />
      <img src={blob} className="blob" alt="" />

      <div className="content">
        <h2>{TextContent.pages?.Home.Vantagens.title}</h2>
        <p>{TextContent.pages?.Home.Vantagens.subtitle}</p>

        <div className="vantagens">


          <div className="wrapper">
            {TextContent.pages && [...TextContent.pages?.Home.Vantagens.cards].map((el, index) => (
              <VantagemCard
                image={el.title === 'Poupe' ? cofre : (el.title === 'Realize' ? rocket : chart)}
                title={el.title}
                content={el.content}
                key={index}
              />
            ))}
          </div>

        </div>

        <PrimaryButton>Começar agora</PrimaryButton>
      </div>
    </Container>
  )
}