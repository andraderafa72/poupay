import { Container } from "./styles";

export function MainBanner() {
  return (
    <Container>
      <div className="wrapper">
        <div className="content">
          <h3>Sobre nós</h3>
          <h1>
            <span>Lorem ipsum dolor</span> <br/>
            <span>sit amet, consectetur</span><br/>
            <span>adipiscing elit</span><br/>
          </h1>
        </div>
      </div>
    </Container>
  );
}