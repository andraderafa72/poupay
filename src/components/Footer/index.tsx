/* eslint-disable jsx-a11y/anchor-is-valid */
// import { Link } from "react-router-dom";
import { Container } from "./styles";
import background from './assets/rodape.svg'
import { DownloadAppButtons } from "../DownloadAppButtons";
import instagram from './assets/instagram.svg';
import facebook from './assets/facebook.svg';
import linkedin from './assets/linkedin.svg';
import youtube from './assets/youtube.svg';
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <Container>
      <img src={background} alt="" />
      <div className="wrapper">
        <div className="links">
          <strong>PouPay+</strong>
          <Link to="/">Home</Link>
          <Link to="/sobrenos">Sobre nós</Link>
          <Link to="/planos">Planos</Link>
        </div>

        <div className="links">
          <a href="#" style={{ marginTop: '3.75rem' }}>Contato</a>

          <Link to="/politicadeprivacidade">
            Política de privacidade
          </Link>
        </div>

        <div className="social-media">
          <strong>Social Media</strong>
          <ul>
            <li>
              <a href="https://instagram.com">
                <img src={facebook} alt="" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com">
                <img src={instagram} alt="" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com">
                <img src={linkedin} alt="" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com">
                <img src={youtube} alt="" />
              </a>
            </li>
          </ul>
        </div>

        <div className="info">
          <strong>PouPay+</strong>
          <p>
            Avenida Paulista, 0000 - <br />
            Torre 00 Piso 0 <br />
            São Paulo – SP  <br /> <br />

            <span>Fone: </span> (11) 0000-0000 | (11) 0000-0000 <br />
            <span>E-mail: </span> contato @poupay.com.br <br />
            <span>WhatsApp: </span> 11 00000-0000
          </p>
        </div>

        <div className="download-app">
          <strong>Baixe Agora</strong>

          <DownloadAppButtons />
        </div>
      </div>
    </Container>
  );
}