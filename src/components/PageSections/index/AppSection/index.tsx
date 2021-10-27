import { Container } from "./styles";
import mobile from '../shared/mobile.webp';
import desktop from './assets/desktop.webp';
import check from './assets/check.svg';

export function AppSection(){
  return (
    <Container>
      <div className="wrapper">
        <div className="left">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

          <ul>
            <li>
              <img src={check} alt="" />
              Lorem ipsum dolor sit amet
            </li>
            <li>
              <img src={check} alt="" />
              Lorem ipsum dolor sit amet
            </li>
            <li>
              <img src={check} alt="" />
              Lorem ipsum dolor sit amet
            </li>
            <li>
              <img src={check} alt="" />
              Lorem ipsum dolor sit amet
            </li>
            <li>
              <img src={check} alt="" />
              Lorem ipsum dolor sit amet
            </li>
            <li>
              <img src={check} alt="" />
              Lorem ipsum dolor sit amet
            </li>
          </ul>
        </div>

        <div className="right">
          <img src={mobile} className="mobile" alt="" />
          <img src={desktop} className="desktop" alt="" />
        </div>
      </div>
    </Container>
  );
}