import { Container } from "./styles";
import appImg from './assets/app.png';
import { DownloadAppButtons } from "./DownloadAppButtons";

export function BaixeOApp() {
  return (
    <Container>
      <div className="wrapper">
        <div className="left">
          <img src={appImg} alt="" />
        </div>

        <div className="right">
          <h2>Baixe agora e tenha o Poupay+ na palma da mão</h2>
          <DownloadAppButtons />
        </div>
      </div>
    </Container>
  );
}