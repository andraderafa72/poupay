import { useLang } from "../../../../hooks/useLang";
import { DownloadAppButtons } from "../../../DownloadAppButtons";
import { Container } from "./styles";

export function Hero() {
  const { TextContent } = useLang();
  return (
    <Container>
      <div className="content">
        <div className="wrapper">
          <h1>
            Com a <span>PouPay+</span>
            você <strong>organiza </strong>
            a sua <strong>vida
            financeira!</strong>
          </h1>
          <p>
            {TextContent.pages?.Home.Hero.subtitle}
          </p>
          <DownloadAppButtons />
        </div>
      </div>
    </Container>
  );
}