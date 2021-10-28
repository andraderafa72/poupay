import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Contato } from "./pages/Contato";
import { Index } from "./pages/Index";
import { Planos } from "./pages/Planos";
import { SobreNos } from "./pages/SobreNos";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/sobrenos" exact component={SobreNos} />
        <Route path="/planos" exact component={Planos} />
        <Route path="/contato" exact component={Contato} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
