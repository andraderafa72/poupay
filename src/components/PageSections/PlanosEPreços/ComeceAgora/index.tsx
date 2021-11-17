import { PrimaryButton } from "../../../Button";
import { Container } from "./styles";
import woman from './assets/woman.webp';

export function ComeceAgora() {
  return (
    <Container>
      <div className="wrapper">
        <div className="info">

          <h2>Comece sem pagar nada! Aproveite todos os benefícios do plano free</h2>
          <PrimaryButton>Começar agora</PrimaryButton>
        </div>

        <div className="image">
          <img src={woman} alt="" />
        </div>
      </div>
    </Container>
  );
}