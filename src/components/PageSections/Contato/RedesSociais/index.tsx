import { Container } from "./styles";
import woman from './assets/woman.png';
import facebook from '../../../Footer/assets/facebook.svg';
import instagram from '../../../Footer/assets/instagram.svg';
import linkedin from '../../../Footer/assets/linkedin.svg';
import youtube from '../../../Footer/assets/youtube.svg';
export function RedesSociais() {
  return (
    <Container>
      <div className="wrapper">
        <div className="content">
          <h2>Nossas redes sociais  </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

          <a href="https://instagram.com">
            <div className="image-wrapper">
              <img src={facebook} alt="" />
            </div>
            Facebook
          </a>

          <a href="https://instagram.com">
            <div className="image-wrapper">
              <img src={instagram} alt="" />
            </div>
            Instagram
          </a>

          <a href="https://instagram.com">
            <div className="image-wrapper">
              <img src={linkedin} alt="" />
            </div>
            LinkedIn
          </a>

          <a href="https://instagram.com">
            <div className="image-wrapper">
              <img src={youtube} alt="" />
            </div>
            Youtube
          </a>

        </div>

        <div className="image">
          <img src={woman} alt="" />
        </div>

        <div className="background" />
      </div>
    </Container>
  );
}