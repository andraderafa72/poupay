import { ButtonsContainer } from "./styles";
import android from '../assets/android.svg';
import ios from '../assets/ios.svg';

export function DownloadAppButtons() {
  return (
    <ButtonsContainer>
      <button>
        <img src={android} alt="" />
        Disponível no <br />
        Google Play
      </button>
      <button>
        <img src={ios} alt="" />
        Baixe na <br />
        Apple Store
      </button>
    </ButtonsContainer>
  )
}