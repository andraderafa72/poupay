import { useLang } from "../../../../hooks/useLang";
import { Membros } from "./Membros";
import { Container } from "./styles";

export function TimePouPay() {
  const { TextContent } = useLang();
  return (
    <Container>
      <div className="wrapper">
        <header>
          <h2>{TextContent.pages?.SobreNos.Time.title}</h2>
          <p>
            {TextContent.pages?.SobreNos.Time.content}          
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