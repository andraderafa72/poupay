import { ButtonsContainer } from "./styles";
import android from './android.svg';
import ios from './ios.svg';

export function DownloadAppButtons() {
  return (
    <ButtonsContainer>
      <a href={`https://play.google.com/store/apps/details?id=app.poupay.poupay&hl=pt_BR&gl=US`} target="_blank" rel="noreferrer">
        <img src={android} alt="" />
        Disponível no <br />
        Google Play
      </a>
      <a href={`https://apps.apple.com/br/app/poupay/id1564834972`} target="_blank" rel="noreferrer">
        <img src={ios} alt="" />
        Baixe na <br />
        Apple Store
      </a>
    </ButtonsContainer>
  )
}