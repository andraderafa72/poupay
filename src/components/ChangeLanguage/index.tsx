import { useState } from "react";
import { useLang } from "../../hooks/useLang";
import { Container } from "./styles";
import world from './assets/wrld.svg';
import down from './assets/down.svg';
import pt from './assets/pt.png';
import es from './assets/es.png';
import en from './assets/en.png';

export function ChangeLanguage() {
  const [isOpen, setIsOpen] = useState(false);

  const { lang, setLang } = useLang();

  const langs: ['es', 'pt', 'en'] = ['es', 'pt', 'en']
  return (
    <Container isOpen={isOpen}>
      <div className="currentLang" onClick={() => setIsOpen(!isOpen)}>
        <img src={world} alt="" />
        <p>
          {lang}
        </p>
        <img src={down} alt="" />
      </div>
      <div className="langs">
        {langs.map((el) => {
          // if (el === lang) return null;
          const language = el === 'pt' 
            ? 'Português BR' 
            : (
              el === 'en' 
                ? 'English'
                : 'Español'
            )
          return (
            <div className="lang" onClick={() => {setLang(el); setIsOpen(false)}}>
              <img src={
                el === 'pt' ? pt : (el === 'es' ? es : en)
              } alt="" />
              <p>
                {language}
              </p>
            </div>
          );
        })}
      </div>
      <div className="close-background" onClick={() => setIsOpen(false)}></div>
    </Container>
  );
}