import { PrimaryButton } from "../../../Button";
import { LeftList } from "./LeftList";
import { RightList } from "./RightList";
import { Container } from "./styles";
import mobile from '../shared/mobile.webp';

export function Recursos() {
  return (
    <Container>
      <header>
        <h2>Recursos</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
      </main>

      <PrimaryButton>Começar agora</PrimaryButton>
    </Container>
  );
}