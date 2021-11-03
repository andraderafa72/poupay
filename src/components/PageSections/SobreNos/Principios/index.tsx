import { PrincipiosCard } from "./Card";
import { Container } from "./styles";
import ilustration from './assets/ilustration.svg';
import blob from './assets/blob.svg';

export function Principios() {
  return (
    <Container>
      <div className="wrapper">
        <header>
          <h2>Nossos princípios</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </header>

        <main>
          <span>Valores</span>

          <div className="cards">
            <PrincipiosCard
              image={'a'}
              title="Lorem ipsum dolor"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            />
            <PrincipiosCard
              image={'a'}
              title="Lorem ipsum dolor"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            />
            <PrincipiosCard
              image={'a'}
              title="Lorem ipsum dolor"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            />
            <PrincipiosCard
              image={'a'}
              title="Lorem ipsum dolor"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            />
            <PrincipiosCard
              image={'a'}
              title="Lorem ipsum dolor"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            />
          </div>

          <div className="card-wrapper">
            <div className="missao">
              <p>Missão</p>
              <PrincipiosCard
                image={'a'}
                title="Lorem ipsum dolor"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              />
            </div>
            <div className="visao">
              <p>Visão</p>
              <PrincipiosCard
                image={'a'}
                title="Lorem ipsum dolor"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              />
            </div>

            <div className="space"></div>
            <div className="space"></div>
            <div className="space"></div>
          </div>

        </main>


        <img src={blob} className="blob" alt="" />
        <img src={ilustration} className="image" alt="" />
      </div>
    </Container>
  );
}