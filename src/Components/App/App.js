import React from "react";
import MainPage from "../MainPage/MainPage";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import EpisodeDisplay from "../EpisodeDisplay/EpisodeDisplay";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"} render={() => <MainPage />} />
        <Route exact path={"/:season"} render={() => <EpisodeDisplay />} />
      </Switch>
    </>
  );
};

export default App;
