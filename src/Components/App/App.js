import React, { useState } from "react";
import MainPage from "../MainPage/MainPage";
import "./App.scss";
import { Route, Switch, Link } from "react-router-dom";
import EpisodeDisplay from "../EpisodeDisplay/EpisodeDisplay";
import MovieDisplay from "../MovieDisplay/MovieDisplay";
import ErrorPage from "../ErrorPage/ErrorPage";

const App = () => {
  const [favEpisodes, setFavEpisodes] = useState([]);

  const addFavoriteEpisode = (episode, isFavorite) => {
    if (isFavorite) {
      setFavEpisodes(
        favEpisodes.filter(
          (favEpisode) => favEpisode.episode_id !== episode.episode_id
        )
      );
    } else {
      setFavEpisodes([...favEpisodes, episode]);
    }
  };

  return (
    <>
      <Link className="title-link" to="/">
        <h1 className="title">
          <span className="title-span">ANIMEtrics</span>
          <br />
          <span className="sub-title">For My Hero Academia Fanatics</span>
        </h1>
      </Link>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/animetrics" component={MainPage} />
        <Route exact path="/movies" component={MovieDisplay} />
        <Route exact path="/error" component={ErrorPage} />
        <Route
          path="/:season"
          render={() => {
            return (
              <EpisodeDisplay
                favEpisodes={favEpisodes}
                addFavoriteEpisode={addFavoriteEpisode}
              />
            );
          }}
        />
      </Switch>
    </>
  );
};

export default App;
