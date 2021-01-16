import React, { useEffect, useState, useCallback } from "react";
import { fetchSeasons } from "../../API/apiCalls";
import { useParams, Redirect } from "react-router-dom";
import EpisodeThumb from "../EpisodeThumb/EpisodeThumb";
import { cleanEpisodeData, formatTitle } from "../../utilities";
import "./EpisodeDisplay.scss";

const EpisodeDisplay = () => {
  let { season } = useParams();

  const determineFetch = (url) => {
    switch (url) {
      case "season1":
        return "31964";
      case "season2":
        return "33486";
      case "season3":
        return "36456";
      case "season4":
        return "38408";
      case "season5":
        return "41587";
      default:
    }
  };

  const [episodes, setEpisodes] = useState([]);

  const getSeasons = useCallback(() => {
    fetchSeasons(determineFetch(season)).then((data) => {
      const clean = cleanEpisodeData(data);
      setEpisodes(clean);
    });
  }, [season]);

  useEffect(() => {
    getSeasons();
  }, [getSeasons]);

  const generateEpisodeThumbs = () => {
    return episodes.map((episode, index) => {
      return (
        <EpisodeThumb
          key={episode.episode_id}
          data={{ ...episode, id: index + 1 }}
        />
      );
    });
  };

  const generateLoadingContent = () => {
    if (!episodes) {
      return <Redirect to="/error" />;
    } else if (episodes.length > 0) {
      return generateEpisodeThumbs();
    } else {
      return <h1>Loading...</h1>;
    }
  };

  const generateSeasonFive = () => {
    const content = generateLoadingContent();
    const comingSoon = <p className="coming-soon">Coming Soon...<br />March 27th, 2021</p>;
    const decideSeason = season === "season5" ? comingSoon : content;
    return decideSeason;
  };

  const title = formatTitle(season);

  const loadContent = generateSeasonFive();

  return (
    <>
      <h1 className="season-title">{title}</h1>
      <div className="thumb-container">{loadContent}</div>
    </>
  );
};

export default EpisodeDisplay;
