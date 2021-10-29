import { Link } from "react-router-dom";
import { PrimaryButton } from "../../../Button";
import { Container } from "./styles";
import ajuda from './assets/ajuda.png'

export function BannerDeAjuda() {
  return (
    <Container>
      <div className="wrapper">
        <div className="image">
          <img src={ajuda} alt="" />
        </div>
        <div className="content">
          <h2>Precisa de ajuda? Acesse nossa central de ajuda</h2>
          <Link to="/ajuda">
            <PrimaryButton>Acesse agora</PrimaryButton>
          </Link>
        </div>
      </div>
    </Container>
  );

}