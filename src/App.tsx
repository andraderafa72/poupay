import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Index } from "./pages/Index";
import { SobreNos } from "./pages/SobreNos";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/sobrenos" exact component={SobreNos} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
