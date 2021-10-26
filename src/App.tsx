import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Index } from "./pages/Index";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
