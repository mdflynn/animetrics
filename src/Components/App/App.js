import React from "react";
import MainPage from "../MainPage/MainPage";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import EpisodeDisplay from "../EpisodeDisplay/EpisodeDisplay";

const App = () => {
  return (
    <>
     <h1 className="title">
        <span className="title-span">ANIMEtrics</span>
        <br />
        For My Hero Academia Fanatics
      </h1>
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route path="/:season" component={EpisodeDisplay} />
      </Switch>
    </>
  );
};

export default App;
