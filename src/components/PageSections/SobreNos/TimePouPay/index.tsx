import { Membros } from "./Membros";
import { Container } from "./styles";

export function TimePouPay() {
  return (
    <Container>
      <div className="wrapper">
        <header>
          <h2>Conheça o time Poupay+</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </header>

        <main style={{
          marginTop: '7.5rem'
        }}>
          <div className="team">
            <strong>
              Administrativo | Financeiro
            </strong>

            <Membros list="ADM"/>
          </div>
        </main>

        <main>
          <div className="team">
            <strong>
              Produto | TI
            </strong>

            <Membros list="TI"/>
          </div>
        </main>
      </div>
    </Container>
  );
}