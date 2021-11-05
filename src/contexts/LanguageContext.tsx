import { createContext, ReactNode, useEffect, useState } from "react";
import { content } from "../lang/Languages";

type Lang = 'pt' | 'es' | 'en' ;

interface LanguageContextProps {
  lang: Lang;
  TextContent: any;
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
}

export const LanguageContext = createContext({} as LanguageContextProps);

interface LanguageContextProviderProps{
  children: ReactNode;
}

export function LanguageContextProvider({ children }: LanguageContextProviderProps){
  const [lang, setLang] = useState<Lang>('pt');
  const [TextContent, setTextContent] = useState<any>({});

  useEffect(() => {
    const textContent = content[lang];
    console.log(textContent);
    
    setTextContent(textContent)
  }, [lang])

  return (
    <LanguageContext.Provider value={{
      lang, TextContent, setLang
    }}>
      {children}
    </LanguageContext.Provider>
  )
}