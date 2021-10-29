import { Container } from "./styles";
import check from '../shared/check.svg';

export function Comparativo () {
  return (
    <Container>
      <header>
        <h2>Lorem ipsum dolor sit amet, consectetur</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </header>

      <main>

        <div className="comparativo">
          <div className="col-2">
            <strong>Comparativo</strong>
          </div>
          <div className="col-1">
            <span>Free</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="col-1">
            <span>Premium</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>

        <div className="card-col-2">
          <p>Lorem ipsum dolor sit amet,</p>
          <p>Lorem ipsum dolor sit amet,</p>
          <p>Lorem ipsum dolor sit amet,</p>
          <p>Lorem ipsum dolor sit amet,</p>
          <p>Lorem ipsum dolor sit amet,</p>
          <p>Lorem ipsum dolor sit amet,</p>
          <p>Lorem ipsum dolor sit amet,</p>
          <p>Lorem ipsum dolor sit amet,</p>
        </div>
        
        <div className="card-col-1">
          <p><img src={check} alt="" /></p>
          <p>Android, IOS</p>
          <p>Limitado</p>
          <p>Limitado</p>
          <p>Limitado</p>
          <p>Limitado</p>
          <p>Limitado</p>
          <p>Limitado</p>
        </div>

        <div className="card-col-1">
          <p><img src={check} alt="" /></p>
          <p>Android, IOS, Web</p>
          <p><img src={check} alt="" /></p>
          <p><img src={check} alt="" /></p>
          <p><img src={check} alt="" /></p>
          <p><img src={check} alt="" /></p>
          <p><img src={check} alt="" /></p>
          <p><img src={check} alt="" /></p>
        </div>

      </main>
    </Container>
  );
}