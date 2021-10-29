import { PrimaryButton } from "../../../Button";
import { Container } from "./styles";
import check from '../shared/check.svg';
import pinkCheck from './assets/pink-check.svg';
import not from './assets/not.svg';

export function Pricing() {
  return (
    <Container>
      <header>
        <h2>Simples, valores transparentes</h2>
        <span>Sem contratos ou surpresas extras</span>
      </header>

      <main>
        <div className="wrapper">

          <div className="col-1">
            <div className="space"></div>
            <div className="todos-os-beneficios">
              <p>Lorem ipsum dolor sit amet,</p>
              <p>Lorem ipsum dolor sit amet,</p>
              <p>Lorem ipsum dolor sit amet,</p>
              <p>Lorem ipsum dolor sit amet,</p>
              <p>Lorem ipsum dolor sit amet,</p>
              <p>Lorem ipsum dolor sit amet,</p>
              <p>Lorem ipsum dolor sit amet,</p>
              <p>Lorem ipsum dolor sit amet,</p>
            </div>
          </div>

          <div className="col-2">
            <div className="free">
              <span>Free</span>
              <p className="price">
                R$ <strong>0,00</strong> <span>/mês</span>
              </p>
              <PrimaryButton>Escolher Plano</PrimaryButton>
            </div>
            <div className="wrapper">
              <div className="plano-free">
                <p>
                  <img src={check} alt="" />
                </p>
                <p>
                  <img src={check} alt="" />
                </p>
                <p>
                  <img src={check} alt="" />
                </p>
                <p>
                  <img src={check} alt="" />
                </p>
                <p>
                  <img src={check} alt="" />
                </p>
                <p>
                  <img src={not} alt="" />
                </p>
                <p>
                  <img src={not} alt="" />
                </p>
                <p>
                  <img src={not} alt="" />
                </p>
              </div>
            </div>

          </div>

          <div className="col-3">
            <div className="premium">
              <span className="recomendado">Recomendado</span>
              <span>Premium anual</span>
              <p className="price">
                R$ <strong>0,00</strong> <span>/mês</span>
              </p>
            </div>

            <div className="plano-anual">
              <p>
                <img src={pinkCheck} alt="" />
              </p>
              <p>
                <img src={pinkCheck} alt="" />
              </p>
              <p>
                <img src={pinkCheck} alt="" />
              </p>
              <p>
                <img src={pinkCheck} alt="" />
              </p>
              <p>
                <img src={pinkCheck} alt="" />
              </p>
              <p>
                <img src={pinkCheck} alt="" />
              </p>
              <p>
                <img src={pinkCheck} alt="" />
              </p>
              <p>
                <img src={pinkCheck} alt="" />
              </p>

              <div className="button">
                <PrimaryButton>Escolher plano</PrimaryButton>
              </div>
            </div>

          </div>

          <div className="col-4">
            <div className="premium-mensal">
              <span>Premium mensal</span>
              <p className="price">
                R$ <strong>0,00</strong> <span>/mês</span>
              </p>
              <PrimaryButton>Escolher Plano</PrimaryButton>
            </div>

            <div className="wrapper">

              <div className="plano-premium">
                <p>
                  <img src={check} alt="" />
                </p>
                <p>
                  <img src={check} alt="" />
                </p>
                <p>
                  <img src={check} alt="" />
                </p>
                <p>
                  <img src={check} alt="" />
                </p>
                <p>
                  <img src={check} alt="" />
                </p>
                <p>
                  <img src={check} alt="" />
                </p>
                <p>
                  <img src={check} alt="" />
                </p>
                <p>
                  <img src={check} alt="" />
                </p>
              </div>

            </div>

          </div>

        </div>
      </main>
    </Container>
  );
}