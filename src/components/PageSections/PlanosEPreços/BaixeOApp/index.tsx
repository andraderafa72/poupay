import { Container } from "./styles";
import { DownloadAppButtons } from "../../../DownloadAppButtons";

export function BaixeOApp() {
  return (
    <Container>
      <div className="background"></div>
      <div className="wrapper">
        <div className="info">

          <h2>Baixe agora e tenha o Poupay+ na palma da mão</h2>
          <DownloadAppButtons />
        </div>
      </div>
    </Container>
  );
}