import "./styles/Style.css";

import Router from "./Routes/Router";
import { BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Router />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
