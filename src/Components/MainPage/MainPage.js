import React, { useEffect, useState } from "react";
import { getSeasons } from "../../APIcalls";
import { Link } from "react-router-dom";

import "./MainPage.scss";

const MainPage = () => {
  return (
    <div className="div-bg">
      <p className="title">
        ANIMEtrics
        <br />
        For My Hero Academia Fanatics
      </p>
      <div className="season-div">
        <Link className="link" to="/season1">
          <article className="season-card" data-value="season-1">
            Season 1
          </article>
        </Link>
        <Link className="link" to="/season2">
          <article className="season-card" data-value="season-2">
            Season 2
          </article>
        </Link>
        <Link className="link" to="/season3">
          <article className="season-card" data-value="season-3">
            Season 3
          </article>
        </Link>
        <Link className="link" to="/season4">
          <article className="season-card" data-value="season-4">
            Season 4
          </article>
        </Link>
        <Link className="link" to="/season5">
          <article className="season-card" data-value="season-5">
            Season 5
          </article>
        </Link>
        <Link className="link" to="/movies">
          <article className="season-card" data-value="movies">
            Movies
          </article>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
