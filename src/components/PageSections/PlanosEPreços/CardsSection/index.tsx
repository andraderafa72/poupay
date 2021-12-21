import Card from "./Card";
import { Container } from "./styles";
import icon from './assets/icon.svg';

export function CardsSection() {
  return (
    <Container>
      <h2>Lorem ipsum dolor sit amet, consectetur</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      <div className="card-wrapper">
        <Card
          image={icon}
          title="Lorem ipsum dolor"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        />
        <Card
          image={icon}
          title="Lorem ipsum dolor"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        />
        <Card
          image={icon}
          title="Lorem ipsum dolor"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        />
        <Card
          image={icon}
          title="Lorem ipsum dolor"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        />
        <Card
          image={icon}
          title="Lorem ipsum dolor"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        />
      </div>
    </Container>
  )
}