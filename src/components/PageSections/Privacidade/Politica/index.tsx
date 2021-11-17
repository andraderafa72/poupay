import { useLang } from "../../../../hooks/useLang";
import { Container } from "./styles";

export function Politica() {
  const { TextContent } = useLang();
  return (
    <Container>
      <h4>{TextContent.pages.Privacidade.Politica[1].title}</h4>
      <p>{TextContent.pages.Privacidade.Politica[1][1]}</p> <br />
      <p>{TextContent.pages.Privacidade.Politica[1][2]}</p> <br />
      <p>{TextContent.pages.Privacidade.Politica[1][3]}</p> <br />

      <h4>{TextContent.pages.Privacidade.Politica[2].title}</h4>
      <p>{TextContent.pages.Privacidade.Politica[2][1]}</p> <br />

      <h4>{TextContent.pages.Privacidade.Politica[3].title}</h4>
      <p>{TextContent.pages.Privacidade.Politica[3][1]}</p> <br />
      <p>{TextContent.pages.Privacidade.Politica[3][2]}</p> <br />
      <p>{TextContent.pages.Privacidade.Politica[3][3]}</p> <br />

      <h4>{TextContent.pages.Privacidade.Politica[4].title}</h4>
      <p>{TextContent.pages.Privacidade.Politica[4][1]}</p> <br />

      <h4>{TextContent.pages.Privacidade.Politica[5].title}</h4>
      <p>{TextContent.pages.Privacidade.Politica[5][1]}</p> <br />
      <p>{TextContent.pages.Privacidade.Politica[5][2]}</p> <br />

      <h4>{TextContent.pages.Privacidade.Politica[6].title}</h4>
      <p>{TextContent.pages.Privacidade.Politica[6][1]}</p> <br />
      <p>{TextContent.pages.Privacidade.Politica[6][2]}</p> <br />

      <h4>{TextContent.pages.Privacidade.Politica[7].title}</h4>
      <p>{TextContent.pages.Privacidade.Politica[7][1]}</p> <br />
      <p>{TextContent.pages.Privacidade.Politica[7][2]}</p> <br />

      <h4>{TextContent.pages.Privacidade.Politica[8].title}</h4>
      <p>{TextContent.pages.Privacidade.Politica[8][1]}</p> <br />
      <ul>
        {[...TextContent.pages.Privacidade.Politica[8].lists[1]].map(el => (
          <li key={el}>
            {el}
          </li>
        ))}
      </ul>
      <p>{TextContent.pages.Privacidade.Politica[8][1.1]}</p> <br />
      <p>{TextContent.pages.Privacidade.Politica[8][1.2]}</p> <br />
      <p>{TextContent.pages.Privacidade.Politica[8][2]}</p> <br />
      <ul>
        {[...TextContent.pages.Privacidade.Politica[8].lists[2]].map(el => (
          <li key={el}>
            {el}
          </li>
        ))}
      </ul>

      <h4>{TextContent.pages.Privacidade.Politica[9].title}</h4>
      <p>{TextContent.pages.Privacidade.Politica[9][1]}</p> <br />

      <h4>{TextContent.pages.Privacidade.Politica[10].title}</h4>
      <p>{TextContent.pages.Privacidade.Politica[10][1]}</p> <br />

    </Container>
  );
}