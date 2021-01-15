import React, { useEffect, useState, useCallback } from "react";
import { fetchSeasons } from "../../APIcalls";
import { useParams } from "react-router-dom";
import EpisodeThumb from "../EpisodeThumb/EpisodeThumb";

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
      setEpisodes(data.episodes);
    });
  }, [season]);

  useEffect(() => {
    getSeasons();
  }, [getSeasons]);

  const generateEpisodeThumbs = () => {
    return episodes.map((episode) => {
      return <EpisodeThumb key={episode.episode_id} data={episode} />;
    });
  };

  return (
    <h1 className="thumb-container">
      {episodes.length > 0 && generateEpisodeThumbs()}
    </h1>
  );
};

export default EpisodeDisplay;
