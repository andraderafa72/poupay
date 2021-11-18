import { useEffect } from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import { LanguageContextProvider } from "./contexts/LanguageContext";
import { Ajuda } from "./pages/Ajuda";
import { Contato } from "./pages/Contato";
import { Index } from "./pages/Index";
import { Planos } from "./pages/Planos";
import { Privacidade } from "./pages/Privacidade";
import { SobreNos } from "./pages/SobreNos";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <LanguageContextProvider>
      <BrowserRouter>
        <RestoreScroll />
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/#/sobrenos" exact component={SobreNos} />
          <Route path="/#/planos" exact component={Planos} />
          <Route path="/#/contato" exact component={Contato} />
          <Route path="/#/politicadeprivacidade" exact component={Privacidade} />
          <Route path="/#/ajuda" exact component={Ajuda} />
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
    </LanguageContextProvider>
  );
}

function RestoreScroll(){
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <></>
  );
}

export default App;
