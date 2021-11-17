import { Container } from "./styles";
import sobrenos from './assets/sobrenos.webp'
import planos from './assets/planos.webp'
import ajuda from './assets/ajuda.webp'
import contato from './assets/contato.webp'
import privacidade from './assets/privacidade.webp'

interface MainBannerProps {
  page: string;
  title: string;
  subtitle: string;
}

export function MainBanner({ page, title, subtitle }: MainBannerProps) {
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
          <h3>{subtitle}</h3>
          <h1>
            <span>{title}</span>
          </h1>
        </div>

        <div className="image">
          <img src={src} alt="" />
        </div>
      </div>
    </Container>
  );
}