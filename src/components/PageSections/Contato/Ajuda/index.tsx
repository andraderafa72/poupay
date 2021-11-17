import { Link } from "react-router-dom";
import { Container } from "./styles";
import ajuda from './assets/ajuda.webp'

export function BannerDeAjuda() {
  return (
    <Container>
      <div className="wrapper">
        <div className="image">
          <img src={ajuda} alt="" />
        </div>
        <div className="content">
          <h2>Precisa de ajuda? Acesse nossa central de ajuda</h2>
          <div className="links">
            {/* <a href="https://api.whatsapp.com/send?phone=5548991884675" className="whatsapp">Nosso WhatsApp</a>
            <a href="mailto:imprensa@poupay.app" className="email">Nosso Email</a>
            <a href="mailto:imprensa@poupay.app" className="email">Imprensa</a>
            <a href="https://www.linkedin.com/company/poupay/jobs" className="carreiras">Carreiras</a> */}
            <Link to="/ajuda" className="ajuda">
              Acesse a central de ajuda
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );

}