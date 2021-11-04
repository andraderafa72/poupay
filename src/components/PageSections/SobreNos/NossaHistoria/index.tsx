import { Container } from "./styles";
import image from './assets/image.png';
import { useLang } from "../../../../hooks/useLang";

export function NossaHistoria() {
  const {TextContent} = useLang();
  return (
    <Container>
      <div className="wrapper">

        <div className="image">
          <img src={image} alt="" />
        </div>

        <div className="content">
          <h3>Nossa história</h3>
          <p>
            {TextContent.pages?.SobreNos.NossaHistoria.content}
          </p>
        </div>

        <div className="background"></div>

      </div>
    </Container>
  );
}