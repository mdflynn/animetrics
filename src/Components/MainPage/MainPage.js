import React from "react";
import { Link } from "react-router-dom";

import "./MainPage.scss";

const MainPage = () => {
  return (
    <div className="div-bg">
      <div className="season-div">
        <Link className="link" to="/season1" aria-label="season-one-navigation">
          <article className="season-card" data-value="season-1">
            Season 1
          </article>
        </Link>
        <Link className="link" to="/season2" aria-label="season-two-navigation">
          <article className="season-card" data-value="season-2">
            Season 2
          </article>
        </Link>
        <Link className="link" to="/season3" aria-label="season-three-navigation">
          <article className="season-card" data-value="season-3">
            Season 3
          </article>
        </Link>
        <Link className="link" to="/season4" aria-label="season-four-navigation">
          <article className="season-card" data-value="season-4">
            Season 4
          </article>
        </Link>
        <Link className="link" to="/season5" aria-label="season-five-navigation">
          <article className="season-card" data-value="season-5">
            Season 5
          </article>
        </Link>
        <Link className="link" to="/movies" aria-label="movies-navigation">
          <article className="season-card" data-value="movies">
            Movies
          </article>
        </Link>
        <Link className="link" to="/favorites" aria-label="favorites-navigation">
          <article className="season-card" data-value="favorites">
            Favorites
          </article>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
