import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import NewIdea from "./views/NewIdea";
import Explore from "./components/Explore";
import IdeaDetails from "./views/IdeaDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/explore" />
          </Route>
          <Route exact path="/new-idea" component={NewIdea} />
          <Route exact path="/explore" component={Explore} />
          <Route
            path="/idea/:ideaId"
            render={({ match }) => {
              const ideaId = parseInt(match.params.ideaId, 10);
              return <IdeaDetails ideaId={ideaId} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
