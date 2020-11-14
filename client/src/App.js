import "./App.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar/index";
import NewIdea from "./views/NewIdea";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Navbar />
          <Switch>
              <Route exact={true} path="/new-idea" component={NewIdea}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
