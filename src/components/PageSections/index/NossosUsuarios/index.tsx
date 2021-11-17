import { Container } from "./styles";
import nossosUsuarios from './assets/nossos-usuarios.webp';
import imgA from './assets/img-1.webp';
import imgB from './assets/img-2.webp';
import imgC from './assets/img-3.webp';
import imgD from './assets/img-4.webp';
import imgE from './assets/img-5.webp';
import { Comentarios } from "./Comments";

export function NossosUsuarios() {
  return (
    <Container>
      <div className="wrapper">

        <header>
          <h2>Nossas usuárias</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, eaque eum? Adipisci dicta incidunt cum, ratione consequatur iste distinctio voluptatibu</p>
        </header>

        <main>
          <div className="left">
            <img src={nossosUsuarios} alt="Nosso usuários" />
          </div>

          <div className="center">
            <Comentarios />
          </div>

          <div className="right">
            <img src={imgA} alt="" />
            <img src={imgB} alt="" />
            <img src={imgC} alt="" />
            <img src={imgD} alt="" />
            <img src={imgE} alt="" />
          </div>
        </main>
      </div>
    </Container>
  );
}