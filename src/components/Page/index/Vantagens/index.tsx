import VantagemCard from "./Card";
import { Container } from "./styles";
import vantagens from '../../../../assets/img/vantagens.svg';
import blob from '../../../../assets/img/blob-vantagens.svg';
import { PrimaryButton } from "../../../Button";

export function Vantagens () {
  return (
    <Container>
      <img src={vantagens} alt="" />
      <img src={blob} className="blob" alt="" />

      <div className="content">
        <h2>Lorem ipsum dolor sit amet, <br/> consectetur</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <div className="wrapper">
        <VantagemCard />
        <VantagemCard />
        <VantagemCard />
        <VantagemCard />
        <VantagemCard />
        <VantagemCard />
        </div>

        <PrimaryButton>Começar agora</PrimaryButton>
      </div>
    </Container>
  )
}