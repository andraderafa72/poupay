import { Container } from "./styles";

export function Hero() {
  return (
    <Container>
      <div className="content">
        <div className="wrapper">
          <h1>
            Com a <span>PouPay+</span>
            você <strong>organiza </strong>
            a sua <strong>vida
            financeira!</strong>
          </h1>
          <p>
            Facilitamos ao máximo o seu dia-a-dia com o dinheiro! Organize, planeje e faça acontecer em um único lugar! Com a Poupay+ você pode mais!
          </p>
          <div className="input-wrapper">
            <label>E-mail</label>
            <input type="text" placeholder="Digite aqui" />
            <button>Começar</button>
          </div>
        </div>
      </div>
    </Container>
  );
}