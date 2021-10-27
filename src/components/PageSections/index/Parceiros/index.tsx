import {Card} from "../shared/Card";
import { Container } from "./styles";

export function Parceiros() {
  return (
    <Container>
      <div className="wrapper">
        <header>
          <h2>Nossos parceiros</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </header>

        <main>
          <div className="parceiros">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </main>
      </div>

    </Container>
  );
}