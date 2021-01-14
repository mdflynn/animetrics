import React from "react";
import MainPage from "../MainPage/MainPage";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import EpisodeDisplay from "../EpisodeDisplay/EpisodeDisplay";

const App = () => {
  return (
    <>
     <p className="title">
        ANIMEtrics
        <br />
        For My Hero Academia Fanatics
      </p>
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route path="/:season" component={EpisodeDisplay} />
      </Switch>
    </>
  );
};

export default App;
