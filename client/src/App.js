import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import NewIdea from "./views/NewIdea";
import Explore from "./components/Explore";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact={true} path="/">
            <Redirect to="/explore" />
          </Route>
          <Route exact={true} path="/new-idea" component={NewIdea} />
          <Route exact={true} path="/explore" component={Explore} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
