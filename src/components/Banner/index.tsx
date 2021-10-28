import { Container } from "./styles";
import sobrenos from './assets/sobrenos.png'
import planos from './assets/planos.png'
import ajuda from './assets/ajuda.png'
import contato from './assets/contato.png'
import privacidade from './assets/privacidade.png'

interface MainBannerProps {
  page: string;
}

export function MainBanner({ page }: MainBannerProps) {
  let src
  switch (page) {
    case 'Sobre nós':
      src = sobrenos;
      break;
    case 'Planos e preços':
      src = planos;
      break;
    case 'Contato':
      src = contato;
      break;
    case 'Ajuda':
      src = ajuda;
      break;
    case 'Política de privacidade':
      src = privacidade;
      break;
  }

  return (
    <Container page={page}>
      <div className="wrapper">
        <div className="content">
          <h3>{page}</h3>
          <h1>
            <span>Lorem ipsum dolor</span> <br />
            <span>sit amet, consectetur</span><br />
            <span>adipiscing elit</span><br />
          </h1>
        </div>

        <div className="image">
          <img src={src} alt="" />
        </div>
      </div>
    </Container>
  );
}