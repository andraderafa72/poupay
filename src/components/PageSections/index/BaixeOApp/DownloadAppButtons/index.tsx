import { ButtonsContainer } from "./styles";
import android from '../../shared/android.svg'
import ios from '../../shared/ios.svg'

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