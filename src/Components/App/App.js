import React from "react";
import MainPage from "../MainPage/MainPage";
import "./App.scss";
import { Route, Switch, Link } from "react-router-dom";
import EpisodeDisplay from "../EpisodeDisplay/EpisodeDisplay";
import MovieDisplay from "../MovieDisplay/MovieDisplay";
import ErrorPage from "../ErrorPage/ErrorPage";

const App = () => {
  return (
    <>
      <Link className="title-link" to="/">
        <h1 className="title">
          <span className="title-span">ANIMEtrics</span>
          <br />
          For My Hero Academia Fanatics
        </h1>
      </Link>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/animetrics" component={MainPage} />
        <Route exact path="/movies" component={MovieDisplay} />
        <Route exact path="/error" component={ErrorPage} />
        <Route path="/:season" component={EpisodeDisplay} />
      </Switch>
    </>
  );
};

export default App;
